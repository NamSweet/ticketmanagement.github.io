import React from 'react';
import SideMenu from '../../component/Menubar/menubar';
import Header from '../../component/Header/header';
import { Input } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import { TableTicketSetting } from '../../component/Table/tablesetting';
import CreateSetting from '../../component/Operation/createSetting';

function Setting() {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  
  return(
    <div className='app'>
      <SideMenu/>
      <div className='bodyhome'>
        <Header/>
        <div className='group1'>
          <h1>Danh sách vé</h1>
          <div className='group2'>
            <div className='groupbtnsetting'>
              <Input allowClear className='searchticker' placeholder='Tìm bằng số vé' style={{width: 437, height: 48}} suffix={<AiOutlineSearch fontSize={24}/>}/>    
              <div>
                <button className='btnExportfile'>Xuất file (.csv)</button>
                <button onClick={showModal} className='btnextrapack'>Thêm gói vé</button>
              </div>
            </div>
            
            <TableTicketSetting/>
            </div>          
        </div>   
      </div>
      <CreateSetting open={visible} onCancel={handleCancel}/>
    </div>  
);
}
export default Setting