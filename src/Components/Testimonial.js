import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  const cTestimonials = [
    {
      _id: 1,
      message: 'EdGo Consultancy Firm turned my dream of studying in Australia into a reality! Their team provided step-by-step guidance throughout the application process and helped me secure admission to a leading university. Their expertise and unwavering support were truly exceptional. I highly recommend their services!"',
      avatarURL: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352140-stock-illustration-default-placeholder-profile-icon.jpg',
      author: 'Faisal Adnan',
      description: '(GRE - 327, Master’s of Computer Science at the University of California at Irvine)',
    },
    {
      _id: 2,
      message: "EdGo's exceptional support helped me secure a scholarship at a top UK university. Their meticulous approach to admissions and visa applications was remarkable. They genuinely go above and beyond to ensure success!",
      avatarURL: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg',
      author: 'Alisha Tahir',
      description: '(GRE -334/340, MS In Data Science at the University of Buffalo)',
    },
    {
      _id: 3,
      message: "EdGo Consultancy Firm is the best decision I made for my higher education. They simplified the complex process of applying to international universities and provided excellent support throughout. Their dedication is commendable!",
      avatarURL: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352140-stock-illustration-default-placeholder-profile-icon.jpg',
      author: 'Waqas Ahmed',
      description: '(MS in Business Analytics at UTA, Secured 50% scholarships in 2 Universities)',
    },
    {
      _id: 4,
      message: "I cannot thank EdGo enough for helping me get into my dream university in the UK. The team is professional, knowledgeable, and supportive. They turned a daunting process into a smooth journey.",
      avatarURL: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352140-stock-illustration-default-placeholder-profile-icon.jpg',
      author: 'Hussain Ali',
      description: '(GMAT - 710, MBA at UCONN) Saved 80 Lacs tuition fees and earned 24 lacs as GA',
    }
  ]

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent="center"
      bg="blackAlpha.900"
      gap={[5, 5, 8]}
      py="16"
      px={[0, 0, 20]}
    >
      <Text
        as={"h2"}
        fontSize={[22, 24, 30]}
        fontWeight={"bold"}
        color="whiteAlpha.800"
        lineHeight={"1"}
        textAlign="center"
      >
        Success Stories
      </Text>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        draggable
        infinite
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        shouldResetAutoplay
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        {cTestimonials?.map((tsm) => (
          <Box p="4" key={tsm._id} h={["30vh"]}>
            <Flex
              justifyContent={"space-between"}
              flexDir="column"
              bg="whiteAlpha.300"
              p="4"
              h="full"
              borderRadius={"lg"}
            >
              <Text fontSize={"16"} textColor="whiteAlpha.800" noOfLines={7}>
                <span dangerouslySetInnerHTML={{ __html: tsm.message }} />
              </Text>
              <Flex
                gap="2"
                borderTopWidth={"2px"}
                pt="4"
                borderColor={"whiteAlpha.200"}
              >
                <Avatar src={tsm.avatarURL} alt={tsm.author} border="2px" />
                <Box>
                  <Text fontSize={"16"} textColor="whiteAlpha.800">
                    {tsm.author}
                  </Text>
                  <Text fontSize={"10"} textColor="whiteAlpha.600">
                    {tsm.description}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Carousel>
      {/* {type === "static" && (
        <Center>
          <Link href="/testimonial">
            <Button size="sm" colorScheme={"whiteAlpha"} variant="ghost">
              View All
            </Button>
          </Link>
        </Center>
      )} */}
    </Box>
  );
};

export default Testimonial;
