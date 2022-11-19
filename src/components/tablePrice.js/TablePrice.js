import { Table, Image, Divider } from 'antd'
import React, { useState } from 'react'
import { DownOutlined, RightOutlined } from '@ant-design/icons'
import imageGajka from '../../images/foto-price/1.webp'
import imageSupport from '../../images/foto-price/2.webp'
import imageVtulka from '../../images/foto-price/3.webp'
import imageAmortizator from '../../images/foto-price/4.webp'
import imageRichag from '../../images/foto-price/5.webp'
import imageDiagnostik from '../../images/foto-price/6.webp'
import imageLampa from '../../images/foto-price/7.webp'


const columns = [
	{
		title: <span className='font-bold'>Наименование</span>,
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: <span className='font-bold'>Время работы (час)</span>,
		dataIndex: 'time',
		key: 'time',
		width: '35%',
		align: 'center',
	},
	{
		title: <span className='font-bold'>Стоимость (руб)</span>,
		dataIndex: 'price',
		key: 'price',
		width: '15%',
		align: 'center',
	},
	Table.EXPAND_COLUMN,
]


const dataPodveska = [
	{
		key: 1,
		name: 'Ремонт подвески',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'Время и цена зависит от состояния подвески, если давно подвеска не ремонтировалась и всё заржавело ....',
		image: imageGajka,
	},
	{
		key: 2,
		name: 'Замена колодок',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'Время и цена зависит от состояния суппортов и скоб',
		image: imageSupport,
	},
	{
		key: 3,
		name: 'Замена тяги стабилизатора',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'Время и цена зависит от состояния',
		image: imageGajka,
	},
	{
		key: 4,
		name: 'Замена втулок стабилизатора',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'Время и цена зависит от состояния....',
		image: imageVtulka,
	},
	{
		key: 5,
		name: 'Замена амортизаторов',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'Время и цена зависит от состояния....',
		image: imageAmortizator,
	},
	{
		key: 6,
		name: 'Замена пружин',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'Время и цена зависит от состояния...',
		image: imageAmortizator,
	},
	{
		key: 7,
		name: 'Замена рычага передней подвески',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'Время и цена зависит от состояния...',
		image: imageRichag,
	},
	{
		key: 8,
		name: 'Замена рычага задней подвески',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'Время и цена зависит от состояния....',
		image: imageRichag,
	},
	{
		key: 9,
		name: 'Диагностика подвески',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'Время и цена зависит от состояния....',
		image: imageDiagnostik,
	},
]
const dataElektrika = [
	{
		key: 1,
		name: 'Замена ламп',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'Время и цена зависит от доступа к лампе. В некаторых машинах надо снимать бампер, что-бы поменять лампу....',
		image: imageLampa,
	},
	{
		key: 2,
		name: 'Ремонт',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 3,
		name: 'Диагностика подвески',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 4,
		name: 'Ремонт',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 5,
		name: 'Диагностика подвески',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 6,
		name: 'Ремонт',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 7,
		name: 'Ремонт',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
]
const dataDvigatel = [
	{
		key: 1,
		name: 'Замена свечей накаливания',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	},
	{
		key: 2,
		name: 'Ремонт',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 3,
		name: 'Диагностика подвески',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 4,
		name: 'Ремонт',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 5,
		name: 'Диагностика подвески',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 6,
		name: 'Ремонт',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 7,
		name: 'Ремонт',
		time: 'от 1:00',
		price: "от 5,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
]



const TablePrice = () => {
	const [isActive1, setIsActive1] = useState(true)
	const [isActive2, setIsActive2] = useState(false)
	const [isActive3, setIsActive3] = useState(false)

	const color = '#000'
	const text = 'text-[#000]'

	return (
		<>
			<div className='flex justify-start mt-5'
				onClick={() => setIsActive1(i => !i)}
			>
				{isActive1 ? <DownOutlined style={{ fontSize: '1.2em', color }} className='mr-3' />
					:
					<RightOutlined style={{ fontSize: '1.2em', color }} className='mr-3' />
				}
				<h3
					className={`text-xl pr-2 mb-0 
					 ${text}
				font-bold cursor-pointer`}
				>
					Подвеска
				</h3>
			</div>
			{isActive1 &&
				<Table
					columns={columns}
					pagination={false}
					expandable={{
						expandedRowRender: (record) => {
							return (
								<div style={{ display: 'flex' }}>
									<Image src={record.image} style={{ borderRadius: '2em' }} />
									<p style={{ margin: 0, paddingLeft: '2em' }}>
										{record.description}
									</p>

								</div>
							)
						},
					}}
					scroll={{
						x: 500,
					}}
					dataSource={dataPodveska}
				/>
			}

			{!isActive1 && <Divider />}

			<div className='flex justify-start mt-5'
				onClick={() => setIsActive2(i => !i)}
			>
				{isActive2 ? <DownOutlined style={{ fontSize: '1.2em', color }} className='mr-3' />
					:
					<RightOutlined style={{ fontSize: '1.2em', color }} className='mr-3' />
				}
				<h3
					className={`text-xl mb-0
					${text}
				font-bold cursor-pointer`}

				>
					Электрика
				</h3>
			</div>
			{isActive2 &&
				<Table
					columns={columns}
					pagination={false}
					expandable={{
						expandedRowRender: (record) => (
							<div style={{ display: 'flex' }}>
								<Image src={record.image} style={{ borderRadius: '2em' }} />
								<p style={{ margin: 0, paddingLeft: '2em' }}>
									{record.description}
								</p>

							</div>
						),
					}}
					scroll={{
						x: 500,
					}}
					dataSource={dataElektrika}
				/>
			}
			{!isActive2 && <Divider />}

			<div className='flex justify-start mt-5 mb-5'
				onClick={() => setIsActive3(i => !i)}
			>
				{isActive3 ? <DownOutlined style={{ fontSize: '1.2em', color }} className='mr-4' />
					:
					<RightOutlined style={{ fontSize: '1.2em', color }} className='mr-4' />
				}
				<h3
					className={`text-xl mb-0
					${text}
				font-bold cursor-pointer`}

				>
					Двигатель
				</h3>
			</div>
			{isActive3 &&
				<Table
					columns={columns}
					pagination={false}
					expandable={{
						expandedRowRender: (record) => (
							<div style={{ display: 'flex' }}>
								<Image src={record.image} style={{ borderRadius: '2em' }} />
								<p style={{ margin: 0, paddingLeft: '2em' }}>
									{record.description}
								</p>

							</div>
						),
					}}
					scroll={{
						x: 500,
					}}
					dataSource={dataDvigatel}
				/>
			}
		</>
	)
}
export default TablePrice