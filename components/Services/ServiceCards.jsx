import Image from 'next/image'
function ServiceCards({ image, title, alt, text }) {
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700        shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
            ">

            <Image className="rounded-t-lg" src={image} alt={alt}></Image>


            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  min-h-16">
                    {title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {text}
                </p>


            </div>
        </div>


    )
}

export default ServiceCards