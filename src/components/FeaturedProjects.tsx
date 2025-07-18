import {useState} from "react";
import SubHeading from "./SubHeading";
import {ChevronLeft, ChevronRight} from "lucide-react";
import ScrollTo from "./ScrollTo";

function Project({
  images,
  title,
  description,
  href,
  technologies,
}: {
  images: string[];
  title: string;
  description: string;
  href: string;
  technologies: string[];
}) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <a href={href} target="_blank" className="flex flex-col w-full">
      <div className="w-full relative max-[375px]:h-52 max-[400px]:h-60 max-sm:h-72 max-md:h-96 max-xl:h-[550px] xl:h-72 flex items-center">
        <button
          onClick={() =>
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          className="cursor-pointer absolute right-2 bg-accent/70 flex items-center justify-center rounded-full h-8 w-8 z-10 lg:hover:bg-accent/100 transition"
        >
          <ChevronRight />
        </button>
        <button
          onClick={() =>
            setImageIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
          className="cursor-pointer absolute left-2 bg-accent/70 flex items-center justify-center rounded-full h-8 w-8 z-10 lg:hover:bg-accent/100 transition"
        >
          <ChevronLeft />
        </button>
        <img
          src={images[imageIndex]}
          alt={`screenshot of ${title}`}
          className="object-cover h-full w-full rounded-t-lg"
        />
      </div>
      <div
        className="item flex flex-col gap-3 max-xl:min-h-52 xl:min-h-72"
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderTop: "none",
        }}
      >
        <h3>{title}</h3>
        <p className="text-neutral">{description}</p>
        <div className="flex items-center flex-wrap gap-2">
          {technologies.map((item: string) => (
            <span
              key={item}
              className="flex items-center justify-center text-xs font-semibold text-secondary bg-accent px-2.5 rounded-full py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function FeaturedProjects() {
  return (
    <div className="flex flex-col relative margin">
      <ScrollTo targetId="projects" />
      <SubHeading content="Featured Projects" />
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-4">
        <Project
          href="https://stonefinder.io"
          images={[
            "/projects/stonefinder/1.png",
            "/projects/stonefinder/2.png",
            "/projects/stonefinder/3.png",
            "/projects/stonefinder/4.png",
          ]}
          description="Marketplace platform connecting global stone slab vendors with buyers and fabricators. Features real-time messaging, Stripe billing, and AI-powered assistance.
"
          title="StoneFinder.io"
          technologies={[
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Prisma",
            "PostgreSQL",
            "Express.js",
            "Socket.IO",
            "NextAuth",
            "Neon",
            "Vercel",
            "Render",
            "AWS S3",
            "CloudFront",
            "Gemini AI API",
            "Google Places",
            "Nodemailer",
          ]}
        />

        <Project
          href="https://beagle-server.vercel.app/"
          images={[
            "/projects/woof/1.png",
            "/projects/woof/2.png",
            "/projects/woof/3.png",
          ]}
          description="Crypto tax and transaction tracking SaaS platform with wallet categorization and contact management system."
          title="Woof"
          technologies={[
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Prisma",
            "Docker",
            "PostgreSQL",
            "PgAdmin",
            "NextAuth",
            "Google Auth",
            "Neon",
            "Vercel",
            "Stripe",
          ]}
        />
      </div>
    </div>
  );
}
