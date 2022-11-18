import React, { useState } from 'react'
import { Row, Col, Button, Space, Badge, Tooltip, notification, Image } from 'antd'
import {
	PhoneOutlined, FormOutlined, PieChartOutlined,
	CarOutlined, ToolOutlined, SettingOutlined, InfoCircleOutlined
} from '@ant-design/icons'
import DrawerWindow from '../components/drawer/DrawerWindow'
import fon from '../images/background3.webp'

function MainPage() {
	const [active, setActive] = useState(1)
	const [open, setOpen] = useState(false)


	const showDrawer = () => {
		setOpen(true)
	}

	const openNotification = (placement, message, description) => {
		notification.info({
			message: `${message}`,
			description:
				`${description}`,
			placement,
			duration: 15,
			icon: (
				<InfoCircleOutlined
					style={{
						color: 'green',
					}}
				/>
			),
		});
	};


	const toggleBtn = (num) => setActive(num)

	return (
		<section className='bg-[#363636] pt-24 pb-10'>
			<div className='container'>
				<Row gutter={[10, 10]} className=''>
					<Col lg={10}
						className='mt-16'
					>
						<h1 className='text-[#fff] text-[5em]'>
							СТО в Минске
						</h1>

						<Space className='mb-9' size={[15]}>
							<Button type="primary" size='large' ghost={active === 1 ? false : true} onClick={() => toggleBtn(1)} shape="round">
								Телефоны
							</Button>
							<Button type="primary" size='large' ghost={active === 2 ? false : true} onClick={() => toggleBtn(2)} shape="round">
								Адрес
							</Button>
							<Button type="primary" size='large' ghost={active === 3 ? false : true} onClick={() => toggleBtn(3)} shape="round">
								Режим работы
							</Button>
						</Space>

						{active === 1 &&
							<div className='flex flex-col text-lg w-1/2 pl-5'>

								<a href='tel:80290000000' className='mb-6 text-white'>
									<Tooltip title="A1">
										+375 29 000-00-00
									</Tooltip>
									<Button type="primary" shape="circle" size='large' className='ml-4' icon={<PhoneOutlined />} />

								</a>

								<a href='tel:80290000000' className='mb-3 text-white'>
									<Tooltip title="МТС">
										+375 29 000-00-00
									</Tooltip>
									<Button type="primary" shape="circle" size='large' className='ml-4' icon={<PhoneOutlined />} />

								</a>

								<a href='tel:80290000000'
									className='mt-2 text-sm'
								>Позвонить администратору</a>
							</div>
						}

						{
							active === 2 &&
							<div className='text-white text-lg  pl-5'>
								<p>г. Минск</p>
								<p>Первомайский район</p>
								<p>ул. Минская 100 корп. 4</p>
								<Button type='link' href='https://yandex.by/maps/157/minsk/house/Zk4YcAJhSkcGQFtpfXVyc3hnYw==/?indoorLevel=1&ll=27.651321%2C53.932448&z=16.81' style={{ paddingLeft: '0' }} target='_blank'>Посмотреть на карте</Button>
							</div>
						}

						{
							active === 3 &&
							<div className=' pl-5'>
								<Space direction="vertical" >
									<Badge status="success" style={{ color: '#fff' }} text="Пн: 8:00-20:00" />
									<Badge status="success" style={{ color: '#fff' }} text="Вт: 8:00-20:00" />
									<Badge status="success" style={{ color: '#fff' }} text="Ср: 8:00-20:00" />
									<Badge status="success" style={{ color: '#fff' }} text="Чт: 8:00-20:00" />
									<Badge status="success" style={{ color: '#fff' }} text="Пт: 8:00-20:00" />
									<Badge status="warning" style={{ color: 'orange' }} text="Сб: 9:00-18:00" />
									<Badge status="error" style={{ color: '#f03226' }} text="Вс: выходной" />
								</Space>
							</div>
						}

						<div>
							<Button
								type='primary' shape='round'
								className='mt-6' icon={<FormOutlined />}
								onClick={showDrawer}
							>
								Записаться на ремонт
							</Button>
						</div>
					</Col>

					<Col lg={14}>
						<div className='relative w-full h-full'>
							{/* <img src={fon} className='w-8/12' /> */}
							<div className='bg-[#f03226] w-9/12 h-5/6 absolute inset-1/4 rounded-3xl'>
								<span
									className='absolute top-[75%] 
									right-0 left-[85%] rotate-[270deg]
									text-5xl font-bold
									'>
									#автосервис
								</span>
								<div className='absolute t-[50%] bottom-[35%] left-5 text-3xl font-bold'>
									<p className='text-white'>Опыт работы 10+ лет</p>
									<p className='text-white'>Дружелюбный персонал</p>
									<p className='text-white'>Акции и скидки</p>
								</div>
								<div className='bg-[#343434] absolute bottom-[-7%] left-[10%] right-0 rounded-xl w-4/5 text-center' >
									<p className='text-[#959595] text-sm pt-3'>Попробуйте наш сервис и Вы вернётесь снова</p>
								</div>
							</div>
						</div>

					</Col>
				</Row>



				<div className='mt-28 flex justify-between'>
					<div>
						<Button
							type="primary" shape="round"
							icon={<PieChartOutlined />}
							size='large'
							onClick={() => openNotification('topLeft', 'Условия рассрочки', 'Рассрочку предоставляет банк-партнер. Вы можете оформить одну из карт Халва и получить выгодные условия.')}
						/>
						<p className='text-white text-xl mt-3'>
							Ремонт в <span className='text-[#f03226]'>рассрочку</span>
						</p>
					</div>

					<div>
						<Button
							type="primary" shape="round"
							icon={<CarOutlined />}
							size='large'
							onClick={() => openNotification('bottomLeft', 'Мойка автомобиля в Подарок при ремонте', 'Просторный комплекс включает в себя несколько боксов технического обслуживания, оборудованных подъемниками с профессиональным стендом развала-схождения в виде объемного изображения. На территории помещения расположено высокоточное оборудование, хозяйственные помещения и ')}
						/>
						<p className='text-white text-xl mt-3'>
							Мойка авто в <span className='text-[#f03226]'>подарок</span>
						</p>
					</div>


					<div>
						<Button
							type="primary" shape="round"
							icon={<ToolOutlined />}
							size='large'
							onClick={() => openNotification('topRight', 'Проточка дисков', 'Наш специализированный автосервис оказывает в Минске квалифицированные услуги по проточке тормозных дисков без снятия и со снятием. В процессе проведения работ мы используем профессиональное импортное оборудование, что позволяет гарантировать высокое качество и оперативные сроки.')}
						/>
						<p className='text-white text-xl mt-3'>
							Проточка дисков со <span className='text-[#f03226]'>скидкой 20%</span>
						</p>
					</div>

					<div>
						<Button
							type="primary" shape="round"
							icon={<SettingOutlined />}
							size='large'
							onClick={() => openNotification('bottomRight', 'Диагностика авто будет бесплатная', 'Если  будут выполняться ремонтные работы по устранению неисправностей обнаруженных в ходе диагностики.')}
						/>
						<p className='text-white text-xl mt-3'>
							Диагностика <span className='text-[#f03226]'>бесплатно</span>
						</p>
					</div>

				</div>
			</div>



			<DrawerWindow open={open} setOpen={setOpen} />

		</section>
	)
}

export default MainPage

