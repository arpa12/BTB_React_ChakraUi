// Sidebar styles
export const sidebarStyles = {
    base: {
        bg: "purple.700", // Sidebar background color
        color: "white",
        p: "4",
        minHeight: "100vh",
    },
    desktop: {
        display: { base: "none", md: "block" }, // Show only on desktop
    },
};

// Mobile sidebar styles (hamburger menu)
export const mobileSidebarStyles = {
    display: { base: "block", md: "none" }, // Visible on mobile
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "2",
};

// Mobile button styles
export const mobileButtonStyles = {
    variant: "link",
    color: "purple.700",
    size: "lg",
    ml: "4",
    mt: "4",
};

// Header styles
export const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: "8",
    borderBottom: "2px solid #ddd",
    pb: "4",
};

// Alert styles
export const alertStyles = {
    mb: "4",
    borderRadius: "md",
    bg: "red.100",
    color: "red.800",
};

// Card styles
export const cardStyles = {
    base: {
        borderRadius: "md",
        shadow: "lg",
    },
    hover: {
        _hover: {
            transform: "scale(1.05)",
            transition: "transform 0.3s ease-in-out",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
        },
    },
};
