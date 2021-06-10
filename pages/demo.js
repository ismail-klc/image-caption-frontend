import React, { useEffect, useRef, useState } from 'react'
import ImageUpload from '../components/imageUpload'
import Layout from '../components/layout'
import { connect, useSelector } from 'react-redux'
import actions from '../redux/actions'
import ProgressBar from 'react-bootstrap/ProgressBar'
import LoadingBar from '../components/loadingBar'

function Demo(props) {
  const [image, setImage] = useState('')
  const [reviewImage, setreviewImage] = useState('')
  const { loading, demo } = useSelector(state => state.photos)

  useEffect(() => {
    props.clearDemo()
    return () => {
      props.clearDemo()
      setreviewImage('')
    }
  }, [])


  const handleDemoAction = () => {
    const formData = new FormData()
    formData.append('picture', image)

    props.handleDemo(formData)
    setreviewImage(URL.createObjectURL(image))
    setImage('')
  }

  return (
    <Layout title="Demo">
      {
        !loading &&
        <ImageUpload
          btnAction={handleDemoAction}
          btnText={'Predict'}
          image={image}
          setImage={setImage}
        />
      }

      {
        loading &&
        <ProgressBar style={{margin: '50px 150px'}} 
          animated now={100} 
          label={"Please wait, predicting..."}/>
      }

      {
        !loading &&
        <div style={{margin: '75px 0', textAlign: 'center'}}>
          <h2>{demo}</h2>
          <img src={reviewImage}/>
        </div>
      }
    </Layout>
  )
}

export default connect((state) => state, actions)(Demo)
