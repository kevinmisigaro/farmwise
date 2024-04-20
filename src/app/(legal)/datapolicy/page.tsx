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
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Data Protection Policy</h1>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20 py-10 md:py-20 text-lg md:text-xl">
       
        
        <div className="md:max-w-4xl mx-auto">
        <p className="mb-8">
          FWT is committed to ensuring the integrity and confidentiality of all
          personal data it processes. To this end, we uphold the following
          principles in our data protection practices:
        </p>
        <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Lawful, Fair, and Transparent Processing</h2>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Lawful Processing:</strong> All data processing activities carried out by FWT will have a legitimate legal basis, such as consent from the data subject, a contractual requirement, or other legal obligations under applicable law.
          </li>
          <li className="mb-2">
            <strong>Fair Processing:</strong> FWT will handle personal data fairly, which means that we will not process data in a way that unduly disadvantages the data subject.
          </li>
          <li className="mb-2">
            <strong>Transparent Processing:</strong> FWT will always provide clear information to data subjects about how their personal data will be used and by whom. This information will be conveyed in a concise, transparent, intelligible, and easily accessible form.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Purpose Limitation</h2>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Specified Purposes:</strong> Personal data collected by FWT will be for specified, explicit, and legitimate purposes only and not further processed in a manner that is incompatible with those purposes.
          </li>
          <li className="mb-2">
            <strong>Clear Communication:</strong> The purposes for which personal data are collected will be explicitly defined in relevant data privacy notices and communicated to data subjects prior to data collection.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Data Minimization</h2>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Adequacy:</strong> FWT will ensure that personal data collected are adequate and relevant for the intended purposes.
          </li>
          <li className="mb-2">
            <strong>Limitation:</strong> FWT will limit the collection of personal data to what is necessary in relation to the purposes for which they are processed.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Accuracy</h2>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Data Accuracy:</strong> FWT will take every reasonable step to ensure that personal data that we process are accurate and, where necessary, kept up to date.
          </li>
          <li className="mb-2">
            <strong>Updating Data:</strong> Any inaccurate or outdated data will be updated or corrected as soon as possible upon discovery or when informed by the data subject.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Storage Limitation</h2>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Time Limitation:</strong> Personal data will be retained only for as long as necessary to fulfill the stated purposes, including for the duration of any contractual relationship and as required by applicable law.
          </li>
          <li className="mb-2">
            <strong>Data Review and Deletion:</strong> FWT will regularly review the necessity of keeping personal data and delete data that is no longer required.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Integrity and Confidentiality</h2>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Data Security:</strong> Personal data will be processed in a manner that ensures appropriate security, including protection against unauthorized or unlawful processing, accidental loss, destruction, or damage. FWT will use appropriate technical and organizational measures to achieve this.
          </li>
          <li className="mb-2">
            <strong>Confidentiality:</strong> Access to personal data will be limited to those employees and third parties who need to know it for the processing purposes and who are subject to confidentiality obligations.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Accountability</h2>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Compliance Monitoring:</strong> FWT will monitor compliance with these principles and other applicable data protection standards.
          </li>
          <li className="mb-2">
            <strong>Documentation:</strong> All data processing activities will be documented, and compliance with this policy will be reviewed regularly.
          </li>
        </ul>
      </div>
        </div>
      </div>
    </>
  );
}

export default Page;
