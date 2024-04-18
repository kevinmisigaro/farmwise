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
    <div className="flex flex-col gap-y-2 h-[35rem] md:h-[38rem] px-8 py-10 bg-white shadow-xl rounded-md">
      <div className="rating">
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          readOnly
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          checked
          readOnly
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          checked
          readOnly
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          checked
          readOnly
        />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-green-500"
          checked
          readOnly
        />
      </div>

      <div className="flex flex-row items-center gap-x-5 h-32">
      <img src={image} className="mask mask-circle w-24 h-30" />
      <div>
      <div className="font-extrabold">{name}</div>
        <div className="italic text-sm">{role}</div>
      </div>
      </div>

      <div className="text-left md:text-justify text-lg">{description}</div>
    </div>
  );
}

export default Testimonial;
