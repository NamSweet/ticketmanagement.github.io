
import { Avatar, Input } from 'antd';
import React from 'react';
import {AiOutlineSearch, AiOutlineMail} from "react-icons/ai"
import {BsBell} from "react-icons/bs"
import AvatarImage from '../../assets/images/avatar.png'

function Header(){

    return (
        <div id='header'>
            <Input allowClear className='search' placeholder='Search' style={{width: 437}} suffix={<AiOutlineSearch fontSize={24}/>}/>
            <div className='header-items'>
            <AiOutlineMail fontSize={24}/>
            <BsBell fontSize={24}/>
            <Avatar src={AvatarImage} size={48}/>
            </div>  
        </div>
    )
   
}
export default Header
