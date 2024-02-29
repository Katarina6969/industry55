import Image from 'next/image'
import Olivia from '@/public/Olivia.webp'

export function Testimonials(props) {
    return (
        <section className="my-8  bg-white text-black">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <svg viewBox="0 0 512 512" fill="gold" className="w-16 h-16 dark:text-violet-400">
                    <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                    <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                </svg>
                <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-7xl xl:max-w-7xl dark:text-gray-300">&quot;Industry 55 did an outstanding job with the reconstruction of my building! Their expertise and attention to detail were remarkable. The staff was friendly and provided exceptional customer service. I highly recommend them to anyone looking for building reconstruction. Thank you, Industry 55!&quot;</p>
                <div className="flex flex-col gap-4 justify-center space-x-3">
                    <Image src={Olivia} alt="" className="w-20 h-20 bg-center bg-cover rounded-md" />

                    <p className="leading-tight">Olivia.</p>


                </div>
            </div>
        </section>

    )
}

