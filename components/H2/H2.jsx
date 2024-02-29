import { Rufina } from "next/font/google"
import { cn } from "@/utils/cn"
const rufina = Rufina({ subsets: ["latin"], weight: ["400", "700"] })


function H1({ children, className, ...props }) {

    return (
        <h2 className={cn(`${rufina.className} text-5xl font-bold py-5`, className)} {...props}>{children}</h2>
    )
}

export default H1