import RootLayout from "@/app/layout";
import { mali } from "@/utils/fonts";

const Index = () => {
  return (
    <RootLayout>
      <div
        className="hero h-[60vh]"
        style={{ backgroundImage: "url(/assets/images/farm2.jpeg)" }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-20 text-justify">
        <p>
          Farmwise Tanzania (FWT) is the vision brought to life by two
          remarkable women, Patricia Kakorozya and Ruth Yongolo, united by a
          shared concern for the future of agriculture in their country.
          Observing the steady decline of smallholder farmers in rural areas,
          largely due to urban migration and a lack of succession planning,
          Patricia and Ruth were moved to action. They recognized the critical
          challenge facing not just Tanzania, but the world: with a rapidly
          growing global population, the demand for food is escalating,
          necessitating innovative solutions for sustainable and efficient food
          production.
          <br />
          <br />
          In response to this urgent need, Farmwise Tanzania was born. Our
          platform is more than just a business; it is a movement towards
          revitalizing agriculture by making it accessible and appealing to city
          dwellers and global citizens alike. Farmwise champions an innovative
          approach to farming that prioritizes organic methods, traceability,
          and sustainability. We believe that by engaging a new generation of
          farmers from diverse backgrounds, we can transform the agricultural
          landscape into one that is vibrant, inclusive, and capable of meeting
          the world's food needs.
        </p>
      </div>

      <div
        className="hero h-[70vh]"
        style={{ backgroundImage: "url(/assets/images/farmbanner.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="px-5 md:px-20">
            <h1 className="mb-5 text-4xl font-semibold">
              Revolutionazing agriculture by addressing urban migration,
              promoting sustainable farming practices, and engaging a diverse
              community to ensure a vibrant and sustainable future for
              agriculture.
            </h1>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-20 text-justify">
        At FWT, we are dedicated to empowering individuals to become part of the
        solution. Whether you are a seasoned farmer, a curious city dweller with
        no farming experience, or a global citizen concerned about food
        security, Farmwise offers you the opportunity to contribute to a
        sustainable agricultural future. Through our platform, we provide access
        to farm investment opportunities, cutting-edge agricultural practices,
        and a supportive community of like-minded individuals committed to
        making a difference.
        <br />
        <br />
        Join us in our mission to revolutionize farming. Together, we can ensure
        that agriculture remains a thriving and sustainable endeavor for
        generations to come. Welcome to Farmwise Tanzania - where we grow more
        than just food; we cultivate hope, community, and a brighter future for
        all.
      </div>

      <div className="px-5 md:px-20 py-10">
        <div className={`${mali.className} text-center text-4xl`}>Our Team</div>

        <div className="flex flex-col gap-y-10 md:flex-row items-center mt-10">
          <div className="basis-1/2 flex flex-col items-center gap-y-4 justify-center text-center">
            <div
              className="w-52 h-52 rounded-full bg-cover"
              style={{
                backgroundImage: "url('/assets/images/team/farm-team1.jpeg')",
              }}
            ></div>

            <div className="font-bold text-xl">Full name</div>

            <div className="text-md">Role</div>
          </div>

          <div className="basis-1/2 flex flex-col items-center gap-y-4 justify-center text-center">
            <div
              className="w-52 h-52 rounded-full bg-cover"
              style={{
                backgroundImage: "url('/assets/images/team/farm-team2.jpeg')",
              }}
            ></div>

            <div className="font-bold text-xl">Full name</div>

            <div className="text-md">Role</div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Index;
