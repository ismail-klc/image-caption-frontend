import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import actions from '../redux/actions';
import Layout from '../components/layout'
import SearchComponent from '../components/search'
import Photo from '../components/photo';

function Search(props) {
    const router = useRouter()
    const caption = router.query.caption
    const { photos } = useSelector(state => state.photos)

    useEffect(() => {
        props.handleSearch(caption)
    }, [caption])

    return (
        <Layout title={"Search"}>
            <div className="loaded">
                <div id="loader-wrapper">
                    <div id="loader"></div>
                    <div className="loader-section section-left"></div>
                    <div className="loader-section section-right"></div>
                </div>

                <SearchComponent />

                <div className="container-fluid tm-container-content tm-mt-60">
                    <div className="row mb-4">
                        <h2 className="col-6 tm-text-primary">
                        {photos.length} {photos.length > 1 ? "results" : "result"} for keyword "{caption}" 
                        </h2>
                    </div>

                    <div className="row tm-mb-90 tm-gallery">
                        {
                            photos.length === 0 ? "" : photos.map((p, index) => (
                                <Photo
                                    id={p.id}
                                    key={p.id}
                                    caption={p.caption}
                                    created_at={p.created_at}
                                    image={p.image}
                                    user={p.user} />
                            ))}
                    </div>


                </div>
            </div>
        </Layout>
    )
}

export default connect(
    state => state,
    actions
)(Search)