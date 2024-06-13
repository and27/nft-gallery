import { FaLock, FaUser, FaPaintBrush, FaRocket } from "react-icons/fa";

type itemsType = {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: string; className?: string }>;
};

const items: itemsType[] = [
  {
    id: "1",
    name: "Exclusive ",
    description:
      "Discover exclusive NFT collections created by top artists from around the world. ",
    icon: FaPaintBrush,
  },
  {
    id: "2",
    name: "Secure ",
    description:
      "Our platform ensures secure and transparent transactions using blockchain technology.",
    icon: FaLock,
  },
  {
    id: "3",
    name: "Community ",
    description:
      "Participate in events, discussions, and collaborations to grow your network.",
    icon: FaUser,
  },

  {
    id: "4",
    name: "User-Friendly ",
    description:
      "Enjoy a seamless and intuitive user designed to make managing NFTs easy for everyone.",
    icon: FaRocket,
  },
];

const FeatureCards = () => (
  <section className="text-center pb-[8rem]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1280px] mx-auto p-12 bg-neutral-950/80 rounded-xl backdrop-invert-0">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="rounded-lg flex flex-col gap-4 text-white items-start text-left transition-all cursor-pointer mb-10 lg:mb-0 "
          >
            <div className="flex gap-5 items-center justify-start">
              <Icon size={"24"} className="text-white" />
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <div className="border border-white rounded-full p-1"></div>
            </div>
            <p className="text-lg text-neutral-400">{item.description}</p>
            <button className="px-4 py-2 border border-white text-white rounded-md">
              Learn more
            </button>
          </div>
        );
      })}
    </div>
  </section>
);

export default FeatureCards;
