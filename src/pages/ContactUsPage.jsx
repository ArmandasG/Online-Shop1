import ContactUsForm from "../components/forms/ContactUsForm";

function ContactUsPage() {
  return (
    <div className="container pb-20">
      <div className="mb-6 mt-10 bg-no-repeat bg-cover w-full h-96 lg:h-[60rem] bg-center bg-[url('/icons/Contact_us.png')]"></div>
      <h2 className="font-medium text-3xl mb-10 lg:text-5xl lg:font-bold lg:pt-[6rem]">
        CONTACT
      </h2>
      <ContactUsForm />
    </div>
  );
}

export default ContactUsPage;
