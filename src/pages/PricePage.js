import React, { useContext } from 'react'
import TablePrice from '../components/tablePrice.js/TablePrice'
import { LineOutlined } from '@ant-design/icons'
import { Context } from '../App'
import { useScreens } from '../Constants/constants'

function PricePage() {
	const { data } = useContext(Context)
	const screens = useScreens()
	return (
		<section id='price' className='border-b border-[#038fd4]'>
			<div className={data ? 'fon3-mobile' : 'fon3'}>
				<div className='h-20'></div>
				<div className='container'>
					<div className='text-center'>
						<h2 className='text-[#fff] text-4xl '>
							Цены
						</h2>
						<LineOutlined style={{ color: '#038fd4', fontSize: '3em' }} />
					</div>


					<div className={`bg-[#dedede] mt-12 ${screens.xs ? 'p-2': 'p-4'} rounded-3xl`}>
						<TablePrice  />
					</div>
				</div>
				<div className='h-20'></div>
			</div>
		</section>
	)
}

export default PricePage