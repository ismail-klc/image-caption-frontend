import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import Layout from '../../components/layout'
import Photo from '../../components/photo'
import Search from '../../components/search'
import actions from '../../redux/actions'
import Link from 'next/link'

function PhotoDetail(props) {
    const router = useRouter()
    const { photos } = useSelector(state => state.photos)
    const [photo, setPhoto] = useState(null)
    const id = router.query.id

    useEffect(() => {
        if (id !== undefined) {
            props.getSinglePhoto(id)
        }
    }, [router.query.id])

    useEffect(() => {
        if (photos.length > 0) {
            setPhoto(photos.find(x => x.id == id))
        }
    }, [photos, photo])

    const handleDownload = () => {
        window.location.href = photo.image

    }

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
                    {photos && photo && <div><div className="row mb-4">
                        <h2 className="col-12 tm-text-primary">{photo.caption}</h2>
                    </div>
                        <div className="row tm-mb-90">
                            <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                                <img src={photo.image} alt="Image" className="img-fluid" />
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                                <div className="tm-bg-gray tm-video-details">
                                    <div className="mb-4 d-flex flex-wrap">
                                        <div className="mr-4 mb-2">
                                            <span className="tm-text-gray-dark">Upload Date: </span><span className="tm-text-primary">{moment(photo.created_at).format('d MMM YY HH:MM')}</span>
                                        </div>
                                        <div className="mr-4 mb-2">
                                            <span className="tm-text-gray-dark">Uploaded By: </span><span className="tm-text-primary">{photo.user.username}</span>
                                        </div>
                                        <div className="mr-4 mb-2">
                                            <span className="tm-text-gray-dark">Format </span><span className="tm-text-primary">{"JPG"}</span>
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

                                        <a onClick={handleDownload} className="btn btn-primary tm-btn-big" >Download</a>
                                    </div>
                                </div>
                            </div>
                        </div></div>}
                    <div className="row mb-4">
                        <h2 className="col-12 tm-text-primary">
                            Related Photos
                        </h2>
                    </div>
                    <div className="row mb-3 tm-gallery">

                        {
                            photos.map((p, index) => (
                                <Photo 
                                    image={p.image}
                                    user={p.user}
                                    key={index} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default connect(
    state => state,
    actions
)(PhotoDetail)
