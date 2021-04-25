import React from 'react'
import { Parallax } from 'react-parallax'

export default function Search() {
    return (
        <Parallax
            className="tm-hero d-flex justify-content-center align-items-center"
            bgImage='/img/p.jpg'>
                <form className="d-flex tm-search-form">
                    <input className="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success tm-search-btn" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
        </Parallax>
    )
}
