import React from 'react';
import SideMenu from '../../component/Menubar/menubar';
import Header from '../../component/Header/header';
import { Input } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import { TableTicketManagement } from '../../component/Table/tableticketmanagement';

function TicketManagement() {

  
  return(
    <div className='app'>
    <SideMenu/>
    <div className='bodyhome'>
      <Header/>
      <div className='group1'>
        <h1>Danh sách vé</h1>
        <div className='group2'>
        <Input allowClear className='searchticker' placeholder='Tìm bằng số vé' style={{width: 437, height: 48}} suffix={<AiOutlineSearch fontSize={24}/>}/>    
          <div className='filter'>    
          <span><FiFilter  fontSize={24}/>Lọc vé</span>
          </div>
          <div className='exportfile'>
            <span>Xuất file (.csv)</span>
          </div>
          <TableTicketManagement/>
          </div>
          
        </div>   
        </div>
      </div>  
);
}
export default TicketManagement