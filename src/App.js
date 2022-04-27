import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import RequireAuth from './RequireAuth';
import Register from './Pages/Register/Register';
import Header from './Shared/Header/Header';
import EventTasks from './Pages/EventTasks/EventTasks';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<RequireAuth>
          <Register></Register>
        </RequireAuth>}></Route>
        <Route path='/eventtasks/:id' element=
          {<RequireAuth>
            <EventTasks></EventTasks>
          </RequireAuth>}>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
