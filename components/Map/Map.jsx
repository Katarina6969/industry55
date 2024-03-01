import SectionWrapper from "../SectionWrapper"
import TextImageBlock from "@/components/TextImageBlock"
import Image from 'Next/image'
import mapImage from '@/public/map.webp'
export function Map({ dark }) {
    const MapPlace = <ImageElement />
    return (
        <SectionWrapper dark={dark}>
            <TextImageBlock title="Inženýrská činnost" content={MapPlace} alt="building" distribution={[6, 6]}>
                <h3> Vinohradská 40, Vinohrady, Česko</h3>
                <p>Datová schránka : inebwtd</p>
                <p>Email : Industry55.th@gmail.com</p>

            </TextImageBlock>
        </SectionWrapper >

    )
}


function ImageElement() {
    return (

        <div className="flex w-full  relative bg-blue-300" style={{ aspectRatio: "4/3" }}>
            <div className="absolute top-0 left-0 w-full  h-[95%] flex self-center justify-center"

            >

                <svg
                    style={{}}
                    width="3%"
                    height="auto"
                    viewBox="0 0 24 24"


                >
                    <defs id="defs1" />
                    <path
                        fill="red"
                        fillRule="evenodd"
                        d="M11.291 21.706 12 21l-.709.706zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007-.017-.017-.062-.063a47.708 47.708 0 0 1-1.04-1.106 49.562 49.562 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8 4.408 0 8 3.461 8 8 0 1.248-.535 2.612-1.213 3.87-.693 1.286-1.604 2.585-2.497 3.735a49.583 49.583 0 0 1-3.496 4.014l-.062.063-.017.017-.006.006L12 21zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                        clipRule="evenodd"
                        id="path1"
                    />
                    <ellipse
                        style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeWidth: "0.687981",
                            strokeDasharray: "none",
                            paintOrder: "fill markers stroke"
                        }}
                        id="path2"
                        cx="12.539152"
                        cy="20.657253"
                        rx="8.5264835"
                        ry="2.6882286"
                    />
                </svg>
            </div>

            <Image alt="mapa" src={mapImage} className="rounded-sm md:rounded-md lg:rounded-lg w-full" style={{ objectFit: "cover", aspectRatio: 1 }} />
        </div >


    )
}


