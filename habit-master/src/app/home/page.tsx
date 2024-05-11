import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <main className="w-full h-screen p-8 bg-base-100 flex justify-center items-center">
            <Image src={"/blurredGradientBackground.png"} alt={""} quality={100} fill sizes="100vw" style={{objectFit: 'cover'}}/>
            
        </main>
    )
}
