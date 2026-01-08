import ContactButtonsContainer from "./ContactButtonsContainer";

// holds text and buttons in contact
export default function ContactText(): JSX.Element {
  return (
    <div className="pt-8">
      <p className="uppercase text-sm tracking-[0.3em] text-gray-500 text-center font-luxury">
        Contact
      </p>
      <h2 className="py-4 text-center uppercase tracking-widest text-3xl">Ricky Rollins</h2>
      <p className="py-2 text-gray-400 text-center font-luxury tracking-widest text-xs uppercase">Software Engineer</p>
      <p className="py-4 text-gray-300 text-center font-premium leading-relaxed max-w-sm mx-auto">
        Available for bespoke solutions and collaborative ventures.
        Connect to initiate an extraordinary journey.
      </p>
      <ContactButtonsContainer />
    </div>
  );
}
