import React from 'react'

export default function Footer() {
    return (
        <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer sticky-bottom">
        <div className="container-fluid tm-container-small">
            <div className="row">
                <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
                    Copyright {new Date().getFullYear()} | Image Captioning Web Site
                </div>
                <div className="col-lg-4 col-md-5 col-12 px-5 text-right">
                    {/* Designed by <a href="https://templatemo.com" className="tm-text-gray" rel="sponsored" target="_parent">TemplateMo</a> */}
                </div>
            </div>
        </div>
    </footer>
    )
}
