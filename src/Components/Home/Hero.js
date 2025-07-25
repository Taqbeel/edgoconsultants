import { Images } from "@/Constants";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdPhone } from "react-icons/md";
const Hero = () => {
  const [videobg, setVideoBg] = useState(null);
  useEffect(() => {
    setVideoBg(Images.HRO_BG);
  }, []);
  return (
    <Box
      pos="relative"
      height={["70vh", "60vh", "85vh"]}
      width="100%"
      bg="white"
      overflow={"hidden"}
      zIndex="1"
    >
      {videobg && (
        <AspectRatio pos="absolute" w="100%" bottom={[0, ""]} top={["", "0"]}>
          <video autoPlay loop muted height="100%" width="100%">
            <source src={Images.HRO_BG} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </AspectRatio>
      )}
      <Box
        bg="rgba(66,153,225,.4)"
        pos="absolute"
        h="100%"
        w="100%"
        top="0"
        left={0}
        backgroundImage={[
          "linear-gradient(180deg , rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,1), rgba(255,255,255,.5),rgba(255,255,255,0))",
          "linear-gradient(110deg , rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,.9), rgba(255,255,255,.5),rgba(255,255,255,0),rgba(255,255,255,0))",
          "linear-gradient(110deg , rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,.9), rgba(255,255,255,.5),rgba(255,255,255,0),rgba(255,255,255,0))",
        ]}
      >
        <Flex
          flexDir="column"
          justifyContent={["flex-start", "center", "flex-start"]}
          w={["100%", "60%", "50%"]}
          textAlign={["center", "left"]}
          h="100%"
          gap={[3, 3, 5]}
          p={[3, 4, 12]}
          pt={[12, 0, "15vh"]}
          pl={[3, 10, "100px"]}
        >
          <Heading fontSize={[30, 34, 50]} fontWeight={900} color="blue.800">
            Pursue Your Ambitions
            <br /> <span style={{ color: "#F89601" }}>With Us</span>
          </Heading>
          <Text fontSize={[16, 16, 28]} color={"gray.500"}>
            {/* Through partners we can process applications to most UK universities
            including the majority of the Russell Group (top universities) as well
            as many in Canada, the US, Australia, New Zealand, and Ireland. */}
            We turn your academic dreams into reality with expert guidance.
          </Text>
          <Flex gap="2" justifyContent={["center", "left"]} mt="2">
            <Link href={"#callback"}>
              <Button
                fontWeight={"regular"}
                backgroundColor="#F89601"
                color='white'
                size={["md", "md", "lg"]}
                borderRadius="sm"
              >
                <MdPhone size={"18"} />
                &nbsp; Request A Free Consultation Call
              </Button>
            </Link>
            <Link href="/meet-our-experts">
              <Button
                fontWeight={"regular"}
                // backgroundColor='#173540'
                borderColor='#173540'
                color='#173540'
                variant="outline"
                borderWidth={2}
                size={["md", "md", "lg"]}
                borderRadius="sm"
                _hover={{ background: "#173540", color: "white" }}
              >
                Meet Our Experts
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
