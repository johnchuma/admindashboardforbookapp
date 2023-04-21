
import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Image, NavDropdown, Row, Stack } from 'react-bootstrap'
import { backgroundColor, mutedBackground, mutedText } from '../utils/site_colors'
import Heading from '../widgets/heading'
import Muted from '../widgets/muted'
import { Outlet, useNavigate } from 'react-router-dom'
import { BsAirplaneEnginesFill, BsBook, BsBookFill, BsHouseExclamationFill, BsPeople, BsPeopleFill } from 'react-icons/bs'
import { AuthContext } from '../utils/auth_provider'
import { logout } from '../controllers/auth_controller'

const LayoutPage = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    useEffect(() => {
      if(!user){
        navigate('/login')
      }
    }, [user]);
    return (
        <>
       <Row>
        <Col md={3} className='px-5 py-3'  style={{height:"100vh",backgroundColor:mutedBackground}}>
          <Heading text="BooksApp"/>
          <div className='mt-4 pt-3'>
            {
            [
                {icon:<BsHouseExclamationFill size={15} />,title:"Dashboard",path:'/'},
                {icon:<BsBookFill size={15} />,title:"Manage books",path:'/books'},
                {icon:<BsPeopleFill size={15} />,title:"Users",path:'/users'},

                ].map((item,index)=> <div onClick={()=>{setCurrentTab(index); navigate(item.path)}} className={ ` ${currentTab==index? 'bg-primary':''} btn border-0 w-100  py-3 px-3`} style={{borderRadius:10,color:currentTab==index?backgroundColor:'#00000070'}}>
                <Stack direction='horizontal' >
                  {item.icon}
                  <Heading   className="ms-2" size={14} text={item.title}/>
                </Stack>
                </div>)
                }
          </div>
         
         
        </Col>
        <Col className='py-3 px-5'>
        <Stack direction='horizontal' >
            <div>
          <Muted   text="Welcome, admin"/>
            </div>

                   <Image  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"  className='rounded-circle ms-auto me-2' style={{height:30, width:30,backgroundSize:'cover',objectFit:'cover'}}/>
                    
                   <NavDropdown style={{backgroundColor:backgroundColor}} title={user&&user.email}>
                        <NavDropdown.Item  onClick={()=>logout()} style={{fontSize:15}}>Logout</NavDropdown.Item>
                    </NavDropdown>  
                  
        </Stack>
        <Outlet/>
        </Col>

       </Row>
        </>
    )
}

export default LayoutPage