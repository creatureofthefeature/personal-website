"use client"

import { Flex, Box, Image } from "@chakra-ui/react";
import Logo from "./logo";
import MenuLinks from "./menuLinks";
import MobileDrawer from "./mobileDrawer";
import NextImage from "next/image"


const Navbar = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            gap={{ base: 8, lg: 16 }}
            px={{ base: 6, lg: 12 }}
            py={3}
            maxW={{ base: "full", xl: "1440px" }}
            mx="auto"
        >
            <Image 
            asChild
            maskImage="linear-gradient(to bottom, black 50%, transparent)"
            position="relative"
            >
                {/* Background Image */}
                <NextImage
                src="/../../PaperCranes.jpg" // Place your image in /public folder
                alt="Background"
                fill
                style={{ objectFit: 'none', objectPosition: 'top', zIndex: -1 }}
                priority
                />
            </Image>

            <Logo />

            {/* Desktop Menu */}
            <Box display={{ base: "none", md: "block" }} bg="whiteAlpha.500" p={1} borderRadius={"sm"}>
                <MenuLinks />
            </Box>

            {/* Mobile Drawer */}
            <Box display={{ base: "block", md: "none" }} bg="whiteAlpha.500" p={1} borderRadius={"sm"}>
                <MobileDrawer />
            </Box>
        </Flex>
    )
}

export default Navbar;