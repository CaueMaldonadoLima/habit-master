'use client'
import React from 'react'
import { settingsIcon, userIcon } from './icons'

export default function NavBar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="flex-1 space-x-2">
                    <span className="text-xl font-extrabold text-primary">Habit Master</span>
                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Rabbit.png" alt="Rabbit" width="35" height="25" />
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator text-primary">
                                {settingsIcon()}
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                    <div role="button" className="btn btn-ghost btn-circle avatar text-primary">
                        {userIcon()}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
