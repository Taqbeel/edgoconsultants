import { Box, Flex, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FcAcceptDatabase, FcApproval, FcCalendar } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack bg="gray.50" p="5" borderRadius={"md"}>
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
          icon={<Icon as={FcApproval} w={10} h={10} />}
          title={"Consultation"}
          text={
            "Our consultation services are designed to provide you with expert guidance tailored to your academic goals. Whether you need help choosing the right university, course, or country, we offer personalized advice to align your ambitions with the best opportunities. With a focus on your success, we simplify the journey to your dream destination."
          }
        />
        <Feature
          icon={<Icon as={FcAcceptDatabase} w={10} h={10} />}
          title={"Application"}
          text={
            "Our application services are designed to make the entire process smooth and stress-free. From preparing your documents to submitting your application, we ensure every detail is handled with precision. With our expertise, we help you showcase your strengths to universities, enhancing your chances of success and securing your place in prestigious institutions."
          }
        />
        <Feature
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
