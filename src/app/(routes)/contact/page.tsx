import RootLayout from "@/app/layout";
import Footer from "@/components/footer";
import React from "react";

function Index() {
  return (
    <RootLayout>
      <div
        className="hero h-[35vh] md:h-[60vh]"
        style={{ backgroundImage: "url(/assets/images/farm2.jpeg)" }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-20 py-10 flex flex-row justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfbGR7-tpjo8LkzGSuIwNwOWO0yTTsj7nf5K-oyybSr6wZY0w/viewform?embedded=true"
          width="900"
          height="1100"
        >
          Loading…
        </iframe>
      </div>

      <Footer />
    </RootLayout>
  );
}

export default Index;
