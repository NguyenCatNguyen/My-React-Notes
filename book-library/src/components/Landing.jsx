import React from "react";
import UndrawBooks from '../assets/Undraw_Books.svg'
const Landing = () => {
    return(
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header_description">
                        <h1>Find the knowledge you looking for</h1>
                        <h2>All the book you want at <span className="purple">Library</span></h2>
                        <a href="#features">
                            <button className="btn">Browse books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" className="" />
                    </figure>
                </div>
            </header>
        </section>
    )
}

export default Landing