import { NextResponse } from "next/server";

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phoneNumber: string;
  needType:
    | "conseil-rh"
    | "talentmind-hub"
    | "accompagnement-filiales"
    | "autre";
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    if (
      !body.fullName ||
      !body.company ||
      !body.email ||
      !body.phoneNumber ||
      !body.needType ||
      !body.message
    ) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Contact form submission:", body);

    return NextResponse.json(
      { message: "Votre message a été envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du formulaire" },
      { status: 500 }
    );
  }
}
