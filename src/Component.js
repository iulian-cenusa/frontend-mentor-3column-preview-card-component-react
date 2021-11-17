import React from 'react'

function Component({color , image , title , description}) {
    return (
        <section className={`container ${color}`}>
            <img src={image} alt={`${title} car icon`} />
            <h2>{title}</h2>
            <p>{description}</p>
            <button className={`btn btn-${color}`}>Learn More</button>
        </section>
    )
}

export default Component
