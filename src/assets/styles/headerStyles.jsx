import { keyframes } from "@emotion/react"; // ✅ Correct import

// Header styles
export const headerStyles = {
  bg: "white",
  px: { base: "20px", md: "80px" }, // Responsive padding
  py: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
};

// Logo styles
export const logoStyles = {
  height: "60px",
};

// Navigation container styles
export const navContainerStyles = {
  alignItems: "center",
  gap: "2rem",
};

// Navigation menu styles
export const navMenuStyles = {
  gap: "2rem",
  fontSize: "1rem",
  fontWeight: "500",
};

// Navigation item styles
export const navItemStyles = {
  display: "flex",
  alignItems: "center",
  color: "#2d3748",
  textDecoration: "none",
  transition: "color 0.3s ease",
  _hover: { textDecoration: "underline" },
};

// Icon spacing
export const iconSpacing = {
  mr: "8px",
};

// Animation for button
const zoomInZoomOut = keyframes`
  50% { transform: scale(1.2, 1.2); }`;

// Button styles
export const buttonStyles = {
  bg: "#FF7B37",
  color: "white",
  fontWeight: "bold",
  px: "10px",
  py: "8px",
  borderRadius: "8px",
  transition: "background 0.2s ease",
  cursor: "pointer",
  _hover: { bg: "#FF5700" }, 
  animation: `${zoomInZoomOut} 1s ease-in-out infinite`,
  fontSize: '14px'
};

// ✅ Fixed `iconButton` styles (Hamburger/Cross Button)
export const iconButtonStyles = {
  display: { base: "flex", md: "none" }, // Show only in mobile view
  fontSize: "24px",
  position: "absolute", // ✅ Keeps the icon in place
  right: "20px", // ✅ Ensures it's positioned properly
  top: "20px",
  zIndex: "1000", // ✅ Ensures it's always above the menu
  transition: "transform 0.3s ease",
  bg: "green.800",
  color: "white",
  _hover: { bg: "green.700" },
};

// ✅ Mobile menu styles (Slide-down menu)
export const mobileMenuStyles = {
  bg: "white",
  p: "1rem",
  mt: "4",
  shadow: "md",
  display: { base: "block", md: "none" },
  borderRadius: "8px",
};
