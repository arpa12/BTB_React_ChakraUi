export const containerStyles = {
  maxW: "100%",  // Ensures it takes full width
  p: { base: "20px", sm: "40px", md: "60px", lg: "90px" },
  bgImage: "https://uat-btb.oss.net.bd/images/sec-rectangle-bg.jpg",
  bgSize: "cover",
  bgPosition: "center",
  width: "100%",  // Ensures it spans full width
  margin: "0",  // Removed auto margin to avoid unnecessary spacing
};

export const headingSectionStyles = {
  text: {
    fontSize: { base: "md", sm: "lg", md: "xl", lg: "2xl" },
    color: "green.600",
  },
  heading: {
    as: "h2",
    size: { base: "xl", sm: "2xl", md: "3xl", lg: "4xl" },
    mt: { base: 4, sm: 6, md: 8 },
  },
  iframe: {
    maxW: "100%",
    ratio: 16 / 9,
    mt: { base: 6, sm: 8, lg: 10 },
    mb: { base: 4, sm: 6, lg: 10 },
  },
};

export const tourOperatorStyles = {
  flex: {
    align: "center",
    mb: { base: 4, sm: 6, lg: 8 },
    pt: { base: "0px", sm: "20px", md: "30px", lg: "40px" },
    justify: "flex-start",  // Ensure elements are left-aligned on large screens
  },
  icon: {
    w: { base: 6, sm: 8, md: 10, lg: 12 },
    h: { base: 6, sm: 8, md: 10, lg: 12 },
    color: "green.700",
    mr: 3,
  },
  heading: {
    as: "h3",
    size: "lg",
    color: "green.700",
  },
  text: {
    fontSize: { base: "sm", sm: "md", lg: "lg" },
    color: "gray.700",
    mt: { base: 2, sm: 4, lg: 6 },
  },
  flexActions: {
    mt: { base: 4, sm: 6, lg: 8 },
    align: "center",
    justify: "space-between",
  },
  arrow: {
    size: { base: "20px", sm: "25px", lg: "30px" },
    color: "green.600",
    borderRadius: "md",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    pt: { base: "20px", sm: "30px", lg: "40px" },
  },
};

export const tourGuideStyles = {
  flex: {
    align: "center",
    mb: { base: 4, sm: 6, lg: 8 },
    pt: { base: "20px", sm: "30px", lg: "50px" },
    justify: "flex-start", // Left-align elements inside the flex container for larger screens
  },
  icon: {
    w: { base: 6, sm: 8, md: 10, lg: 12 },
    h: { base: 6, sm: 8, md: 10, lg: 12 },
    color: "green.700",
    mr: 3,
  },
  heading: {
    as: "h3",
    size: "lg",
    color: "green.700",
  },
  text: {
    fontSize: { base: "sm", sm: "md", lg: "lg" },
    color: "gray.700",
    mt: { base: 2, sm: 4, lg: 6 },
  },
  flexActions: {
    mt: { base: 4, sm: 6, lg: 8 },
    align: "center",
    justify: "space-between",
  },
  arrow: {
    size: { base: "20px", sm: "25px", lg: "30px" },
    color: "green.600",
    borderRadius: "md",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
