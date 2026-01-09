import PageHead from "@/components/common/page-head"
import ContactSection from "@/components/contact-page/ContactSection"

const Contact = () => {
  return (
      <section>
        <PageHead
        prevPage="Home"
        prevLink="/"
        bgImg="https://images.unsplash.com/photo-1765954296215-6c3aadec42aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
        currPage="Contact"
      />
      <ContactSection />
    </section>
  )
}

export default Contact