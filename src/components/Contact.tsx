import { useState } from "react";
import emailjs from "@emailjs/browser";
import SubHeading from "./SubHeading";
import ScrollTo from "./ScrollTo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        "service_bxypxj8",
        "template_k8d862e",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "BHiV27NQgfJr7mlPN" // Replace with your EmailJS public key
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("Email send failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="margin mb-24 relative">
      <ScrollTo targetId="contact" />
      <SubHeading content="Contact" />
      <div className="item flex max-sm:flex-col gap-4">
        <div className="w-full gap-2 flex flex-col">
          <p className="text-lg mb-4">
            I&apos;m currently looking for full-time developer opportunities.
            Feel free to reach out if you&apos;d like to connect!
          </p>
          <p>📍 Richmond Hill, Ontario</p>
          <p>📞 (647) 997-4176</p>
          <p>✉️ abedishayan@gmail.com</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value={formData.name}
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value={formData.email}
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.shiftKey) {
                  return;
                }
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit(e)
                }
              }}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value={formData.message}
              id="message"
              name="message"
              placeholder="Your Message"
              className=""
              required
            />
          </div>
          {status === "success" && (
            <p className="text-green-600 text-sm">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">
              Failed to send message. Please try again.
            </p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-lg bg-secondary w-full text-primary py-2 px-4 text-sm font-medium cursor-pointer disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
