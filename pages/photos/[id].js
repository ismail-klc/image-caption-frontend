import React from 'react'
import Layout from '../../components/layout'
import Photo from '../../components/photo'
import Search from '../../components/search'

export default function PhotoDetail() {
    return (
        <Layout title={"Photo Detail"}>
            <div className="loaded">
                <div id="loader-wrapper">
                    <div id="loader"></div>

                    <div className="loader-section section-left"></div>
                    <div className="loader-section section-right"></div>

                </div>

                <Search />

                <div className="container-fluid tm-container-content tm-mt-60">
                    <div className="row mb-4">
                        <h2 className="col-12 tm-text-primary">Photo title goes here</h2>
                    </div>
                    <div className="row tm-mb-90">
                        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                            <img src="/img/img-01-big.jpg" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                            <div className="tm-bg-gray tm-video-details">
                                <div className="mb-4 d-flex flex-wrap">
                                    <div className="mr-4 mb-2">
                                        <span className="tm-text-gray-dark">Dimension: </span><span className="tm-text-primary">1920x1080</span>
                                    </div>
                                    <div className="mr-4 mb-2">
                                        <span className="tm-text-gray-dark">Format: </span><span className="tm-text-primary">JPG</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="tm-text-gray-dark mb-3">Tags</h3>
                                    <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Cloud</a>
                                    <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Bluesky</a>
                                    <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Nature</a>
                                    <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Background</a>
                                    <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Timelapse</a>
                                    <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Night</a>
                                    <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Real Estate</a>
                                </div>

                                <div className="text-center" style={{ marginTop: '250px' }}>
                                    <a href="#" className="btn btn-primary tm-btn-big">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <h2 className="col-12 tm-text-primary">
                            Related Photos
                        </h2>
                    </div>
                    <div className="row mb-3 tm-gallery">

                        {[1, 2, 3, 4, 5, 6, 7, 8].map((p, index) => (
                            <Photo key={index} />
                        ))}

                    </div>
                </div>
            </div>
        </Layout >
    )
}
