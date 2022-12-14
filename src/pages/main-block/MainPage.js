import React, { useState, useContext, useEffect } from 'react'
import {
	Row, Col, Button, Space, Badge, Tooltip,
	notification,
	FloatButton,
	message, Popconfirm,
} from 'antd'
import {
	PhoneOutlined, FormOutlined,
	UsergroupAddOutlined, SettingOutlined,
	InfoCircleOutlined, QuestionCircleOutlined
} from '@ant-design/icons'
import { useScreens } from '../../Constants/constants'
import DrawerWindow from '../../components/drawer/DrawerWindow'
import { Context } from '../../App'



function MainPage() {
	const { data } = useContext(Context)
	const screens = useScreens()
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
		})
	}
	const toggleBtn = (num) => setActive(num)
	const confirm = () => message.info('Звонок на станцию')

	return (
		<section id='home' className='main-section border-b border-t border-[#038fd4]'>
			{/* <div className='flex justify-between absolute top-0'>
				{Object.entries(screens)
					.filter((screen) => !!screen[1])
					.map((screen) => (
						<Tag color="blue" key={screen[0]}>
							{screen[0]}
						</Tag>
					))}
			</div> */}
			<FloatButton.Group
				shape="circle"
				style={{
					right: 24,
				}}
			>
				<Popconfirm
					placement="leftBottom"
					title='Остались вопросы? Позвоните нам и мы ответим.'
					onConfirm={confirm}
					okText={<a href='tel:80297012251'>Позвонить</a>}
					cancelText="Закрыть"
				>
					<FloatButton icon={<QuestionCircleOutlined />} />
				</Popconfirm>
				<FloatButton.BackTop />
			</FloatButton.Group>
			<div className={data ? 'main-block-mobile' : 'main-block'}>
				<div className='container'>
					<div className='h-20'></div>
					<Row gutter={[10, 10]} className=''>
						<Col lg={12} md={24} sm={24} xs={24}
							className={`mt-16 ${screens.xs && 'ml-5'}`}
						>
							<h1 className={`text-[#fff] ${screens.xs ? 'text-[3em]' : 'text-[5em]'}`}>
								СТО в Минске
							</h1>
							<Space className='mb-9' size={[15]}>
								<Button type="primary" size={screens.xs ? 'small' : 'large'} ghost={active === 1 ? false : true} onClick={() => toggleBtn(1)} shape="round">
									Телефон
								</Button>
								<Button type="primary" size={screens.xs ? 'small' : 'large'} ghost={active === 2 ? false : true} onClick={() => toggleBtn(2)} shape="round">
									Адрес
								</Button>
								<Button type="primary" size={screens.xs ? 'small' : 'large'} ghost={active === 3 ? false : true} onClick={() => toggleBtn(3)} shape="round">
									Режим работы
								</Button>
							</Space>
							{active === 1 &&
								<div className='flex flex-col text-lg pl-5'>
									<a href='tel:80290000000'
										className='mb-6 text-white'
									>
										<Tooltip title="A1">
											+375 29 701-22-51
										</Tooltip>
										<Button type="primary" shape="circle" size='large' className='ml-5' icon={<PhoneOutlined />} />
									</a>


									<a href='tel:80297012251'
										className='mt-4 text-sm text-[#038fd4]'
									>Позвонить администратору</a>
								</div>
							}
							{
								active === 2 &&
								<div className='text-white text-lg  pl-5'>
									<p>г. Минск</p>
									<p><span className='font-thin text-sm'>микрорайон</span> «Малиновка»</p>
									<p>ул. Меньковский тракт 2а</p>
									<Button type='link' href='https://yandex.by/maps/29630/minsk-district/house/Zk4YcgVmSkQGQFtpfXR0dH9lYw==/?ll=27.426311%2C53.855367&z=16.81' style={{ paddingLeft: '0' }} target='_blank'>Посмотреть на карте</Button>
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
							<div className='ml-4'>
								<Button
									type='primary'
									ghost
									shape='round'
									className='mt-6' icon={<FormOutlined />}
									onClick={showDrawer}
								>
									Записаться на ремонт
								</Button>
							</div>
						</Col>
						{
							!screens.xs &&
							<Col lg={12} md={24} sm={24} xs={24}>
								<div className='w-full h-full flex justify-center items-end mt-16'>
									<div
										className='bg-gradient-to-r from-sky-500 to-indigo-500 w-full h-96 
									rounded-3xl opacity-80 relative
									overflow-hidden
									'
									>
										<span
											className='absolute top-[75%] 
									right-0 left-[85%] rotate-[270deg]
									text-5xl font-bold
									'>
											#автосервис
										</span>
										<div
											className='
										absolute t-[50%]
										bottom-[35%]
										left-5  font-bold'>
											<p className={`text-white ${screens.xs && 'text-3xl'}  ${screens.sm && 'text-4xl'} ${screens.xl && 'text-4xl'}`}>Опыт работы 10+ лет</p>
											<p className='text-white text-2xl'>Дружелюбный персонал</p>
											<p className='text-white text-xl'>Акции и скидки</p>
											<p className='text-white text-sm'>Делаем на совесть</p>
										</div>
										<span className='absolute top-1 right-16 text-[#ffffff0d] text-[7vw]'>best</span>
										<span className='absolute bottom-1 left-8 font-bold text-[#ffffff0d] text-[12vw]'>best</span>
									</div>
								</div>
							</Col>
						}
					</Row>
					<div className={`${screens.xs ? 'mt-20' : 'mt-40'} flex justify-start ${screens.xs && 'pl-5'} ${screens.xs ? 'flex-col' : 'flex-wrap'}`}>

						<div
							onClick={() => openNotification('topRight', 'Приведи друга', 'Приводите к нам друзей и получайте скидку на ремонт вместе.')}
							className='cursor-pointer mr-5'
						>
							<Button
								type="primary" shape="round"
								icon={<UsergroupAddOutlined />}
								size={screens.xs ? 'small' : ''}
							/>
							<p className='text-white mt-3'>
								Приведи друга<span className='text-[#fff]'> и получи...</span>
							</p>
						</div>
						<div
							onClick={() => openNotification('bottomRight', 'Диагностика авто будет бесплатная', 'Если  будут выполняться ремонтные работы по устранению неисправностей обнаруженных в ходе диагностики.')}
							className='cursor-pointer'
						>
							<Button
								type="primary" shape="round"
								ghost
								icon={<SettingOutlined />}
								size={screens.xs ? 'small' : ''}
							/>
							<p className='text-white mt-3'>
								Диагностика <span className='text-[#fff]'>бесплатно...</span>
							</p>
						</div>
					</div>
				</div>
				<DrawerWindow open={open} setOpen={setOpen} />
			</div>
		</section>
	)
}

export default MainPage

