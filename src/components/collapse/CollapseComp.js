import React from 'react'
import { Collapse } from 'antd'
import { CommentOutlined } from '@ant-design/icons'
import { useScreens } from '../../Constants/constants'
const { Panel } = Collapse


const data = [
	{
		title: 'Можно ли находиться возле машины во время ремонта?',
		text: 'Да, можно находиться возле машины, но на безопастном состоянии.',
		id: 1,
	},
	{
		title: 'Могу ли я забрать через несколько дней машину после ремонта?',
		text: 'Да, Вы можете забрать машину влюбое удобное для Вас время.',
		id: 2,
	},
	{
		title: 'У Вас можно заказать запчасти?',
		text: 'Да, мы продаём запчасти по приятным ценам.',
		id: 3,
	},
	{
		title: 'Свои запчасти можно привозить?',
		text: 'Да, Вы можете привести свои запастные части для ремонта.',
		id: 4,
	},
	{
		title: 'Вы даёте машину на подмену?',
		text: 'Да,если машина свободна, но пока ксажилению у нас не большой автопарк.',
		id: 5,
	},
	{
		title: 'Вы даёте скидочную карту?',
		text: 'Да, выдаём своим клиентам карты на 5%, 10%.',
		id: 6,
	},
	{
		title: 'Вы даёте гарантию на запчасти которые продаёте?',
		text: 'Да, гарантия распостраняется на все запчасти купленные у нас 1 год или 30 тыс. пробег.',
		id: 7,
	},
]




const CollapseComp = () => {
	const screens = useScreens()
	return (
		<Collapse defaultActiveKey={['1']} ghost>
			{data.map(el => {
				return (
					<Panel header={<span className='text-white'>{el.title}</span>} key={el.id} >
						<div className={`${screens.xs ? 'pl-2' : 'pl-6'}`}>
							<CommentOutlined style={{ color: 'rgb(203 213 225)', fontSize: '1.2em' }} />
							<span className='text-slate-400 ml-3'>{el.text}</span>
						</div>
					</Panel>
				)
			})}
		</Collapse>
	)
}
export default CollapseComp