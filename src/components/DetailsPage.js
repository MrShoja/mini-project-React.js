import React from 'react'
import { useParams } from 'react-router-dom'

function DetailsPage() {
    const params = useParams()
    console.log(params);
    return (
        <div>
            <h1 style={{color: "black"}}>DetailsPage - {params.id}</h1>
        </div>
    )
}

export default DetailsPage
