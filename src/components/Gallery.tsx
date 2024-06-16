"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { bebasNeue } from "./Hero";
import { use, useEffect, useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [controls, isInView]);

  const galleryContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const galleryItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="text-white py-[8rem] bg-neutral-950" id="gallery">
      <div className="max-w-[1280px] mx-auto" ref={ref}>
        <motion.h2
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className={`text-4xl md:text-5xl font-bold text-center w-[20rem] mx-auto mb-[7rem] ${bebasNeue.className}`}
        >
          Explore Our NFT Masterpieces
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
          variants={galleryContainer}
          initial="hidden"
          animate={controls}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={galleryItem}
              className={`relative overflow-hidden rounded-lg w-full min-h-64 ${item.span} group`}
            >
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-500 transform group-hover:scale-110"
                alt={item.description}
              />
              <div className="relative w-full h-full bg-gradient-to-t from-transparent to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex flex-col justify-center items-start p-7">
                  <h3 className="text-2xl text-white">{item.title}</h3>
                  <h2 className="text-white">{item.name}</h2>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
