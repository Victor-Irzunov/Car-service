import React from 'react'
import { Row, Col,Image } from 'antd'
import foto1 from '../images/foto-service/service-1.webp'
import foto2 from '../images/foto-service/service-2.webp'
import foto3 from '../images/foto-service/service-3.webp'
import foto4 from '../images/foto-service/service-4.webp'

function FotoCarService() {
	return (
		<section className='bg-[#222] pt-24 pb-32'>
			<div className='container'>
				<h2 className='text-white text-3xl text-center'>
					Фото нашего автосервиса
				</h2>

				<div className='mt-12'>
					<Row gutter={[20,20]}>
						<Col lg={12}>
							<Image src={foto1} className='rounded-3xl' />
						</Col>
						<Col lg={12}>
							<Image src={foto2} className='rounded-3xl' />
						</Col>
						<Col lg={12}>
							<Image src={foto3} className='rounded-3xl' />
						</Col>
						<Col lg={12}>
							<Image src={foto4} className='rounded-3xl' />
						</Col>
					</Row>
				</div>
			</div>
		</section>
	)
}

export default FotoCarService