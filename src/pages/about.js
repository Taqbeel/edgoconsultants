import { Features, Services, Testimonial, WhyChooseUs } from "@/Components";
import { Images } from "@/Constants";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { AiOutlineAim, AiOutlineEye } from "react-icons/ai";

const slideInR = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInL = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInU = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Animation styles
const slideInAnimation = `${fadeIn} 2s ease-in`;
const slideInRAnimation = `${slideInR} 1s ease-in`;
const slideInLAnimation = `${slideInL} 1s ease-in`;
const slideInUAnimation = `${slideInU} 1s ease-in`;



const Feature = ({ index, title, text, icon }) => {

  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {

    const checkVisibility = () => {
      if (cardsRef.current) {
        const rect = cardsRef.current.getBoundingClientRect();
        console.log("Bounding Rect:", rect);
        if (rect.top >= 0 && rect.bottom <= window.innerHeight * 1.6) {
          setIsVisible(true);
        }
      }
    };

    // Attach to scroll and resize events
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    checkVisibility(); // Check immediately

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);


  return (
    <Stack bg="gray.50" p="5" borderRadius={"md"} align='center'
      ref={cardsRef}
      animation={!isVisible ? 'none' : index === 1 ? slideInLAnimation : index === 2 ? slideInUAnimation : index === 3 ? slideInRAnimation : slideInAnimation}
      style={{ animationDelay: "0.3s" }}
    // transform={isVisible ? "translateX(0)" : index === 1 ? "translateX(-100%)" : index === 2 ? "translateY(100%)" : "translateX(100%)"}
    // opacity={isVisible ? 1 : 0}
    // transition="transform 1s ease, opacity 0./5s ease"
    >
      <Flex
        w={20}
        h={20}
        p={5}
        mt="-50px"
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        boxShadow={"md"}
        borderRadius={"full"}
      >
        <Box
        >
          {icon}
        </Box>
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};



export default function About() {
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

  const title = "About Us | Edgo Consultants";
  const description =
    "Learn more about Edgo Consultants and our mission to help students apply to their dream universities with expert guidance and support from accomplished alumni and current students. Discover our free personalized counseling and courses today.";
  const keywords =
    "study abroad, personal guidance, free guidance, free counseling, free courses, apply to universities";
  const url = "https://www.EdgoConsultants.com/contacts";

  const image = `${process.env.ENDPOINT}/home.jpg`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      {/* <HowWeWork /> */}
      <Container py="16" px={[4, 4]} maxW={["100vw", "100vw", "70vw"]}>
        <Heading
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={["22", "24", "28"]}
          as={"h2"}
        >
          Introducing Edgo Consultants
        </Heading>

        <Stack mt="5" spacing={4} fontWeight="light">
          <Text
            fontSize="lg"
            ref={elementRef}
            animation={slideInAnimation}
            style={{ animationDelay: "0.3s" }}
          >
            Welcome to Edgo Consultants! Are you ready to go on a courageous,
            self-discovering, empowering journey with Edgo Consultants?
          </Text>
          <Text
            fontWeight="normal"
            ref={elementRef}
            animation={slideInAnimation}
            style={{ animationDelay: "0.2s" }}
          >
            Start your transformative educational journey with us. Our expert
            consultancy services guide you through international academic
            opportunities, turning your dreams of studying abroad into reality.
            From choosing the ideal institution to managing all the necessary
            paperwork, we’re here to support you at every stage. Trust us to
            elevate your academic journey across borders.
            <br />
            <br />
            We offer free guidance and support to students aspiring to study
            abroad. Our mission is to empower each student to reach their full
            potential by providing the resources and mentorship necessary to
            pursue their educational and career goals globally.
            <br />
            <br />
            We recognize that the application process for study abroad programs
            can be overwhelming and complex, which is why we are here to assist.
            Our team of experienced mentors and counselors is committed to
            offering personalized guidance and support to each student
            throughout their journey. At Edgo Consultants, we believe that
            everyone should have access to international education, regardless
            of their background or financial circumstances. That’s why we offer
            all of our services completely free of charge. Our operations are
            supported by the generosity of individuals and organizations,
            enabling us to continue helping students for years to come.
            <br />
            <br />
            Our approach is built on the understanding that each student is
            unique and deserves personalized attention. We work closely with
            every student to understand their needs, interests, and goals, and
            then connect them with a mentor who provides tailored guidance
            throughout the application process.
            <br />
            <br />
            We are dedicated to offering a comprehensive, holistic approach to
            studying abroad. For us, a successful study abroad experience goes
            beyond academic achievements and test scores—it’s about finding the
            best fit for each student, both academically and personally.
            <br />
            <br />
            At Edgo Consultants, we are passionate about empowering students to
            reach their full potential and achieve their dreams on a global
            scale. We are committed to providing high-quality, free guidance and
            support to every student who seeks our assistance. Join us on this
            journey and let us help you take the next step toward your future.
          </Text>
        </Stack>
      </Container>

      <Box
        p="20"
        bg={`url('${Images.MISSION_VISSION_BG.default.src}')`}
        bgSize="cover"
        bgColor="cyan.200"
        bgBlendMode={"soft-light"}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            index={1}
            icon={<Icon as={AiOutlineAim} w={10} h={10} color="#F89601" />}
            title={"Consultation"}
            text={
              `Our approach is centered on providing exceptional services to
                students, ensuring that they not only receive the best guidance
                at affordable prices but also gain access to international
                educational opportunities. We are committed to offering tailored
                advice that helps students navigate the complexities of studying
                abroad, guiding them to the right institutions that align with
                their academic and personal aspirations. Our philosophy goes
                beyond just securing admissions; we aim to equip students with
                the knowledge and support needed to thrive in a global academic
                environment. By focusing on affordability, expert advice, and a
                seamless experience, we empower students to embrace a
                transformative international education that enriches their lives
                both academically and personally.`
            }
          />
          <Feature
            index={2}
            icon={<Icon as={AiOutlineAim} w={10} h={10} color="#F89601" />}
            title={"Application"}
            text={
              `Our mission is to deliver professional, thoughtful, and
                compassionate services to students aspiring to study abroad. We
                are dedicated to providing expert guidance and unwavering
                support to both students and their families, ensuring the
                successful realization of their academic and personal goals on
                the global stage.`
            }
          />
          <Feature
            index={3}
            icon={<Icon as={AiOutlineEye} w={10} h={10} color="#F89601" />}
            title={"Admissions"}
            text={
              `Our goal is to guide students towards the ideal international
                  universities and colleges worldwide.`
            }
          />
        </SimpleGrid>

      </Box>
      <WhyChooseUs />
      <Features />
      <Services />
      <Testimonial type="static" />
    </div>
  );
}
