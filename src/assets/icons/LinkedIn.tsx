interface Props {
  className?: string;
  stroke?: string;
}

const LinkedIn: React.FC<Props> = ({
  className,
  stroke = "stroke-accent hover:stroke-accent-500",
}) => {
  return (
    <svg
      className={`hover:cursor-pointer ${stroke} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.75 -0.75 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      id="Linkedin--Streamline-Feather"
      height="24"
      width="24"
    >
      <desc>Linkedin Streamline Icon: https://streamlinehq.com</desc>
      <title>LinkedIn</title>
      <path
        d="M15 7.5a5.625 5.625 0 0 1 5.625 5.625v6.5625h-3.75v-6.5625a1.875 1.875 0 0 0 -1.875 -1.875 1.875 1.875 0 0 0 -1.875 1.875v6.5625h-3.75v-6.5625a5.625 5.625 0 0 1 5.625 -5.625z"
        strokeWidth="1.5"
      ></path>
      <path d="M1.875 8.4375h3.75v11.25H1.875Z" strokeWidth="1.5"></path>
      <path
        d="M1.875 3.75a1.875 1.875 0 1 0 3.75 0 1.875 1.875 0 1 0 -3.75 0"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

export default LinkedIn;
