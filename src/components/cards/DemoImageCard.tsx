interface DemoImageCardProps {
  image: string;
  height?: string;
  width?: string;
  imageBodyClass?: string;
  imageClass?: string;
}
export function DemoImageCard({
  image,
  height = "h-[25vh]",
  width = "w-full",
  imageBodyClass,
  imageClass,
}: DemoImageCardProps) {
  return (
    <div
      className={`${width} ${height} ${imageBodyClass ?? "ring-2 ring-(--input-border) overflow-hidden rounded-xl cursor-pointer"} `}
    >
      <img
        src={image}
        alt="card"
        className={`${imageClass ?? "w-full h-full object-cover rounded-xl scale-100 transition-all duration-300 hover:scale-110"}`}
      />
    </div>
  );
}
