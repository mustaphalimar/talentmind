import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Démonstration | TalentMind",
  description:
    "Contactez TalentMind pour découvrir nos solutions RH et demander une démonstration de TalentMind Hub.",
};

export default function ContactPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
