import React, { useState } from 'react';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import TaskIcon from '@mui/icons-material/Task';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import SidebarImage from '../ilyass.png';
import { Link } from 'react-router-dom';

const Data = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/"
  },   
  {
    title: "Projects",
    icon: <DataThresholdingIcon />,
    link: "/Projects"
  },
  {
    title: "Task List",
    icon: <TaskIcon/>,
    link: "/Task_List"
  },
  {  
    title: "Notifications",
    icon: <NotificationsIcon/>,
    link: "/Notifications"
  },
  {  
    title: "Chat",
    icon: <ChatIcon/>,
    link: "/Chat"
  },
  {  
    title: "Users",
    icon: <GroupIcon/>,
    link: "/Users"
  }
];

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleRowClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='Sidebar'>
      <div>
        <Link to="/"><img className='SidebarImage' src={SidebarImage} alt="Sidebar" /></Link>
      </div>
      <div className='List'>
        {Data.map((val, index) => (
          <div
            className={`Row ${activeIndex === index ? 'ActiveRow' : ''}`}
            key={index}
            onClick={() => handleRowClick(index)}
          >
            <Link to={val.link} className='Row'>
              <div className='Icon'>{val.icon}</div>
              <div className='Title'>{val.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
