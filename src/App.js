import React from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import MainPage from './pages/MainPage'
import Header from './components/header/Header'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.variable.min.css'
import locale from 'antd/es/locale/ru_RU'
import PricePage from './pages/PricePage'
import FotoCarService from './pages/FotoCarService'

ConfigProvider.config({
  theme: {
    primaryColor: '#f03226',
  },
});


function App() {


  return (
    <ConfigProvider locale={locale}>
      <div className="app">
        <Header />

        <main>
          <MainPage />

          <PricePage />

          <FotoCarService />
        </main>

        <Footer />

      </div>
    </ConfigProvider>
  )
}

export default App
