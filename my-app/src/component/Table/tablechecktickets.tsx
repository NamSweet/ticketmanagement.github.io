import { Badge, Tag } from 'antd';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { getList } from '../../firebase/crud';

const PAGE_SIZES = [18, 12];

  interface CheckTicket {
    stt: string;
    gate: string;
    ticketNumber:string;
    useDate:string;
    category:string;
    checkin: boolean;
  }

export const Tablechecktickets = () => {
  const [ticket, setTicket] = useState<CheckTicket[]>([])
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(ticket.slice(0, pageSize));
  const startingNumber = (page - 1) * pageSize + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticketList = await getList<CheckTicket>({ collectionName: 'tickets' });
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
        { accessor: 'ticketNumber',
        title:'Số vé',}
        ,
        { accessor: 'useDate',
        title: 'Ngày sử dụng', }
        ,
        { accessor: 'category',
        title: 'Tên loại vé', }
        ,
        { accessor: 'gate',
        title: 'Cổng check - in', 
        render: ({gate}) => (
          <>{gate === "" ? <span style={{textAlign: "center",
          display: "inline-block",
          width: "20%"}}>-</span> :  <span>{gate}</span>}</>
        )}
        ,
        { accessor: ' ',
        render: ({checkin}) => (
          <>{checkin === false ? <span className='uncheckin'>Chưa đối soát</span> :  <span className='checkin'>Đã đối soát</span>}</>
    ) }
      ]}
      
      totalRecords={ticket.length}
      recordsPerPage={pageSize}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setPageSize}
    />
  );
}