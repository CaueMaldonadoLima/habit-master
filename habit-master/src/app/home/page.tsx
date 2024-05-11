import CardComponent from '@/components/home/CardComponent'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <main className="w-full h-screen p-8 bg-base-100 flex justify-center items-center">
            <Image src={"/blurredGradientBackground.png"} alt={""} quality={100} fill sizes="100vw" style={{objectFit: 'cover'}}/>
            <div className='absolute'>
                <div className='w-full flex flex-col space-y-4'>
                    <CardComponent type='Create'/>
                    <CardComponent type='Visualize'/>
                </div>
            </div>
        </main>
    )
}
