import React, {useState} from "react";
export default function Footer(){
    const [isAgreed, setIsAgreed] = useState(false);
    const handleAgreeToggle = () => {
        setIsAgreed(!isAgreed);
    };
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <h2>TWITTER</h2>
                    <p>
                        Established in 1998, dfdfvdfvdfvd
                    </p>
                </div>
                <div className="footer-contact">
                    <h3>Reach Out</h3>
                    <p>Email: TWitter@tw.COM</p>
                    <p>Tel: +41 22 345 66 77</p>
                    <p>Fax: +41 22 345 77 89</p>
                    <p>Rue de Lausanne, 1202 Genève, Switzerland</p>
                    <a href="#">GET DIRECTIONS</a>
                </div>
                <div className="footer-newsletter">
                    <h3>Sign up for newsletter</h3>
                    <input type="text" placeholder="Your Email Address" />
                    <button>Subscribe</button>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <label>
                            <input type="checkbox"  checked={isAgreed} onChange={handleAgreeToggle} />
                            I agree to the Privacy Policy
                        </label>
                    </div>
                </div>
            </div>

            <div className="footer-legal">
                <p>&copy; {new Date().getFullYear()} HJhjhj hjdhjh dfhdjfhdj.</p>
            </div>
        </footer>
    )
}