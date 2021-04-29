import React, { useEffect, useState } from 'react'
import actions from '../redux/actions';
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import Layout from '../components/layout'
import Photo from '../components/photo';
import ImageUpload from '../components/imageUpload';

function Profile(props) {
    const { photos } = useSelector(state => state.photos)
    const [show, setShow] = useState(false)

    useEffect(() => {
        props.getUploads()
    }, [])


    return (
        <Layout title="Demo">
            <div className="container-fluid tm-container-content tm-mt-60">

                <button onClick={() => setShow(!show)} className="btn btn-outline-success btn-lg">Add Image</button>
                {show && <ImageUpload
                    btnAction={ null }
                    btnText={"Upload"}
                />}

                <div className="row mb-4 mt-5">
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
