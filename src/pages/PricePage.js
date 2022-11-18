import React from 'react'
import TablePrice from '../components/tablePrice.js/TablePrice'

function PricePage() {
	return (
		<section className='bg-[#222] pt-24 pb-10'>
			<div className='container'>
				<h2 className='text-white text-3xl text-center'>
					Цены
				</h2>

				<div className='bg-[#343434] mt-12 p-4  rounded-3xl'>
					<TablePrice />
				</div>
			</div>
		</section>
	)
}

export default PricePage