
import React, { useEffect, useRef, useState } from 'react'
import { Card, Col, Image, Row, Table } from 'react-bootstrap'
import { lightColors, mutedText, vibrantColors } from '../utils/site_colors'
import { BsBookFill, BsDownload, BsEyeFill, BsPeople, BsPeopleFill } from 'react-icons/bs'
import Heading from '../widgets/heading'
import Paragraph from '../widgets/paragraph'
import Muted from '../widgets/muted'
import { getBooks } from '../controllers/books_controller'

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const students = []
    useEffect(() => {
      
            getBooksFunction()
      
        
    }, []);
   const getBooksFunction = ()=>{
    getBooks().then((books)=>{
        setBooks(books)
    })
   }
    return (
       <>
          <Heading className="py-0 mx-0"  text="Dashboard"/>

       <Row className='mt-3'>

        {
            [
                {icon:<BsPeopleFill color={`#00000070`}/>,title:'Registered students',number:0},
                {icon:<BsBookFill color={`#00000070`}/>,title:'Total books',number:books.length},
                {icon:<BsDownload color={`#00000070`}/>,title:'Number of downloads',number:0},
                {icon:<BsEyeFill color={`#00000070`}/>,title:'Number of reads',number:0}
        
        
        ].map((item,index)=>
             <Col md="3">
            <Card className='border-0' style={{backgroundColor:vibrantColors[index],borderRadius:15}}>
                <Card.Body>
                   {item.icon}
                   <Heading size={40}  text={item.number}/>
                   <Muted  text={item.title}/>
                </Card.Body>
            </Card>
            </Col>
        )
        }
        </Row>
        <Heading className="mt-4 mb-2" text="Recently joined students"/>
        <table className='table table-hovered mt-3 '>
            <thead>
                <tr style={{fontWeight:500}}>
                <th>Profile</th>
                <th>Name of student</th>
                <th>Class</th>
                <th>Joined at</th>
                </tr>
            </thead>
            <tbody>
              {
              students.length <1 ?
              <>
              <Muted className="mt-5  text-center" text={`No recently joined students`}/>
              </>:
              students.map((item)=>{
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
        </>
    )
}

export default HomePage