import CardComponent from '@/components/home/CardComponent'
import React from 'react'

export default function page() {
    return (
        <main className='w-full h-auto flex flex-col items-center justify-center space-y-1 px-8'>
            <div className='w-[80%] space-y-2 flex flex-col items-center justify-center'>
                <CardComponent type='Create'/>
                <CardComponent type='Visualize'/>
                <CardComponent type='Share'/>
                <CardComponent type='GitHub'/>
            </div>
        </main>
    )
}
