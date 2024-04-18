import { mali } from "@/utils/fonts";

function SideHustleCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="card w-full shadow-xl bg-white">
      <div className="card-body py-4 px-6">
        <div className="flex flex-col items-center gap-x-5 text-center gap-y-4">
          <img src={image} className="w-12 md:w-20" />
          <h3 className={`${mali.className} font-bold text-xl`}>
            {title}
          </h3>
        </div>

        <p className="text-lg md:text-xl mt-5 mt-3 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SideHustleCard;
