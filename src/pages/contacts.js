import { Images } from "@/Constants";
import { options } from "@/Constants/Images";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import Head from "next/head";
import { useState } from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import {
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaUser
} from "react-icons/fa";

const socialLink = [
  {
    link: "https://facebook.com/EdgoConsultants",
    icon: <AiOutlineFacebook size={30} />,
    colorScheme: "facebook",
  },
  {
    link: "https://instagram.com/EdgoConsultants",
    icon: <AiOutlineInstagram size={30} />,
    colorScheme: "purple",
  },
  {
    link: "https://twitter.com/EdgoConsultants",
    icon: <AiOutlineTwitter size={30} />,
    colorScheme: "twitter",
  },
  {
    link: "https://youtube.com/EdgoConsultants",
    icon: <AiOutlineYoutube size={30} />,
    colorScheme: "red",
  },
  {
    link: "https://wa.me/+17328616559",
    icon: <AiOutlineWhatsApp size={30} />,
    colorScheme: "whatsapp",
  },
  {
    link: "https://linkedin.com/company/EdgoConsultants",
    icon: <AiOutlineLinkedin size={30} />,
    colorScheme: "linkedin",
  },
];

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);

  const submitForm = async (e) => {
    // e.preventDefault();
    // setIsLoading(true);
    // setError("");
    // const { name, email, phone, message } = e.target;
    // const callBackData = {
    //   name: name.value,
    //   email: email.value,
    //   phone: phone.value,
    //   message: message.value,
    // };

    // try {
    //   const { data } = await axios.post(
    //     `${AppConfig.API_ENDPOINT}/contact`,
    //     callBackData
    //   );
    //   console.log(data);
    //   setIsLoading(false);
    //   setStatus("success");
    // } catch (error) {
    //   console.log(error);
    //   setError(
    //     <>
    //       <FaExclamationTriangle /> {error?.response?.data?.error}
    //     </>
    //   );
    //   setIsLoading(false);
    // }
  };

  const title = "Contact Us | Edgo Consultants";
  const description =
    "Get in touch with Edgo Consultants to apply to your dream universities. Our expert guidance and support from accomplished alumni and current students can help you get accepted. Contact us for free personalized guidance and counseling..";
  const url = "https://www.EdgoConsultants.com/contacts";
  const image = `${process.env.ENDPOINT}/home.jpg`;

  const keywords =
    "Edgo Consultants Contact, study abroad, personal guidance, free guidance, free counseling, free courses, apply to universities";
  const twitterHandle = "@EdgoConsultants";

  return (
    <Box>
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
      <Flex flexDir={["column", "column", "row"]}>
        <Flex
          bg='#F89601'
          flex="1"
          px="5"
          pt="16"
          flexDir={["column-reverse", "column", "row"]}
        >
          <Image
            src={Images.CONTACT_GIRL.default.src}
            h="400"
            w="90"
            alt="contact us"
          />
          <Box>
            <Stack spacing={2}>
              <Text
                maxW={["100vw", "70vw", "40vw"]}
                as="h3"
                color="white"
                fontSize={[24, 24, 28]}
                fontWeight={"bold"}
              >
                Get in Touch With Us
              </Text>
              <Text
                color="white.50"
                fontSize={[14, 24, 16]}
                fontWeight={"regular"}
              >
                Have a Question ? Need Some Help ? We are here for you Let’s
                Talk. Just Drop a Message For Us to Reach you.
              </Text>
            </Stack>
            <Stack mt="10">
              <Flex alignItems={"center"} gap="2" bg="teal.900">
                <Center h="10" w="10" bg="white">
                  <AiOutlineMail size={20} />
                </Center>
                <Text color={"white"} fontSize="14">
                  contact@EdgoConsultants.com
                </Text>
              </Flex>

              <Flex alignItems={"center"} gap="2" bg="teal.900">
                <Center h="10" w="10" bg="white">
                  <AiOutlinePhone size={20} />
                </Center>
                <Text color={"white"} fontSize="14">
                  +1-860-209-8792
                </Text>
              </Flex>

              <Flex alignItems={"center"} gap="2" bg="teal.900">
                <Center h="10" w="10" bg="white">
                  <AiOutlineWhatsApp size={20} />
                </Center>
                <Text color={"white"} fontSize="14">
                  +1 732-861-6559
                </Text>
              </Flex>
            </Stack>
          </Box>
        </Flex>
        <Flex
          flex={1}
          bg="gray.100"
          p="4"
          justifyContent={"center"}
          alignItems="center"
        >
          {status === "success" ? (
            <Stack bg="white" p="5" borderRadius={"xl"} alignItems="center">
              <FaCheckCircle color="green" size="100" />
              <Text
                textAlign={"center"}
                fontSize={28}
                fontWeight="bold"
                color="green.600"
              >
                Submitted Successfully !
              </Text>
              <Text
                textAlign={"center"}
                maxW={["100%", "80%"]}
                color="blackAlpha.700"
              >
                Thanks for contacting us! We have received your message and will
                get back to you soon.
              </Text>
            </Stack>
          ) : (
            <form onSubmit={(e) => submitForm(e)} style={{ width: "100%" }}>
              <Stack spacing={4} justifyContent={"space-evenly"} h="100%" p="4">
                <Text
                  align={"center"}
                  maxW={["100vw", "70vw", "40vw"]}
                  as="h3"
                  color="blue.900"
                  fontSize={[24, 28, 32]}
                  fontWeight={"bold"}
                  display={{ base: "none", lg: "block" }}
                >
                  Contact Us
                </Text>
                <Flex color="red" fontSize={[14]} alignItems="center" gap="1">
                  {error}
                </Flex>
                <InputGroup background="white" position='relative' zIndex={1}>
                  <Select
                    options={options}
                    placeholder={
                      <Flex align="center" gap="2">
                        <BiGlobe color="#F89601" />
                        Preferred Country
                      </Flex>
                    }
                    name="preferred_country"
                    closeMenuOnSelect
                    isSearchable={false}
                    chakraStyles={{
                      container: (provided) => ({
                        ...provided,
                        width: "100%",
                        zIndex: 1, // Ensure the dropdown container has a proper z-index
                      }),
                      menu: (provided) => ({
                        ...provided,
                        zIndex: 9999, //
                      }),

                      placeholder: (provided) => ({
                        ...provided,
                        display: "flex",
                        alignItems: "center",
                        // pl: '5px'
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        display: "flex",
                        alignItems: "center",
                        // m: 0,
                        // gap: "8px",
                      }),
                    }}
                  />
                </InputGroup>
                <InputGroup background={"white"}>
                  <InputLeftElement pointerEvents="none" color="blue.700">
                    <FaUser color="#F89601" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    required
                  />
                </InputGroup>
                <InputGroup background={"white"}>
                  <InputLeftElement pointerEvents="none" color="blue.700">
                    <FaPhone color="#F89601" />
                  </InputLeftElement>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    required
                  />
                </InputGroup>
                <InputGroup background={"white"}>
                  <InputLeftElement pointerEvents="none" color="blue.700">
                    <FaEnvelope color="#F89601" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    required
                  />
                </InputGroup>
                <InputGroup background={"white"}>
                  <Textarea
                    type="text"
                    placeholder="Message (Optional)"
                    name="message"
                  />
                </InputGroup>
                <Center justifyContent={"flex-end"}>
                  <Button
                    isLoading={isLoading}
                    type="submit"
                    w="40%"
                    backgroundColor='#F89601'
                    color='white'
                  >
                    Submit
                  </Button>
                </Center>
              </Stack>
            </form>
          )}
        </Flex>
      </Flex>

      {/* <Box py="16">
        <Text
          as="h3"
          color="gray.800"
          fontSize={[20, 24, 28]}
          fontWeight={"bold"}
          align="center"
          mb="5"
        >
          Follow us on
        </Text>
        <Center gap={2}>
          {socialLink?.map((sl) => (
            <Link href={sl.link} target="_blank" key={sl.link}>
              <IconButton colorScheme={sl.colorScheme} rounded={"sm"} size="md">
                {sl.icon}
              </IconButton>
            </Link>
          ))}
        </Center>
      </Box> */}
    </Box>
  );
};

export default Contacts;
