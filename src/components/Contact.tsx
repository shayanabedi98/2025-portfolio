import { useState } from "react";
import SubHeading from "./SubHeading";
import ScrollTo from "./ScrollTo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="margin mb-24 relative">
      <ScrollTo targetId="contact" />
      <SubHeading content="Contact" />
      <div className="item flex gap-4 items-center">
        <div className="w-full gap-2 flex flex-col">
          <p>
            I&apos;m currently looking for full-time developer opportunities.
            Feel free to reach out if you&apos;d like to connect!
          </p>
          <p>📍 Richmond Hill, Ontario</p>
          <p>📞 (647) 997-4176</p>
          <p>✉️ abedishayan@gmail.com</p>
        </div>
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value={formData.name}
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Email</label>
            <input
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value={formData.email}
              type="text"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Message</label>
            <textarea
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              value={formData.message}
              id="message"
              name="message"
              placeholder="Your Message"
              className=""
            />
          </div>
          <button className="rounded-lg bg-secondary w-full text-primary py-2 px-4 text-sm font-medium cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
