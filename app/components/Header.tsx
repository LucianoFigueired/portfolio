"use client";

export function Header() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    window.scrollTo({
      top: elem?.offsetTop ? elem.offsetTop - 80 : 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm px-6 py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-2xl font-black text-zinc-900 tracking-tighter">
          <span className="text-purple-700">{"< "}</span>lcfg<span className="text-purple-700">{" />"}</span>
        </span>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-6 text-sm font-medium text-zinc-600">
            {navItems.map((item) => (
              <li key={item.name} className="hover:text-purple-700 cursor-pointer transition-colors">
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="hover:text-purple-700 dark:hover:text-purple-500 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
