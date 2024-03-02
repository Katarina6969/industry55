import H2 from "@/components/H2"
import Image from "next/image"

function TextImageBlock({ title, src, alt, children, imageFirst, content, distribution = [6, 6], className }) {
    const contentComponent = content ?? <Image alt={alt} src={src} className="rounded-sm md:rounded-md lg:rounded-lg" />
    return (
        <>
            <div className={` grid grid-cols-12 mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8   mb-2 `}>
                <div className={` col-span-12 lg:col-span-6  mx-auto     lg:mx-0 lg:max-w-3xl  ${imageFirst && "lg:col-start-7"} `}>
                    <H2 style={{ whiteSpace: "pre-line" }}>{title}</H2>


                </div>
            </div>

            <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8  md:block">
                <div className="grid grid-rows-1 gap-8 lg:gap-16 xl:gap-24 xl:grid-cols-12 ">
                    <div
                        className={`relative z-10  col-span-${distribution[0]} space-y-6 ${imageFirst && "order-last"} text-xl font-thin`}
                        aria-orientation="vertical"
                    >
                        {children}
                    </div>
                    <div className={`relative col-span-${distribution[1]}`} >
                        {contentComponent}
                    </div>
                </div>
            </div >
        </>

    )
}

export default TextImageBlock
