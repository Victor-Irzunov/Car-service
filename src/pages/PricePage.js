import React from 'react'
import TablePrice from '../components/tablePrice.js/TablePrice'
import { LineOutlined } from '@ant-design/icons'

function PricePage() {
	return (
		<section className='border-b border-[#f03226]'>
			<div className='fon3'>
				<div className='h-20'></div>
				<div className='container'>
					<div className='text-center'>
						<h2 className='text-[#fff] text-4xl '>
							Цены
						</h2>
						<LineOutlined style={{ color: '#f03226', fontSize: '3em' }} />
					</div>


					<div className='bg-[#343434] mt-12 p-4 rounded-3xl'>
						<TablePrice />
					</div>
				</div>
				<div className='h-20'></div>
			</div>
		</section>
	)
}

export default PricePage