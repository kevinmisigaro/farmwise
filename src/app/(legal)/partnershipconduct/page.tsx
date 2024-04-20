import React from "react";

function Page() {
  return (
    <>
      <div
        className="hero h-[35vh] bg-cover"
        style={{ backgroundImage: "url(/assets/images/banners/banner6.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">
              Partnership Code of Conduct
            </h1>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-10 md:py-20 text-lg md:text-xl">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-4">
              FWT is committed to maintaining the highest standards of integrity
              and professionalism in all of our business relationships. This
              Partnership Code of Conduct outlines the principles that govern
              our interactions with all partners, including suppliers,
              contractors, joint venture partners, and any other entities with
              whom we engage in any form of business collaboration.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Compliance with Laws</h2>
            <p className="mb-4">
              All partners must conduct their business activities in full
              compliance with all applicable laws and regulations, including but
              not limited to anti-bribery, anti-corruption, and anti-money
              laundering laws.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Business Integrity</h2>
            <ul className="list-disc list-inside ml-4">
              <li className="mb-2">
                <strong>Fair Dealing:</strong> Partners must deal fairly with
                clients, suppliers, competitors, and employees and must never
                take unfair advantage of others through manipulation,
                concealment, abuse of privileged information, misrepresentation
                of material facts, or any other unfair-dealing practice.
              </li>
              <li className="mb-2">
                <strong>No Bribery or Corruption:</strong> Partners must not
                offer, give, ask for, or accept bribes or any other illegal
                inducements in any of their dealings.
              </li>
              <li className="mb-2">
                <strong>Conflicts of Interest:</strong> Partners are expected to
                avoid all conflicts of interest or situations giving the
                appearance of a potential conflict of interest.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              4. Respect for Human Rights
            </h2>
            <p className="mb-4">
              Partners must support and respect the protection of
              internationally proclaimed human rights and ensure they are not
              complicit in human rights abuses.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Labor Practices</h2>
            <p className="mb-4">
              Partners must uphold the freedom of association and the effective
              recognition of the right to collective bargaining, the elimination
              of all forms of forced or compulsory labor, the effective
              abolition of child labor, and the elimination of discrimination in
              respect of employment and occupation.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              6. Safety and Environmental Responsibility
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Safety:</h3>
              <p className="mb-4">
                Partners must provide a safe and healthy work environment for
                their employees and comply with all applicable health and safety
                laws.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                Environmental Stewardship:
              </h3>
              <p className="mb-4">
                Partners are expected to conduct their operations in a way that
                is environmentally responsible and strive to minimize
                environmental impact.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              7. Confidentiality and Intellectual Property
            </h2>
            <p className="mb-4">
              Partners must respect and protect any confidential information and
              intellectual property rights shared as part of the business
              relationship and not use such information for any unauthorized
              purposes.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              8. Transparency and Reporting
            </h2>
            <p className="mb-4">
              Partners are expected to conduct their business activities
              transparently and report any unethical behavior or any conflict
              with this Code of Conduct through established channels.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              9. Monitoring and Enforcement
            </h2>
            <p className="mb-4">
              FWT reserves the right to verify compliance with this Code of
              Conduct, and any violations may result in termination of the
              partnership and/or other remedial action.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Review and Updates</h2>
            <p className="mb-4">
              This Code of Conduct will be reviewed periodically and may be
              updated to reflect changes in law, expectations, or our business
              operations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
