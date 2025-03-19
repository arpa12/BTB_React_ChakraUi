export const noticeStyle = {
  maxWidth: "1800px", // Full-width container
  width: "100%",
  py: ["2rem", "3rem"], // Responsive padding
  px: ["1rem", "2rem", "5rem"], // Adjust padding for different screen sizes
  backgroundColor:'gray.100'
};

export const noticeCardStyle = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 8,
    flexWrap: ["wrap", "nowrap"], // Responsive: wrap on smaller screens, nowrap on larger
  },
  card: {
    border: "2px solid #e6f7e6", // Light green border for a clean look
    backgroundColor: "#f8fdf8", // Light background for a fresh appearance
    padding: "1rem 2rem", // Padding adjusted for better spacing
    borderRadius: "10px", // Rounded corners for a modern look
    textAlign: "center",
    boxShadow: "sm",
    transition: "0.3s",
    _hover: {
      boxShadow: "md",
      transform: "scale(1.02)", // Subtle hover effect
    },
    width: ["100%", "45%"], // Responsive: 100% on small screens, 45% on larger screens
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  innerFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontSize: "lg",
    fontWeight: "bold",
    color: "gray.700",
    ml: 4,
  },
  number: {
    fontSize: "30px",
    color: "orange.400",
    fontWeight: "bold",
    textAlign: "right",
    ml: ["50px", "100px", "200px"], // Adjust margin for different screen sizes
  },
};
