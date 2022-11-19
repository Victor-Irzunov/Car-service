import React from 'react'
import { Drawer, Divider, Tooltip, Button } from 'antd'
import { useScreens } from '../../Constants/constants'
import ListMenu from '../listMenu/ListMenu'
import logoMini from '../../images/mini-logo.webp'
import {
	InstagramOutlined,
	WhatsAppOutlined,
	YoutubeOutlined,
	CoffeeOutlined,
	WifiOutlined,
	CommentOutlined,
} from '@ant-design/icons'



const DrawerMenu = ({ open, setOpen }) => {
	const screens = useScreens()
	// const [open, setOpen] = useState(false);
	// const showDrawer = () => {
	// 	setOpen(true);
	// };
	const onClose = () => {
		setOpen(false)
	}

	return (
		<>

			<Drawer
				title="Меню" placement="right"
				onClose={onClose} open={open}
				className='relative'
				drawerStyle={{ background: '#f03226' }}
			>
				<ListMenu />


				<Divider />



				<div className='absolute bottom-3 left-0 w-full'>
					<div className='flex justify-evenly'>
						<Tooltip title="кофе & чай">
							<Button
								shape="circle"
								icon={<CoffeeOutlined />}
								style={{ background: 'transparent', border: '1px solid #222' }}
								size='large'

							/>

						</Tooltip>
						<Tooltip title="бесплатный wifi">
							<Button
								shape="circle"
								style={{ background: 'transparent', border: '1px solid #222' }}
								icon={<WifiOutlined />}
								size='large'
							/>
						</Tooltip>
						<Tooltip title="общение с мастером">
							<Button
								shape="circle"
								icon={<CommentOutlined />}
								style={{ background: 'transparent', border: '1px solid #222' }}
								size='large'
							/>
						</Tooltip>
					</div>
					<Divider />
					<div className='pb-6 pl-8 pr-8 flex justify-around'>

						{/* <img src={logoMini} className='w-[40%]' style={{}} /> */}
						<InstagramOutlined style={{ fontSize: '2em' }} />
						<WhatsAppOutlined style={{ fontSize: '2em' }} />
						<YoutubeOutlined style={{ fontSize: '2em' }} />

					</div>
					<div className='flex justify-evenly' >
						<span className=''>8 (029) 000-00-00</span>
						<span className=''>8 (029) 000-00-00</span>
					</div>
				</div>
			</Drawer>
		</>
	)
}

export default DrawerMenu

