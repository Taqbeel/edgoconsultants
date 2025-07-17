import { Images } from "@/Constants";
import { options } from "@/Constants/Images";
import { sendEmail } from "@/server/mail";
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
  Textarea,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import {
  FaCheckCircle,
  FaEnvelope,
  FaExclamationTriangle,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const { country, name, email, phone, message } = e.target;
    const callBackData = {
      country: country.value,
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };


    try {
      const res = await sendEmail(callBackData);

      if (res) {
        setStatus("success");
      } else {
        setError("There was an issue with sending email. Please try again");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(
        <>
          <FaExclamationTriangle /> {error?.response?.data?.error}
        </>
      );
      setIsLoading(false);
    }
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
          bg="#F89601"
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
                <Link href="mailto:info@edgoconsultants.com">
                  <Text color={"white"} fontSize="14">
                    info@edgoconsultants.com
                  </Text>
                </Link>
              </Flex>

              <Flex alignItems={"center"} gap="2" bg="teal.900">
                <Center h="10" w="10" bg="white">
                  <AiOutlinePhone size={20} />
                </Center>
                <Link href="tel:+92518485322">
                  <Text color={"white"} fontSize="14">
                    +92-51-8485322
                  </Text>
                </Link>
              </Flex>

              <Flex alignItems={"center"} gap="2" bg="teal.900">
                <Center h="10" w="10" bg="white">
                  <AiOutlineWhatsApp size={20} />
                </Center>
                <Link href="https://wa.me/message/YHU457VGSDQ2D1" target='_blank'>
                  <Text color={"white"} fontSize="14">
                    +92-313-932-0255
                  </Text>
                </Link>
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
                <InputGroup background="white" position="relative" zIndex={1}>
                  <Select
                    options={options}
                    placeholder={
                      <Flex align="center" gap="2">
                        <BiGlobe color="#F89601" />
                        Preferred Country
                      </Flex>
                    }
                    name="country"
                    closeMenuOnSelect
                    isSearchable={false}
                    chakraStyles={{
                      container: (provided) => ({
                        ...provided,
                        width: "100%",
                        zIndex: 1,
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
                    backgroundColor="#F89601"
                    color="white"
                  >
                    Submit
                  </Button>
                </Center>
              </Stack>
            </form>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contacts;
