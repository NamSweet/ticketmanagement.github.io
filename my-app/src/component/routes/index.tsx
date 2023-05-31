import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../../pages/ticketmanagement';
import TicketManagement from '../../pages/ticketmanagement';
import CheckTickets from '../../pages/checktickets';
import Setting from '../../pages/setting';
import App from '../../App';

function AppRoutes(){
return(
  
   <Routes>
      <Route index element={<Home />} />
   <Route  path="/home" 
          element={<App />} >
    </Route>
    <Route  path="/ticketmanagement" 
          element={<TicketManagement/>} >
    </Route>
    <Route  path="/checktikets" 
          element={<CheckTickets/>} >
    </Route>
    <Route  path="/setting" 
          element={<Setting/>} >
    </Route>
   </Routes>
   
   
)
}

export default AppRoutes;