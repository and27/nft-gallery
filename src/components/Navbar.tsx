import Link from "next/link";

type NavType = {
  name: string;
  link: string;
};

const navItems: NavType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Gallery",
    link: "#gallery",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-8 bg-neutral-950/10 backdrop-blur-lg backdrop-filter fixed w-full z-10">
        <div className="text-white font-bold text-2xl">NFT</div>
        <ul className="flex gap-8 text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button className="px-4 py-2 border border-white text-white rounded-md">
          Get started
        </button>
      </nav>
    </>
  );
};

export default Navbar;
