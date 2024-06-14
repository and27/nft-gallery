import Image from "next/image";

type GalleryType = {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  span?: string;
};

const galleryItems: GalleryType[] = [
  {
    id: "1",
    name: "Chris Johnson",
    title: "Neon Geometric Abstraction",
    description:
      "Abstract futuristic NFT with neon colors and geometric shapes",
    image: "/gallery/item1.webp",
    span: "col-span-2",
  },
  {
    id: "2",
    name: "Andrew Turner",
    title: "Neon Elephant",
    description:
      "Abstract futuristic NFT featuring an elephant with neon colors and geometric patterns",
    image: "/gallery/item2.webp",
  },
  {
    id: "3",
    name: "James Whitfield",
    title: "Cyberpunk Lion",
    description:
      "Abstract futuristic NFT featuring a lion with neon colors and geometric patterns",
    image: "/gallery/item4.webp",
    span: "row-span-2",
  },
  {
    id: "4",
    name: "Michael Hayes",
    title: "Futuristic Cityscape",
    description: "Lorem ipsum dolor sit amet.",
    image: "/gallery/item3.webp",
  },
  {
    id: "5",
    name: "Emma Turner",
    title: "Whimsical Landscape",
    description:
      "Surreal whimsical landscape NFT with floating islands, oversized mushrooms, and a dreamy sky",
    image: "/gallery/item5.webp",
  },
  {
    id: "6",
    name: "Michael Hayes",
    title: "Mystical Enchantment",
    description:
      "Mystical abstract NFT with swirling mist, floating orbs, and glowing patterns in deep blues, purples, and golds",
    image: "/gallery/item6.webp",
  },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {galleryItems.map((item) => (
        <div
          key={item.id}
          className={`relative overflow-hidden rounded-lg w-full min-h-64 ${item.span}`}
        >
          <Image
            src={item.image}
            layout="fill"
            objectFit="cover"
            className="rounded-lg hover:scale-105 transition-transform duration-300"
            alt={item.description}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col justify-center items-start p-7">
              <h3 className="text-2xl text-white">{item.title}</h3>
              <h2 className="text-white">{item.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
