import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useRef, useState } from "react";



const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInAnimation = `${slideIn} 1s ease-out`;

const Mentors = ({ name, img, flag, cntr, desc }) => {

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const checkVisibility = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        console.log("Bounding Rect:", rect);
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    // Attach to scroll and resize events
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    checkVisibility(); // Check immediately

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);


  return (
    <Flex
      ref={elementRef}
      animation={isVisible ? slideInAnimation : "none"}
      transform={isVisible ? "translateX(0)" : "translateX(110%)"}
      opacity={isVisible ? 1 : 0}
      transition="transform 1s ease, opacity 0./5s ease"
      bg={"gray.100"}
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "flex-start" }}
      mx="auto"
      maxW="7xl"
      px={6}
      p={8}
      borderRadius={8}
      role="group"
      _hover={{ background: "#173540", }}
    >
      <Box flexShrink={0}>
        <Image
          src={require(`../Assets/Images/Team/${img}.jpeg`).default.src}
          alt={img}
          w={{ base: "100%", md: "auto" }}
          h={{ base: "auto", md: "250px" }}
          objectFit="cover"
          rounded="md"
          shadow="md"
          borderRadius={"100%"}
        />
      </Box>
      <Box mt={{ base: 6, md: 0 }} ml={{ md: 6 }}>
        <Text
          mb={4}
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="gray.700"
          as={"h1"}
          _groupHover={{ color: "white" }}
        >
          {name} -Manager Operations {cntr}
        </Text>
        <Center
          className="element"
          h={["25px", "30px", "40px"]}
          w={["60px", "40px", "80px"]}
          borderRadius="md"
          bgSize="cover"
          bgPosition="center"
          bgImage={require(`../Assets/Images/Flags/${flag}.svg`).default.src}
          sx={{
            // animation: "waveAnimation 1.5s infinite ease-in-out",
            animation: "shadow",
            transformOrigin: "left center",
          }}
        ></Center>

        <Text mt={6} fontSize={{ base: "sm", md: "md" }} color="black"
          _groupHover={{ color: "white" }}>
          {desc}
        </Text>
      </Box>
    </Flex>
  );
};

export default Mentors;
