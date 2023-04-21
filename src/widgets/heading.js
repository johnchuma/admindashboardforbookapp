
import React from 'react'

const Heading = ({text,size,className,color}) => {
    return (
        <div className={className} style={{fontSize:size??20,fontWeight:500,color:color}}>{text}</div>
    )
}

export default Heading