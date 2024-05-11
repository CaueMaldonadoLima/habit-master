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
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                {settingsIcon()}
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">text</span>
                                <span className="text-info">text</span>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        {userIcon()}
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
