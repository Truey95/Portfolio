import ContactImage from "./ContactImage";
import ContactText from "./ContactText";
import ContactForm from "../ContactForm";

// Contact component
export default function Contact(): JSX.Element {
  return (
    <div
      id="contact"
      className="w-full p-2"
    >
      <div className="max-w-7xl m-auto flex flex-col items-center gap-16">
        <div className="text-center">
          <p className="uppercase text-sm tracking-[0.4em] text-white font-luxury mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-luxury text-white uppercase tracking-widest">
            Contact
          </h2>
        </div>

        <div className="w-full grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <ContactImage />
            <ContactText />
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
