import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Book = ({book}) =>{
    return(
        <div className="book">
                            <a href="">
                                <figure className="book__img--wrapper">
                                    <img src={book.url} alt="" className="book__img" />
                                </figure>
                            </a>
                            <div className="boook__title">
                                <a href="" className="book__title--link">{book.title}</a>
                            </div>
                            <div className="book_ratings">

                            </div>
                            <div className="book__price">
                                {book.salePrice ? (
                                    <>
                                        <span className="book__price--normal">${book.originalPrice.toFi xed(2)}</span>
                                        ${book.salePrice}
                                    </>
                                ) : (
                                    <>
                                    ${book.originalPrice}
                                    </>)
                            }
                            </div>
                        </div>

    );
};

export default Book
