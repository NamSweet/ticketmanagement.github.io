import './App.css';
import SideMenu from '../src/component/Menubar/menubar';
import WaveChart from './component/Chart/waveChart';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './component/Header/header';
import DatePickerComponent from './component/DatePicker/datePicker';
import PieChart from './component/Chart/pieChart';

function App() {
  const [selectedOption] = useState('');
  const navigate = useNavigate();

  const dataWave = [160, 130, 220, 260, 175, 230, 115 ]
  const categoriesWave = ['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','CN']
  const seriesPie1 = [13568, 56024]
  const seriesPie2 = [30256, 28302]
  const labelsPie = ["Vé chưa sử dụng", "Vé đã sử dụng"]

  const handleOptionChange = (event: any) => {
    const selectedValue = event.target.value;
    navigate(selectedValue);
  
    } 
  return (    
    <div className='app'>
      <SideMenu/>
      <div className='bodyhome'>
        <Header/>
        <div className='group1'>
          <h1>Thống kê</h1>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <h4>Doanh thu</h4>
            <DatePickerComponent/>
          </div>
          <WaveChart data={dataWave} categories={categoriesWave}/>
          <span style={{opacity: 0.6}}>Tổng doanh thu theo tuần</span>
          <div style={{display: "flex", alignItems: "center", gap: "4px"}}>
            <h3 style={{margin: 0}}>525.145.000</h3>
            <p>đồng</p>
          </div>
          <div style={{display: "flex", marginTop: 83, gap: 203}}>
            <DatePickerComponent/>
            <PieChart series={seriesPie1} text="Gói gia đình" labels={labelsPie} id='pie-chart-1'/> 
            <PieChart series={seriesPie2} text="Gói sự kiện" labels={labelsPie} id='pie-chart-2'/> 
            <div>
              <div style={{display: "flex", gap: 8, marginBottom: 17}}>
                <div className='rectangle-2' style={{background: "#4F75FF"}}></div>
                <span>Vé đã sử dụng</span>
              </div>
              <div style={{display: "flex", gap: 8}}>
                <div className='rectangle-2' style={{background: "#FF8A48"}}></div>
                <span>Vé chưa sử dụng</span>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
