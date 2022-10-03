import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="top">
        <div className="left-items-div">
            <Link className="links guchiLink" to="/Home">
            {/* <img className="guchiLogo" src="https://media.istockphoto.com/photos/golden-letter-g-with-diamonds-on-black-background-clipping-path-picture-id1256171586?k=20&m=1256171586&s=612x612&w=0&h=-4g8YQA8KfGzYAJaV6wd45uL3nQV6eS1O3lgZOrv0rI="></img> */}
            {/* <p className="uchi">uchi</p> */}
            </Link>
        </div>
        <div className="right-items-div">
            <ul className="ul">
                <li>
                <Link className="links" to="/">
                    Home
                </Link> 
                </li>
                <li>
                    <Link className="links" to="/Interest">
                        Interest
                    </Link>
                </li>
                <li>
                    <Link className="links" to="/Tutorials">
                        Tutorials
                    </Link>
                </li>
                <li>
                    <Link className="links" to="/Login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link className="links" to="/Register">
                        Register
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
export default TopBar
