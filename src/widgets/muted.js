
import React from 'react'

const Muted = ({text,className}) => {
    return (
        <div className={className} style={{fontSize:15,color:"00000050", fontWeight:300}}>{text}</div>
        
    )
}

export default Muted