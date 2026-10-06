import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { sendMail } from "../../../api/contact";
import { LoadingIcon } from "../../../assets/icons";
import CustomButton from "../../../components/UI/CustomButton";
import CustomTextField from "../../../components/UI/CustomTextField";
import Container from "../Components/Layout/Container";

const Contact: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const initiateMail = React.useCallback(async (payload: unknown) => {
    setLoading(true);

    try {
      await sendMail(payload);
    } catch (error) {
      console.error("Error sending mail:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string(),
    }),
    onSubmit: async (values, { resetForm }) => {
      await initiateMail(values);
      window.setTimeout(resetForm, 500);
    },
  });

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-primary">06 / Contact</p>

            <h2 className="mt-6 max-w-xl text-[clamp(2.7rem,6vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.05em] text-ink">
              Have a product problem worth solving?
            </h2>

            <p className="body-large mt-7 max-w-lg text-ink-secondary">
              I&apos;m always interested in thoughtful product, engineering, and
              systems conversations.
            </p>

            <a
              href="mailto:rohansalujamusic@gmail.com"
              className="group mt-9 inline-flex items-center gap-2 border-b border-border-strong pb-1 text-sm text-ink transition-colors hover:border-primary hover:text-primary"
            >
              rohansalujamusic@gmail.com
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-5 border-t border-border pt-8 lg:border-t-0 lg:pt-0"
          >
            <CustomTextField
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name ? formik.errors.name : " "}
              fullWidth
            />

            <CustomTextField
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email ? formik.errors.email : " "}
              fullWidth
            />

            <CustomTextField
              textArea
              label="Message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              rows={5}
            />

            <div className="pt-2">
              <CustomButton type="submit" size="large" disabled={loading}>
                {loading ? (
                  <LoadingIcon />
                ) : (
                  <span className="flex items-center gap-2">
                    Send message <FiSend />
                  </span>
                )}
              </CustomButton>
            </div>
          </form>
        </div>

        <footer className="mt-20 flex flex-col gap-3 border-t border-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Rohan Saluja · Software engineer</span>
          <span>Built with intention, not a template.</span>
        </footer>
      </Container>
    </section>
  );
};

export default Contact;
