import { keyframes } from "@emotion/react"; // ✅ Correct import

// Container styles (Main wrapper)
export const containerStyles = {
  display: "flex",
  flexDirection: ["column", "column", "row"], // Responsive layout
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "1300px", // Adjust width to match reference image
  height: "300px", // Keep the height short
  marginX: "auto",
  marginY: 1, // Reduce space around it
  padding: 2,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "lg",
  boxShadow: "lg",
};

// Slider wrapper styles
export const sliderWrapperStyles = {
  width: ["100%", "100%", "70%"], // Bigger slider
  position: "relative",
  height: "100%", // Full height for proper alignment
};

// Individual slide styles
export const slideBoxStyles = {
  padding: 2,
  height: "100%",
};

// Image styles (inside slider)
export const imageStyles = {
  borderRadius: "lg",
  width: "100%",
  height: "270px",
  objectFit: "cover",
};

// Message box wrapper
export const messageWrapperStyles = {
  width: ["100%", "100%", "28%"], // Smaller width than slider
  padding: 3,
  borderRadius: "md",
  boxShadow: "md",
  height: "85%",
};

// Message title (header) styles
export const messageTitleStyles = {
  fontSize: "lg",
  fontWeight: "bold",
  marginBottom: 3,
  color: "white", // White text color
  textAlign: "center",
  backgroundColor: "#006400", // Dark green background for title
  padding: "10px",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
};

// Individual message box styles
export const messageBoxStyles = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  padding: 3,
  marginBottom: 3,
  borderRadius: "md",
  boxShadow: "sm",
  cursor: "pointer",
  transition: "0.3s",
  _hover: { boxShadow: "md" },
};

// Message image styles
export const messageImageStyles = {
  width: "50px",
  height: "50px",
  borderRadius: "full",
  marginRight: 3,
};

// Message text styles
export const messageTextStyles = {
  flex: 1,
  fontSize: "sm",
};

// Details link styles
export const detailsLinkStyles = {
  color: "blue.500",
  fontWeight: "bold",
  fontSize: "sm",
  cursor: "pointer",
  _hover: { textDecoration: "underline" },
};

// Custom arrow button animation
const fadeInOut = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

// Arrow button styles
export const arrowButtonStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0, 0, 0, 0.5)",
  color: "white",
  padding: "8px",
  borderRadius: "full",
  cursor: "pointer",
  zIndex: 2,
  transition: "0.3s",
  _hover: { background: "rgba(0, 0, 0, 0.8)" },
  animation: `${fadeInOut} 1s infinite`, // Subtle animation effect
};

// Left arrow position
export const leftArrowStyles = {
  left: "10px",
};

// Right arrow position
export const rightArrowStyles = {
  right: "10px",
};
