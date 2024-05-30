import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Featured = () => {
    return(
        <section id='features'>
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className='purple'>Books</span>
                    </h2>
                    <div className="books">
                        <div className="book">
                            <a href="">
                                <figure className="book__img--wrapper">
                                    <img src="" alt="" className="book__img" />
                                </figure>
                            </a>
                            <div className="boook__title">
                                <a href="" className="book__title--link"></a>
                            </div>
                            <div className="book_ratings">

                            </div>
                            <div className="book__price">
                                <span className="book__price--normal">23</span>323
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured