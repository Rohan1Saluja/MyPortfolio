import React, { ReactNode, MouseEvent } from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { SxProps, Theme } from "@mui/material/styles";

// --- Define Simpler Props Interface ---
interface CustomButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string; // Allow passing custom classes if needed
  sx?: SxProps<Theme>; // Allow sx prop for overrides
  variant?: "primary" | "outlined" | "text"; // Simplified variants based on theme
  loading?: boolean;
  icon?: ReactNode; // Optional icon (will be startIcon)
  name?: string;
  href?: string; // For link buttons
  // Add other frequently used MUI props if needed (e.g., size)
  size?: MuiButtonProps["size"]; // Use MUI's size prop directly
}

// --- The Simpler Component ---
const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  type = "button",
  disabled = false,
  className,
  sx = {}, // Default sx to empty object
  variant = "primary", // Default to 'primary' variant
  loading = false,
  icon,
  name,
  href,
  size = "medium", // Default MUI size
  // Capture any other props user might pass (though not explicitly defined above)
  ...rest
}) => {
  // Determine actual disabled state
  const isDisabled = disabled || loading;

  // Define base styles using sx
  const baseSx: SxProps<Theme> = {
    borderRadius: "12px", // Your desired border-radius
    textTransform: "none", // Keep text casing as is
    fontWeight: 600,
    padding:
      size === "large"
        ? "12px 30px"
        : size === "small"
        ? "6px 16px"
        : "10px 24px", // Basic size handling
    minWidth: "fit-content",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
    // Base styles for disabled/loading state (visual cue)
    ...(isDisabled && {
      cursor: "not-allowed",
    }),
  };

  // Define variant-specific styles using sx
  let variantSx: SxProps<Theme> = {};
  switch (variant) {
    case "primary":
      variantSx = {
        backgroundColor: "var(--color-primary)",
        color: "var(--color-background-900)",
        border: "none",
        "&:hover": {
          backgroundColor: "var(--color-primary-400)", // Or primary-600
        },
        ...(isDisabled && {
          backgroundColor: "var(--color-text-800)",
          color: "var(--color-text-600)",
          // Prevent hover styles when disabled
          "&:hover": {
            backgroundColor: "var(--color-text-800)",
          },
        }),
      };
      break;

    case "outlined":
      variantSx = {
        borderColor: "var(--color-primary)",
        color: "var(--color-primary)",
        borderWidth: "1px",
        borderStyle: "solid",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "rgba(var(--color-primary-rgb), 0.08)", // Assumes --color-primary-rgb is set
          borderColor: "var(--color-primary-400)",
          color: "var(--color-primary-400)",
        },
        ...(isDisabled && {
          borderColor: "var(--color-text-700)",
          color: "var(--color-text-700)",
          // Prevent hover styles when disabled
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "var(--color-text-700)",
          },
        }),
      };
      break;

    case "text":
      variantSx = {
        color: "var(--color-primary)",
        backgroundColor: "transparent",
        border: "none",
        "&:hover": {
          backgroundColor: "rgba(var(--color-primary-rgb), 0.08)",
          color: "var(--color-primary-400)",
        },
        ...(isDisabled && {
          color: "var(--color-text-700)",
          // Prevent hover styles when disabled
          "&:hover": {
            backgroundColor: "transparent",
          },
        }),
      };
      break;
  }

  // Combine base, variant, and user-provided sx styles
  const combinedSx: SxProps<Theme> = {
    ...baseSx,
    ...variantSx,
    ...sx, // User overrides take precedence
  };

  return (
    <MuiButton
      variant="text" // Use base MUI variant, styling handled by sx
      name={name}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`!shadow-sm shadow-background-600  ${
        variant === "primary" && !isDisabled ? "button-shine" : ""
      } ${className}`}
      sx={combinedSx}
      href={href}
      size={size} // Pass MUI size prop through
      startIcon={
        loading ? <CircularProgress size="1em" color="inherit" /> : icon
      } // Show spinner or user icon
      {...rest}
    >
      {/* Only show children when not loading */}
      {!loading && children}
      {/* You could add loadingText here if needed later */}
    </MuiButton>
  );
};

export default CustomButton;
