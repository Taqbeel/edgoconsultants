import { Images } from "@/Constants";
import {
  Accordion,
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


const ChildrenListMobile = ({ page, onClose }) => {
  const router = useRouter();

  return (
    <Accordion allowMultiple p="0">

      <Link
        href={page.link}
        key={page._id}
        onClick={() => onClose()}
        bg="red"
      >
        <Flex
          bg={router.pathname === page.link ? "#F8960177" : "white"}
          p="2"
          borderRadius={"md"}
          gap="4"
          alignItems={"center"}
        >
          <Box p="1" bg="#F89601" color={"white"} borderRadius="md">
            {page.icon}
          </Box>
          <Text fontSize={14} fontWeight="semibold" color={"blackAlpha.800"}>
            {page.title}
          </Text>
        </Flex>
      </Link>

    </Accordion>
  );
};

const NavDrawer = ({ children, pages, path }) => {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span ref={btnRef} onClick={onOpen}>
        {children}
      </span>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay backdropFilter="auto" backdropBlur="5px" />
        <DrawerContent>
          <DrawerCloseButton size={"sm"} />
          <DrawerHeader p="0" mt="-5">
            <Stack spacing={2} mt="5" px="2">
              {pages.map((page) => (
                <ChildrenListMobile
                  page={page}
                  key={page._id}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </DrawerHeader>

          <DrawerBody p={0} mt='1.5rem'>

            <Center h='100%'
              sx={{ bg: "#173540", p: "0.5rem", gap: "1rem", flexDirection: 'column', justifyContent: 'flex-start' }}>
              <Text sx={{
                fontSize: '1rem', color: 'white',
                animation: "scaleAnimation 2s infinite ease-in-out",
              }}>Streamlining the journey for students to study abroad, empowering them to achieve academic excellence worldwide.</Text>

              <Flex gap="6" flexWrap='wrap'>
                {Images.FLAG.map((f, index) => (
                  <Flex
                    key={index}
                    flexDirection="column"
                    alignItems="center"
                    gap="2"
                  >
                    <Center
                      className='element'
                      h="70px"
                      w="130px"
                      borderRadius="md"
                      bgImage={require(`../Assets/Images/Flags/${index + 1}.svg`).default.src}
                      bgSize="cover"
                      bgPosition="center"
                      sx={{
                        // animation: "waveAnimation 1.5s infinite ease-in-out",
                        animation: "shadow",
                        transformOrigin: "left center",
                      }}
                    ></Center>
                    <Text color="#F89601" fontSize={["xs", "sm", "md"]} fontWeight='bold' sx={{
                      animation: "scaleAnimation 2s infinite ease-in-out",
                    }}>
                      {f}
                    </Text>
                  </Flex>
                ))}
              </Flex>


              <style>
                {`
      @keyframes scaleAnimation {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }

      @keyframes waveAnimation {
        0% {
          transform: rotate(0deg) translateX(0);
        }
        25% {
          transform: rotate(2deg) translateX(2px);
        }
        50% {
          transform: rotate(0deg) translateX(0);
        }
        75% {
          transform: rotate(-2deg) translateX(-2px);
        }
        100% {
          transform: rotate(0deg) translateX(0);
        }
      }

      @keyframes shadow {
  0% {
    filter: drop-shadow(2px 3px 7px rgba(0, 0, 0, .7));
    transform: rotateX(0deg) matrix3d(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
    );
  }
  50% {
    filter: drop-shadow(3px 3px 16px rgba(0, 0, 0, .5));
    transform: rotateX(10deg) matrix3d(
            0.9829214561476214, 0, 0, -0.00003271751695857963,
            0, 0.9962483913887495, 0, -0.000021811677972386414,
            0, 0, 1, 0,
            0, 0, 0, 1
    );
  }
  100% {
    filter: drop-shadow(2px 3px 7px rgba(0, 0, 0, .7));
    transform: rotateX(0deg) matrix3d(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
    );
  }
}

.element {
  animation: shadow 2s infinite;
  transform-origin: left top;
}
    `}
              </style>
            </Center>

          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
