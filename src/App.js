import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import TaskList from './components/Task_List';
import Notifications from './components/Notifications';
import Chat from './components/Chat';
import Users from './components/Users';
import Search from './components/Search';
import Home from './components/Home';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Sidebar />
        <div className='Content'>
        <Search />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Task_List" element={<TaskList />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/Users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
