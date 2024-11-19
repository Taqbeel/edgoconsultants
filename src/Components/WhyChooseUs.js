import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { useState } from "react";
import { BsBuilding, BsFillClipboardCheckFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

const WhyChooseUsData = [
  {
    _id: "1",
    title: "30000+",
    desc: "Students Counselled",
    color: "orange",
    icon: <FaHandshake size="30" />,
  },
  {
    _id: "2",
    title: "25000+",
    desc: "Students Enrolled",
    color: "green",
    icon: <BsFillClipboardCheckFill size="30" />,
  },
  {
    _id: "3",
    title: "900+",
    desc: "Universities All Around The Globe",
    color: "purple",
    icon: <BsBuilding size="30" />,
  },
  // {
  //   _id: "4",
  //   title: "Available Anytime",
  //   color: "teal",
  //   icon: <BiTime size="30" />,
  // },
];

const WhyChooseUsCard = ({ title, desc, color, icon }) => {
  const hoverColor = useColorModeValue(`${color}.600`, `${color}.300`);

  const [hovered, setHovered] = useState(false);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="10rem"
      w="full"
      px={4}
      py={6}
      bg="white"
      border="1px"
      borderColor="gray.100"
      borderRadius="md"
      _hover={{ bg: hoverColor, color: "white" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      boxShadow="md"
    >
      <IconButton
        aria-label={title}
        bg={hovered ? hoverColor : color}
        color="white"
        borderRadius="full"
        icon={icon}
        size="lg"
        transition="all 0.2s"
        _hover={{ transform: "scale(1.1)" }}
      />
      <Heading mt={4} fontSize='3xl' fontWeight="semibold" textAlign="center">
        {title}
      </Heading>
      <Text fontSize={[12, 12, 18]} textAlign='center' color={"gray.500"}>
        {desc}
      </Text>
    </Flex>
  );
};

const WhyCooseUs = () => {
  return (
    <Box py={16} display="flex" alignItems={"center"} flexDir="column">
      <Heading textAlign="center" mb={8}>
        What sets us apart
      </Heading>
      <Center maxW={["80%"]}>
        <Flex
          width='75vw'
          direction={{ base: "column", md: "row" }}
          justify="space-around"
          align="center"
          gap="4"
        >
          {WhyChooseUsData.map((card) => (
            <WhyChooseUsCard
              key={card._id}
              title={card.title}
              desc={card.desc}
              color={card.color}
              icon={card.icon}
            />
          ))}
        </Flex>
      </Center>
    </Box>
  );
};

export default WhyCooseUs;
