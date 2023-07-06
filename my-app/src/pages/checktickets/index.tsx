import SideMenu from '../../component/Menubar/menubar';
import { Input } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import Header from '../../component/Header/header';
import { Tablechecktickets } from '../../component/Table/tablechecktickets';
import { useState } from 'react';
import DatePickerComponent from '../../component/DatePicker/datePicker';

function CheckTickets() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };

  return (
    <div className='app'>
      <SideMenu />
      <div className='bodyhome'>
        <Header />
        <div className='group4'>
          <div className='group3'>
            <h1>Đối soát vé</h1>
            <div className='group2'>
              <Input
                allowClear
                className='searchticker'
                placeholder='Tìm bằng số vé'
                style={{ width: 437, height: 48 }}
                suffix={<AiOutlineSearch fontSize={24} />}
              />
              <button className='btnticketcheck'>chốt đổi soát vé</button>
              <Tablechecktickets />
            </div>
          </div>
          <div className='ticketfilter'>
            <div className='groupticketfilter'>
              <span className='textticketfilter'>Lọc vé</span>
              <div className='groupcheckbox'>
                <h4 className='textstatus'>Tình trạng đối soát</h4>
                <div className='checkbox'>
                <div>
                  <div>
                    <label className='checkbox-container'>
                      <input
                        type='checkbox'
                        checked={isChecked1}
                        onChange={handleCheckboxChange1}
                      />
                      <span className='checkbox-button'></span>
                    </label>
                    <label>Tất cả</label>
                  </div>
                
                </div>
                <div>
                  <div>
                    <label className='checkbox-container'>
                      <input
                        type='checkbox'
                        checked={isChecked2}
                        onChange={handleCheckboxChange2}
                      />
                      <span className='checkbox-button'></span>
                    </label>
                    <label>Đã đối soát</label>
                  </div>
                 
                </div>
                <div>
                  <div>
                    <label className='checkbox-container'>
                      <input
                        type='checkbox'
                        checked={isChecked3}
                        onChange={handleCheckboxChange3}
                      />
                      <span className='checkbox-button'></span>
                    </label>
                    <label>Chưa đối soát</label>
                  </div>
                 
                </div>
              </div>
              </div>
              <div className='grouptimecheckbox'>
                  <span className='texttickettype'> Loại vé</span><span className='texttickettype2'>Vé cổng</span>
                  <div className='timeticketfilter'>
                    <span className='texttime-ticketfilter' style={{marginRight:116}}>Từ ngày</span><DatePickerComponent/>
                  </div>
                  <div className='timeticketfilter'>
                    <span className='texttime-ticketfilter'style={{marginRight:106}}>Đến ngày</span><DatePickerComponent/>
                  </div>
              </div>
              <div className='groupbtnticketfilter'>
                <button className='btnticketfilter'>Lọc</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckTickets;
