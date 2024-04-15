




export default function ForgetPass() {
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
                        <div className="signup-main-section forgot-pass-sec">
                            <div className="wrapper-1080px">
                                <div className="sign-main-wrapper">
                                    <h1 className="heading-white">Forgot Password</h1>
                                    <div className="signup-form-main-block">
                                        <div className="signup-form-block w-form">
                                            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="signup-form">
                                                <div className="form-field-block _100">
                                                    <label htmlFor="new-pass" className="text-label dark">New Password</label>
                                                    <input type="password" className="form-input alter w-input" maxLength={256} name="new-pass" data-name="new-pass" placeholder="Enter new password" id="new-pass" required/>
                                                </div>
                                                <div className="form-field-block _100">
                                                    <label htmlFor="Password" className="text-label dark">Confirm Password</label>
                                                    <input type="password" className="form-input alter w-input" maxLength={256} name="Password" data-name="Password" placeholder="Enter your password" id="Password" required/>
                                                </div>
                                                <input type="submit" value="Continue" data-wait="Please wait..." className="main-button w-button"/>
                                            </form>
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