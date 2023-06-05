import './App.css';
import SideMenu from '../src/component/Menubar/menubar';
import WaveChart from './component/chart';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [selectedOption] = useState('');
  const navigate = useNavigate();

  const data = [2000,3500, 4221, 3300, 3300, 3300, 3300]
  const categories = ['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','CN']

  const handleOptionChange = (event: any) => {
    const selectedValue = event.target.value;
    navigate(selectedValue);
  
    }
  return (
    <div className="App">
    <div>
      <SideMenu/>
      <div className='bodyhome'>
        <div className='group1'>
          <h1>Thống kê</h1>
      <WaveChart data={data} categories={categories}/>
      </div>
        </div>
    </div>
    </div>
  );
}

export default App;
