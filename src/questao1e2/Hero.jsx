import React from "react"

function Hero (props) {
    console.log(props)
    return(
        <div >
            <h1>I'm the hero {this.props.name}</h1>
            <img src={this.props.image} height="100px" alt="imageHero"/>
        </div>
    )
}
export default Hero;