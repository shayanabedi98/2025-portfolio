import { MoveRight } from "lucide-react";
import ScrollTo from "./ScrollTo";

export default function Home() {
  return (
    <div className="flex flex-col max-md:mt-10 md:margin gap-3">
      <ScrollTo targetId="home" />
      <h1 className="text-5xl font-extrabold">Shayan Abedi</h1>
      <p className="text-lg sm:text-xl max-w-[620px] w-full text-neutral">
        Full-stack developer with 2+ years of experience building scalable,
        production-ready web platforms. Proven success launching SaaS and
        marketplace products from the ground up using modern frameworks like
        Next.js, TypeScript, and PostgreSQL.
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
