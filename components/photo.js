import Link from 'next/link'
import React from 'react'
import Moment from 'moment';

export default function Photo(props) {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure className="effect-ming tm-video-item">
                <img src={props.image} alt="Image" className="img-responsive" style={{alignItems:'center',  width:'auto', height: '300px'}}/>
                <figcaption className="d-flex align-items-center justify-content-center">
                    <h6>{props.caption}</h6>
                    <Link href={`/photos/${props.id}`}><a>View more</a></Link>
                </figcaption>
            </figure>
            <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">{Moment(props.created_at).format('d MMM YY HH:MM')}</span>
                <span>{props.user}</span>
            </div>
        </div>
    )
}
