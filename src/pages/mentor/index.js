import { CallBack, Testimonial } from "@/Components";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

const index = ({ testimonials }) => {
  const title = "Our Mentor | Leap Admission";
  const description =
    "Meet Nilesh Mishra, Your Admission Guru | Leap Admission | Get expert guidance on studying abroad from Nilesh Mishra, your dedicated admission guru. With a GRE score of 316 and a master's degree in business analytics and project management from the University of Connecticut, Nilesh can help you navigate the admission process and secure scholarships. Contact Leap Admission today to schedule a consultation.";
  const image =
    "https://res.cloudinary.com/dltkycv3q/image/upload/v1676790441/Nilesh_Photo_tysumx.jpg";
  const keywords =
    "study abroad, admission guru, Nilesh Mishra, GRE, scholarships, University of Connecticut, business analytics, project management";
  const url = "https://www.EdgoConsultants.com/mentor";
  const twitterHandle = "@EdgoConsultants";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <Flex bg="white" py={10} flexDir={"column"} gap={10}>
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
              As a CEO of Edgo Consultants, I bring over a decade of experience in navigating the complex world of international admissions and visa applications. My journey has been dedicated to guiding students towards achieving their academic dreams by securing admissions in top universities abroad. With a deep understanding of the process and a passion for excellence, I strive to ensure every student’s success through personalized and professional support.
            </Text>
            {/* <Link href="https://wa.me/+929821380110">
              <Button bg="#173540" size="md" leftIcon={<FaWhatsapp />}>
                WhatsApp
              </Button>
            </Link>
            <Link href="tel:+929821380110">
              <Button ml={4} size="md">
                Contact
              </Button>
            </Link> */}
          </Box>

          <Image
            src="https://www.pngitem.com/pimgs/m/632-6321389_random-png-transparent-background-random-image-png-png.png"
            alt="Khalid"
            w={{ base: "100%", md: "auto" }}
            h={{ base: "auto", md: "250px" }}
            objectFit="cover"
            rounded="md"
            shadow="md"
            borderRadius={"100%"}
          />
        </Flex>

        <Flex
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
              src="https://www.pngitem.com/pimgs/m/632-6321389_random-png-transparent-background-random-image-png-png.png"
              alt="Abu Bakr"
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
            >
              Abu Bakr -Head of Operations UK
            </Text>
            <Center
              className='element'
              h={["25px", "30px", "40px"]}
              w={["60px", "40px", "80px"]}
              borderRadius="md"
              bgSize="cover"
              bgPosition="center"
              bgImage={require(`../../Assets/Images/Flags/${2}.svg`).default.src}
              sx={{
                // animation: "waveAnimation 1.5s infinite ease-in-out",
                animation: "shadow",
                transformOrigin: "left center",
              }}
            >
            </Center>
          </Box>
        </Flex>


        <Flex
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
              src="https://www.pngitem.com/pimgs/m/632-6321389_random-png-transparent-background-random-image-png-png.png"
              alt="Muhammad Ibrar"
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
            >
              Muhammad Ibrar -Head of Operations Europe
            </Text>
            <Center
              className='element'
              h={["25px", "30px", "40px"]}
              w={["60px", "40px", "80px"]}
              borderRadius="md"
              bgSize="cover"
              bgPosition="center"
              bgImage={require(`../../Assets/Images/Flags/${11}.svg`).default.src}
              sx={{
                // animation: "waveAnimation 1.5s infinite ease-in-out",
                animation: "shadow",
                transformOrigin: "left center",
              }}
            >
            </Center>
          </Box>
        </Flex>


        <Flex
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
              src="https://www.pngitem.com/pimgs/m/632-6321389_random-png-transparent-background-random-image-png-png.png"
              alt="Abdur Rehman"
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
            >
              Abdur Rehman -Head of Operations Australia
            </Text>

            <Center
              className='element'
              h={["25px", "30px", "40px"]}
              w={["60px", "40px", "80px"]}
              borderRadius="md"
              bgSize="cover"
              bgPosition="center"
              bgImage={require(`../../Assets/Images/Flags/${3}.svg`).default.src}
              sx={{
                // animation: "waveAnimation 1.5s infinite ease-in-out",
                animation: "shadow",
                transformOrigin: "left center",
              }}
            >
            </Center>
          </Box>
        </Flex>


        <Flex
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
              src="https://www.pngitem.com/pimgs/m/632-6321389_random-png-transparent-background-random-image-png-png.png"
              alt="Humais Khan"
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
            >
              Humais Khan -Head of Operations US
            </Text>

            <Center
              className='element'
              h={["25px", "30px", "40px"]}
              w={["60px", "40px", "80px"]}
              borderRadius="md"
              bgSize="cover"
              bgPosition="center"
              bgImage={require(`../../Assets/Images/Flags/${1}.svg`).default.src}
              sx={{
                // animation: "waveAnimation 1.5s infinite ease-in-out",
                animation: "shadow",
                transformOrigin: "left center",
              }}
            >
            </Center>
          </Box>
        </Flex>


        <Flex
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
              src="https://www.pngitem.com/pimgs/m/632-6321389_random-png-transparent-background-random-image-png-png.png"
              alt="Talha Awan"
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
            >
              Talha Awan -Head of Operations New Zealand
            </Text>

            <Center
              className='element'
              h={["25px", "30px", "40px"]}
              w={["60px", "40px", "80px"]}
              borderRadius="md"
              bgSize="cover"
              bgPosition="center"
              bgImage={require(`../../Assets/Images/Flags/${4}.svg`).default.src}
              sx={{
                // animation: "waveAnimation 1.5s infinite ease-in-out",
                animation: "shadow",
                transformOrigin: "left center",
              }}
            >
            </Center>
          </Box>
        </Flex>
      </Flex>
      {/* <HowWeWork /> */}
      <CallBack />
      <br />
      <br />
      <Testimonial testimonials={testimonials} type="static" />
    </>
  );
};

export async function getStaticProps() {
  // Fetch testimonials using Axios
  // const response = await axios.get(`${process.env.ENDPOINT}/api/testimonials`);
  // const testimonials = response.data.testimonials;
  const testimonials = [];
  return {
    props: {
      testimonials,
    },
  };
}

export default index;
