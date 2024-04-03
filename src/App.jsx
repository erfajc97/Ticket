import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicketPage from './Tickets/TicketPage';
// import DetailTicket from './DetailsTickets/DetailTicket';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TicketPage to='/tickets'/>} />
        {/* <Route path='/detail-tickets' element={<DetailTicket to='/detail-tickets'/>} /> */}
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
