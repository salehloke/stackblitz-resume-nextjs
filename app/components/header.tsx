import React from "react"
import Image from "next/image"
import profilePics from "../../public/saleh-avatar.JPG"

const ResumeHeader = () => {
    return (
        <div className="overflow-x-auto">
            <div className="flex">
                <div className="flex-1 p-2">
                    {/* AVATAR */}
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                            <Image
                                src={profilePics}
                                alt="Profile Photo"
                                width={100}
                                height={100}
                                priority
                            />
                        </div>
                    </div>
                    {/* end of AVATAR */}
                </div>
                <div>
                    {/* NAME */}
                    <div className="text-2xl font-bold">
                        Saleh Loke
                    </div>
                    {/* end of NAME */}
                    {/* JOB TITLE */}
                    <div className="text-xl font-bold">
                        Full Stack Developer
                    </div>
                    {/* end of JOB TITLE */}
                    {/* CONTACT INFO */}
                    <div className="flex flex-col gap-2">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeHeader