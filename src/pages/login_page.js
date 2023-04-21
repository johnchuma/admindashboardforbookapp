
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Image, Row, Spinner, Toast, ToastContainer } from 'react-bootstrap'
import Heading from '../widgets/heading'
import Paragraph from '../widgets/paragraph'
import Muted from '../widgets/muted'
import { mutedBackground } from '../utils/site_colors'
import { login } from '../controllers/auth_controller'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../utils/auth_provider'

const LoginPage = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(null);
    const [showToast, setShowToast] = useState(null);

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if(user){
            navigate('/')
        }
    }, [user]);
      const triggerSignIn = ()=>{
        setLoading(true)
         login(email,password).then(()=>{
            setLoading(false)
         }).catch((error)=>{
            setLoading(false)
            setShowToast(true)

         })
      }

    

    return (
        <>
        <ToastContainer className='p-3' position='top-end'>
            <Toast autohide onClose={()=>setShowToast(false)} show={showToast}>
                <Toast.Header className='me-2' closeButton><Heading className="me-auto" color={`red`} size={17} text={`Login failed`}/> </Toast.Header>
                <Toast.Body>Wrong email or password</Toast.Body>
            </Toast>
        </ToastContainer>
        <div style={{height:"100vh",width:"100%"}} className='d-flex justify-content-center align-items-center'>
            <Container>
            <Row>
                <Col md="2"></Col>
                <Col >
                <Card  className='border-0' style={{backgroundColor:mutedBackground,borderRadius:0}}>
                <Row>
                    <Col md={6} className='' style={{backgroundImage:"url('reading.jpg')",backgroundSize:'cover',borderTopLeftRadius:0,borderBottomLeftRadius:0}}>
                    {/* <Image src='african-american-child-reading-library-ages-6-8.jpg' style={{objectFit:'cover'}} fluid /> */}
                    </Col>
                    <Col md={6}
                    className='p-5'
                    >
                        <Heading text="Welcome admin"/>
                        <Muted text="Login to continue to the system"/>
                        <Form onSubmit={(e)=>{e.preventDefault(); triggerSignIn()}}>
                            <Form.Control onChange={(e)=>setEmail(e.target.value)} required className='py-3 mt-2 form-control shadow-none mb-3' placeholder='Enter email address' 
                            style={{backgroundColor:"transparent",borderColor:"#00000030",borderRadius:10}}
                             type='email'></Form.Control>
                            <Form.Control onChange={(e)=>setPassword(e.target.value)} required className='py-3 shadow-none' placeholder='Enter password' style={{backgroundColor:"transparent",borderRadius:10, borderColor:"#00000030"}} type='password'></Form.Control>
                             <Button type='submit' style={{borderRadius:10}} className='py-3 mt-3 bg-primary text-white w-100'> {loading?<Spinner/>:'Login'} </Button>
                        </Form>
                    </Col>
                </Row>
            </Card>
                </Col>

                <Col md="2"></Col>

            </Row>
            </Container>
            
           
        </div>
        </>
    )
}

export default LoginPage