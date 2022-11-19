import React from 'react'
import './App.css'
// import Footer from './components/footer/Footer'
import MainPage from './pages/main-block/MainPage'
import Header from './components/header/Header'
import { ConfigProvider } from 'antd'
// import 'antd/dist/antd.variable.min.css'
import 'antd/dist/reset.css';
import locale from 'antd/es/locale/ru_RU'
import PricePage from './pages/PricePage'
import FotoCarService from './pages/FotoCarService'
import VoprosOtvet from './pages/VoprosOtvet'

// ConfigProvider.config({
//   theme: {
//     primaryColor: '#f03226',
//   },
// });


function App() {


  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: '#f03226',
        },
      }}
    >
      <div className="app">
        <Header />

        <main>
          <MainPage />

          <PricePage />

          <FotoCarService />
          
          <VoprosOtvet/>
        </main>

        {/* <Footer /> */}

      </div>
    </ConfigProvider>
  )
}

export default App
