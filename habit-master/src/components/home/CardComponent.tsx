'use client'
import React from 'react'

interface Props {
    type?: 'Create' | 'Visualize'
}

export default function CardComponent({type} : Props) {
    return (
        <>
        {type == 'Create' &&
            <button className='btn px-2 py-8 rounded h-full shadow-lg bg-base-100 space-y-4'>
                <div id='title' className='flex space-x-2 w-full items-center justify-center'>
                    <span className='text-2xl font-bold text-primary'> Create a new Habit!</span>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png" alt="Beaming Face with Smiling Eyes" width="35" height="25" />
                </div>
                <div id='description'>
                    <span className='text-lg text-secondary'>Click here to start a new habit track</span>

                </div>
            </button>
        }
        {type == 'Visualize' &&
            <button className='btn px-2 py-8 rounded h-full shadow-lg bg-base-100 space-y-4'>
                <div id='title' className='flex space-x-2 w-full items-center justify-center'>
                    <span className='text-2xl font-bold text-primary'> Check your current habits!</span>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Winking%20Face.png" alt="Winking Face" width="35" height="25" />
                </div>
                <div id='description'>
                    <span className='text-lg text-secondary'>Click here to check your current habits!</span>

                </div>
            </button>
        }
        </>

    )
}
