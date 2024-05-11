'use client'
import React, { useEffect, useState } from 'react'

export default function MainTextComponent() {

    return (
        <div className='w-fit flex '>
            <div className='p-4 space-x-2 space-y-1 w-fit'>
                <div className='w-full flex items-center justify-start'>
                    <span className='text-2xl text-primary ml-3'>Hi </span>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" alt="Waving Hand" width="25" height="25" />
                    <span className='text-2xl text-primary'>, Welcome to</span>
                </div>
                <div className='w-full flex items-center justify-start'>
                    <span className='text-7xl text-primary font-extrabold text-opacity-30'>HABIT MASTER</span>
                </div>
                <div className='w-full flex items-center justify-start'>
                    <span className='text-lg text-primary'>Transform your daily routine and elevate your habits to new heights.</span>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Writing%20Hand.png" alt="Writing Hand" width="25" height="25" />
                </div>
                <div className='w-full flex items-center justify-center'>
                    <button className='btn btn-primary btn-wide text-white'>Get Started!</button>
                </div>
            </div>
            <div className='w-fit hidden md:block'>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Spiral%20Calendar.png" alt="Spiral Calendar" width="250" height="250" />
            </div>
        </div>
    )
}
