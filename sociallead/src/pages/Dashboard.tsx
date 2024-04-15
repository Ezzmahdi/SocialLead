import Sidebar from '../components/sidebar';
import DASH from './Dashboard.module.css'



export default function Dashboard() {
    return (
        <div>
            
            <div className={DASH.sidebar}>
                <Sidebar />
            </div>

            <div className={DASH.content}>
                <nav>
                    <i></i>
                    <form action="#">
                        <div className={DASH.forminput}>
                            <input type="search" placeholder="Search..."/>
                            <button className='search-btn' type="submit"><i className='bx bx-search'></i></button>
                        </div>
                    </form>
                    <a href="#" className={DASH.notif}>
                        <i className='bx bx-bell'></i>
                        <span className={DASH.count}>0</span>
                    </a>
                    <a href="#" className={DASH.profile}>
                        <img src="./logo.svg"/>
                    </a>
                </nav>

                <main>
                    <div className={`${DASH.header}`}>
                        <div className={`${DASH.left}`}>
                            <h1>Dashboard</h1>
                            <ul className={`${DASH.breadcrumb}`}>
                                <li><a href="#">
                                    Analytics
                                </a></li>
                                /
                                <li><a href="#" className="active">Stats</a></li>
                            </ul>
                        </div>
                        <a href="#" className={`${DASH.report}`}>
                            <i className='bx bx-cloud-download'></i>
                            <span>Download CSV</span>
                        </a>
                    </div>

                    <ul className={DASH.insights}>
                        <li>
                            <i className={`bx bx-calendar-check ${DASH.bx}`}></i>
                            <span className={DASH.info}>
                                <h3>
                                    0
                                </h3>
                                <p>Posts</p>
                            </span>
                        </li>
                        <li>
                            <i className={`bx bx-show-alt ${DASH.bx}`}></i>
                            <span className={DASH.info}>
                                <h3>
                                    0
                                </h3>
                                <p>followers</p>
                            </span>
                        </li>
                        <li>
                            <i className={`bx bx-line-chart ${DASH.bx}`}></i>
                            <span className={DASH.info}>
                                <h3>
                                    0
                                </h3>
                                <p>Views</p>
                            </span>
                        </li>
                        <li>
                            <i className={`bx bx-solid-like ${DASH.bx}`}></i>
                            <span className={DASH.info}>
                                <h3>
                                    0
                                </h3>
                                <p>Likes</p>
                            </span>
                        </li>
                    </ul>

                    <div className={`${DASH['bottom-data']}`}>
                        <div className={`${DASH.orders}`}>
                            <div className={`${DASH.header}`}>
                                <i className='bx bx-receipt'></i>
                                <h3>Recent Posts</h3>
                                <i className='bx bx-filter'></i>
                                <i className='bx bx-search'></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Order Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="./profile-1.jpg"/>
                                            <p>SocialLead</p>
                                        </td>
                                        <td>14-08-2023</td>
                                        <td><span className={`${DASH.status} ${DASH.completed}`}>Completed</span></td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <img src="./profile-1.jpg"/>
                                            <p>John Doe</p>
                                        </td>
                                        <td>14-08-2023</td>
                                        <td><span className={`${DASH.status} ${DASH.pending}`}>Pending</span></td>
                                    </tr> */}
                                    {/* <tr>
                                        <td>
                                            <img src="./profile-1.jpg"/>
                                            <p>John Doe</p>
                                        </td>
                                        <td>14-08-2023</td>
                                        <td><span className={`${DASH.status} ${DASH.process}`}>Processing</span></td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>

                        <div className={`${DASH.reminders}`}>
                            <div className={`${DASH.header}`}>
                                <i className='bx bx-note'></i>
                                <h3>Reminders</h3>
                                <i className='bx bx-filter'></i>
                                <i className='bx bx-plus'></i>
                            </div>
                            <ul className={DASH.tasklist}>
                        <li className={DASH.completed}>
                            <div className={DASH.tasktitle}>
                                <i className='bx bx-check-circle'></i>
                                <p>Start Our Meeting</p>
                            </div>
                            <i className='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li className={DASH.completed}>
                            <div className={DASH.tasktitle}>
                                <i className='bx bx-check-circle'></i>
                                <p>Analyse Our Site</p>
                            </div>
                            <i className='bx bx-dots-vertical-rounded'></i>
                        </li>
                        <li className={DASH.notcompleted}>
                            <div className={DASH.tasktitle}>
                                <i className='bx bx-x-circle'></i>
                                <p>Play Footbal</p>
                            </div>
                            <i className='bx bx-dots-vertical-rounded'></i>
                        </li>
                    </ul>
                        </div>
                    </div>
                </main>

            </div>

        </div>
      
    )
}