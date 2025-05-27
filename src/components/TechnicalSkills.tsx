import ScrollTo from "./ScrollTo";
import SubHeading from "./SubHeading";

function Skill({ title, list }: { title: string; list: string[] }) {
  return (
    <div className="flex flex-col gap-3 min-h-52 w-full item">
      <h3 className="">{title}</h3>
      <div className="flex items-center flex-wrap gap-2">
        {list.map((item: string) => (
          <span
            key={item}
            className="flex items-center justify-center text-xs font-semibold text-secondary bg-accent px-2.5 rounded-full py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechnicalSkills() {
  return (
    <div className="margin relative">
      <ScrollTo targetId="skills" />
      <SubHeading content="Technical Skills" />
      <div className="gap-4 grid grid-cols-4">
        <Skill
          title="Programming Languages"
          list={["JavaScript", "TypeScript", "Python", "Go"]}
        />
        <Skill
          title="Frontend"
          list={["React", "Next.js (App Router)", "TailwindCSS"]}
        />
        <Skill
          title="Backend & Database"
          list={[
            "Node.js",
            "Express.js",
            "Prisma",
            "PostgreSQL",
            "MongoDB",
            "Supabase",
          ]}
        />
        <Skill
          title="DevOps & Tools"
          list={["AWS S3 & Amplify", "CloudFront", "Docker", "Vercel"]}
        />
        <div className="col-span-2">
          <Skill
            title="APIs & Integrations"
            list={[
              "NextAuth",
              "Stripe API",
              "Google Places API",
              "Gemini AI API",
              "Socket.IO",
              "Chart.js",
            ]}
          />
        </div>
        <div className="col-span-2">
          <Skill
            title="AI & Productivity"
            list={[
              "GitHub Copilot",
              "GPT",
              "Claude",
              "Gemini",
              "Perplexity",
              "V0",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
