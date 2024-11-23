import { CallBack, Mentors, Testimonial } from "@/Components";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";



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

const slideInAnimation = `${slideIn} 1s ease-out`;

const mentors = [
  {
    id: 1,
    name: 'Muhammad Abu Bakr',
    img: 'Bakr',
    flag: 2,
    cntr: 'UK',
    desc: 'Muhammad Abu Bakar is the Manager Operations for EDGO in London, driving strategic operations and strengthening the firm\'s presence in the UK. An LLM graduate from Dundee University with a background in civil, criminal, and family law, he combines his legal expertise with a passion for guiding students. Having navigated the international education process himself, Muhammad understands the unique needs and aspirations of students. He excels in helping them identify universities that align with their goals and enhance their skills, ensuring a smooth and supportive journey. Fluent in English and Urdu, he is dedicated to providing exceptional service to a diverse clientele.'
  },
  {
    id: 2,
    name: 'Muhammad Ibrar',
    img: 'Ibrar',
    flag: 11,
    cntr: 'Europe',
    desc: 'Muhammad Ibrar Our Manager Operations for Europe is an expert in navigating the diverse education systems across European countries. His insights have empowered countless students to embark on successful academic journeys in Europe.'
  },
  {
    id: 3,
    name: 'Abdur Rehman Tarar',
    img: 'Tarar',
    flag: 3,
    cntr: 'Australia',
    desc: 'As a Manager Operations for Australia, Abdur Rehman Tarar’s role is pivotal in connecting students with top-ranked Australian institutions. With a strong understanding of the Australian education system, post-study work opportunities, and visa procedures, he provides comprehensive support to ensure students have a stress-free experience.'
  },
  {
    id: 4,
    name: 'Humais Khan',
    img: 'Humais',
    flag: 1,
    cntr: 'USA',
    desc: 'Humais  Khan is our Manager Operations for the USA. His dedication and tailored advice have helped students secure places in some of the most prestigious institutions in the USA.'
  },
  {
    id: 5,
    name: 'Talha Awan',
    img: 'Talha',
    flag: 4,
    cntr: 'New Zealand',
    desc: 'Talha Awan is our Manager Operations for New Zealand specializes in helping students explore opportunities at top universities in the country. With in-depth knowledge of New Zealand’s educational landscape, visa regulations, and admission requirements, he ensures a seamless process.'
  },
]





const Mentor = () => {
  const title = "Our Mentor | Edgo Consultants";
  const description =
    "Meet Khalid Munawar, Your Admission Guru | Edgo Consultants | Get expert guidance on studying abroad from Khalid Munawar, your dedicated admission guru. With a GRE score of 316 and a master's degree in business analytics and project management from the University of Connecticut, Khalid can help you navigate the admission process and secure scholarships. Contact Edgo Consultants today to schedule a consultation.";
  const image =
    "https://res.cloudinary.com/dltkycv3q/image/upload/v1676790441/Nilesh_Photo_tysumx.jpg";
  const keywords =
    "study abroad, admission guru, Khalid Munawar, GRE, scholarships, University of Connecticut, business analytics, project management";
  const url = "https://www.EdgoConsultants.com/mentor";
  const twitterHandle = "@EdgoConsultants";


  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);


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
          ref={elementRef}
          animation={isVisible ? slideInAnimation : "none"}
          animationDelay='0.6s'

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
              Khalid Munawar -Message From CEO
            </Text>
            <Text mb={6} fontSize={{ base: "sm", md: "md" }} color="black" >
              As a CEO of Edgo Consultants, I bring over a decade of experience in navigating the complex world of international admissions and visa applications. My journey has been dedicated to guiding students towards achieving their academic dreams by securing admissions in top universities abroad. With a deep understanding of the process and a passion for excellence, I strive to ensure every student’s success through personalized and professional support.
            </Text>

            {/* <Center
              className="element"
              h={["25px", "30px", "60px"]}
              w={["60px", "40px", "100px"]}
              borderRadius="md"
              bgSize="cover"
              bgPosition="center"
              bgImage={require(`../../Assets/Images/Flags/12.svg`).default.src}
              sx={{
                // animation: "waveAnimation 1.5s infinite ease-in-out",
                animation: "shadow",
                transformOrigin: "left center",
              }}
            ></Center> */}
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
            src={require(`../../Assets/Images/Team/Khalid.jpg`).default.src}
            alt='Khalid'
            w={{ base: "100%", md: "auto" }}
            h={{ base: "auto", md: "300px" }}
            objectFit="cover"
            rounded="md"
            shadow="md"
            borderRadius={"100%"}
          />
        </Flex>


        {
          mentors.map(mentor => <Mentors key={mentor?.id} name={mentor?.name} img={mentor?.img} flag={mentor?.flag} cntr={mentor?.cntr} desc={mentor?.desc} />)
        }

      </Flex>
      {/* <HowWeWork /> */}
      <CallBack />
      <br />
      <br />
      <Testimonial type="static" />
    </>
  );
};

export default Mentor;
