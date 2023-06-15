import { Badge, Tag } from 'antd';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const PAGE_SIZES = [18, 12];

const TicketManagement = [ { stt: '1', bokingcode: 'ALTFGHJU', sove: "123456789034",tinhtrang:'Đã sử dụng',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'Cổng 1'},
  {  stt: '2', bokingcode: 'ALTQTYJH', sove: "123456789034",tinhtrang:'Chưa sử dụng',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'-'},
  {  stt: '3', bokingcode: 'ALTIOJNB', sove: "123456789034",tinhtrang:'Đã sử dụng',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'Cổng 1'},
  {  stt: '4', bokingcode: 'ALTIOJNB', sove: "123456789034",tinhtrang:'Hết hạn',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'-'},
  {  stt: '5', bokingcode: 'ALTIOJNB', sove: "123456789034",tinhtrang:'Hết hạn',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'-'},
  {  stt: '6', bokingcode: 'ALTIOJNB', sove: "123456789034",tinhtrang:'Đã sử dụng',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'Cổng 1'},
  {  stt: '7', bokingcode: 'ALTIOJNB', sove: "123456789034",tinhtrang:'Đã sử dụng',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'Cổng 1'},
  {  stt: '8', bokingcode: 'ALTIOJNB', sove: "123456789034",tinhtrang:'Đã sử dụng',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'Cổng 1'},
  {  stt: '9', bokingcode: 'ALTIOJNB', sove: "123456789034",tinhtrang:'Đã sử dụng',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'Cổng 1'},
  {  stt: '10', bokingcode: 'ALTIOJNB', sove: "123456789034",tinhtrang:'Đã sử dụng',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'Cổng 1'},
  {  stt: '11', bokingcode: 'ALTIOJNB', sove: "123456789034",tinhtrang:'Đã sử dụng',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'Cổng 1'},
  {  stt: '12', bokingcode: 'ALTIOJNB', sove: "123456789034",tinhtrang:'Đã sử dụng',ngaysudung:'14/04/2021',ngayxuatve:'14/04/2021',congcheckin:'Cổng 1'},]
  


export const TableTicketManagement = () => {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(TicketManagement.slice(0, pageSize));
  
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(TicketManagement.slice(from, to));
  }, [page, pageSize]);

  
  return (
    <DataTable className='datatableticketmgt'
      withBorder
      borderRadius="sm"
      striped
      records={records}
      columns={[
        {
          accessor: 'stt',
          title: 'STT',
          textAlignment: 'left',
        },
        { accessor: 'bokingcode',
        title:'Booking code' }
        ,
        { accessor: 'sove',
        title: 'Số vé', }
        ,
        { accessor: 'tinhtrang',
        title: 'Tình trạng sử dụng',
        render: ({tinhtrang}) => (
          <Tag bordered color={tinhtrang === "Đã sử dụng" ? "default" : tinhtrang === "Hết hạn" ? "error" : tinhtrang === "Chưa sử dụng" ? "success" : undefined }><p className={`text-table ${tinhtrang === "Đã sử dụng" ? `used` : tinhtrang === "Hết hạn" ? `expired` : tinhtrang === "Chưa sử dụng" ? `unused` : null }`}><Badge color={tinhtrang === "Đã sử dụng" ? "rgba(145, 157, 186, 1)" : tinhtrang === "Hết hạn" ? "rgba(253, 89, 89, 1)" : tinhtrang === "Chưa sử dụng" ? "rgba(3, 172, 0, 1)" : undefined }/>{" "}{tinhtrang}</p></Tag>
   ) }
        ,
        { accessor: 'ngaysudung',
        title: 'Ngày sử dụng', }
        ,
        { accessor: 'ngayxuatve',
        title: 'Ngày xuất vé', }
        ,
        { accessor: 'congcheckin',
        title: 'Cổng check - in', }
        ,
        { accessor: ' ',
        render: ({tinhtrang}) => (
          <>{tinhtrang === "Chưa sử dụng" ? (<BsThreeDotsVertical/>) : null}</>
    ) }
      ]}
      
      totalRecords={TicketManagement.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}