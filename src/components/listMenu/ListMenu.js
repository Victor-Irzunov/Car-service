import { Divider, List, Typography } from 'antd';
import React from 'react';
const data = [
	'Главная',
	'Цены',
	'Фото сервиса',
	'Отзывы',
	'Контакты'
];
const ListMenu = () => (
	<>

		<List
			size="large"
			dataSource={data}
			renderItem={(item) => <List.Item><a href='' className='text-black'>{item}</a></List.Item>}
		/>
	</>
);
export default ListMenu