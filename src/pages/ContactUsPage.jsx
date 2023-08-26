import ContactUsForm from "../components/forms/ContactUsForm";

function ContactUsPage() {
  return <div className="min-h-screen container">
    <div className="mb-20 mt-10 bg-no-repeat bg-cover w-full h-96 bg-center bg-[url('/icons/Contact_us.png')]">
    </div>
    <h2 className="font-medium text-3xl mb-10">CONTACT</h2>
    <ContactUsForm />
  </div>;
}

export default ContactUsPage;
