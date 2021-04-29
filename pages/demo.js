import React, { useEffect, useRef, useState } from 'react'
import ImageUpload from '../components/imageUpload'
import Layout from '../components/layout'

function Demo() {
    

    return (
        <Layout title="Demo">
            
            <ImageUpload 
                btnAction={null}
                btnText={"Predict"}
            />
            <div style={{ height: '5rem' }}>

            </div>
        </Layout>
    )
}

export default Demo
