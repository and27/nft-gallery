import { FaBookOpen, FaBullseye, FaEye, FaUsers } from "react-icons/fa6";
import { bebasNeue } from "./Hero";

type aboutItemsType = {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: string; className?: string }>;
};

const aboutItems: aboutItemsType[] = [
  {
    title: "Our Mission",
    description:
      "To revolutionize the NFT space by providing a user-friendly and secure platform for discovering, collecting, and managing digital assets.",
    icon: FaBullseye,
  },
  {
    title: "Our Vision",
    description:
      "To be the leading platform for NFT enthusiasts, fostering a vibrant community where creativity and innovation thrive.",
    icon: FaEye,
  },
  {
    title: "Our Story",
    description:
      "Founded by a group of passionate digital artists and tech enthusiasts, we aimed to create a space where art and technology intersect seamlessly.",
    icon: FaBookOpen,
  },
  {
    title: "Our Team",
    description:
      "A diverse team of experts in blockchain, digital art, and user experience dedicated to making NFTs accessible and enjoyable for everyone.",
    icon: FaUsers,
  },
];

const About = () => {
  return (
    <section
      className="py-[8rem] bg-neutral-950 text-white px-5 md:px-10 xl:px-[20rem]"
      id="about"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-[4rem] md:mb-[6rem] ${bebasNeue.className}`}
        >
          About us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {aboutItems.map(({ icon: Icon, ...item }, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col gap-3 text-white text-left transition-all cursor-pointer"
              >
                <Icon className="text-white mb-3 text-3xl md:text-4xl" />
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-lg text-neutral-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
