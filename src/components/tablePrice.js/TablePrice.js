import { Table } from 'antd'
import React from 'react'


const columns = [
	{
		title: 'Наименование',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Время (час)',
		dataIndex: 'time',
		key: 'time',
	},
	{
		title: 'Стоимость (руб)',
		dataIndex: 'price',
		key: 'price',
	},
];
const data = [
	{
		key: 1,
		name: 'Ремонт подвески',
		time: "1:00-2:00",
		price: "25,00-45,00",
		description: 'Время зависит от состояния подвески, если давно подвеска не ремонтировалась и всё заржавело ....',
	},
	{
		key: 2,
		name: 'Замена ламп',
		time: '0:30-1:00',
		price: "15,00-45,00",
		description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	},
	{
		key: 3,
		name: 'Замена колодок',
		time: '0:40-2:30',
		price: '34,00-55,00',
		description: 'This not expandable',
	},
	{
		key: 4,
		name: 'Замена масла',
		time: '0:40-1:30',
		price: '44,00-57,00',
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 5,
		name: 'Ремонт топливной системы',
		time: "1:00-2:00",
		price: "25,00-45,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 6,
		name: 'Диагностика подвески',
		time: "1:00-2:00",
		price: "25,00-45,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 7,
		name: 'Ремонт',
		time: "1:00-2:00",
		price: "25,00-45,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key:8,
		name: 'Диагностика подвески',
		time: "1:00-2:00",
		price: "25,00-45,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 9,
		name: 'Ремонт',
		time: "1:00-2:00",
		price: "25,00-45,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 10,
		name: 'Диагностика подвески',
		time: "1:00-2:00",
		price: "25,00-45,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 11,
		name: 'Ремонт',
		time: "1:00-2:00",
		price: "25,00-45,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
	{
		key: 12,
		name: 'Ремонт',
		time: "1:00-2:00",
		price: "25,00-45,00",
		description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
	},
];



const TablePrice = () => (
	<Table
		columns={columns}
		pagination={false}
		expandable={{
			expandedRowRender: (record) => (
				<p style={{margin: 0}}>
					{record.description}
				</p>
			),
		}}
		dataSource={data}
	/>
);
export default TablePrice