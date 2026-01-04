import ContactForm from "@/components/contact-form";
import Container from "@/components/layouts/container";
import SectionTitle from "@/components/main/section-title";
import ContactHero from "@/components/sections/contact-hero";
import { Check } from "lucide-react";

const contactReasonsList = [
  {
    id: 1,
    text: "Réponse rapide par un expert RH",
  },
  {
    id: 2,
    text: "Solutions adaptées à vos enjeux",
  },
  {
    id: 3,
    text: "Accompagnement personnalisé",
  },
  {
    id: 4,
    text: "Données traitées de manière confidentielle",
  },
];
function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className="py-20">
        <Container>
          <p className="text-xl text-center">
            Vous souhaitez en savoir plus sur nos solutions ou découvrir
            TalentMind Hub en action ? <br /> Laissez-nous vos coordonnées, un
            expert TalentMind vous recontactera rapidement.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle text="Contactez-nous" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-xl font-semibold">
                Pourquoi contacter TalentMind ?
              </p>

              <ul className="mt-10 space-y-2">
                {contactReasonsList.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}

export default ContactPage;
