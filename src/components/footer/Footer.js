import React from 'react'
import { Affix, Tag,Divider } from 'antd'
import { useScreens } from '../../Constants/constants'


function Footer() {
  const screens = useScreens()
  return (
    <footer
      className='mt-auto'
      style={{
        // background: '#363636',
      }}
    >
      <div className='h-32'></div>
      {/* <Divider /> */}
      {/* <div className="footer__line"><div className="inner"></div></div> */}

      <div className='container'>






        <div
          className='mt-3'
          style={{ borderTop: '1px solid #343434' }}
        >
          <p className='text-[#959595] pt-1' >Copyright © 2022 | Created & Designed By
            <a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-[#0cf2ff]'> VI:TECH</a>
          </p>
        </div>


      


        

      </div>
    </footer>
  )
}

export default Footer

