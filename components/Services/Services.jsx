import ServiceCards from "./ServiceCards"
import SectionWrapper from "@/components/SectionWrapper"
import { LampContainer } from "../Lamp/Lamp"
import H2 from "@/components/H2"
export function Services(props) {
    return (

        <SectionWrapper dark className=" pt-0 pb-0" style={{ maxHeight: "40rem", overflow: "clip" }}>
            <div className="">
                <LampContainer className="w-full min-content" color="slate">
                    <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 mt-96 xl:mt-0 md:block">
                        <H2 className="full-w text-center  " style={{ textShadow: "5px 3px 6px #000000" }}>S čím Vám můžeme pomoci</H2>

                        <div className="flex flex-col  gap-10 items-center xl:flex-row w-full xl:justify-around mt-10">

                            <ServiceCards></ServiceCards>
                            <ServiceCards></ServiceCards>
                            <ServiceCards></ServiceCards>
                        </div>


                    </div>
                </LampContainer >
            </div>
        </SectionWrapper >



    )
}


/*
  <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <h2 className="text-white dark:text-white text-lg font-medium">
                            Feature 1
                        </h2>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                            taxidermy. Gastropub indxgo juice poutine.
                        </p>
                        <a
                            href="#"
                            className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                        >
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
<div className="p-4 max-w-sm">
    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            </div>
            <h2 className="text-white dark:text-white text-lg font-medium">
                Feature 2
            </h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33
                nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime
                amet.
            </p>
            <a
                href="#"
                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
            >
                Learn More
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    </div>
</div>

<div className="p-4 max-w-sm">
    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            </div>
            <h2 className="text-white dark:text-white text-lg font-medium">
                Feature 3
            </h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33
                nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime
                amet.
            </p>
            <a
                href="#"
                className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
            >
                Learn More
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    </div>
    </div >
    */