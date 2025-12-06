import { EncryptedText } from "../components/encrypted-text";

const Resume = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <p className="max-w-lg text-white">
        <EncryptedText
          text="Designed by Hadi Maliyakkal."
          encryptedClassName="text-neutral-500"
          revealedClassName="text-white"
          revealDelayMs={50}
        />
      </p>
    </section>
  );
};

export default Resume;
