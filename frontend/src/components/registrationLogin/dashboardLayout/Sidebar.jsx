import React from "react";
import {
    Box,
    VStack,
    Button,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    useBreakpointValue,
    Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Sidebar = () => {
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const isDrawer = useBreakpointValue({ base: true, md: false });

    const SidebarContent = () => (
        <Box bg="purple.600" w={{ base: "full", md: "250px" }} p="6" color="white" height="100vh">
            <VStack spacing={4} align="stretch">
                <Button variant="ghost" color="white" justifyContent="flex-start" onClick={() => navigate("/dashboard")}>
                    Dashboard
                </Button>
                <Button variant="ghost" color="white" justifyContent="flex-start" onClick={() => navigate("/dashboard/applications")}>
                    Applications
                </Button>
            </VStack>
        </Box>
    );

    return (
        <>
            {isDrawer ? (
                <>
                    <Flex bg="purple.600" p={2}>
                        <IconButton
                            aria-label="Open sidebar"
                            icon={<HamburgerIcon />}
                            variant="outline"
                            color="white"
                            onClick={onOpen}
                        />
                    </Flex>
                    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent bg="purple.600" color="white">
                            <DrawerCloseButton />
                            <DrawerBody>
                                <SidebarContent />
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            ) : (
                <SidebarContent />
            )}
        </>
    );
};

export default Sidebar;
