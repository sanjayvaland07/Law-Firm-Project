import './Landing.css'
import landingImg from '../assets/landing img1.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import footerBg from '../assets/hero-footer-bg.png'
function Landing(){
    return (
        <section>
            <div className="landing">
                <div className="left">
                    <h1>Clients Success is Our Focus</h1>
                    <p>
                        Committed to your success, our consulting firm delivery toilored
                        strategies and expert guidance, ensuring business excellence through
                        precise solutions and strategic expertise for sustainable growth.
                    </p>
                    <button className='landing-btn'>
                        Collaborate with Us
                    </button>
                </div>
                <div className="right">
                    <img src={landingImg} alt="" />
                </div>
            </div>
            <div className="footer-landing">
                <img src={landingImg} alt="img1" />
                <img src={img1} alt="img1" />
                <img src={img2} alt="img1" />
                <img src={img3} alt="img1" />
                <img src={img4} alt="img1" />
                <img src={footerBg} alt="" className='footer-bg'/>
            </div>
        </section>
    )
}

export default Landing;