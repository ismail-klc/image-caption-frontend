import styles from '../public/css/demo.module.css'
import React, {  useRef, useState } from 'react'

function ImageUpload(props) {

    const [imgPath, setImgPath] = useState("")
    const inputFile = useRef()

    const readURL = e => {
        setImgPath(URL.createObjectURL(e.target.files[0]))
        props.setImage(e.target.files[0])
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
        props.setImage("")
    }

    return (
        <div className={styles.fileUpload}>
                <button className={styles.fileUploadBtn} type="button" onClick={onButtonClick}>Add Image</button>
                {
                    !imgPath &&
                    <div className={styles.imageUploadWrap}>
                        <input
                        value={props.image}
                        className={styles.fileUploadInput} ref={inputFile} type='file' onChange={readURL} accept="image/*" />
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
                            <button onClick={props.btnAction} type="button" className={styles.removeImage}>{props.btnText} &nbsp;
                                <span className={styles.imageTitle}>loaded Image</span>
                            </button>
                        </div>
                    </div>
                }
            </div>
    )
}

export default ImageUpload