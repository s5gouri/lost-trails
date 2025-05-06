"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import axios from "axios";
import { toast, Toaster } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  residence: z
    .string()
    .min(1, { message: "Please select a preferred destination." }),
  age: z.string().min(1, { message: "Please select an option." }),
  whatUdo: z.string().min(1, {
    message: "Please tell us about your current work/creative pursuit.",
  }),
  whyinterested: z
    .string()
    .min(1, { message: "Please tell us, it really matters." }),
  vibe: z
    .array(z.string())
    .min(1, { message: "Please select at least one vibe." }),
  somethinglikebefore: z.string().min(1, { message: "Required!!." }),
  sociallink: z.string().min(1, { message: "Required!!." }),
  howuhear: z.string().min(1, { message: "Required!!." }),
});

const RequestForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      residence: "",
      age: "",
      whatUdo: "",
      whyinterested: "",
      vibe: [],
      somethinglikebefore: "",
      sociallink: "",
      howuhear: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would submit to a backend
    // console.log(values);
    const response = await axios.post("/api/submit", values);
    if (response.data.success) {
      toast.success("Request submitted successfully!");
      setIsSubmitted(true);
      // console.log("Data submitted successfully:", response.data);
    } else {
      toast.error("There was an error submitting the form. Please try again.");

      console.error("Error submitting data:", response.statusText);
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" rounded-lg shadow-lg p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary h-8 w-8"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your request has been submitted successfully. We will review your
          application and get back to you within 48 hours with more details on
          upcoming expeditions that match your preferences.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mx-auto"
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-background text-foreground transition-colors border-2 rounded-lg shadow-lg p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="So we know who we’re speaking to"
                      {...field}
                    />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="For sending your invitation and any follow-ups"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="For sending your invitation and any follow-ups"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="residence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City of Residence</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    >
                      <option value="">
                        Helps us match you with the nearest departure
                      </option>
                      <option value="dzukou-valley">Dzukou Valley</option>
                      <option value="spiti-valley">Spiti Valley</option>
                      <option value="andaman-islands">Andaman Islands</option>
                      <option value="ziro-valley">Ziro Valley</option>
                      <option value="sundarbans">Sundarbans</option>
                      <option value="other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age Group</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    >
                      <option value="">Your age Group</option>
                      <option value="Under 20">Under 20</option>
                      <option value="20-25">20 - 25</option>
                      <option value="26-30">26 - 30</option>
                      <option value="31-40">31 - 40</option>
                      <option value="40+">40+</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="vibe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How would you describe your vibe?</FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Chill & introspective",
                        "Energetic & social",
                        "Always exploring",
                        "Creative & expressive",
                        "Looking for clarity",
                        "Bit of everything",
                      ].map((option) => {
                        const isSelected = field.value?.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              if (isSelected) {
                                field.onChange(
                                  field.value.filter((val) => val !== option)
                                );
                              } else {
                                field.onChange([...field.value, option]);
                              }
                            }}
                            className={`px-3 py-1 rounded-xl border text-sm transition ${
                              isSelected
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-gray-700 border-gray-300"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="whatUdo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What do you do?{" "}
                  <span className="text-gray-400"> (Short answer)</span>
                </FormLabel>
                <FormControl>
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us your current work/creative pursuit—freelancer, student, artist, etc."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This helps us match you with the right expedition.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whyinterested"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Why are you interested in this retreat?
                  <span className="text-gray-400"> (Paragraph)</span>
                </FormLabel>
                <FormControl>
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="A short, heartfelt note about why this experience calls to you"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This helps us match you with the right expedition.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="somethinglikebefore"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Have you ever done something like this before?
                  <span className="text-gray-400"> (Short)</span>
                </FormLabel>
                <FormControl>
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="If yes, tell us briefly. If no, even better!"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This helps us match you with the right expedition.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="sociallink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Link to any 1 social{" "}
                    <span className="text-gray-400">
                      {" "}
                      (Instagram / LinkedIn / Website){" "}
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Optional but helps us get a sense of your story"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="howuhear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about Lost Trails?</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    >
                      <option value="">
                        Helps us match you with the nearest departure
                      </option>
                      <option value="dzukou-valley">Dzukou Valley</option>
                      <option value="spiti-valley">Spiti Valley</option>
                      <option value="andaman-islands">Andaman Islands</option>
                      <option value="ziro-valley">Ziro Valley</option>
                      <option value="sundarbans">Sundarbans</option>
                      <option value="other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" size="lg">
              Submit Request
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RequestForm;
