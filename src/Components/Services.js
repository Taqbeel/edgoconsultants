import { Box, Flex, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { FcAcceptDatabase, FcApproval, FcCalendar } from "react-icons/fc";



const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideIn1Animation = `${slideIn} 1s ease-in`;
const slideIn2Animation = `${slideIn} 1.5s ease-in`;
const slideIn3Animation = `${slideIn} 2s ease-in`;

const Feature = ({ index, title, text, icon }) => {

  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {

    const checkVisibility = () => {
      if (cardsRef.current) {
        const rect = cardsRef.current.getBoundingClientRect();
        console.log("Bounding Rect:", rect);
        if (rect.top >= 0 && rect.bottom <= window.innerHeight * 1.6) {
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
    <Stack bg="gray.50" p="5" borderRadius={"md"}
      ref={cardsRef}
      animation={!isVisible ? 'none' : index === 1 ? slideIn1Animation : index === 2 ? slideIn2Animation : slideIn3Animation}
      style={{ animationDelay: "0.3s" }}
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function Services() {
  return (
    <Box p={4} py="16">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          index={1}
          icon={<Icon as={FcApproval} w={10} h={10} />}
          title={"Consultation"}
          text={
            "Our consultation services are designed to provide you with expert guidance tailored to your academic goals. Whether you need help choosing the right university, course, or country, we offer personalized advice to align your ambitions with the best opportunities. With a focus on your success, we simplify the journey to your dream destination."
          }
        />
        <Feature
          index={2}
          icon={<Icon as={FcAcceptDatabase} w={10} h={10} />}
          title={"Application"}
          text={
            "Our application services are designed to make the entire process smooth and stress-free. From preparing your documents to submitting your application, we ensure every detail is handled with precision. With our expertise, we help you showcase your strengths to universities, enhancing your chances of success and securing your place in prestigious institutions."
          }
        />
        <Feature
          index={3}
          icon={<Icon as={FcCalendar} w={10} h={10} />}
          title={"Admissions"}
          text={
            "Our admissions service is designed to streamline the process and ensure you meet all the requirements. From selecting the right program to completing the application forms, we provide expert guidance every step of the way. With our support, you will be one step closer to gaining admission to your dream university."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
