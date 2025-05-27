function SidebarNavItem({ href, content }: { href: string; content: string }) {
  return (
    <a href={href} className="rounded-lg py-2 px-2 lg:hover:bg-accent">
      <button className="cursor-pointer">{content}</button>
    </a>
  );
}

export default function Sidebar() {

  return (
    <div className="w-64 justify-between fixed left-0 border-y-0 h-[calc(100vh-64px)] flex flex-col gap-1 py-10 px-8 border-accent border-x">
      <div className="flex flex-col gap-1 ">
        <h1 className="font-bold text-xl">Navigation</h1>
        <SidebarNavItem href="/#home" content="home" />
        <SidebarNavItem href="/#skills" content="Skills" />
        <SidebarNavItem href="/#experience" content="Experience" />
        <SidebarNavItem href="/#projects" content="Projects" />
        <SidebarNavItem href="/#certifications" content="Certifications" />
        <SidebarNavItem href="/#soft" content="Soft Skills" />
        {/* <SidebarNavItem href="/#contact" content="Contact" /> */}
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-sm">Looking for a developer?</p>
        <p className="text-neutral text-xs">
          I&apos;m currently available for full-time positions.
        </p>
        <a href="#contact">
          <button className="cursor-pointer rounded-lg mt-2 lg:hover:bg-neutral-300 text-primary bg-secondary w-28 py-2">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
}
