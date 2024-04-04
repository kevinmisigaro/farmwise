function Testimonial({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-y-3 w-[300px] px-8 py-10 bg-white">
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

      <div>
        <div className="font-extrabold">{name}</div>
        <div className="italic text-sm">{role}</div>
      </div>

      <div className="text-justify">{description}</div>
    </div>
  );
}

export default Testimonial;
