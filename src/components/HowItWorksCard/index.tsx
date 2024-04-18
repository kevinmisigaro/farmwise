import { mali } from "@/utils/fonts";

function HowItWorksCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="card w-full bg-[#00200d] shadow-xl">
      <div className="card-body p-12">
        <div className="flex flex-row items-center gap-x-5">
          <img src={image} className="w-12 md:w-8" />
          <h3
            className={`${mali.className} text-white text-2xl font-bold md:text-xl`}
          >
            {title}
          </h3>
        </div>

        <p className="text-xl mt-5 text-[#81af93] mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HowItWorksCard;
