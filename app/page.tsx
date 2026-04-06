"use client"
import { Container, Box, Heading, Center} from "@chakra-ui/react";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Navbar from "../components/ui/navbar";

const mPlusRounded1c = M_PLUS_Rounded_1c({ 
  weight: "700"
});

export default function Home() {
  return (
    <Container maxW="full" px={0}>

      <Navbar></Navbar>

      <Center>
        <Box borderRadius="lg"  bg='orange.400' color="black" p={3} mb={6} >
        Hello, I&apos;m a Multimedia Artist from Texas, looking to relocate to Austria!
        </Box>
      </Center>
      <Center>
        <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading size="4xl" className={`text-center ${mPlusRounded1c.className}`}>
            Henry Inkwell
          </Heading>
          <p>Multimedia Creator ( Artist / Developer / Designer)</p>
        </Box>
      </Box>
      </Center>

    </Container>
  );
}
