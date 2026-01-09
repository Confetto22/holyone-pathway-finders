import PageHead from "@/components/common/page-head";
import WhyWeAreBest from "@/components/about-page/WhyWeAreBest";
import BestService from "@/components/about-page/BestService";
import WhyTravelWithUs from "@/components/about-page/WhyTravelWithUs";
import TrustedCompanies from "@/components/about-page/TrustedCompanies";
import Testimonials from "@/components/homepage/testimonials";
import Faq from "@/components/homepage/faq";

const About = () => {
  return (
    <section className="">
      <PageHead
        prevPage="Home"
        prevLink="/"
        bgImg="https://images.unsplash.com/photo-1765954296215-6c3aadec42aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
        currPage="About"
      />
      <WhyWeAreBest />
      {/* <BestService /> */}
      {/* <BehindTheJourney /> */}
      <WhyTravelWithUs />
      <TrustedCompanies />
      <Testimonials />
      <Faq />
    </section>
  );
};

export default About;
