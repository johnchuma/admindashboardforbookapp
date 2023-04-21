
import React, { useEffect, useRef } from 'react'

import { Image } from 'react-bootstrap';
import Heading from '../widgets/heading';
import Muted from '../widgets/muted';
const UsersPage = () => {
  const students = [];
    return (
        <div>
          <Heading className="py-0 mx-0"  text="Registered students"/>
          <table className='table  table-hover dataTable mt-3 '>
            <thead>
                <tr style={{fontWeight:500}}>
                <th>Profile</th>
                <th>Name of student</th>
                <th>Class</th>
                <th>Joined at</th>
                </tr>
            </thead>
            <tbody>
              { students.length <1 ?
              <>
              <Muted className="mt-5  text-center" text={`No registered students for now`}/>
              </>: students.map((item)=>{
                return <tr style={{fontWeight:300}}>
                    <td>
                    <Image  src={item.profile} 
                     className='rounded-circle ms-auto me-1' style={{height:30, width:30,backgroundSize:'cover',objectFit:'cover'}}/>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.class}</td>
                    <td>{item.date}</td>

                </tr>
             })
             
             }
            </tbody>
        </table>
        </div>
        
    )
}

export default UsersPage