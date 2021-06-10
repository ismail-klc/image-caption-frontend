import React from 'react'

export default function LoadingBar({text}) {
    return (
        <div className="progress" style={{margin: '80px 30px'}}>
          <div className="progress-bar progress-bar-striped" role="progressbar"
            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" 
            style={{ width: '100%', padding: '0 5%' }}>
            {text}
          </div>
        </div>
    )
}
