import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | TalentMind",
  description:
    "Contactez TalentMind pour découvrir nos solutions RH et demander une démonstration de TalentMind Hub.",
};

export default function SolutionsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
