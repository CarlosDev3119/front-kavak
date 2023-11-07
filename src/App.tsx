
import { useState } from 'react'
import { Navbar } from './ui/navbar/Navbar';
import { Sidebar } from './ui/sidebar/Sidebar';
import { KavakPage } from './kavak/KavakPage';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const openSidebar = () => {
    
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    console.log('close')
    setSidebarOpen(false)
  }

  return (
    <div className='container'>
      <Navbar openSidebar={openSidebar} sidebarOpen={sidebarOpen}/>
      <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen}/>
      
      <KavakPage />
      
    
    </div>
  )
}

export default App
