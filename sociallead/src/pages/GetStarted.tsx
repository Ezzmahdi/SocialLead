import React, { useState } from "react";
import UserPool from "../UserPool";
import { SignUp } from "@clerk/clerk-react"


// Cognito

// const Signup = () => {
    
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const onSubmit = (event: React.FormEvent) => {
//         event.preventDefault();

//         UserPool.signUp(email, password, [], [], (err, data) => {
//             if (err) {
//                 console.error(err);
//             }
//             console.log(data);
//         });
//     };

//     return (
//         <form onSubmit={onSubmit} id="email-form" name="email-form" data-name="Email Form" method="get" className="signup-form">
//             <div className="form-field-block _100">
//                 <label htmlFor="email-3" className="text-label dark">Email*</label>
//                 <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-input alter w-input" maxLength={256} name="email" data-name="email" placeholder="Enter your email" id="email-3" required/>
//             </div>
//             <div className="form-field-block _100">
//                 <label htmlFor="Password" className="text-label dark">Password*</label>
//                 <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="form-input alter w-input" maxLength={256} name="Password" data-name="Password" placeholder="Enter your password" id="Password" required/>
//             </div>
//             <input type="submit" value="Continue" data-wait="Please wait..." className="main-button w-button"/>
//         </form>
//     )
// }




export default function GetStarted() {
    return (
        <div>
            <body className="bg-dark">
                <div className="page-wrapper overflow-hidden">
                    <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
                        <div className="nav-container">
                            <div className="nav-slide-plane">
                                <a href="./" className="nav-logo-link w-nav-brand">
                                    <img src="Icon-white.svg" alt="SocialLead Logo" className="nav-logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <main className="main-wrapper">
                        <div className="signup-main-section">
                            <div className="wrapper-1080px">
                                <div className="sign-main-wrapper">
                                    <a href="http://google.com" target="_blank" className="google-block w-inline-block">
                                        <img src="https://assets.website-files.com/635f628bf1c725f2f584e359/635f628bf1c7250d3d84e3e7_Google__G__Logo.svg" loading="lazy" alt="Goole Icon" className="google-logo"/>
                                        <div>Continue with Google</div>
                                    </a>
                                    <div className="signup-text">
                                        Already have an account? <a href="/login" className="signup-link">Login</a>
                                    </div>
                                    <div className="signup-form-main-block">
                                        <div className="signup-form-block w-form">
                                            
                                            <SignUp />

                                            <div className="success-message w-form-done">
                                                <div>Thank you! Your submission has been received!</div>
                                            </div>
                                            <div className="error-message w-form-fail">
                                                <div>Oops! Something went wrong while submitting the form.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
        </div>
    )
}