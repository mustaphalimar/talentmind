import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | TalentMind",
  authors: [{ name: "Mustapha Limar" }],
  creator: "Mustapha Limar",
  keywords:
    "Mustapha Limar, mustapha limar, tapham079, limarmustapha,mustaphalimar, tapham, limar",
  description:
    "Mustapha Limar, mustapha limar, tapham079, limarmustapha,mustaphalimar, tapham, limar",
};

export default function SolutionsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
