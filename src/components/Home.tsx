import { MoveRight } from "lucide-react";
import ScrollTo from "./ScrollTo";

export default function Home() {
  return (
    <div className="flex flex-col max-md:mt-10 md:mt-16 gap-3">
      <ScrollTo targetId="home" />
      <h1 className="text-5xl font-extrabold">Shayan Abedi</h1>
      <p className="text-lg sm:text-xl max-w-[620px] w-full text-neutral">
        Full-Stack Software Engineer with 3+ years of experience building and
        maintaining production systems at a consumer mobile startup with 4M+
        users. Specialized in TypeScript, React, React Native (Expo), and
        Next.js, with backend experience using Node.js and PostgreSQL, shipping
        end-to-end features and optimizing APIs and database queries at scale.
        Engineering-driven but product-aware, able to translate requirements
        into clean implementations and collaborate closely with design and
        product partners.
      </p>
      <div className="flex items-center gap-2 mt-4">
        <a href="#contact">
          <button className="flex items-center gap-2 lg:hover:bg-neutral-300 transition bg-secondary text-primary cursor-pointer rounded-lg py-2 px-4">
            Contact Me <MoveRight />
          </button>
        </a>
        <a href="#projects">
          <button className="flex border border-accent lg:hover:bg-accent transition items-center gap-2 cursor-pointer rounded-lg py-2 px-4">
            View Projects
          </button>
        </a>
      </div>
    </div>
  );
}
