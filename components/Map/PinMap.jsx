"use client"
import React from "react"
import { PinContainer } from "./PinContainer"

export function PinMap({ children }) {
    return (
        <div className="h-full w-full flex items-center justify-center ">
            <PinContainer
                title="Industry 55"

            >
                <div className="flex basis-full flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 h-[30rem] w-[30rem]  ">

                    {children}
                </div>
            </PinContainer>
        </div>
    )
}