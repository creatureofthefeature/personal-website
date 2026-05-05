"use client"
import { Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Image 
    asChild
    maskImage="linear-gradient(to top, black 50%, transparent)"
    width="100%"
    >
      <Image
      src="/personal-website/FooterImage.png" 
      alt="Footer Background"
      style={{ objectFit: 'cover', objectPosition: 'bottom', zIndex: 0 }}
      width="100%"
      />
    </Image> 
  );
}

export default Footer;