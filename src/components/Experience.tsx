import SubHeading from "./SubHeading";

function ExperienceItem({
  title,
  dateRange,
  list,
}: {
  title: string;
  dateRange: string;
  list: string[];
}) {
  return (
    <div className="flex flex-col item gap-2">
      <h3>{title}</h3>
      <p className="text-neutral">{dateRange}</p>
      <ul className="pl-4">
        {list.map((item) => (
          <li key={item} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="margin" id="experience">
      <SubHeading content="Professional Experience & Projects" />
      <div className="flex flex-col gap-6">
        <ExperienceItem
          title="Founder & Full-Stack Developer at StoneFinder.io"
          dateRange="Sep 2024 – Present"
          list={[
            "Developed entire marketplace platform using Next.js (App Router), TypeScript, Prisma, and PostgreSQL.",
            "Built real-time messaging system with Express.js and Socket.IO, hosted on Render.com.",
            "Integrated Stripe billing with webhooks, vendor analytics via Chart.js, and tiered subscription model.",
            "Implemented image uploads via AWS S3 and CDN with CloudFront.",
            "Used Google Places API + Haversine formula for geolocation-based listings.",
            "Added AI chatbot powered by Gemini 1.5 Flash API to assist users.",
          ]}
        />
        <ExperienceItem
          title="Full-Stack Developer at Woof"
          dateRange="Oct 2024 - Present • Contract role with startup"
          list={[
            "Built key features across multiple Next.js repos, collaborating with frontend/backend developers.",
            "Managed Docker-based environments and Postgres instances using Neon and pgAdmin.",
            "Delivered full crypto wallet transaction categorization and contact system with clear UX.",
            "Contributed to architecture design and deployment, ensuring consistent team-wide standards.",
            "Currently undergoing user testing to optimize UX and conversion, preparing Stripe integration for monthly subscription billing.",
          ]}
        />
        <ExperienceItem
          title="Freelance Web Developer"
          dateRange="Mar 2023 - Oct 2024"
          list={[
            "Delivered custom-built, responsive websites using React and TailwindCSS.",
            "Integrated contact forms, booking systems, and local SEO strategies.",
            "Provided clients with user-friendly Admin portals for CRUD operations using MongoDB, Prisma, AWS S3, and CloudFront.",
            "Balanced multiple projects and maintained ongoing client support relationships.",
          ]}
        />
      </div>
    </div>
  );
}
