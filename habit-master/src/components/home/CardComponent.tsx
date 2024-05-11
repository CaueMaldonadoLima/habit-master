'use client'
import React from 'react'

interface Props {
    type?: 'Create' | 'Visualize' | 'Share' | 'GitHub'
}

export default function CardComponent({type} : Props) {
    return (
        <>
        {type == 'Create' &&
            <button className='btn w-full px-2 py-8 rounded-3xl h-full shadow-lg border-4 border-primary border-opacity-35 bg-base-100 space-y-4'>
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
            <button className='btn w-full px-2 py-8 rounded-3xl h-full shadow-lg border-4 border-primary border-opacity-35 bg-base-100 space-y-4'>
                <div id='title' className='flex space-x-2 w-full items-center justify-center'>
                    <span className='text-2xl font-bold text-primary'> Check your current habits!</span>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Winking%20Face.png" alt="Winking Face" width="35" height="25" />
                </div>
                <div id='description'>
                    <span className='text-lg text-secondary'>Click here to check your current habits!</span>
                </div>
            </button>
        }
        {type == 'Share' &&
            <button className='btn w-full px-2 py-8 rounded-3xl h-full shadow-lg border-4 border-primary border-opacity-35 bg-base-100 space-y-4'>
                <div id='title' className='flex space-x-2 w-full items-center justify-center'>
                    <span className='text-2xl font-bold text-primary'> Share Habit Master!</span>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Clapping%20Hands.png" alt="Clapping Hands" width="35" height="25" />
                </div>
                <div id='description'>
                    <span className='text-lg text-secondary'>Click here to share this application with your friends!</span>
                </div>
            </button>
        }
        {type == 'GitHub' &&
            <button className='btn w-full px-2 py-8 rounded-3xl h-full shadow-lg border-4 border-primary border-opacity-35 bg-base-100 space-y-4'>
                <div id='title' className='flex space-x-2 w-full items-center justify-center'>
                    <span className='text-2xl font-bold text-primary'> Check this project on GitHub!</span>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium%20Skin%20Tone.png" alt="Man Technologist Medium Skin Tone" width="50" height="45" />
                </div>
                <div id='description'>
                    <span className='text-lg text-secondary'>Click here to check this project on GitHub, if this project helped you someway consider leaving a star!</span>
                </div>
            </button>
        }
        </>
    )
}
