import { Outlet } from 'react-router-dom';
import { Navbar } from '../ui/navbar/Navbar';
import { Sidebar } from '../ui/sidebar/Sidebar';
import { useState } from 'react';

export const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const openSidebar = () => {
    
        setSidebarOpen(true)
      }
    
      const closeSidebar = () => {
        console.log('close')
        setSidebarOpen(false)
      }
    return (
    
        <>
            <div className='container'>

                <Navbar openSidebar={openSidebar} sidebarOpen={sidebarOpen}/>
                <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen}/>
                <Outlet />
            
            </div>
        </>
    );

};