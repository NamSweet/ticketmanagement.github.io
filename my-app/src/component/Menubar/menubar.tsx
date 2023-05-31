
import React from 'react';
import {Menu} from "antd";
import insightImage from '../../images/insight.png';
import { useNavigate } from 'react-router-dom';
import {BiHomeAlt} from "react-icons/bi"
import {TbTicket} from "react-icons/tb"
import {TbFileInvoice} from "react-icons/tb"
import {AiOutlineSetting} from "react-icons/ai"


function SideMenu(){
  const navigate = useNavigate();
    return( 
          <div className="sidemenu">
            <img className="" src={insightImage} alt="Insight"></img>
        <Menu className="menu"
              onClick={(item) =>{
                navigate(item.key);
              }}
          
        items={[
            {
                label: <span style={{color: "#7E7D88"}}>Trang chủ</span>,
                key:'/Home',
                icon: <BiHomeAlt/>
              },
              {
                label: <span style={{color: "#7E7D88"}}>Quản lý vé</span>,
                key:'/Ticketmanagement',
                icon: <TbTicket/>
              },
              {
                label: <span style={{color: "#7E7D88"}}>Đối soát vé</span>,
                key:'/Checktikets',
                icon: <TbFileInvoice/>
              
              },
              {
                label:  <span style={{color: "#7E7D88"}}>Cài đặt</span>,
                key:'/Setting',
                icon: <AiOutlineSetting/>
              
              }
              
        ]}
        >
        </Menu>
        <span className="textCopyright">Copyright 2020 Alta Software </span>
    </div>
    )
}
export default SideMenu