import React from 'react'

function Split(props) {
    return (
        <div className="relative w-full max-h-10 flex">
            <div className="relative w-full h-full"></div>
            <div className={`absolute inset-0 ${dark ? "flex bg-slate-200" : "bg-black"} -z-1`} style={{ clipPath: "polygon(0 0,100% 0,100% calc(100% - 352px),0 100%)" }}></div>

        </div>
    )
}

export default Split