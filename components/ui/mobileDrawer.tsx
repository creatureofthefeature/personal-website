import { useDisclosure,  Drawer,  Button,  Portal,  CloseButton, Icon } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import Logo from "./logo";
import MenuLinks from "./menuLinks";

const MobileDrawer = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Drawer.Root open={open} onOpenChange={onToggle} size="full">
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          <Icon color="black.600">
            <LuMenu />
          </Icon>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>
                <Logo />
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Box display={{ base: "block", md: "none" }} bg="whiteAlpha.500" p={1} borderRadius={"sm"} style={{ zIndex: 1 }}>
                <MenuLinks isMobile />
              </Box>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="md" p={5}/>
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileDrawer;