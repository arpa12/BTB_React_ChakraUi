import { keyframes } from "@emotion/react"; // ✅ Correct import

// Container styles (Main wrapper)
export const containerStyles = {
  display: "flex",
  flexDirection: ["column", "column", "row"], // Mobile: Column, Desktop: Row
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "100%", // ✅ Set max width to 100% to remove gaps
  minHeight: "100%",
  pt: "100px", // ✅ Remove paddingX to prevent extra spacing
  backgroundImage: `url("https://uat-btb.oss.net.bd/images/sec-rectangle-bg.jpg")`, 
  backgroundSize: "100% auto", // ✅ Ensures full width coverage
  backgroundRepeat: "no-repeat", // ✅ Prevents unwanted repetition
  backgroundPosition: "top center", // ✅ Aligns image correctly
  boxShadow: "lg",
};

// Slider wrapper styles
export const sliderWrapperStyles = {
  width: ["100%", "100%", "75%"], // Increase width for large screens
  flexGrow: 1, // Allow it to take more space dynamically
  position: "relative",
  height: "100%",
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
  height: ["200px", "270px", "380px"], // Smaller height on mobile
  objectFit: "cover",
};

// Message box wrapper
export const messageWrapperStyles = {
  width: ["100%", "100%", "25%"], // Make it more responsive
  flexShrink: 0,
  padding: 3,
  borderRadius: "md",
  boxShadow: "md",
  height: "85%",
};

// Message title (header) styles
export const messageTitleStyles = {
  fontSize: ["md", "lg", "xl"], // Responsive font size
  fontWeight: "bold",
  marginBottom: 3,
  color: "white",
  textAlign: "center",
  backgroundColor: "#006400",
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
  width: ["40px", "50px", "50px"], // Smaller image on mobile
  height: ["40px", "50px", "50px"],
  borderRadius: "full",
  marginRight: 3,
};

// Message text styles
export const messageTextStyles = {
  flex: 1,
  fontSize: ["xs", "sm", "md"], // Responsive text size
};

// Details link styles
export const detailsLinkStyles = {
  color: "blue.500",
  fontWeight: "bold",
  fontSize: ["xs", "sm", "sm"],
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
  animation: `${fadeInOut} 1s infinite`,
};

// Left arrow position
export const leftArrowStyles = {
  left: "10px",
};

// Right arrow position
export const rightArrowStyles = {
  right: "10px",
};
