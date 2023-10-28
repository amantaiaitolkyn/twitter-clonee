import React, { useState } from "react";
// import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header(){
    const [nav, setNav] = useState(false);
    return (
        <header>
            <div className="contact-info">
                <p>RUE DE LAUSANNE</p>
                <p>TEL: +41 22 345 67 88</p>
                <p>FAX: +41 22 345 67 89</p>
                <p>Email: <a href="mailto:TWitter@tw.COM">TWitter@tw.COM</a></p>
            </div>
            <hr className="horizontal-line" />
            <div>
                <ul className={nav ? ["menu", "active"].join(' ') : ["menu"]}>
                    <div className="navigation-links">
                        <Link to="/"></Link>
                        <Link to="home">Home</Link>
                        <Link to="posts">Posts</Link>
                        <Link to="profile">Profile</Link>
                    </div>
                </ul>

            </div>
        </header>
    )
}