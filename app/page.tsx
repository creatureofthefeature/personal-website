"use client"
import { Container, Box, Heading, Center, Image, VStack } from "@chakra-ui/react";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { NavImage, Navbar } from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const mPlusRounded1c = M_PLUS_Rounded_1c({ 
  weight: "700"
});

export default function Home() {
  return (
    <Container maxW="full" px={0} >
      <VStack gap="4">

        <Box h="1vh" position="relative" >
          <NavImage></NavImage>
        </Box>

        <Box h="20">
          <Navbar></Navbar>
        </Box>

        <Box h="20" bgSize="100vh" bgRepeat="no-repeat"> 
          <Box>
            <Center>
              <Box 
              borderColor="orange.700" 
              borderWidth={2}
              borderStyle="solid"borderRadius="lg"  bg='orange.200' color="black" p={3} mb={6} style={{ zIndex: 1 }}> 
              Hello, I&apos;m a Multimedia Artist from Texas, looking to relocate to Austria!
              </Box>
            </Center>
          </Box>

          <Box h="10">
            <Center>
              <Box display={{md:'flex'}} style={{ zIndex: 1 }}>
                <Box flexGrow={1}>
                  <Heading size="4xl" className={`text-center ${mPlusRounded1c.className}`}>
                    Henry Inkwell
                  </Heading>
                  <p>Multimedia Creator ( Artist / Developer / Designer )</p>
                </Box>
                <Box
                  flexShrink={0}
                  mt={{ base: 4, md: 0 }}
                  ml={{ md: 6 }}
                  textAlign="center"
                >
                  <Box
                    borderColor="orange.700" 
                    borderWidth={2}
                    borderStyle="solid"
                    w="100px"
                    h="100px"
                    display="inline-block"
                    borderRadius="full"
                    overflow="hidden"
                  >
                    <Image
                      src="/personal-website/HenryInkwellPhoto.jpg"
                      alt="Profile image"
                      width="100"
                      height="100"
                    />
                  </Box>
                </Box>
              </Box>
            </Center>
          </Box>
        </Box>

        <Box h="13vh"></Box>

        <Box 
            borderColor="teal.700" 
            borderWidth={2}
            borderStyle="solid"
            w="300px"
            h="300px"
            >
                <Image
                    src="/personal-website/WalkCycle.gif"
                    alt="walk cycle gif"
                    width="100"
                    height="100"
                />
            </Box>

        <Box > 
          <Footer></Footer>        
        </Box> 

      </VStack>
    </Container>
  );
}
