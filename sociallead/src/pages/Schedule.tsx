import Sidebar from '../components/sidebar';
import SCH from './Schedule.module.css'
import { useEffect } from 'react';
// import initializeCalendar from './Schedule.js'



export default function Schedule() {

    return (
        <div>
            <Sidebar/>

            <section className={SCH.home}>
                <div className={SCH.container}>
                    <div className={SCH.left}>
                        <div className={SCH.calendar}>
                            <div className={SCH.month}>
                                <i className={`fas fa-angle-left ${SCH.prev}`}></i>
                                <div className="date">december 2023</div>
                                <i className={`fas fa-angle-right ${SCH.next}`}></i>
                            </div>
                            <div className={SCH.weekdays}>
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                            </div>
                            <div className={SCH.days}>

                            </div>
                            <div className={SCH.gototoday}>
                                <div className={SCH.goto}>
                                    <input type="text" placeholder="mm/yyyy" className="date-input" />
                                    <button className="gotobtn">Go</button>
                                </div>
                                <button className="todaybtn">Today</button>
                            </div>
                        </div>
                    </div>
                    <div className={SCH.right}>
                        <div className={SCH.todaydate}>
                            <div className={SCH.eventday}>wed</div>
                            <div className={SCH.eventdate}>12th december 2022</div>
                        </div>
                        <div className={SCH.events}></div>
                        <div className={SCH.addeventwrapper}>
                            <div className={SCH.addeventheader}>
                                <div className={SCH.title}>Add Event</div>
                                <i className={`fas fa-times ${SCH.close}`}></i>
                            </div>
                            <div className={SCH.addeventbody}>
                                <div className={SCH.addeventinput}>
                                    <input type="text" placeholder="Event Name" className="event-name" />
                                </div>
                                <div className={SCH.addeventinput}>
                                    <input
                                      type="text"
                                      placeholder="Event Time From"
                                      className="eventtimefrom"
                                    />
                                </div>
                                <div className={SCH.addeventinput}>
                                    <input
                                      type="text"
                                      placeholder="Event Time To"
                                      className="eventtimeto"
                                    />
                                </div>
                            </div>
                            <div className={SCH.addeventfooter}>
                                <button className={SCH.addeventbtn}>Add Event</button>
                            </div>
                        </div>
                    </div>
                    <button className={SCH.addevent}>
                        <i className="bx bx-plus-medical"></i>
                    </button>
                </div>
            </section>

        </div>
    )
}