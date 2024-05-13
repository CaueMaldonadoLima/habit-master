'use client'
import React, { useState } from 'react'
import { handWriting } from '../animatedEmojis'
import { useRouter } from 'next/navigation'

export default function HabitsCreate() {
    
    const router = useRouter();

    const [sending, setSending] = useState(false);

    const handleCancelClick = (route: string) => {
        if(!sending) {
            router.push(route)
            setSending(true)
        };
    }

    return (
        <div className='w-full p-8 border-4 border-primary flex flex-col items-center justify-center rounded-3xl shadow-lg bg-base-100 border-opacity-35 space-y-4'>
            <div className='flex items-center justify-center w-full space-x-2'>
                <h2 className='text-xl text-primary font-bold mt-2'>Create habit</h2>
                {handWriting()}
            </div>
            <div className='flex flex-col space-y-1 w-full'>
                <span className='text-primary font-semibold pl-2'>Title</span>
                <input type="text" placeholder='Type your habit title here!' className='rounded-xl input border-2 focus:outline-none focus:ring-primary focus:ring-2 border-primary border-opacity-35 shadow-lg'/>
            </div>
            <div className='flex flex-col space-y-1 w-full'>
                <span className='text-primary font-semibold pl-2'>Type</span>
                <select className='select rounded-xl p-2 border-2 focus:outline-none focus:ring-primary focus:ring-2 border-primary border-opacity-35 shadow-lg'>
                    <option disabled selected>Choose a habit type!</option>
                    <option>Sports</option>
                    <option>Health</option>
                    <option>Money</option>
                    <option>Other</option>
                </select>
            </div>
            <div className='flex flex-col space-y-1 w-full'>
                <span className='text-primary font-semibold pl-2'>Description</span>
                <textarea name="description" id="description" placeholder='Type your habit description here!' className='textarea rounded-xl p-2 border-2 focus:outline-none focus:ring-primary focus:ring-2 border-primary border-opacity-35 shadow-lg'></textarea>
            </div>
            <div className='w-full flex items-center justify-center pt-4 space-x-4'>
                <button onClick={() => handleCancelClick('/home')} disabled={sending} className='btn btn-wide border-2 border-primary border-opacity-35 bg-base-100 text-primary shadow-lg'>
                    {sending? <><span className="loading loading-spinner"></span>Loading</> : <>Cancel</>}
                </button>
                <button className='btn btn-wide border-2 border-primary btn-primary text-base-100 shadow-lg'>Confirm</button>
            </div>
        </div>
    )
}
