import React from 'react'
import interstella from "./images/interstella.jpg"
function DiscoverMovie() {
    return (
        <section>
            <ul>
                <li>
                    <img src={interstella}></img>
                    <h3>Interstella</h3>
                </li>
            </ul>

        </section>
    )
}

export default DiscoverMovie;