"use client"

import { jobs } from "@/utils/collections"
import { Job } from "@/utils/interfaces"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

function Page() {
 const [job,setJob] = useState<Job>()
    const params = useParams()

    useEffect(() => {
        console.log(params);
        setJob(jobs.find(x => x.id == params.number))
    },[])

  return (
    <div className="px-5 md:px-20 py-10 md:py-20">
            <h2 className="font-bold text-4xl">
                {job?.position}
            </h2>

           <div className="flex flex-col gap-y-5 text-xl mt-6">
           <p>
                <b>Location</b> {job?.location}
            </p>

            <p>
                <b>
                    Job Type
                </b> {job?.jobType}
            </p>

            <p>
                <b>
                    Introduction:
                </b> {job?.introduction}
            </p>

            <div>
                <p><b>Key responsibilities</b></p>
                <ul className="list-decimal list-inside">
                    {
                        job?.keyResponsibilities.map((r,i) => <li>{r.title}
                        <ul className="list-disc list-inside ml-4">
                            {r.actions.map((a,i) => <li>{a}</li>)}
                        </ul>
                        </li>)
                    }
                </ul>
            </div>

            <div>
                <p><b>Qualifications:</b></p>
                <ul className="list-disc list-inside ml-4">
                    {job?.qualifications.map((q,i) => <li>{q}</li>)}
                </ul>
            </div>

            <div>
                <p><b>Benefits:</b></p>
                <ul className="list-disc list-inside ml-4">
                    {job?.benefits.map((q,i) => <li>{q}</li>)}
                </ul>
            </div>

            <p>
                <b>How to Apply:</b> <br/> {job?.howToApply}
            </p>
           </div>
    </div>
  )
}

export default Page