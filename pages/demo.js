import React, { useEffect, useRef, useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/demo.module.css'

function Demo() {
    const [imgPath, setImgPath] = useState("")
    const inputFile = useRef()

    useEffect(() => {
    }, [])

    const readURL = e => {
        setImgPath(URL.createObjectURL(e.target.files[0]))
    }

    const onButtonClick = () => {
        if (inputFile.current !== null) {
            inputFile.current.click();
        }
        else {
            removeUpload()
        }
    };

    const removeUpload = () => {
        setImgPath("")
    }

    return (
        <Layout title="Demo">
            <div className={styles.fileUpload}>
                <button className={styles.fileUploadBtn} type="button" onClick={onButtonClick}>Add Image</button>

                {
                    !imgPath &&
                    <div className={styles.imageUploadWrap}>
                        <input className={styles.fileUploadInput} ref={inputFile} type='file' onChange={readURL} accept="image/*" />
                        <div className={styles.dragText}>
                            <h3>Drag and drop a file or select add Image</h3>
                        </div>
                    </div>
                }
                {
                    imgPath &&
                    <div className={styles.fileUploadContent}>
                        <img className={styles.fileUploadImage} src={imgPath} alt="your image" />
                        <div className={styles.imageTitleWrap}>
                            <button type="button" onClick={removeUpload} className={styles.removeImage}>Remove &nbsp;
                                <span className={styles.imageTitle}>Uploaded Image</span>
                            </button>
                            <button type="button" className={styles.removeImage}>Predict &nbsp;
                                <span className={styles.imageTitle}>Uploaded Image</span>
                            </button>
                        </div>
                    </div>
                }
            </div>

            <div style={{ height: '5rem' }}>

            </div>
        </Layout>
    )
}

export default Demo
