import { Avatar, Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = ({ testimonials, type }) => {
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
      message: 'Thanks to LeapAdmission, I achieved a GMAT score of 720 and received my MBA from UCONN. With their help, I saved 80 lacs in tuition fees and earned 24 lacs as a Graduate Assistant. LeapAdmission was instrumental in my success and I highly recommend their services.',
      avatarURL: 'https://www.clipartmax.com/png/small/9-97683_free-images-pear-clipart-black-and-white-random-object-battle-royal.png',
      author: 'Talha Chakwali',
      description: '(GRE - 327, Master’s of Computer Science at the University of California at Irvine)',
    },
    {
      _id: 2,
      message: "LeapAdmission's guidance helped me achieve a GRE score of 334/340 and secure admission to the MS in Data Science program at the University of Buffalo. Thank you, LeapAdmission!",
      avatarURL: 'https://www.pngitem.com/pimgs/m/689-6892366_transparent-random-guy-png-png-download.png',
      author: 'Saqlain Mushtaq Jhangvi',
      description: '(GRE -334/340, MS In Data Science at the University of Buffalo)',
    },
    {
      _id: 3,
      message: "Thanks to LeapAdmission, I was able to secure a spot in the MS in Business Analytics program at UTA with 50% scholarships in 2 universities. I'm grateful for the guidance and support that helped me achieve my academic goals.",
      avatarURL: 'https://www.clipartmax.com/png/middle/333-3336322_random-guy-calls-me-cute-gt-random-cartoon-guy-png.png',
      author: 'Abu Bakr Talagangi',
      description: '(MS in Business Analytics at UTA, Secured 50% scholarships in 2 Universities)',
    },
    {
      _id: 4,
      message: "I highly recommend LeapAdmisson as your admission Guru. I worked with Nilesh, He prioritizes the needs and goals of his students, providing personalized guidance and support. Nilesh helped me secure my MBA with a full merit scholarship and Graduate Assistantship at the University of Connecticut School of Business, crafting my statement of purpose and letter of recommendation to perfection. He is knowledgeable, professional, and genuinely dedicated to helping his clients succeed. Unlike other consultancies where they will send students to the college that consultancies want or they have to pay for consultancies' Marketing spent, Nilesh has integrity and honesty, always making recommendations based on the best interests of his clients. I am grateful for all that he has done for me and he has my highest recommendation. LinkedIn - https://www.linkedin.com/in/udith-ashoka/",
      avatarURL: 'https://purepng.com/public/uploads/thumbnail//purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784502b6aw5.png',
      author: 'Abdur Rehman Tarar',
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
        Testimonials
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
          <Box p="4" key={tsm._id} h={["40vh"]}>
            <Flex
              justifyContent={"space-between"}
              flexDir="column"
              bg="whiteAlpha.300"
              p="4"
              h="full"
              borderRadius={"lg"}
            >
              <Text fontSize={"13"} textColor="whiteAlpha.800" noOfLines={7}>
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
      {type === "static" && (
        <Center>
          <Link href="/testimonial">
            <Button size="sm" colorScheme={"whiteAlpha"} variant="ghost">
              View All
            </Button>
          </Link>
        </Center>
      )}
    </Box>
  );
};

export default Testimonial;
