import {
  CallBack,
  Features,
  Hero,
  Services
} from "@/Components";
import Head from "next/head";


const index = () => {
  const title =
    "Edgo Consultants | Pursue Your Ambitions";
  const description =
    "We turn your academic dreams into reality with expert guidance.";
  const url = "https://www.EdgoConsultants.com";

  const keywords =
    "edgo, edgo consultants, study abroad, personal guidance, free guidance, free counseling, free courses, expert guidance, support, alumni, current students, dream universities, apply, rise, lifting others, personal growth.";
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
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Hero />
      {/* <UniversityCarausel /> */}
      <CallBack />
      {/* <WhyChooseUs /> */}
      <Features />
      <Services />
      {/* <Testimonial type="static" /> */}
    </>
  );
};

export default index;
