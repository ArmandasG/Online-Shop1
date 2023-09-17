import ContactUsForm from "../components/forms/ContactUsForm";

function ContactUsPage() {
  return (
    <div className="lg:min-h-[140rem] container">
      <div className="mb-20 mt-10 bg-no-repeat bg-cover w-full h-96 lg:h-[60rem] bg-center bg-[url('/icons/Contact_us.png')]"></div>
      <h2 className="font-medium text-3xl mb-10 lg:text-5xl lg:font-bold lg:pt-[6rem]">
        CONTACT
      </h2>
      <ContactUsForm />
    </div>
  );
}

export default ContactUsPage;
