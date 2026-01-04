import { ContactFormData } from "@/app/api/contact/route";

export interface ContactResponse {
  message: string;
}

export interface ContactError {
  error: string;
}

export async function submitContact(
  data: ContactFormData
): Promise<ContactResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error: ContactError = await response.json();
    throw new Error(error.error || "Failed to submit contact form");
  }

  return response.json();
}
