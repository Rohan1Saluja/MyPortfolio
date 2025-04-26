import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

// Styled MUI TextField
const StyledMuiTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "transparent",
    borderRadius: "12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    color: "var(--color-text)",
    "& input, & textarea": {
      padding: "14px 16px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-primary-700)",
      borderWidth: "1px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-primary-500)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-primary)",
    },
    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-text-800)",
    },
    "&.Mui-disabled": {
      color: "var(--color-text-700)",
      WebkitTextFillColor: "var(--color-text-700)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "var(--color-text-500)",
    "&.Mui-focused": {
      color: "var(--color-primary)",
    },
    "&.Mui-disabled": {
      color: "var(--color-text-700)",
    },
  },
}));

// Unified component
interface CustomTextFieldProps extends Omit<TextFieldProps, "variant"> {
  textArea?: boolean;
  rows?: number;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  textArea = false,
  rows = 4,
  ...props
}) => (
  <StyledMuiTextField
    variant="outlined" // Specify the variant here
    multiline={textArea}
    rows={textArea ? rows : undefined}
    {...props}
  />
);

export default CustomTextField;
