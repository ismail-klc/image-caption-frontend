import { connect, useSelector } from 'react-redux';
import actions from '../redux/actions';
import Layout from '../components/layout'
import Photo from '../components/photo'
import Search from '../components/search'
import { useEffect } from 'react';

function Home(props) {
    const { photos, next_url } = useSelector(state => state.photos)

    useEffect(() => {
        if (photos.length === 0 || next_url === undefined) {
            props.getPhotos()
        }
    }, [])

    const loadMore = () => {
        if (next_url) {
            props.getPhotos(next_url)
        }
    }

    return (
        <Layout title={"Home"}>
            <div className="loaded">
                <div id="loader-wrapper">
                    <div id="loader"></div>
                    <div className="loader-section section-left"></div>
                    <div className="loader-section section-right"></div>
                </div>

                <Search />

                <div className="container-fluid tm-container-content tm-mt-60">
                    <div className="row mb-4">
                        <h2 className="col-6 tm-text-primary">
                            Latest Photos
                        </h2>
                    </div>

                    <div className="row tm-mb-90 tm-gallery">
                        {
                            photos.length === 0 ? "Loading..." : photos.map((p, index) => (
                                <Photo
                                    id={p.id}
                                    key={p.id}
                                    caption={p.caption}
                                    created_at={p.created_at}
                                    image={p.image}
                                    user={p.user} />
                            ))}
                    </div>

                    <div className="row tm-mb-90">
                        {
                            next_url &&
                            <button
                                onClick={loadMore}
                                className="btn btn-primary col-md-3"
                                style={{ margin: 'auto' }}>
                                Load More
                            </button>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default connect(
    state => state,
    actions
)(Home)