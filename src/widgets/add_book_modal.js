
import React, { useState } from 'react'
import { Button, Col, Form, FormControl, Modal, Row, Spinner } from 'react-bootstrap'
import Heading from './heading'
import Paragraph from './paragraph'
import { classesAndSubjects } from '../utils/subjects_and_classes'
import { uploadBookToFilebase, uploadBookToFirebase } from '../controllers/books_controller'

const AddBookModal = ({setShowAddModal,showAddModal}) => {
const [selectedClassIndex, setSelectedClassIndex] = useState(0);
const [uploading, setUploading] = useState(null);
const [title, setTitle] = useState(null);
const [description, setDescription] = useState(null);
const [coverFile, setCoverFile] = useState(null);
const [pdfFile, setPdfFile] = useState(null);
const [subject, setSubject] = useState(classesAndSubjects[selectedClassIndex].subjects[0]);

const uploadBook = ()=>{
    setUploading(true)
    const data = {
        title,
        description,
        subject,
        createdAt:Date.now(),
        class:classesAndSubjects[selectedClassIndex].classLevel
    }
    console.log(subject)
    console.log('data',data)
    uploadBookToFirebase(coverFile,pdfFile,data).then(()=>{
        setUploading(false)
        setShowAddModal(false)
    })
}

    return (
        <Modal size='lg' show={showAddModal} onHide={()=>setShowAddModal(false)}>
        <Modal.Header  closeButton >
          <Heading text={`Add new book`}/>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={(e)=>{e.preventDefault(); uploadBook() }} >
        <Row>
            <Col>
            <Paragraph text={`Enter book title`}/>
            <Form.Control onChange={(e)=>setTitle(e.target.value)} required className='py-3 mt-1 mt-0 form-control shadow-none mb-3' placeholder='Book title' 
            style={{backgroundColor:"transparent",borderColor:"#00000030",borderRadius:10}}
                type=''text></Form.Control>
            </Col>
            <Col>
            <Paragraph text={`Upload book cover`}/>
            <Form.Control onChange={(e)=>setCoverFile(e.target.files[0])}  required className='py-3 mt-1  shadow-none' placeholder='Book cover' style={{backgroundColor:"transparent",borderRadius:10, borderColor:"#00000030"}} type='file'></Form.Control>
            </Col>
            <Col>
            <Paragraph text={`Upload book (pdf file)`}/>
            <Form.Control required  onChange={(e)=>setPdfFile(e.target.files[0])}  className='py-3 mt-1  shadow-none' placeholder='Upload pdf' style={{backgroundColor:"transparent",borderRadius:10, borderColor:"#00000030"}} type='file'></Form.Control>
            </Col>
           </Row>
           <Row>
           <Col>
            <Paragraph text={`Choose class`}/>
            <Form.Select required  onChange={(e)=>{setSelectedClassIndex(e.target.value);}} className='py-3 mt-1 mt-0 form-control shadow-none mb-3' placeholder='Book title' 
            style={{backgroundColor:"transparent",borderColor:"#00000030",borderRadius:10}}
                type=''text>
                    {classesAndSubjects.map((item,index)=><option
                      value={index}>{item.classLevel}</option>)}
                </Form.Select>
            </Col>
            <Col>
            <Paragraph text={`Choose subject`}/>
            <Form.Select className='py-3 mt-1 mt-0 form-control shadow-none mb-3' placeholder='Book title' onChange={(e)=>setSubject(e.target.value)}
            style={{backgroundColor:"transparent",borderColor:"#00000030",borderRadius:10}}
                type=''text>
              {classesAndSubjects[selectedClassIndex].subjects.map((item)=><option value={item}>{item}</option>)}
                </Form.Select>
                
            </Col>
           </Row>
           <Paragraph text={`Book description`}/>
           <Form.Control className='py-3 mt-1 shadow-none ' onChange={(e)=>setDescription(e.target.value)} style={{backgroundColor:"transparent",borderColor:"#00000030",borderRadius:10}} placeholder='wrrite book description' required as='textarea'></Form.Control>
           
           <Button type='submit' style={{borderRadius:10}} className='py-3 w-100 mt-3 bg-primary text-white'>{uploading?<Spinner size='md'/>:'Upload'}</Button>
        </Form>
           
        </Modal.Body>
    </Modal>
    )
}

export default AddBookModal