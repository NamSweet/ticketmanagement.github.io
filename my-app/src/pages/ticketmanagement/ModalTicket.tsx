import { DatePickerProps, Space, Typography, message } from "antd";
import ModalComponent from "../../component/Modal";
import DatePickerCustom from "../../component/DatePicker/DatePickerCustom";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { TicketManagement } from "../../component/Table/tableticketmanagement";
import { edit } from "../../firebase/crud";

const buttonStyle: React.CSSProperties = {
    width: 160,
    height: 48,
  };
  
  const okButtonStyle: React.CSSProperties = {
    background: "#FF993C",
    borderRadius: "8px",
  };
  
  const cancelButtonStyle: React.CSSProperties = {
    borderRadius: "10px",
    border: "1px solid #FF993C",
  };

  interface IModalTicket {
    open: boolean;
    onCancel: () => void;
    data: TicketManagement
  }
  

const ModalTicket: React.FC<IModalTicket
> = ({ open, onCancel, data }) =>{
    const [usedDate, setUsedDate] = React.useState<Dayjs | null>(null);
    const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
      if (date) {
        const usedDate = dayjs(date);
        setUsedDate(usedDate);
      }
    };
  
    const handleChangeDate = async (id: string) => {
      try {
      const date = usedDate?.toString();
      if (!date || date === data.useDate) {
        message.warning("Chưa có sự thay đổi ngày");
        return;
      }
        await edit({data: {useDate: date}, collectionName: "tickets", id: id})
        message.success("Thanh cong") 
        setTimeout(() => {
          window.location.reload()
        }, 1500);
    } catch (error) {
      message.error("That bai")
    }
    };
  
    const handleOk = () => {
      handleChangeDate(data.bookingCode);
      };

  return (
    <ModalComponent
      centered
      width={758}
      open={open}
      onCancel={onCancel}
      onOK={handleOk}
      closable={false}
      className="modal-ticket"
      title={
        <Typography.Text className="gray-brown bold-24 text-normal">
          Đổi ngày sử dụng vé
        </Typography.Text>
      }
      okText={
        <Typography.Text
          className="white bold-18 text-normal"
        >
          Lưu
        </Typography.Text>
      }
      cancelText={
        <Typography.Text className="yellow-1 bold-18 text-normal">
          Huỷ
        </Typography.Text>
      }
      cancelStyle={{ ...cancelButtonStyle, ...buttonStyle }}
      okStyle={{ ...okButtonStyle, ...buttonStyle }}
    >
      <Space size={17} className="modal-container" direction="vertical">
        <Space size={140}>
          <Typography.Text className="semibold-16 text-normal gray-brown opacity-7">
            Số vé
          </Typography.Text>
          <Typography.Text className="medium-16 text-normal gray-brown opacity-7">
            {data.bookingCode}
          </Typography.Text>
        </Space>
        <Space size={127}>
          <Typography.Text className="semibold-16 text-normal gray-brown opacity-7">
            Loại vé
          </Typography.Text>
          <Typography.Text className="medium-16 text-normal gray-brown opacity-7">
            Vé cổng - Gói gia đình
          </Typography.Text>
        </Space>
        {/* <Space size={99}>
          <Typography.Text className="semibold-16 text-normal gray-brown opacity-7">
            Tên sự kiện
          </Typography.Text>
          <Typography.Text className="medium-16 text-normal gray-brown opacity-7">
            {}
          </Typography.Text>
        </Space> */}
        <Space size={90}>
          <Typography.Text className="semibold-16 text-normal gray-brown opacity-7">
            Hạn sử dụng
          </Typography.Text>
          <DatePickerCustom
            onchange={onChangeDate}
            defaultValue={dayjs(data.useDate)}
          />
        </Space>
      </Space>
    </ModalComponent>
  );
};

export default ModalTicket;