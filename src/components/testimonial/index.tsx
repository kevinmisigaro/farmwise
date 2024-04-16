function Testimonial({
  name,
  role,
  description,
  image
}: {
  name: string;
  role: string;
  description: string;
  image: string
}) {
  return (
    <div className="flex flex-col gap-y-2 w-[300px] px-8 py-10 bg-white">
      <div className="rating">
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          checked
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          checked
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          checked
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          checked
        />
      </div>

      <div className="flex flex-row items-center gap-x-5 h-32">
      <img src={image} className="mask mask-circle w-24 h-30" />
      <div>
      <div className="font-extrabold">{name}</div>
        <div className="italic text-sm">{role}</div>
      </div>
      </div>

      <div className="text-justify">{description}</div>
    </div>
  );
}

export default Testimonial;
