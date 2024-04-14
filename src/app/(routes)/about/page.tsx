import RootLayout from "@/app/layout";
import Footer from "@/components/footer";
import { mali } from "@/utils/fonts";

const Index = () => {
  return (
    <RootLayout>
      <div
        className="hero h-[35vh] md:h-[60vh]"
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
          Farmwise Tanzania (FWT) is tackling the severe decline in smallholder
          farmers by making agriculture more accessible through a &rdquo;farming
          as a service&rdquo; platform, aimed especially at urban dwellers and
          those new to farming. This initiative seeks to counter the effects of
          urban migration and inadequate succession planning which threaten food
          security amid a growing global population. FWT allows individuals to
          invest in agriculture, manage their investments flexibly, and actively
          participate in sustainable farming practices. This approach transforms
          farming into a practical side hustle and financial opportunity,
          promoting a sustainable and prosperous future for agriculture.
        </p>
      </div>

      <div
        className="hero h-[70vh]"
        style={{ backgroundImage: "url(/assets/images/farmbanner.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="px-5 md:px-20">
            <h1 className="mb-5 text-3xl md:text-4xl font-semibold">
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

      <div className="px-5 md:px-20 py-20 bg-[#173d25] text-white">
        <div className={`${mali.className} text-center text-4xl`}>Founders</div>

        <div className="flex flex-col gap-y-10 md:flex-row items-stretch mt-10">
          <div className="basis-1/2 flex flex-col items-center gap-y-4 justify-center text-center">
            <div
              className="w-52 h-52 rounded-full bg-cover"
              style={{
                backgroundImage:
                  "url('/assets/images/team/farm-team1-min.jpeg')",
              }}
            ></div>

            <div className="font-bold text-xl">Patricia Mmbando Kakorozya</div>

            <div className="text-md">Co-Founder & C.E.O</div>
          </div>

          <div className="basis-1/2 flex flex-col items-center gap-y-4 justify-center text-center">
            <div
              className="w-52 h-52 rounded-full bg-cover"
              style={{
                backgroundImage:
                  "url('/assets/images/team/farm-team2-min.jpeg')",
              }}
            ></div>

            <div className="font-bold text-xl">Ruth Sidney Yongolo</div>

            <div className="text-md">Co-Founder & C.O.O</div>
          </div>
        </div>
      </div>

      <Footer />
    </RootLayout>
  );
};

export default Index;
