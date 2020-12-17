import React from 'react'

export default function BorderedImageFrame(props){
    return (
        <img style={{'border':'4px solid red'}} src={props.image}/>
    )
}

