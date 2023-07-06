import { Badge, Tag } from 'antd';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import UpdateSetting from '../Operation/updateSetting';
import { Service } from '../Operation/createSetting';
import { getList } from '../../firebase/crud';
import dayjs from 'dayjs';

const PAGE_SIZES = [18, 12];

export const TableTicketSetting = () => {
  const [service, setService] = useState<Service[]>([])
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(service.slice(0, pageSize));
  const startingNumber = (page - 1) * pageSize + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceList = await getList<Service>({ collectionName: 'service' });
        setService(serviceList);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, [])

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(service.slice(from, to));
  }, [page, pageSize, service]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  
  return (
    <DataTable className='datatableticketmgt'
    withBorder
    borderRadius="sm"
    striped
    records={records.map((record, index) => ({ ...record, stt: startingNumber + index }))}
    columns={[
        {
        accessor: 'stt',
        title: 'STT',
        textAlignment: 'left',
        },
        { accessor: 'id',
        title:'Mã gói' }
        ,
        { accessor: 'name',
        title: 'Tên gói vé', }
        ,
    
        { accessor: 'applicableDate',
        title: 'Ngày áp dụng', 
        render: ({applicableDate}) => (
          <span>{dayjs(applicableDate).format("DD/MM/YYYY")}
          <br />
          {dayjs(applicableDate).format("HH:mm:ss")}</span>
        )}
        ,
        { accessor: 'expiredDate',
        title: 'Ngày hết hạn', 
        render: ({expiredDate}) => (
          <span>{dayjs(expiredDate).format("DD/MM/YYYY")}
          <br />
          {dayjs(expiredDate).format("HH:mm:ss")}</span>
        )}
        ,
        { accessor: 'price',
        title: 'Giá vé (VNĐ/Vé)',
        render: ({price}) => (
          <span>{Number(price).toLocaleString("vi-VN")} VNĐ</span>
        )},
        { accessor: 'comboPrice',
        title: 'Giá Combo (VNĐ/Combo)',
        render: ({comboPrice, comboNumber}) => (
          <span>{Number(comboPrice).toLocaleString("vi-VN")} VNĐ/{comboNumber} Vé</span>
        )},
        { accessor: 'status',
        title: 'Tình trạng sử dụng',
        render: ({status}) => (
        <Tag bordered color={status === "Tắt" ? "error" : status === "Đang áp dụng" ? "success" : undefined }><p className={`text-table ${status === "Tắt" ? `expired` : status === "Đang áp dụng" ? `unused` : null }`}><Badge color={status === "Tắt" ? "rgba(253, 89, 89, 1)" : status === "Đang áp dụng" ? "rgba(3, 172, 0, 1)" : undefined }/>{" "}{status}</p></Tag>
) }
,
{ accessor: ' ',
        render: (record) => (
       <>
        <div  onClick={showModal} style={{ cursor: "pointer",color:'#FF993C', fontSize: "14px", display: "flex", alignItems: "center", gap: "4px"}}><FiEdit size={"24"}/>Cập nhật</div>
        <UpdateSetting             
                open={isModalVisible}
                onCancel={closeModal}
                data={record}
            />
       </> 
    ) }
    ]}
    
    totalRecords={service.length}
    recordsPerPage={pageSize}
    page={page}
    onPageChange={(p) => setPage(p)}
    recordsPerPageOptions={PAGE_SIZES}
    onRecordsPerPageChange={setPageSize}
    />
    
  );
}