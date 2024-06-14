import { IconType } from "react-icons";
import { FaLock, FaUser, FaPaintBrush, FaRocket } from "react-icons/fa";

type itemsType = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

const icons: Record<string, IconType> = {
  FaPaintBrush: FaPaintBrush,
  FaLock: FaLock,
  FaUser: FaUser,
  FaRocket: FaRocket,
};

const items: itemsType[] = [
  {
    id: "1",
    name: "Organization",
    description:
      "Arrange your NFTs into personalized collections and access them quickly.",
    icon: "FaFolderOpen",
  },
  {
    id: "2",
    name: "Visualization",
    description:
      "Enjoy a modern bookshelf view and see the details of each NFT with a single click.",
    icon: "FaEye",
  },
  {
    id: "3",
    name: "Sharing",
    description:
      "Share your collections and discover those of other users in our integrated social network.",
    icon: "FaShareAlt",
  },
  {
    id: "4",
    name: "Security",
    description:
      "Protect your digital assets with our robust security measures.",
    icon: "FaLock",
  },
];

const FeatureCards = () => (
  <section className="text-center pb-[8rem] -mt-10 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1280px] mx-auto p-10  rounded-xl bg-violet-950 ">
      {items.map((item) => {
        const iconName = item.icon;
        const Icon = icons[iconName as keyof typeof icons];
        return (
          <div
            key={item.id}
            className="rounded-lg flex flex-col gap-4 text-white items-start text-left transition-all cursor-pointer mb-10 lg:mb-0 "
          >
            <div className="flex gap-5 items-center justify-start">
              {/* <Icon size={"24"} className="text-white" /> */}
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <div className="border border-white rounded-full p-1"></div>
            </div>
            <p className="text-lg text-neutral-300">{item.description}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default FeatureCards;
