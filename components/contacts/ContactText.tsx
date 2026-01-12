import ContactButtonsContainer from "./ContactButtonsContainer";

// holds text and buttons in contact
export default function ContactText(): JSX.Element {
  return (
    <div className="pt-8">
      <p className="uppercase text-sm tracking-[0.3em] text-white text-center font-luxury">
        Contact
      </p>
      <h2 className="py-4 text-center uppercase tracking-widest text-3xl">Trevor Smith</h2>
      <p className="py-2 text-white text-center font-luxury tracking-widest text-xs uppercase">Software Engineer</p>
      <p className="py-4 text-white text-center font-premium leading-relaxed max-w-sm mx-auto">
        Available for bespoke solutions and collaborative ventures.
        Connect to initiate an extraordinary journey.
      </p>
      <ContactButtonsContainer />
    </div>
  );
}
