"use client"

import { Flex, Box, Image } from "@chakra-ui/react";
import Logo from "./logo";
import MenuLinks from "./menuLinks";
import MobileDrawer from "./mobileDrawer";

export const NavImage = () => {
    return(
        <Image 
        asChild
        maskImage="linear-gradient(to bottom, black 50%, transparent)"
        position="relative"
        >
        <Image
        // src="/personal-website/PaperCranes.jpg"
        src="/PaperCranes.jpg" 
        alt="Background image"
        aspectRatio={10/1.5}
        width="100%"
        style={{ objectFit: 'cover', objectPosition: 'top',  zIndex: 0}} 
        position="relative"
        />
        </Image>
    );
}

export const Navbar = () => {
    return (
        <Box > 
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            gap={{ base: 8, lg: 16 }} 
            px={{ base: 6, lg: 12 }} //6 12
            py={3} 
            maxW={{ base: "full", xl: "1440px" }}
            mx="auto"
            overflow="hidden"
        >
            <Logo />
            {/* Desktop Menu */}
            <Box display={{ base: "none", md: "block" }} bg="whiteAlpha.500" p={1} borderRadius={"sm"} style={{ zIndex: 1 }}>
                <MenuLinks />
            </Box>
            {/* Mobile Drawer */}
            <Box display={{ base: "block", md: "none" }} bg="whiteAlpha.500" p={1} borderRadius={"sm"} style={{ zIndex: 1 }}>
                <MobileDrawer />
            </Box>
        </Flex>
        </Box>
    )
}

export default Navbar;