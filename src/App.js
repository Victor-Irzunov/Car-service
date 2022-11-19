import React, { createContext, useState, useEffect } from 'react'
import './App.css'
// import Footer from './components/footer/Footer'
import MainPage from './pages/main-block/MainPage'
import Header from './components/header/Header'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css';
import locale from 'antd/es/locale/ru_RU'
import PricePage from './pages/PricePage'
import FotoCarService from './pages/FotoCarService'
import VoprosOtvet from './pages/VoprosOtvet'


export const Context = createContext()


function App() {
  const [isIphone, setIsIphone] = useState(false)

  useEffect(() => {
    if (navigator.userAgent.toLowerCase().match(/(ipad|iphone)/)) {
      setIsIphone(true)
    }
  }, [])


  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: '#038fd4',
        },
      }}
    >
      <Context.Provider value={{
        data: isIphone,
      }}>
        <div className="app">
          <Header />

          <main>
            <MainPage />

            <PricePage />

            <FotoCarService />

            <VoprosOtvet />
          </main>

          {/* <Footer /> */}

        </div>
      </Context.Provider>
    </ConfigProvider>
  )
}

export default App
