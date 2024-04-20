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
              Environmental Sustainability Policy
            </h1>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-10 md:py-20 text-lg md:text-xl">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Purpose</h2>
            <p className="mb-4">
              This Sustainability Policy outlines the commitment of FWT to
              environmental stewardship. We aim to integrate sustainable
              practices into our daily operations and to promote environmental
              responsibility among our stakeholders.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Scope</h2>
            <p className="mb-4">
              This policy applies to all aspects of our operations and to all
              employees, regardless of their role or location. We also encourage
              our suppliers, contractors, and partners to align their practices
              with the principles outlined in this policy.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Policy Statement</h2>
            <p className="mb-4">
              FWT is committed to minimizing our environmental impact and
              ensuring the sustainability of our operations. We believe in the
              responsible management of natural resources and are committed to
              improving our environmental performance over time.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Key Areas of Focus</h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                4.1. Resource Conservation
              </h3>
              <ul className="list-disc list-inside ml-4">
                <li className="mb-2">
                  <strong>Energy Efficiency:</strong> Implement energy-saving
                  measures across all operations, including the use of
                  energy-efficient technologies and practices.
                </li>
                <li className="mb-2">
                  <strong>Water Management:</strong> Reduce water usage through
                  efficient practices and technologies. Promote the recycling
                  and reuse of water where feasible.
                </li>
                <li className="mb-2">
                  <strong>Material Use:</strong> Optimize material usage to
                  prevent waste and prioritize the use of recycled materials.
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">4.2. Waste Reduction</h3>
              <ul className="list-disc list-inside ml-4">
                <li className="mb-2">
                  <strong>Recycling Initiatives:</strong> Implement
                  comprehensive recycling programs throughout all company
                  facilities.
                </li>
                <li className="mb-2">
                  <strong>Waste Management:</strong> Reduce waste generation and
                  promote the hierarchy of refuse, reduce, reuse, and recycle.
                </li>
                <li className="mb-2">
                  <strong>Sustainable Packaging:</strong> Use environmentally
                  friendly materials in packaging and minimize the use of
                  non-recyclable resources.
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                4.3. Sustainable Procurement
              </h3>
              <ul className="list-disc list-inside ml-4">
                <li className="mb-2">
                  <strong>Supplier Standards:</strong> Collaborate with
                  suppliers who demonstrate a commitment to sustainable
                  practices.
                </li>
                <li className="mb-2">
                  <strong>Eco-friendly Products:</strong> Prioritize purchasing
                  products that are more sustainable, including those that are
                  biodegradable, made from recycled materials, or certified by
                  recognized environmental standards.
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                4.4. Emissions Reduction
              </h3>
              <ul className="list-disc list-inside ml-4">
                <li className="mb-2">
                  <strong>Carbon Footprint:</strong> Actively work to reduce the
                  carbon footprint of our operations through improved
                  efficiencies and the use of renewable energy sources.
                </li>
                <li className="mb-2">
                  <strong>Transportation:</strong> Promote the use of
                  low-emission vehicles and encourage sustainable travel options
                  for employees, such as carpooling and public transportation.
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                4.5. Community Engagement and Education
              </h3>
              <ul className="list-disc list-inside ml-4">
                <li className="mb-2">
                  <strong>Community Projects:</strong> Support environmental
                  initiatives at the local and global level through
                  volunteering, sponsorships, and partnerships.
                </li>
                <li className="mb-2">
                  <strong>Employee Education:</strong> Provide training and
                  resources to employees on sustainability practices both at
                  work and at home.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              5. Monitoring and Reporting
            </h2>
            <p className="mb-4">
              FWT will regularly review and report on our sustainability
              performance, setting targets and publicly reporting progress to
              ensure transparency and accountability.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              6. Continuous Improvement
            </h2>
            <p className="mb-4">
              We commit to continual improvement in our sustainability
              performance. We will update our practices in light of advancements
              in technology and new understandings in environmental management.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Compliance</h2>
            <p className="mb-4">
              All employees are expected to adhere to this policy and contribute
              to the company's sustainability goals. Non-compliance with this
              policy may result in disciplinary action.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
