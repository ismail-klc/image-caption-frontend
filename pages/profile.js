import React, { useEffect } from 'react'
import actions from '../redux/actions';
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import Layout from '../components/layout'
import Photo from '../components/photo';

function Profile(props) {
    const {photos} = useSelector(state => state.photos)

    useEffect(() => {
        props.getUploads()   
    }, [])

    return (
        <Layout title="Demo">
            <div className="container-fluid tm-container-content tm-mt-60">
                    <div className="row mb-4">
                        <h2 className="col-6 tm-text-primary mb-3">
                            Uploads
                        </h2>
                    </div>

                    <div className="row tm-mb-90 tm-gallery">

                        {photos.length > 0 ? photos.map((p, index) => (
                            <Photo 
                                id={p.id}
                                key={p.id}
                                caption={p.caption}
                                created_at={p.created_at}
                                image={p.image}
                                user={p.user} />
                        )) : "No uploaded image"}
                    </div>
                </div>
        </Layout>
        )
}

export default connect(
    state => state,
    actions
)(Profile)
