"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, {
    error: "Le nom complet doit contenir au moins 2 caractères",
  }),
  company: z.string().min(2, {
    error: "Le nom de l'entreprise doit contenir au moins 2 caractères",
  }),
  email: z.email({
    error: "Veuillez utiliser une adresse email valide",
  }),
  phoneNumber: z
    .string()
    .min(10, {
      message: "Le numéro de téléphone doit contenir au moins 10 caractères",
    })
    .regex(/^[0-9+\s()-]+$/, {
      message: "Le numéro de téléphone n'est pas valide",
    }),
  needType: z.enum(
    ["conseil-rh", "talentmind-hub", "accompagnement-filiales", "autre"],
    {
      message: "Veuillez sélectionner un type de besoin valide",
    }
  ),
  message: z
    .string()
    .min(10, {
      error: "Le message doit contenir au moins 10 caractères",
    })
    .max(1000, {
      error: "Le message ne doit pas dépasser 1000 caractères",
    }),
});

export type FormSchema = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phoneNumber: "",
      needType: "conseil-rh",
      message: "",
    },
  });

  const onSubmit = async (data: FormSchema) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="grid grid-col-1 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Nom et prénom</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Entreprise</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="needType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type de besoin</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selectionnez votre besoin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conseil-rh">Conseil RH</SelectItem>
                      <SelectItem value="talentmind-hub">
                        Talentmind Hub
                      </SelectItem>
                      <SelectItem value="accompagnement-filiales">
                        Accompagnement filiales
                      </SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-6 w-full">
          Envoyer
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
