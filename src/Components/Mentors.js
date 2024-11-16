import {
  Box, Button, Flex,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";


export default function Mentors() {
  return (
    <Flex bg="white" py={10} flexDir={"column"} gap={10}>
      <Heading textAlign="center" mb={8}>
        Our Mentors
      </Heading>
      <Flex
        bg={"gray.100"}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        mx="auto"
        maxW="7xl"
        px={6}
        p={8}
        borderRadius={8}
        _hover={{ background: "#F89601", color: 'white' }}
      >
        <Box flexShrink={0}></Box>
        <Box mt={{ base: 6, md: 0 }} ml={{ md: 6 }}>
          <Text
            mb={4}
            fontWeight="bold"
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.700"
            as={"h1"}
          >
            Khalid Munawar -Admission Guru
          </Text>
          <Text mb={6} fontSize={{ base: "sm", md: "md" }} color="gray.500">
            As the Managing Director of EdgoConsultants, I bring over a decade
            of experience in navigating the complex world of international
            admissions and visa applications. With a particular focus on F1
            and H1B visas, I have developed a special expertise in helping
            students and professionals to pursue their goals in the United
            States.
          </Text>
          <Text mb={6} fontSize={{ base: "sm", md: "md" }} color="gray.500">
            Additionally, I have served as a corporate job trainer, equipping
            aspiring tech professionals with the skills and knowledge
            necessary to succeed in today &apos;s competitive job market.
          </Text>
          <Link href="https://wa.me/+929821380110">
            <Button colorScheme="teal" size="md" leftIcon={<FaWhatsapp />}>
              WhatsApp
            </Button>
          </Link>
          <Link href="tel:+929821380110">
            <Button ml={4} size="md">
              Contact
            </Button>
          </Link>
        </Box>

        <Image
          src="https://www.pngitem.com/pimgs/m/632-6321389_random-png-transparent-background-random-image-png-png.png"
          alt="Nilesh Mishra"
          w={{ base: "100%", md: "auto" }}
          h={{ base: "auto", md: "450px" }}
          objectFit="cover"
          rounded="md"
          shadow="md"
          borderRadius={"100%"}
        />
      </Flex>

      {/* <Flex
      bg={"gray.100"}
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "flex-start" }}
      mx="auto"
      maxW="7xl"
      px={6}
      p={8}
      borderRadius={8}
      _hover={{ background: "teal.100" }}
    >
      <Box flexShrink={0}>
        <Image
          src="https://res.cloudinary.com/dltkycv3q/image/upload/v1676790441/Nilesh_Photo_tysumx.jpg"
          alt="Nilesh Mishra"
          w={{ base: "100%", md: "auto" }}
          h={{ base: "auto", md: "450px" }}
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
        >
          Nilesh Mishra -Admission Guru
        </Text>
        <Text mb={6} fontSize={{ base: "sm", md: "md" }} color="gray.500">
          GRE - 316, Master’s in Business Analytics and Project Management
          from University of Connecticut. Secured Deans Excellence
          Scholarship and 50% scholarship in UTD Texas.
        </Text>
        <Text mb={6} fontSize={{ base: "sm", md: "md" }} color="gray.500">
          Nilesh is an experienced admission guru who has helped numerous
          students achieve their dreams of studying abroad. He has a proven
          track record of success and is dedicated to helping students every
          step of the way.
        </Text>
        <Link href="https://wa.me/+17328616559">
          <Button colorScheme="teal" size="md" leftIcon={<FaWhatsapp />}>
            WhatsApp
          </Button>
        </Link>
        <Link href="tel:+17328616559">
          <Button ml={4} size="md">
            Contact
          </Button>
        </Link>
      </Box>
    </Flex> */}
    </Flex>
  );
}
