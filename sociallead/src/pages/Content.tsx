import Sidebar from '../components/sidebar';
import CON from './Content.module.css';


export default function Content() {
    return (
        <div>
            
            <div> 
                <Sidebar />
            </div>

            <div>
                <div className="mb-8 space-y-4">
                    <h2 className='text-2xl md:'></h2>
                </div>
            </div>

        </div>
    )
}