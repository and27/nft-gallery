interface ImageWithContentProps {
  image: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const ImageWithContent = ({
  image,
  onClick,
  children,
}: ImageWithContentProps) => (
  <div
    className="flex flex-col gap-2 w-full aspect-square overflow-hidden rounded-lg relative overflow-hidden group cursor-pointer"
    onClick={onClick}
  >
    <div className="">
      <img
        src={image}
        alt={""}
        className="group-hover:scale-110 transition-transform duration-500 transform w-full h-full object-cover"
      />
    </div>
    <div className="text-center absolute top-0 w-full h-full bg-gradient-to-t from-transparent to-black ">
      {children}
    </div>
  </div>
);

export default ImageWithContent;
