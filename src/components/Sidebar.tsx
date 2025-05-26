import { useState } from "react";

function SidebarNavItem({ href, content }: { href: string; content: string }) {
  return (
    <a href={href} className="rounded-lg py-2 px-2 lg:hover:bg-accent">
      <button className="cursor-pointer">{content}</button>
    </a>
  );
}

export default function Sidebar() {
  const [pathname, setPathname] = useState(window.location.pathname);

  return (
    <nav className="min-h-[100lvh] w-64 border-y-0 flex flex-col gap-1 py-10 px-8 border-accent border-x">
      <h1 className="font-bold text-xl">Navigation</h1>
      <SidebarNavItem href="/#about" content="About" />
      <SidebarNavItem href="/#skills" content="Skills" />
      <SidebarNavItem href="/#experience" content="Experience" />
      <SidebarNavItem href="/#projects" content="Projects" />
      <SidebarNavItem href="/#certifications" content="Certifications" />
      <SidebarNavItem href="/#soft" content="Soft Skills" />
      <SidebarNavItem href="/#contact" content="Contact" />
    </nav>
  );
}
