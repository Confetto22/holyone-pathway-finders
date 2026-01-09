import PageHead from "@/components/common/page-head";
import ServicesContainer from "@/components/services-page/ServicesContainer";

const Services = () => {
  return (
    <section className="overflow-x-hidden">
      <PageHead
        prevPage="Home"
        prevLink="/"
        bgImg="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200"
        currPage="Services"
      />
      <ServicesContainer />
    </section>
  );
};

export default Services;
