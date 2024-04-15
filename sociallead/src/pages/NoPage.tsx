import LandingPageNavbar from '../components/LandingPageNavbar'
import ERR from './Nopage.module.css'




export default function NoPage() {
    return ( 
        <div>
            <body>
                <div className={ERR.errorpage}>
                    <div className={ERR.content}>
                        <h2 className={ERR.header} data-text="404">
                            404
                        </h2>
                        <h4 data-text="Opps! Page not found" className='header'>
                            Opps! Page not found
                        </h4>
                        <p>
                            Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
                        </p>
                        <div className={ERR.btns}>
                            <div data-w-id="27ec819a-a299-2e55-4731-c1f9d88c8956" className='home-hero-button-wrap'>
                                <a href="./" className='main-button w-button'>Return Home</a>
                            </div>
                            <div data-w-id="27ec819a-a299-2e55-4731-c1f9d88c8956" className={`${ERR['home-hero-button-wrap']}`}>
                                <a href="mailto:mahdi.a.ezz@gmail.com" className='main-button w-button'>Report Problem</a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>

            
      </div>
      
    )
}