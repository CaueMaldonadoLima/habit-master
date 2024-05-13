import HabitsCreate from '@/components/habits/HabitsCreate'
import React from 'react'

export default function page() {
    
    return (
        <main className='w-full h-auto flex flex-col items-center justify-center space-y-1 px-8'>
           <HabitsCreate/>
        </main>
    )
}
