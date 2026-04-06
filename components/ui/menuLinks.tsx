import { HStack, VStack, Link, Button, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./color-mode"
import { M_PLUS_Rounded_1c } from "next/font/google";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const mPlusRounded1c = M_PLUS_Rounded_1c({ 
  weight: "700"
});

const MenuLinks = ({ isMobile = false }) => {
  const LinkComponent = isMobile ? VStack : HStack;

  return (
    <LinkComponent gap={isMobile ? 4 : 8} align="center">
      
      <ColorModeButton />

      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          fontWeight="medium"
          colorPalette="black"
          _hover={{
            colorPalette: "orange",
            textDecoration: "underline",
          }}
          transition="color 0.2s ease"
        >
          {link.name}
        </Link>
      ))}

      <Button
        bg="orange.400"
        variant="solid"
        size="sm"
        borderRadius="full"
        px={6}
        _hover={{
          transform: "translateY(-2px)",
          shadow: "lg",
        }}
        transition="all 0.2s ease"
        className={`text-center ${mPlusRounded1c.className}`}
      >
        <Text color="black">
           Like what you see? Support my work!
        </Text>
      
      </Button>
    </LinkComponent>
  );
};

export default MenuLinks;