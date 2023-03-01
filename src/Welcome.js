
import { useAuth0 } from "@auth0/auth0-react";
import restMouse from './Assets/restMouse.png';
import myLogo from './Assets/My-new-Logo.png';
import CatLeft from "./CatLeft";
import CatRight from "./CatRight";

const Welcome = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const year = new Date().getFullYear();

    return (
        !isAuthenticated && (
            <div className="WelcomeBox">
                <CatRight />
                <div className="container marketing">
                    <div className="row featurette">
                        <div className="col-md-5 order-md-1 d-flex justify-content-center">
                            <img className='img-fluid restMouse' src={restMouse} alt="restMouse" />
                        </div>

                        <div className="col-md-7 order-md-2 py-3">
                            <h2 className="featurette-heading WelcomeTitle text-center display-4 fw-normal py-2 lh-3 mb-3">
                                <span className="word1">YOUR</span> <span className="word2">SIMPLE</span> <span className="word3">TO-DOS</span> <span className="word4">PLANER</span>
                            </h2>
                            <p className="WelcomeText1 text-center py-3 m-0">
                                Just keep your every day's tasks save, and store it carefully
                            </p>
                            <p className="text-center WelcomeText2 py-3">
                                Let's get <span className="word5">started!</span>
                            </p>

                            <div className="w-100 d-flex justify-content-center my-3">
                                <div className="btn-11" onClick={() => loginWithRedirect()} >
                                    <span className="WelcomeBtnText">LOG IN/SIGN UP FOR FREE</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <footer className="py-3 pt-5 mb-4 d-flex flex-column align-items-center justify-content-center">
                        <small className="text-muted FooterText">
                            We do not share your personal data with third parties. 
                            We only use it to improve the quality of our App.
                        </small>
                        <small className="text-muted FooterText">
                            All images were taken from the internet, and are used for educational purpose only
                            Used source: <a href="https://www.mousedc.ru/learning/477-chtenie-zapis-faylov-nodejs/" target="_blank" rel = "noreferrer">MouseDC</a>
                        </small>
                        <p className="text-center text-muted FooterLogoText pt-2">
                            <i className="bi bi-c-circle"></i> {year} Created with 
                            <i className="bi bi-heart-fill mx-2"></i>
                            by <br />
                            <img className="myLogo ms-2" src={myLogo} alt="myLogo" />
                        </p>
                    </footer>
                </div>
                <CatLeft />
            </div>
        )
    )
}
export default Welcome;