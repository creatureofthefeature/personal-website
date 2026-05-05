"use client"
import { Container, Box, Heading, Center, Image, VStack, Link, Button, Text } from "@chakra-ui/react";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { NavImage, Navbar } from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

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

        <Box >
          <Navbar></Navbar>
        </Box>

        <Box px="4" py="4" bgSize="100vh" bgRepeat="no-repeat"> 
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

          <Box >
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
                      src="/HenryInkwellPhoto.jpg"
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

        <Box w="2/3">
          <Heading textDecoration="underline" size="xl" className={`text-center ${mPlusRounded1c.className}`}>
            About
          </Heading>
          <p>I am currently in the process of shifting my career to encompass both my artistic and
technological skills. My goal is to pursue a career in Multimedia creating games, films, and live 
experiences. To achieve this, my plan is to study Media Technology and Design, work, and immigrate 
to Austria. So far, I have graduated cum laude with my BSc in Computer Science from 
University of Texas at Dallas, worked as a full-stack Software Engineer for three years, and created 
art in a studio as part of the Goldmark Cultural Center artist community for three years. My recent 
community and volunteer work includes packing meals at a local food bank, being a photographer 
and videographer for ThinLine Film/Music/Photo Festival, and modeling in the Texas Women's 
University Senior Design Fashion Show.</p>
        </Box>

        <Box alignContent="center" >
            <Link href="portfolio">
            <Button
            bg="teal.400"
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
                My Portfolio
                </Text>
            </Button>
            </Link>
        </Box>

        <Box > 
          <Footer></Footer>        
        </Box> 

      </VStack>
    </Container>
  );
}
