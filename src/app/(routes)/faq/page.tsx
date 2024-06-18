"use client";

import { faqs } from "@/utils/collections";

function Index() {
  return (
    <div>
      <div
        className="hero h-[35vh] md:h-[60vh] bg-cover"
        style={{ backgroundImage: "url(/assets/images/banners/banner3.jpg/)" }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-10">
        {faqs.map((f, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-2xl font-semibold">{f.title}</h3>
            <div className="-ml-4 mt-3 bg-[#006633] text-white">
              {f.questions.map((x, k) => (
                <div key={k} className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="first-accordion" defaultChecked />
                  <div className="collapse-title text-xl font-bold text-gray-300">
                    {x.question}
                  </div>
                  <div className="collapse-content bg-white text-gray-800 rounded-none py-2">
                    <p className="text-lg">{x.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
