"use client";

import HowItWorksCard from "@/components/HowItWorksCard";
import SideHustleCard from "@/components/SideHustleCard";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import { inter, mali } from "@/utils/fonts";
import { handleClickScroll } from "@/utils/functions";
import Link from "next/link";
import Slider from "react-slick";

function Index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    initialSlide: 0,
  };

  return (
    <>
      {/* <Slider {...settings} className="mb-20">
        <div className="h-[50vh] md:h-[78vh] relative">
          <div
            className="h-[50vh] md:h-[78vh] bg-cover"
            style={{
              backgroundImage: "url('/assets/images/banners/banner1.jpg')",
            }}
          ></div>
          <div className="w-full absolute h-full bg-black top-0 start-0 bg-opacity-30 z-5"></div>
          <div className="text-white absolute inset-0 text-center px-2 md:px-10 h-full">
            <div className="mt-32">
              <h1
                className={`mb-5 text-xl md:text-5xl font-bold ${mali.className}`}
              >
                More than Farming...
              </h1>
              <h1
                className={`mb-5 text-xl md:text-5xl font-bold ${mali.className}`}
              >
                It&rsquo;s your{" "}
                <i className={`${inter.className} font-light italic`}>New</i>{" "}
                side hustle
              </h1>

              <div className="flex flex-row justify-center mt-10">
                <div
                  onClick={() => handleClickScroll("dream")}
                  className="px-4 md:px-12 font-bold py-3 rounded-md max-w-fit text-white bg-[#173d25] cursor-pointer"
                >
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[50vh] md:h-[78vh] relative">
          <div
            className="h-[50vh] md:h-[78vh] bg-cover"
            style={{
              backgroundImage: "url('/assets/images/banners/banner6.jpg')",
            }}
          ></div>
          <div className="w-full absolute h-full bg-black top-0 start-0 bg-opacity-60 z-5"></div>
          <div className="text-white absolute inset-0 px-2  md:px-32 h-full">
            <div className="mt-32 flex flex-row justify-center">
              <h1
                className={`mb-5 text-xl md:text-5xl font-bold ${mali.className}`}
              >
                Monitor and track <br /> your farm remotely
              </h1>
            </div>
          </div>
        </div>

        <div className="h-[50vh] md:h-[78vh] relative">
          <div
            className="h-[50vh] md:h-[78vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/images/banners/banner3.jpg')",
            }}
          ></div>
          <div className="w-full absolute h-full bg-black top-0 start-0 bg-opacity-60 z-5"></div>
          <div className="text-white absolute inset-0 px-2 md:px-32 h-full">
            <div className="mt-40 md:mt-[17rem] flex flex-row justify-center">
              <h1
                className={`mb-5 text-2xl md:text-5xl text-center font-bold ${mali.className}`}
              >
                We make farming possible <br /> and profitable for everyone
              </h1>
            </div>
          </div>
        </div>
      </Slider> */}

      <div className="h-[50vh] md:h-[78vh] relative">
        <div
          className="h-[50vh] md:h-[78vh] bg-cover"
          style={{
            backgroundImage: "url('/assets/images/banners/banner1.jpg')",
          }}
        ></div>
        <div className="w-full absolute h-full bg-black top-0 start-0 bg-opacity-30 z-5"></div>
        <div className="text-white absolute inset-0 text-center px-2 md:px-10 h-full">
          <div className="mt-32">
            <h1
              className={`mb-5 text-xl md:text-5xl font-bold ${mali.className}`}
            >
              More than Farming...
            </h1>
            <h1
              className={`mb-5 text-xl md:text-5xl font-bold ${mali.className}`}
            >
              It&rsquo;s your{" "}
              <i className={`${inter.className} font-light italic`}>New</i> side
              hustle
            </h1>

            <div className="flex flex-row justify-center mt-10">
              <div
                onClick={() => handleClickScroll("dream")}
                className="px-4 md:px-12 font-bold py-3 rounded-md max-w-fit text-white bg-[#173d25] cursor-pointer"
              >
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-20 bg-[#173d25] text-white" id="about">
        <div className={`${mali.className} text-center text-4xl`}>
          Founders Story
        </div>

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

        <div className="mt-12 md:mt-20 text-justify text-lg md:text-xl">
          <p>
            Patricia Kakorozya and Ruth Yongolo, founders of Farmwise Tanzania,
            shared a deep concern stemming from a common observation: with each
            visit to their villages, they witnessed the troubling decline in the
            number of smallholder farmers and abandoned farmlands. Coming from
            farming backgrounds themselves and now living in Dar es Salaam.
            Witnessing how city dwellers struggle with financial pressures, they
            felt a personal and urgent call to action. This shared sentiment
            ignited their resolve to find a solution that would reverse the
            trend.
            <br />
            <br />
            Motivated by their own need for additional revenue streams and
            recognizing the broader potential to invigorate the agricultural
            sector, they developed an innovative business model. Their vision
            was to transform farming into an appealing side hustle specifically
            tailored for gainfully employed city dwellers like themselves. By
            making farming accessible and profitable, Farmwise Tanzania aims to
            attract those far removed from traditional agricultural settings,
            thereby ensuring a win-win approach for both platform users and the
            future of farming for future generations.
          </p>
        </div>
      </div>

      {/* benefits section  */}
      <div id="dream">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="basis-1 md:basis-1/2 px-5 md:px-20 mt-10 mb-10">
            <h2 className={`${mali.className} text-3xl md:text-5xl`}>
              Morogoro Maize Farm Project
            </h2>
            <p className="mt-10 text-justify mb-10 text-xl md:text-2xl">
              Exciting news! Farmwise has secured 10,000 acres in
              Tanzania&apos;s fertile Morogoro region for our next maize farming
              project. As we prepare the farm for the next planting season, we
              invite you to be part of this sustainable agriculture movement.
              <br />
              <br />
              Whether you are interested in investing, learning, or farming as a
              side hustle, our Morogoro farm project offers a unique opportunity
              to reap the benefit of farming with a difference. Register now to
              become part of our community. Register your interest now!
            </p>

            <Link
              href={"/contact"}
              className="px-12 py-3 rounded-md max-w-fit text-white bg-[#173d25] cursor-pointer"
            >
              Register Now
            </Link>

            <h3 className="font-black mt-10 text-3xl">Come grow with us!</h3>
          </div>
          <div className="basis-1 md:basis-1/2 mb-10">
            <div className="bg-[url('/assets/images/cta-2.jpg')] h-[60vh] bg-cover"></div>

            <div className="card bg-[#173d25] border-8 border-[#fdd51f] max-w-sm -mt-5 animate-bounce">
              <div className="card-body text-white text-center">
                <div className="stat-value">1000+</div>
                <div className={`stat-desc text-lg ${mali.className}`}>
                  Subscribed Users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of benefits section */}

      <div className="py-10 md:py-28 bg-[#fefdf3]" id="services">
        <h1 className={`text-center text-5xl ${mali.className}`}>
          Our services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-y-5 mt-10 gap-x-8 items-stretch">
          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="h-28" src="/assets/icons/services/F9.png" />
                <p className={`${mali.className} mt-5 text-2xl font-bold h-12`}>
                  Short-term Farm Rental <br /> Opportunity Nationwide
                </p>
                <p className="text-xl mt-5 h-40">
                  Offers flexible, short-term leases on a wide range of farms
                  across the country, allowing investors and even non-farmers to
                  embark on agricultural projects instantly without long-term
                  commitments.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="h-28" src="/assets/icons/services/F8.png" />
                <p className={`${mali.className} mt-5 text-2xl font-bold h-12`}>
                  Land Preparation and Management <br />
                </p>
                <p className="text-xl mt-5 h-40">
                  Provides comprehensive farm services including soil testing
                  and treatment, plowing, and irrigation setup (where
                  applicable) to ensure land is fertile and ready for planting,
                  optimizing crop yield potential.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="h-28" src="/assets/icons/services/F1.png" />
                <p className={`${mali.className} mt-5 text-2xl font-bold h-12`}>
                  Quality Agricultural Input
                </p>
                <p className="text-xl mt-5 h-40">
                  Supplies top-tier seeds, fertilizers, and pesticides, so that
                  farmers have access to the best inputs for their crops,
                  leading to healthier plants and increased yields.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="h-28" src="/assets/icons/services/F6.png" />
                <p className={`${mali.className} mt-5 text-2xl font-bold h-12`}>
                  Farming as a Service (FaaS)
                </p>
                <p className="text-xl mt-5 h-60">
                  Our mobile app delivers end-to-end farm management for remote
                  farm management for transparency and accountability. You can
                  select from our list of certified and dedicated Farm Officers
                  from accredited Agricultural institutions to manage your farm
                  covering all aspects from planting to harvesting.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="h-28" src="/assets/icons/services/F4.png" />
                <p className={`${mali.className} mt-5 text-2xl font-bold h-12`}>
                  Agricultural Financial Services
                </p>
                <p className="text-xl mt-5 h-60">
                  We partner with agricultural-centric banks to offer tailored
                  financial solutions, including loans, insurance cover, and
                  investment opportunities, aimed to support agro-investments
                  for guaranteed returns.
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1 md:basis-1/3">
            <div className="card w-full bg-white shadow-xl">
              <div className="card-body flex items-center text-center">
                <img className="h-28" src="/assets/icons/services/F3.png" />
                <p className={`${mali.className} mt-5 text-2xl font-bold h-12`}>
                  Ready Market Access
                  <br />
                  <br />
                </p>
                <p className="text-xl mt-5 h-60">
                  At Farmwise, we facilitate connections between farmers and
                  buyers, ensuring that produce is fairly priced, and reaches
                  the market efficiently and profitably, reducing the risk of
                  post-harvest losses for our platform investors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center mt-20">
          <Link
            href={"/contact"}
            className="px-12 py-3 rounded-md max-w-fit text-white bg-[#173d25] cursor-pointer"
          >
            Register Now
          </Link>
        </div>
      </div>

      <div className="px-5 md:px-10 py-10 md:py-20 bg-[#3C975E]">
        <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
          Why Farming is Rarely <br /> Chosen as a Side Hustle
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 px-5 md:px-10 gap-y-5 mt-10 gap-x-4 mt-10">
          <SideHustleCard
            title=" High Initial Investment"
            description=" Farming often requires significant upfront costs, including
          land, equipment, seeds, and other necessary supplies, which
          can be a barrier for individuals looking for low-cost entry
          points into side hustles."
            image="/assets/icons/hustle/icons8-cash-80.png"
          />

          <SideHustleCard
            title="Time Commitment"
            description=" Farming is time-consuming, requiring regular attention. This
          can be challenging for those who already have full-time jobs
          or other commitments, making it difficult to manage alongside
          other responsibilities."
            image="/assets/icons/hustle/icons8-time-50.png"
          />

          <SideHustleCard
            title="Lack of Knowledge"
            description=" Farming requires specific skills and knowledge about crop
          cycles, soil health, pest management, and more. People without
          agricultural experience may find the learning curve steep and
          intimidating."
            image="/assets/icons/hustle/F17.png"
          />

          <SideHustleCard
            title="Labor Intensive"
            description=" Farming is physically demanding to manage multitasks like
          planting, tending, and harvesting. This aspect can be a
          deterrent for people seeking less physically intensive side
          hustles."
            image="/assets/icons/hustle/F16.png"
          />

          <SideHustleCard
            title="Risk of Crop Failure"
            description=" Factors like pests, diseases, and adverse weather can lead to
          crop failures, posing financial risks."
            image="/assets/icons/hustle/F15.png"
          />

          <SideHustleCard
            title="Isolation"
            description=" Farms are often located in rural areas, which might be less
          appealing for individuals accustomed to urban settings."
            image="/assets/icons/hustle/F13.png"
          />

          <SideHustleCard
            title="Cultural Perceptions"
            description=" For Millennials and Gen Z even in some cultures, farming might
          be viewed as less prestigious or desirable compared to other
          professions or side hustles."
            image="/assets/icons/hustle/F12.png"
          />
          <SideHustleCard
            title=" Storage and Market Access"
            description="  Proper storage and market access are crucial for preserving
          quality and ensuring products reach the market, requiring
          additional resources and coordination."
            image="/assets/icons/hustle/F10.png"
          />
        </div>
      </div>

      {/* services section  */}
      <div className="py-12 md:py-32 bg-[#173d25]" id="works">
        <h1
          className={`text-center text-2xl md:text-5xl text-white ${mali.className}`}
        >
          How Farmwise works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 mt-20 px-5 md:px-20">
          <HowItWorksCard
            title=" Select and customize your Farm"
            description=" At Farmwise, we offer a wide selection of farms across the
          nation, for each planting season. Whether you are looking for a
          small plot or a vast field to suit your agricultural ambitions.
          Simply select your desired acreage, complete your payment, and
          start your farming journey with us."
            image="/assets/icons/add-user.png"
          />

          <HowItWorksCard
            title="Sit Back, We've Got This"
            description="We supply everything you need, including high-quality seeds,
          fertilizer, and pesticides. Our farm management app lets you
          easily track and monitor your farm's progress daily
          alongside your Farm Officer, ensuring transparency and giving
          you peace of mind."
            image="/assets/icons/relax.png"
          />

          <HowItWorksCard
            title="Expert Care On-Demand"
            description="  Understanding your busy lifestyle and the physical distance from
          your farm, we offer the option to hire certified agricultural
          experts directly through our platform. They'll tend to your
          farm, applying expert knowledge and care, ensuring optimal
          growth and yield."
            image="/assets/icons/customer-support.png"
          />

          <HowItWorksCard
            title=" Harvest Your Success"
            description="At harvest time, you can either keep your produce or sell on our
          platform at premium price. We make sure the money from the sale
          goes right into your bank account easily."
            image="/assets/icons/combine-harvester.png"
          />
        </div>
      </div>
      {/* end of services section  */}

      <div
        className="hero max-h-fit bg-cover"
        style={{
          backgroundImage: "url(/assets/images/tractor-field-min.jpg",
        }}
      >
        <div className="hero-overlay bg-opacity-80 py-20 bg-black"></div>
        <div className="hero-content text-neutral-content  py-20">
          <div className="text-white w-[80vw] pt-20">
            <div className={`${mali.className} text-center mb-12 text-3xl`}>
              Why Choose Farmwise
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-20">
              <div>
                <div className="flex flex-row items-center mb-5 gap-x-5">
                  <img
                    src="/assets/icons/Farm.png"
                    className="text-white max-w-20"
                  />
                  <div className="font-bold text-xl">Instant and Flexible</div>
                </div>
                <div className="text-xl text-justify">
                  Farmwise DIY - Remote Farming offers an on-demand farming
                  service that allows investors to start or pause their farming
                  operations at their convenience. This instant access ensures
                  that users can adapt quickly to changing market conditions or
                  personal circumstances.
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center mb-5 gap-x-5">
                  <img
                    src="/assets/icons/Com Sup.png"
                    className="text-white w-10"
                  />
                  <div className="font-bold text-xl">
                    Minimal Time and Investment Required
                  </div>
                </div>
                <div className="text-xl text-justify">
                  The platform is designed to minimize both the time and
                  financial commitment required from the user. With pre-set
                  farming packages and automated systems, users can start with a
                  small investment and very little time commitment, making it an
                  accessible entry point into the agriculture sector.
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center mb-5 gap-x-5">
                  <img
                    src="assets/icons/Recy.png"
                    className="text-white w-10"
                  />
                  <div className="font-bold text-xl">Guaranteed ROI</div>
                </div>
                <div className="text-xl text-justify">
                  Farmwise DIY provides a structured approach with optimized
                  farming practices and technology that ensures a predictable
                  and reliable return on investment. This guarantee makes it an
                  attractive option for those looking for stable financial
                  opportunities in a typically variable industry.
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center mb-5 gap-x-5">
                  <img
                    src="/assets/icons/Success.png"
                    className="text-white w-10"
                  />
                  <div className="font-bold text-xl">
                    No Farming Knowledge or Experience Required
                  </div>
                </div>
                <div className="text-xl text-justify">
                  The platform is user-friendly and requires no prior farming
                  knowledge or experience. Farmwise DIY comes equipped with
                  automated systems, expert-guided protocols, and a full suite
                  of management tools that handle everything from seeding to
                  harvesting.
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center mb-5 gap-x-5">
                  <img
                    src="/assets/icons/Success.png"
                    className="text-white w-10"
                  />
                  <div className="font-bold text-xl">
                    Tech-Driven Convenience
                  </div>
                </div>
                <div className="text-xl text-justify">
                  Leveraging the latest in agricultural technology, Farmwise DIY
                  allows users to manage their farming operations remotely.
                  Whether through a smartphone app or a web interface, users can
                  monitor, control, and make decisions about their farm from
                  anywhere in the world.
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center mb-5 gap-x-5">
                  <img
                    src="/assets/icons/Success.png"
                    className="text-white w-10"
                  />
                  <div className="font-bold text-xl">
                    Scalability to Fit Any Goal
                  </div>
                </div>
                <div className="text-xl text-justify">
                  Whether you are looking to experiment with agriculture as a
                  hobby or build a sizable farming operation, Farmwise DIY can
                  scale to meet your needs. You can expand your involvement and
                  investment incrementally as you become more comfortable with
                  the platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* start of testimonial */}
      <div className="px-5 pt-[25rem] md:mt-1 md:px-20 py-12 md:py-20 bg-[#fcfaf0]">
        <div className={`${mali.className} text-center text-4xl`}>
          What people say about Farmwise
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-6 mt-10`}
        >
          <Testimonial
            image="/assets/images/testimonials/testimonial4.jpg"
            role="Banker"
            name="Asha Baruti"
            description="Wow, I never knew at some point in my life I would be able to use technology and farming!! I'm really excited, this is so huge, a banker and a farmer? … I can't wait for the next season of making money to start! "
          />

          <Testimonial
            description="The thought of getting into agriculture was off for me with zero experience in farming. But Farmwise promises to make it accessible and, dare I say, even exciting. The platform not only demystified the agricultural sector to me but will also give me an opportunity for hassle-free investing in Agriculture beyond my regular job"
            name="Nanza Mmbuji"
            role="Lawyer - Children's Rights Activist"
            image="/assets/images/testimonials/testimonial2.jpeg"
          />

          <Testimonial
            description="Nadhani sasa kilimo kinakwenda kuwa na mwanga tofauti! As a businessman I have never dreamt of going into farming, I can not be present and ensure all is going well but I think with what I have seen here please may i be one of the first people you consider to take part in this beautiful project. Aisee farmwise mko juu sana!"
            name="Alphonso Mlawi"
            role="Business owner Kariakoo"
            image="/assets/images/testimonials/testimonial3.jpeg"
          />

          <Testimonial
            description="Kama shamba limeandaliwa na lina Mifumo ya umwagiliaji nitalima sana tuu, maana tatizo kubwa ilikuwa jinsi ya kupata shamba lililo tayari, gharama ni kubwa sana kwa sisi Vijana. Lakini pia kuna wakati hatupati mbegu bora."
            name="Baraka Mugeta
            "
            role="Dereva wa Bajaji
            "
            image="/assets/images/testimonials/testimonial1.jpeg"
          />
        </div>
      </div>
      {/* end of testimonial */}

      <div className="px-5 md:px-32 bg-[#173d25] text-white flex flex-col md:flex-row justify-between gap-x-5 md:gap-x-12 py-12">
        <div className="flex items-center gap-x-5 mb-5">
          <img
            className="mask mask-squircle w-[3.5rem] h-[3.5rem]"
            src="/assets/icons/icons8-phone-50.png"
          />
          <div>
            <h3>Helpline and Support</h3>
            <h2 className="font-bold text-lg">+255-713444448</h2>
          </div>
        </div>

        <div className="flex items-center gap-x-5 mb-5">
          <img
            className="mask mask-squircle w-[3.5rem] h-[3.5rem]"
            src="/assets/icons/icons8-location-50.png"
          />
          <div>
            <h3>Our Address</h3>
            <h2 className="font-bold text-lg">
              Msasani Tower, Postal code 14111, <br /> Plot number 503/1, P.O.
              Box 38556, <br /> Dar Es Salaam, Tanzania
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-x-5 mb-5">
          <img
            className="mask mask-squircle w-[3.5rem] h-[3.5rem]"
            src="/assets/icons/icons8-telegram-app-50.png"
          />
          <div>
            <h3>Send an Email</h3>
            <a
              href="mailto:enquiry@farmwise.tz"
              className="font-bold text-lg hover:underline"
            >
              enquiry@farmwise.tz
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Index;
