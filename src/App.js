import './App.css'
import React  from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {Navbar , Footer, sidebar , ThemeSettings} from './components'
import {Ecommerce , Calendar , Orders , Kanban , Employees , Stacked , Pyramid , Customers , Area , Pie , Financial , ColorMapping , ColorPicker, Editor} from './pages'

function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
              style={{
                borderRadius: '50%',
                background: 'orangeRed'
              }}
              >
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>
          {/* SideBaar */}
          {
            activeMenu ? 
            (
              <div className='w-72 fixed  sidebar dark: bg-secondary-dark-bg bg-white'>
                sideBar 1
              </div>
            ):
            (   
            <div className='w-0 dark:bg-dark-secondary-bg'>
              sideBar 2
            </div>
            )
          }
          <div className={
            `dark:bg-main-bg ng-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element = 'eCommerce'/>
              <Route path='/e-commerce' element = 'eCommerce'/>

              {/* Pages */}
              <Route path='/orders' element = 'Order'/>
              <Route path='/customers' element = 'Customers'/>
              <Route path='/employees' element = 'Employees'/>
              {/* Apps */}
              <Route path='/kanban' element = 'Kanban'/>
              <Route path='/editor' element = 'Editor'/>
              <Route path='/calendar' element = 'Calendar'/>
              <Route path='/color-picker' element = 'ColorPicker'/>

              {/* Charts */}
              <Route path='/line' element = 'Line'/>
              <Route path='/area' element = 'Area'/>
              <Route path='/bar' element = 'Bar'/>
              <Route path='/pie' element = 'Pie'/>
              <Route path='/financial' element = 'Financial'/>
              <Route path='/color-mapping' element = 'ColorMapping'/>
              <Route path='/pyramid' element = 'Pyramid'/>
              <Route path='/stacked' element = 'Stacked'/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
