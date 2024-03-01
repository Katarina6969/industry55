import { cn } from "@/utils/cn"
function SectionWrapper({ label, children, dark, className, props }) {
    return (
        <section
            aria-label={label}
            className={cn(`relative ${dark ? " bg-black text-white" : "bg-white text-black"} py-10 sm:py-22 isolate`, className)}
            {...props}
        >
            {children}
        </section>



    )
}

export default SectionWrapper