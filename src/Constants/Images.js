
import {
  Box,
  Flex
} from "@chakra-ui/react";

export const Images = {
  // LOGO_WIDE: require("../Assets/Images/logo.svg"),
  LOGO_WIDE: require("../Assets/Images/logo.png"),
  USER_DEFAULT: require("../Assets/Images/guest.png"),
  HRO_BG:
    "https://res.cloudinary.com/dltkycv3q/video/upload/v1676756575/heroBg_1_meyszi.mp4",
  WCU_SUPPORT: require("../Assets/Images/support.png"),

  UNIVERSITIES: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  FLAG: ['USA', 'UK', 'Australia', 'New Zealand', 'Ireland', 'Canada', 'Europe', 'China'],
  // FLAG: [1, 2, 3, 4,],

  // OUR_STORY: require("../Assets/Images/ourStory.jpg"),
  OUR_STORY: require("../Assets/Images/boy.jpg"),

  MISSION_VISSION_BG: require("../Assets/Images/vision-mission-bg.jpg"),

  CONTACT_GIRL: require("../Assets/Images/contact.png"),

  CALLBACK_ART: require("../Assets/Images/callback.png"),
};



export const options = [
  {
    value: "USA",
    label: (
      <Flex align="center" gap="2">
        <Box
          as="span"
          bgImage="url('https://flagcdn.com/us.svg')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="full"
          boxSize="20px"
        ></Box>
        USA
      </Flex>
    ),
  },
  {
    value: "UK",
    label: (
      <Flex align="center" gap="2">
        <Box
          as="span"
          bgImage="url('https://flagcdn.com/gb.svg')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="full"
          boxSize="20px"
        ></Box>
        UK
      </Flex>
    ),
  },


  {
    value: "Australia",
    label: (
      <Flex align="center" gap="2">
        <Box
          as="span"
          bgImage="url('https://flagcdn.com/au.svg')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="full"
          boxSize="20px"
        ></Box>
        Australia
      </Flex>
    ),
  },
  {
    value: "New Zealand",
    label: (
      <Flex align="center" gap="2">
        <Box
          as="span"
          bgImage="url('https://flagcdn.com/nz.svg')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="full"
          boxSize="20px"
        ></Box>
        New Zealand
      </Flex>
    ),
  },
  {
    value: "Ireland",
    label: (
      <Flex align="center" gap="2">
        <Box
          as="span"
          bgImage="url('https://flagcdn.com/ie.svg')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="full"
          boxSize="20px"
        ></Box>
        Ireland
      </Flex>
    ),
  },
  {
    value: "Canada",
    label: (
      <Flex align="center" gap="2">
        <Box
          as="span"
          bgImage="url('https://flagcdn.com/ca.svg')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="full"
          boxSize="20px"
        ></Box>
        Canada
      </Flex>
    ),
  },
  {
    value: "Europe",
    label: (
      <Flex align="center" gap="2">
        <Box
          as="span"
          bgImage="url('https://flagcdn.com/eu.svg')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="full"
          boxSize="20px"
        ></Box>
        Europe
      </Flex>
    ),
  },
  {
    value: "China",
    label: (
      <Flex align="center" gap="2">
        <Box
          as="span"
          bgImage="url('https://flagcdn.com/cn.svg')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="full"
          boxSize="20px"
        ></Box>
        China
      </Flex>
    ),
  },
];