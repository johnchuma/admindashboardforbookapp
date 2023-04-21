
import React from 'react'

const Paragraph = ({text,className}) => {
    return (
        <div className={className??'py-0 mx-0'} style={{fontSize:15,fontWeight:400}}>{text}</div>

    )
}

export default Paragraph