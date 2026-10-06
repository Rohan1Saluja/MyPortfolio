import React, { MouseEvent, ReactNode } from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface CustomButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  sx?: Record<string, unknown>;
  variant?: "primary" | "outlined" | "text";
  loading?: boolean;
  icon?: ReactNode;
  name?: string;
  href?: string;
  size?: MuiButtonProps["size"];
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  type = "button",
  disabled = false,
  className = "",
  sx = {},
  variant = "primary",
  loading = false,
  icon,
  name,
  href,
  size = "medium",
  ...rest
}) => {
  const isDisabled = disabled || loading;

  const baseSx: Record<string, unknown> = {
    borderRadius: "2px",
    textTransform: "none",
    fontWeight: 600,
    letterSpacing: "-0.01em",
    padding:
      size === "large"
        ? "12px 22px"
        : size === "small"
          ? "7px 14px"
          : "10px 18px",
    minWidth: "fit-content",
    boxShadow: "none",
    transition: "background-color 180ms ease, color 180ms ease, border-color 180ms ease",
    "&:hover": {
      boxShadow: "none",
    },
  };

  const variants: Record<string, Record<string, unknown>> = {
    primary: {
      backgroundColor: "var(--color-primary)",
      color: "var(--color-page)",
      border: "1px solid var(--color-primary)",
      "&:hover": {
        backgroundColor: "var(--color-primary-400)",
        borderColor: "var(--color-primary-400)",
      },
    },
    outlined: {
      backgroundColor: "transparent",
      color: "var(--color-ink)",
      border: "1px solid var(--color-border-strong)",
      "&:hover": {
        borderColor: "var(--color-primary)",
        color: "var(--color-primary)",
      },
    },
    text: {
      backgroundColor: "transparent",
      color: "var(--color-ink-secondary)",
      border: "1px solid transparent",
      "&:hover": {
        backgroundColor: "transparent",
        color: "var(--color-ink)",
      },
    },
  };

  return (
    <MuiButton
      variant="text"
      name={name}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={className}
      sx={{
        ...baseSx,
        ...variants[variant],
        ...(isDisabled
          ? {
              opacity: 0.5,
              cursor: "not-allowed",
            }
          : {}),
        ...sx,
      }}
      href={href}
      size={size}
      startIcon={
        loading ? <CircularProgress size="1em" color="inherit" /> : icon
      }
      {...rest}
    >
      {!loading && children}
    </MuiButton>
  );
};

export default CustomButton;
