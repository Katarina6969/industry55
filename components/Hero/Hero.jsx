import Image from "next/image"
import Logo from "./Logo"
import building from '/public/building.png'
import { Noto_Serif } from "next/font/google"
const notoserif = Noto_Serif({ subsets: ["latin"], weight: ["100", "200", "300", "400"] })


function Hero(props) {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
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
                    <p className={`${notoserif.className} max-w-md mx-auto mt-3 text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-5xl`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Hero