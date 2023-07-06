import React, { useState } from 'react'
import DropDownComponent from '../../component/DropDownComponent'
import MoreOutlined from "@ant-design/icons/lib/icons/MoreOutlined";
import { MenuProps, Typography, message } from 'antd';
import ModalTicket from './ModalTicket';
import { edit } from '../../firebase/crud';
import { TicketManagement } from '../../component/Table/tableticketmanagement';

interface IUpdate {
    data: TicketManagement
  }


const DropdownOption: React.FC<IUpdate> = (data) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };

    const handleMenuClick: MenuProps["onClick"] = (e) => {
    };
    
    const handleUseTicket = async (id: string) => {
      try {
        await edit({data: {status: "Đã sử dụng"}, collectionName: "tickets", id: id})
        message.success("Thanh cong") 
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      } catch (error) {
        message.error("That bai")
      }
    };
    
      const handleUpdate = () => {
        handleUseTicket(data.data.bookingCode)
    };
    
    const items: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <Typography.Text className="medium-14 text-normal gray-brown">
            Sử dụng vé
          </Typography.Text>
        ),
        onClick: handleUpdate,
      },
      {
        key: "2",
        label: (
          <Typography.Text className="medium-14 text-normal gray-brown">
            Đổi ngày sử dụng
          </Typography.Text>
        ),
        onClick: showModal,
      },
    ];
    
    const menuProps = {
      items,
      onClick: handleMenuClick,
    };

  return (
    <>
    <DropDownComponent
            placement="bottomRight" 
            menuDropdown={menuProps}
            trigger="click"
          >
            <MoreOutlined className="i-more flex-center" />
          </DropDownComponent>
          <ModalTicket
          data={data.data}
        open={isModalVisible}
        onCancel={closeModal}
      />
    </>
  )
}

export default DropdownOption
