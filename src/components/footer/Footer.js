import React from 'react'
import { Affix, Tag,Divider } from 'antd'
import { useScreens } from '../../Constants/constants'


function Footer() {
  const screens = useScreens()
  return (
    <footer
      className='mt-auto'
      style={{
        background: '#222',
      }}
    >
      <Divider />
      <div class="footer__line"><div class="inner"></div></div>

      <div className='container'>






        <div
          className='mt-3'
          style={{ borderTop: '1px solid #343434' }}
        >
          <p className='text-[#959595] pt-1' >Copyright © 2022 | Created & Designed By
            <a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-[#0cf2ff]'> VI:TECH</a>
          </p>
        </div>


        {/* <div className='flex justify-between'>
        <Affix offsetBottom={20}>
          {Object.entries(screens)
            .filter((screen) => !!screen[1])
            .map((screen) => (
              <Tag color="blue" key={screen[0]}>
                {screen[0]}
              </Tag>
            ))}
          </Affix>
          <div><h2 className='text-white'>faf;gkf;gkafgm</h2></div>
        </div> */}


        

      </div>
    </footer>
  )
}

export default Footer

