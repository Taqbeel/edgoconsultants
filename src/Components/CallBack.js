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
  Textarea,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import {
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaUser
} from "react-icons/fa";


const CallBack = () => {
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
    //     `${AppConfig.API_ENDPOINT}/callback`,
    //     callBackData
    //   );
    //   console.log(data);
    //   setIsLoading(false);
    //   setStatus("success");
    // } catch (error) {
    //   setError(
    //     <>
    //       <FaExclamationTriangle /> {error?.response?.data?.error}
    //     </>
    //   );
    //   setIsLoading(false);
    //   console.log(error?.response?.data);
    // }
  };

  return (
    <Center p="2" id="callback" pt="16">
      <Flex
        justifyContent={"space-between"}
        bg="#F89601"
        w={["100vw", "80vw"]}
        borderRadius="xl"
        flexDir={["column", "column", "row"]}
        overflow="hidden"
      >
        <Center w={["100%", "100%", "70%"]} flexDir="column" p={[2]}>
          <Text
            pt="4"
            align={"center"}
            maxW={["100vw", "70vw", "40vw"]}
            as="h3"
            color="whiteAlpha.900"
            fontSize={[28]}
            fontWeight={"bold"}
            display={{ lg: "none" }}
          >
            Request a free consultation call
          </Text>

          <Image src={Images.CALLBACK_ART.default.src} alt="Call Back" />
        </Center>
        <Box w="100%" p="5" bg="#173540">
          {status === "success" ? (
            <Stack bg="white" p="5" borderRadius={"xl"} alignItems="center">
              <FaCheckCircle color="#F89601" size="100" />
              <Text
                textAlign={"center"}
                fontSize={28}
                fontWeight="bold"
                color="#173540"
              >
                Submitted Successfully !
              </Text>
              <Text
                textAlign={"center"}
                maxW={["100%", "80%"]}
                color="#173540"
              >
                Thank you for submitting a call back request. Our team will be
                in touch with you shortly.
              </Text>
            </Stack>
          ) : (
            <form onSubmit={(e) => submitForm(e)}>
              <Stack
                spacing={4}
                p={[2, 5, 10]}
                justifyContent={"space-evenly"}
                h="100%"
              >
                <Text
                  align={"center"}
                  maxW={["100vw", "70vw", "40vw"]}
                  as="h3"
                  color="whiteAlpha.900"
                  fontSize={[24, 28, 32]}
                  fontWeight={"bold"}
                  display={{ base: "none", lg: "block" }}
                >
                  Request a free consultation call
                </Text>
                <Flex
                  color="red.100"
                  fontSize={[14]}
                  alignItems="center"
                  gap="1"
                >
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
                    required
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
        </Box>
      </Flex>
    </Center>
  );
};

export default CallBack;
