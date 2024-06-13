import { FaBeer } from "react-icons/fa";
import { FaBook, FaLock, FaOdnoklassniki, FaUser } from "react-icons/fa6";

type aboutItemsType = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: string; className?: string }> | null;
};

const aboutItems: aboutItemsType[] = [
  {
    title: "Exclusive",
    description:
      "Discover exclusive NFT collections created by top artists from around the world.",
    icon: FaBook,
  },
  {
    title: "Secure",
    description:
      "Our platform ensures secure and transparent transactions using blockchain technology.",
    icon: FaLock,
  },
  {
    title: "Community",
    description:
      "Participate in events, discussions, and collaborations to grow your network.",
    icon: FaUser,
  },
  {
    title: "User-Friendly",
    description:
      "Enjoy a seamless and intuitive user designed to make managing NFTs easy for everyone.",
    icon: FaOdnoklassniki,
  },
];
const About = () => {
  return (
    <section className="py-[8rem] bg-neutral-950 text-white px-5 md:px-10 xl:px-[20rem] ">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center w-[20rem] mx-auto mb-[7rem]">
          About us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {aboutItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex gap-6 text-white items-center text-left transition-all cursor-pointer p-5 md:"
              >
                <Icon size={"48"} className="text-white" />
                <div>
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-lg text-neutral-400">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
