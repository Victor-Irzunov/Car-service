import React from 'react'
import { LineOutlined } from '@ant-design/icons'
import CollapseComp from '../components/collapse/CollapseComp'
import { useScreens } from '../Constants/constants'


function VoprosOtvet() {
	const screens = useScreens()


	return (
		<footer id='vopros' className='border-b border-[#f03226]'>

			<div className='fon2'>
				<div className='h-12'></div>
				<div className='container'>
					<div className='flex flex-col justify-between'>
						<div className='text-center'>
							<h2 className='text-white text-4xl'>
								Часто задаваемые вопросы
							</h2>
							<LineOutlined style={{ color: '#f03226', fontSize: '3em' }} />
						</div>

						<div className='pl-10'>
							<CollapseComp />
						</div>
						<div className='h-16'></div>

						<div
							className='mt-3'
							style={{ borderTop: '1px solid #343434' }}
						>
							<p className='text-[#95959582] pt-1 text-[.7em]' >Copyright © 2022 | Created & Designed By
								<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-[#0cf2ff]'> VI:TECH</a>
							</p>
						</div>
					</div>
				</div>

			</div>

		</footer>
	)
}

export default VoprosOtvet