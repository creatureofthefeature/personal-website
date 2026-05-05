"use client"
import { Image, SimpleGrid, Box, Flex, Container, VStack } from "@chakra-ui/react";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { NavImage, Navbar } from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";

const mPlusRounded1c = M_PLUS_Rounded_1c({ 
  weight: "700"
});

const Portfolio = () => {
  return (
    <Container maxW="full" px={0} >
      <VStack gap="4">

        <Box h="1vh" position="relative" >
          <NavImage></NavImage>
        </Box>

        <Box h="20">
          <Navbar></Navbar>
        </Box>

        <Box h="10vh"></Box>

        <Box > 
          <Flex
              as="nav"
              align="center"
              justify="space-between"
              px={{ base: 6, lg: 12 }} 
          >
            <SimpleGrid columns={3} gap="40px">
              <Box height="100" >
                <Image
                  src="/personal-website/Moribund.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/ToSink.jpg"
                  alt="Art"
                />
              </Box>
              
              <Box height="100" >
                <Image
                  src="/personal-website/ToFloat.jpg"
                  alt="Art"
                />
              </Box>
              
              <Box height="100" >
                <Image
                  src="/personal-website/GreenMonochrome.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/TouchingTheDryWorld.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/StillLifeOil.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/eldwretch sona card.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/ball_pit_background.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/storm.JPG"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/DucksInTheHarbor.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/PicnicTree.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/RosesAndGardenSpiders.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/ClothSketch.jpg"
                  alt="Art"
                />
              </Box>

              <Box height="100" >
                <Image
                  src="/personal-website/TextureStillLifeCharcoalGraphite.jpg"
                  alt="Art"
                />
              </Box>

              {/* <Box height="100" >
                <Image
                  src=""
                  alt="Art"
                />
              </Box> */}
            </SimpleGrid>
          </Flex>
        </Box>  

        <Box > 
          <Footer></Footer>        
        </Box> 

      </VStack>
    </Container>
  );
}

export default Portfolio;