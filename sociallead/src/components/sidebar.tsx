import React, { useState } from 'react';
import { useEffect } from 'react';
import BAR from './sidebar.module.css'




export default function Sidebar() {
    useEffect(() => {
        const body = document.querySelector('body');
        const sidebar = document.querySelector(`${BAR.sidebar}`);
        const toggle = document.querySelector(`${BAR.toggle}`);
        const searchBtn = document.querySelector(`${BAR.searchbox}`);
        const modeText = document.querySelector(`${BAR.modetext}`);
        const modeSwitch = document.querySelector(`${BAR.toggleswitch}`);

        if (toggle) {
            toggle.addEventListener('click', () => {
                if (sidebar) {
                    sidebar.classList.toggle('close');
                } else {
                    console.error('Sidebar element not found.');
                }
            });
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                if (sidebar) {
                    sidebar.classList.remove('close');
                } else {
                    console.error('Sidebar element not found.');
                }
            });
        }

        if (modeSwitch) {
            modeSwitch.addEventListener('click', () => {
                body?.classList.toggle('dark');

                if (modeText) {
                    (modeText as HTMLElement).innerText = body?.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
                }
            });
        }
    }, []);

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

                        <li className={`${BAR['nav-link']} `}>
                            <a href="" >
                                <i className={`bx bx-bell ${BAR.icon}`}></i>
                                <span className={`${BAR.text} ${BAR['nav-text']}`}>Notification</span>
                            </a>
                        </li>

                    </ul>
                </div>

                <div className={`${BAR['bottom-content']}`}>
                    <li className={``}>
                        <a href="">
                            <i className={`bx bx-log-out ${BAR.icon}`}></i>
                            <span className={`${BAR.text} ${BAR['nav-text']}`}>Logout</span>
                        </a>
                    </li>

                    <li className={`${BAR.mode} `}>
                        <div className={`${BAR['moon-sun']}`}>
                            <i className={`bx bx-moon ${BAR.icon} ${BAR.moon}`}></i>
                            <i className={`bx bx-sun ${BAR.icon} ${BAR.sun}`}></i>
                        </div>

                        <span className={`${BAR.modetext} ${BAR.text}`}>Dark Mode</span>

                        <div className={BAR.toggleswitch}>
                            <span className={BAR.switch}></span>
                        </div>

                    </li>
                </div>
            </div>
        </nav>

  )
}
