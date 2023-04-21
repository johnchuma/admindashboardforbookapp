
import React, { useEffect, useState } from 'react'
import Heading from '../widgets/heading'
import { Image, Modal, NavDropdown, Stack } from 'react-bootstrap'
import { backgroundColor } from '../utils/site_colors'
import { BsPlus } from 'react-icons/bs'
import AddBookModal from '../widgets/add_book_modal'
import { deleteBook, getBooks } from '../controllers/books_controller'
import moment from 'moment/moment'
import UpdateBookModal from '../widgets/update_book_modal'

const BooksPage = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const [refresh, setRefresh] = useState(true);

    const [books, setBooks] = useState([]);
    useEffect(() => {
        if(showAddModal == false){
            getBooksFunction()
        }
        
    }, [showAddModal,showUpdateModal]);
   const getBooksFunction = ()=>{
    getBooks().then((books)=>{
        setBooks(books)
    })
   }
    return (
        <>
          <Heading className="py-0 mx-0"  text="Uploaded books"/>
          <table className='table  table-hover dataTable  mt-3 '>
            <thead>
                <tr style={{fontWeight:500}}>
                <th>Book cover</th>
                <th>Book title</th>
                <th>Subject</th>
                <th>Class level</th>
              
                <th>Created at</th>
                <th>Actions</th>

                </tr>
            </thead>
            <tbody>
              {books.map((item)=>{
                return <tr  style={{fontWeight:300}}>
                    <td>
                    <Image  src={item.cover} 
                     className=' ms-auto me-1' style={{height:50, backgroundColor:"transparent", width:50,backgroundSize:'cover',objectFit:'cover'}}/>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.subject}</td>
                    <td>{item.class}</td>

                    <td>{moment(item.createdAt).fromNow()}</td>
                    <td>  <NavDropdown style={{backgroundColor:backgroundColor}} title="Actions">
                        <NavDropdown.Item target="_blank" href={item.file}  style={{fontSize:15}}>Open book</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>setShowUpdateModal(true)} style={{fontSize:15}}>Edit details</NavDropdown.Item>
                        <NavDropdown.Item  onClick={()=>{deleteBook(item.id);getBooksFunction()}}  style={{fontSize:15}}>Delete book</NavDropdown.Item>
                    </NavDropdown> </td>
            <UpdateBookModal show={showUpdateModal} onHide={()=>setShowUpdateModal(false)} book={item} />

                </tr>
             })
             
             }
            </tbody>
        </table>
        <Stack  direction='horizontal' className='d-flex justify-content-end fixed-bottom mb-3 me-3'>
            <div onClick={()=>setShowAddModal(true)} className='rounded-circle bg-primary p-3 d-flex justify-content-center align-items-center ' style={{height:50,width:50}}>
            <BsPlus size={40} color='white'/>
            </div>
           <AddBookModal showAddModal={showAddModal} setShowAddModal={setShowAddModal} />
        </Stack>

        </>
    )
}

export default BooksPage