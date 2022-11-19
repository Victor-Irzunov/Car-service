import { List } from 'antd'
import React from 'react'


// const data = [
// 	'Главная',
// 	'Цены',
// 	'Фото сервиса',
// 	'Вопрос-ответ'
// ]

const data = [
	{
		title: 'Главная',
		link:'#home'
	},
	{
		title: 'Цены',
		link:'#price'
	},
	{
		title: 'Фото сервиса',
		link:'#foto'
	},
	{
		title: 'Вопрос-ответ',
		link:'#vopros'
	},
]




const ListMenu = () => (
	<>

		<List
			size="large"
			dataSource={data}
			renderItem={(item) => <List.Item><a href={item.link} className='text-black'>{item.title}</a></List.Item>}
		/>
	</>
);
export default ListMenu