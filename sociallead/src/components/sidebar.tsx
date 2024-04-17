import React, { useState } from 'react';
import BAR from './sidebar.module.css'




export default function Sidebar() {

  return (
        <nav className={`${BAR.sidebar}`}>
            <header>
                <div className={BAR.imagetext}>
                    <span className={BAR.image}>
                        <img src="logo.svg" alt="logo"/>
                    </span>

                    <div className={`${BAR.text} ${BAR.headertextBAR}`}>
                        <span className={BAR.name}>User</span>
                        <span className={BAR.profession}>Agent</span>
                    </div>
                </div>

                <i className={`bx bx-chevron-right ${BAR.toggle}`}></i>
            </header>

            <div className={BAR.menubar}>
                <div className={BAR.menu}>

                    <li className={BAR.searchbox}>
                        <i className={`bx bx-search ${BAR.icon}`}></i>
                        <input type="search" placeholder="Search..." className={BAR.input}/>
                    </li>

                    <ul className={BAR.menulinks}>

                        <li className={`${BAR['nav-link']} `}>
                            <a href="" >
                                <i className={`bx bx-home-alt icon ${BAR.icon}`}></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Dashboard</span>
                            </a>
                        </li>

                        <li className={`${BAR['nav-link']} `}>
                            <a href="" >
                                <i className={`bx bx-book-content ${BAR.icon}`}></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Content</span>
                            </a>
                        </li>

                        <li className={`${BAR['nav-link']} `}>
                            <a href="" >
                                <i className={`bx bx-calendar ${BAR.icon}`}></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Schedule</span>
                            </a>
                        </li>

                        <li className={`${BAR['nav-link']} `}>
                            <a href="" >
                                <i className={`bx bx-analyse ${BAR.icon}`}></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Analytics</span>
                            </a>
                        </li>

                        {/* <li className={`${BAR['nav-link']} `}>
                            <a href="" >
                                <i className={`bx bx-bell ${BAR.icon}`}></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Notification</span>
                            </a>
                        </li> */}

                    </ul>
                </div>

                <div className={`${BAR['bottom-content']}`}>
                    <li className={``}>
                        <a href="">
                            <i className={`bx bx-log-out ${BAR.icon}`}></i>
                            <span className={`${BAR.text} ${BAR['nav-text']}`}>Logout</span>
                        </a>
                    </li>

                    {/* <li className={`${BAR.mode} `}>
                        <div className={`${BAR['moon-sun']}`}>
                            <i className={`bx bx-moon ${BAR.icon} ${BAR.moon}`}></i>
                            <i className={`bx bx-sun ${BAR.icon} ${BAR.sun}`}></i>
                        </div>

                        <span className={`${BAR.modetext} ${BAR.text}`}>Dark Mode</span>

                        <div className={BAR.toggleswitch}>
                            <span className={BAR.switch}></span>
                        </div>

                    </li> */}
                </div>
            </div>
        </nav>


  )
}
