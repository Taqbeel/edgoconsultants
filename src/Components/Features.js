import { Images } from "@/Constants";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoCalendar, IoEnter, IoPencil } from "react-icons/io5";


const slideInImg = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInData = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Animation styles
const slideInAnimation = `${slideInData} 3s ease-out`;
const fadeInAnimation = `${fadeIn} 2s ease-out`;

// Styled Flex container
const AnimatedFlex = styled(Flex)`
  animation: ${(props) => (props.isVisible ? `${slideInImg} 4s ease` : "none")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? "translateX(0)" : "translateX(100%)")};
  transition: opacity 0.5s ease, transform 1s ease;
`;

const Feature = ({ ref, text, icon, iconBg }) => {

  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
        animation={fadeInAnimation}
        style={{ animationDelay: "0.5s" }}
        ref={ref}
      >
        {icon}
      </Flex>
      <Text ref={ref} fontWeight={600} fontSize='lg'
        animation={slideInAnimation}
        style={{ animationDelay: "0.6s" }}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  // const spinAnimation = `${spin} infinite 2s linear`;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <Box py="15" bg="blue.100">
      <Container maxW={"5xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} alignItems='center' spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Our Services
            </Text>
            <Heading
              ref={sectionRef} fontWeight={"black"} animation={slideInAnimation}>Your Journey, Our Expertise</Heading>
            <Text
              ref={sectionRef}
              color={"gray.500"} fontSize={"2xl"}
              animation={fadeInAnimation}
              style={{ animationDelay: "0.7s" }}>
              We are committed to securing your admission to a university that perfectly aligns with your goals and aspirations.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Feature
                icon={<Icon as={IoPencil} color={"yellow.500"} w={5} h={5} />}
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Consultation"}
                ref={sectionRef}
              />
              <Feature
                icon={<Icon as={IoEnter} color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Application"}
                ref={sectionRef}
              />
              <Feature
                icon={<Icon as={IoCalendar} color={"purple.500"} w={5} h={5} />}
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Admissions"}
                ref={sectionRef}
              />
            </Stack>
          </Stack>
          {/* <Flex animation={spinAnimation}> */}
          <AnimatedFlex
            ref={elementRef}
            isVisible={isVisible}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={Images.OUR_STORY}
              style={{ borderRadius: 20 }}
            />
          </AnimatedFlex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
