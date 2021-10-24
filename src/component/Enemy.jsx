import React from "react"

function Enemy(props) {
    console.log(props)
    return(
        <div >
            <h1>I'm the enemy {this.props.name}</h1>
            <img src={this.props.image} height="100px" alt="imageEnemy"/>
        </div>
    )
}
export default Enemy;