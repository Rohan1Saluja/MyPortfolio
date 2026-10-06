import React from "react";
import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const StyledMuiTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "var(--color-surface)",
    borderRadius: "2px",
    transition: theme.transitions.create(["border-color", "background-color"]),
    color: "var(--color-ink)",
    "& input, & textarea": {
      padding: "15px 16px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-border)",
      borderWidth: "1px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-border-strong)",
    },
    "&.Mui-focused": {
      backgroundColor: "var(--color-surface-raised)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-primary)",
      borderWidth: "1px",
    },
  },
  "& .MuiInputLabel-root": {
    color: "var(--color-ink-muted)",
    "&.Mui-focused": {
      color: "var(--color-primary)",
    },
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    color: "var(--color-ink-muted)",
  },
}));

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
    variant="outlined"
    multiline={textArea}
    rows={textArea ? rows : undefined}
    {...props}
  />
);

export default CustomTextField;
