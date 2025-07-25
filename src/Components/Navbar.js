import { Images } from "@/Constants";
import {
  Box,
  Button,
  Center,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineHome,
  AiOutlineInfo,
  AiOutlinePhone
} from "react-icons/ai";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { TbAlignLeft } from "react-icons/tb";
import NavDrawer from "./Drawer";

const NavPages = [
  { _id: 1, title: "Home", link: "/", icon: <AiOutlineHome /> },
  { _id: 2, title: "Meet Our Experts", link: "/meet-our-experts", icon: <AiOutlineInfo /> },
  { _id: 3, title: "About Us", link: "/about", icon: <AiOutlineInfo /> },
  { _id: 4, title: "Contact us", link: "/contact-us", icon: <AiOutlinePhone /> },
];


const gradientAnimation = keyframes`
  0% {
    background: linear-gradient(to right, #17354077, #F8960177);
    background-size: 200% 100%;
    background-position: 100% 0;
  }
  50% {
    background: linear-gradient(to right, #F8960177, #17354077);
    background-size: 200% 100%;
    background-position: 0% 0;
  }
  100% {
    background: linear-gradient(to right, #17354077, #F8960177);
    background-size: 200% 100%;
    background-position: 100% 0;
  }
  50% {
    background: linear-gradient(to right, #F8960177, #17354077);
    background-size: 200% 100%;
    background-position: 0% 0;
  }
    
`;


const ChildrenList = ({ page }) => {
  const router = useRouter();

  return (
    <>
      {page.hasChildren ? (
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger >
            <Link href={page.link} style={{ width: "100%" }}>

              <Text
                color={router.asPath === page.link ? '#F89601' : "#173540"}
                fontWeight={router.asPath === page.link ? "semibold" : ""}
              >
                {page.title}
              </Text>
            </Link>
          </PopoverTrigger>
          <PopoverContent
            border={0}
            boxShadow={"xl"}
            p={4}
            rounded={"sm"}
            w={"250px"}
            bg="teal.50"
          >
            <Stack listStyleType={"none"} w="100%" justifyContent={"flex-end"}>
              {page?.children?.map((page) => (
                <Flex
                  key={page._id}
                  _hover={{ bg: "teal.100" }}
                  p="2"
                  borderRadius={"md"}
                  px="2"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <ChildrenList page={page} />
                  {page.hasChildren && <FaChevronDown size="12" />}
                </Flex>
              ))}
            </Stack>
          </PopoverContent>
        </Popover>
      ) : (
        <Link href={page.link}>
          <Box
            display="inline-block" // Ensures the Box wraps the Text correctly
            border="2px solid transparent" // Start with a transparent border
            borderRadius="md"
            padding="4px" // Adds space around the text
            transition="border-color 0.3s ease , padding-inline 0.3s ease" // Smooth border and padding transition
            _hover={{
              borderColor: "#F89601", // Change border color on hover
              paddingInline: "8px", // Optional: Adds padding on hover for better effect
            }}
          >
            <Text
              color={router.asPath === page.link ? '#F89601' : "#173540"}
              fontWeight={router.asPath === page.link ? "semibold" : ""}
              transition="color 0.3s ease"
              _hover={{ color: '#F89601' }}
            >
              {page.title}
            </Text>
          </Box>
        </Link>
      )}
    </>
  );
};

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <Center display={["none", "none", "flex"]}
        sx={{
          bg: "#173540", p: "0.5rem", gap: "1rem", flexDirection: 'column',
          animation: `${gradientAnimation} 5s linear infinite`,

        }}>
        <Text sx={{
          fontSize: '1.2rem', color: 'white',
          animation: "scaleAnimation 2s infinite ease-in-out",
        }}>Streamlining the journey for students to study abroad, empowering them to achieve academic excellence worldwide.</Text>

        <Flex gap="6">
          {Images.FLAG.map((f, index) => (
            <Flex
              key={index}
              flexDirection="column"
              alignItems="center"
              gap="2"
            >
              <Center
                className='element'
                h={["25px", "30px", "40px"]}
                w={["60px", "40px", "80px"]}
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
              <Text color="white" fontSize={["xs", "sm", "md"]} fontWeight='bold' sx={{
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


      <Center
        display={["none", "none", "flex"]}
        justifyContent={"space-between"}
        px="14"
        py="2"
        boxShadow={"sm"}
        borderBottom="1px solid"
        borderBottomColor={"gray.200"}
        position="sticky"
        top="0"
        bg="rgba(255, 255, 255, .9)"
        backdropFilter={"blur(50px)"}
        gap="10"
        zIndex={2}
      >
        <Link
          href="/"
          style={{
            height: "6rem",
            width: "40%",
          }}
        >
          <Image
            src={Images.LOGO_WIDE}
            alt="Logo"
            style={{
              height: "100%",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        <Box display="flex" gap="8" w="100%" justifyContent={"flex-end"}>
          {NavPages.map((page) => (
            <Box key={page._id}>
              <ChildrenList page={page} />
            </Box>
          ))}
        </Box>
        <Center justifyContent={"flex-end"} gap="2">
          <Link href="tel:+923139320255">
            <Button backgroundColor="#F89601" h="10">
              <RiPhoneFill size="20" color='white' />
            </Button>
          </Link>
          <Link href="https://wa.me/message/YHU457VGSDQ2D1" target='_blank'>
            <Button backgroundColor="#173540" h="10">
              <FaWhatsapp size="20" color='white' />
            </Button>
          </Link>
        </Center>
      </Center>

      <Center
        display={["flex", "flex", "none"]}
        justifyContent={"space-between"}
        px="4"
        py="3"
        boxShadow={"sm"}
        position="sticky"
        top="0"
        bg="rgba(255, 255, 255, .5)"
        backdropFilter={"blur(50px)"}
        zIndex={2}
      >
        <NavDrawer pages={NavPages} path={router.pathname}>
          <TbAlignLeft size={25} />
        </NavDrawer>
        <Link href="/" style={{ height: "35px" }}>
          <Image src={Images.LOGO_WIDE} height="35" alt="logo" />
        </Link>

      </Center>
    </>
  );
};

export default Navbar;
