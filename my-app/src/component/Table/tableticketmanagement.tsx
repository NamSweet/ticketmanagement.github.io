import { Badge, MenuProps, Tag, Typography } from 'antd';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import ModalTicket from '../../pages/ticketmanagement/ModalTicket';
import { getList } from '../../firebase/crud';
import DropdownOption from '../../pages/ticketmanagement/DropdownOption';
import dayjs from 'dayjs';

const PAGE_SIZES = [18, 12];
  
export  interface TicketManagement {
    bookingCode: string;
    gate: string;
    releaseDate: string;
    status: string;
    ticketNumber:string;
    useDate:string;
  }

export const TableTicketManagement = () => {
  const [ticket, setTicket] = useState<TicketManagement[]>([])
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(ticket.slice(0, pageSize));
  const startingNumber = (page - 1) * pageSize + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticketList = await getList<TicketManagement>({ collectionName: 'tickets' });
        setTicket(ticketList);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(ticket.slice(from, to));
  }, [page, pageSize, ticket]);
  
  return (
    <>
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
        { accessor: 'bookingCode',
        title:'Booking code' }
        ,
        { accessor: 'ticketNumber',
        title: 'Số vé', }
        ,
        { accessor: 'status',
        title: 'Tình trạng sử dụng',
        render: ({status}) => (
          <Tag bordered color={status === "Đã sử dụng" ? "default" : status === "Hết hạn" ? "error" : status === "Chưa sử dụng" ? "success" : undefined }><p className={`text-table ${status === "Đã sử dụng" ? `used` : status === "Hết hạn" ? `expired` : status === "Chưa sử dụng" ? `unused` : null }`}><Badge color={status === "Đã sử dụng" ? "rgba(145, 157, 186, 1)" : status === "Hết hạn" ? "rgba(253, 89, 89, 1)" : status === "Chưa sử dụng" ? "rgba(3, 172, 0, 1)" : undefined }/>{" "}{status}</p></Tag>
   ) }
        ,
        { accessor: 'useDate',
        title: 'Ngày sử dụng', render: ({useDate}) => (
          <span>{dayjs(useDate).format("DD/MM/YYYY")}</span>
        )},
        { accessor: 'releaseDate',
        title: 'Ngày xuất vé', render: ({releaseDate}) => (
          <span>{dayjs(releaseDate).format("DD/MM/YYYY")}</span>
        )},
        { accessor: 'gate',
        title: 'Cổng check - in',
        render: ({gate}) => (
          <>{gate === "" ? <span style={{textAlign: "center",
            display: "inline-block",
            width: "20%"}}>-</span> :  <span>{gate}</span>}</>
        )}
        ,
        { accessor: ' ',
        render: (record) => (
          <>
          {record.status === "Chưa sử dụng" ? (
            <DropdownOption data={record}/>
          ) : null}
          
        </>
         ),
        },
      ]}
      
      totalRecords={ticket.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
    </>
    
  );
}