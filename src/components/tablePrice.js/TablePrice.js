import { Table, Image } from 'antd'
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
const data = [
	{
		'Подвеска': [
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
	},
	{
		'Электрика': [
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
	},
	{
		'Двигатель': [
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
	},
	{
		'Коробка передач': [
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
	},
	{
		'Тормозная система': [
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
	},
	{
		'Кузов': [
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
	},
	{
		'Мойка авто': [
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
	},
	{
		'Машину трясёт': [
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
	},
	{
		'Машина дергается при движении': [
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
	},
	{
		'Машина не заводится': [
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
	},
	{
		'Что-то стучит': [
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
	},
	{
		'Диагностика авто': [
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
	},
	{
		'Другое': [
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
	},
]
const TablePrice = () => {
	const [active, setActive] = useState({
		'Подвеска': false,
		'Электрика': false,
		'Двигатель': false,
		'Коробка передач': false,
		'Кузов': false,
		'Мойка авто': false,
		'Машину трясёт': false,
		'Машина дергается при движении': false,
		'Машина не заводится': false,
		'Что-то стучит': false,
		'Диагностика авто': false,
		'Другое': false,
	})
	const f1 = key => {
		for (let el in active) {
			if (el === key) setActive({...active, [key]: !active[key]})
		}
	}

	const color = '#fff'
	const text = 'text-[#fff]'
	return (
		<>
			{
				data.map((el, idx) => {
					return (
						<div key={idx}>
							<div
								className='flex justify-start mt-4 mb-4'
								onClick={() => f1(Object.keys(el)[0])}
								key={idx}
							>
								{active[Object.keys(el)[0]] ? <DownOutlined style={{ fontSize: '.8em', color }} className='mr-3' />
									:
									<RightOutlined style={{ fontSize: '.8em', color }} className='mr-3' />
								}
								<h3 className={`pr-2 mb-0 ${text} cursor-pointer`}>
									{Object.keys(el)}
								</h3>
							</div>
							{
								active[Object.keys(el)[0]] &&
								Object.values(el).map((elem, i) => {
									return (
										<Table
											columns={columns}
											key={i}
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
											dataSource={elem}
										/>
									)
								})
							}
						</div>
					)
				})
			}
		</>
	)
}
export default TablePrice