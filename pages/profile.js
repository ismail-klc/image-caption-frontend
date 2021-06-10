import React, { useEffect, useState } from 'react'
import actions from '../redux/actions';
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import Layout from '../components/layout'
import Photo from '../components/photo';
import ImageUpload from '../components/imageUpload';
import LoadingBar from '../components/loadingBar'

function Profile(props) {
    const { photos, loading } = useSelector(state => state.photos)
    const [show, setShow] = useState(false)
    const [image, setImage] = useState('')

    const handleUploadAction = () => {
        const formData = new FormData()
        formData.append('image', image)
        formData.append('caption', 'image caption')

        props.handleAddPhoto(formData)
        setImage('')
        setShow(false)
    }

    useEffect(() => {
        props.getUploads()
    }, [])


    return (
        <Layout title="Profile">
            <div className="container-fluid tm-container-content tm-mt-60">

                {
                    !loading &&
                    <button onClick={() => setShow(!show)} className="btn btn-outline-success btn-lg">Add Image</button>
                }

                {
                    loading && 
                    <LoadingBar text={"Please wait, loading..."}/>
                }

                {show && <ImageUpload
                    btnAction={handleUploadAction}
                    btnText={'Upload'}
                    image={image}
                    setImage={setImage}
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
