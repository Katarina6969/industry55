import Image from "next/image"
import Logo from "./Logo"
import building from '/public/building.webp'
import { Rufina } from "next/font/google"
const rufina = Rufina({ subsets: ["latin"], weight: ["400", "700"] })


function Hero(props) {
    return (
        <section className="relative bg-black h-screen flex flex-col items-center justify-center text-center text-white dark ">
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <Image fill src={building} alt="luxury appartment image" style={{ objectFit: "cover" }}></Image>
            </div>

            <div className=" inset-0 h-full w-full  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] absolute flex items-center justify-center mix-blend-lighten opacity-60">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


            </div>
            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className="flex flex-col items-center">

                    <h1

                    >
                        <Logo></Logo>
                    </h1>
                    <div><h2 className={`${rufina.className} max-w-md mx-auto mt-3  text-gray-200 text-4xl md:mt-5 md:max-w-5xl mb-5`}>
                        Dejte své nemovitosti čerstvý nádech</h2>
                        <p className={`${rufina.className} max-w-md  mt-3 text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-5xl`}>
                            Společnost zabívající se rekontrukcemi nemovitostí po celé Praze s více jak 20-ti letou zkušeností.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Hero