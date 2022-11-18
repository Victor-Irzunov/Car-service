import {
	Button,
	Select,
	Form,
	Input,
	DatePicker,
	TimePicker,
	message,
	Checkbox
} from 'antd'
import React from 'react'
import axios from "axios"
import { useScreens } from '../../../Constants/constants'


const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
const chat_id = '-1001794221917'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`

const dateFormat = 'DD.MM.YYYY'

const { RangePicker } = DatePicker
const { TextArea } = Input
const { Option } = Select



const ZapisatsyaForm = () => {
	const screens = useScreens()
	const [form] = Form.useForm()

	const onFinish = (values) => {
		const dataForm = {
			name: values.username,
			phone: values.tel,
			date: {
				from: !values.date ? '-' : values.date[0]._d.toLocaleDateString("ru-RU"),
				before: !values.date ? '-' : values.date[1]._d.toLocaleDateString("ru-RU"),
			},
			dateMobil: !values.dateMobil ? '-' : values.dateMobil._d.toLocaleDateString("ru-RU"),
			time: {
				from: !values.time ? '-' : values.time[0]._d.toLocaleTimeString("ru-RU"),
				before: !values.time ? '-' : values.time[1]._d.toLocaleTimeString("ru-RU")
			},
			mass: values.mass,
			message: values.message,
			perevoz: values.perevoz,
			check01: values.check01,
			check02: values.check02,
		}
		let messageForm = `<b>Заказ с сайта</b>\n`
		messageForm += `<b> </b>\n`
		if (screens.xs) messageForm += `<b>Дата: </b> ${dataForm.dateMobil} \n`
		if (!screens.xs) messageForm += `<b>Дата: </b> ${dataForm.date.from} — ${dataForm.date.before}\n`
		messageForm += `<b>Время: </b> ${dataForm.time.from} — ${dataForm.time.before}\n`
		messageForm += `<b>Вес: </b> ${!dataForm.mass ? '-' : dataForm.mass}\n`
		messageForm += `<b>Надо: </b> ${!dataForm.perevoz ? '-' : dataForm.perevoz}\n`
		messageForm += `<b>Сообщение: </b> <i>«${!dataForm.message ? '-' : dataForm.message}»</i>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Отправитель: </b> ${!dataForm.name ? '-' : dataForm.name}\n`
		messageForm += `<b>Телефон: </b> ${dataForm.phone}\n`

		message.success('Заказ отправлен');
		axios.post(uri_api, {
			chat_id,
			parse_mode: 'html',
			text: messageForm,
		}).then(res => {
			if (res.status === 200) {
				message.success('Заказ принят')
				form.resetFields()

			}
		})
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}


	return (
		<Form
			name="basic"
			labelCol={{
				span: 5,
			}}
			wrapperCol={{
				span: 14,
			}}
			layout="horizontal"

			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Имя"
				name="username"
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Телефон"
				name="tel"
				rules={[
					{
						required: true,
						message: 'Пожалуйста введите номер!',
					},
				]}
			>
				<Input />
			</Form.Item>


			<Form.Item
				label="Выберите число"
				name="dateMobil"
			>
				<DatePicker format={dateFormat} style={{
					width: '100%',
				}} />
			</Form.Item>


			<Form.Item
				label="Выберите время"
				name="time"
			>
				<TimePicker.RangePicker
					style={{
						width: '100%',
					}}
				/>
			</Form.Item>

			<Form.Item
				label="Поломка"
				name="mass"
			>
				<Select>
					<Select.Option value="шиномотаж">шиномотаж</Select.Option>
					<Select.Option value="развал-схождение">развал-схождение</Select.Option>
					<Select.Option value="антикор">антикор</Select.Option>
					<Select.Option value="тормозная система">тормозная система</Select.Option>
					<Select.Option value="автоэлектрик">автоэлектрик</Select.Option>
					<Select.Option value="кондиционер">кондиционер</Select.Option>
					<Select.Option value="коробка передач">коробка передач</Select.Option>
					<Select.Option value="замена масла">замена масла</Select.Option>
					<Select.Option value="диагностика">диагностика</Select.Option>
					<Select.Option value="ремонт авто">ремонт авто</Select.Option>
					<Select.Option value="другое">другое</Select.Option>
				</Select>
			</Form.Item>

			<Form.Item
				label="Сообщение"
				name="message"
			>
				<TextArea rows={4} />
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 15,
					span: 24,
				}}
			>
				<Button type="primary" htmlType="submit">
					Записаться
				</Button>
			</Form.Item>
		</Form>
	);
};
export default ZapisatsyaForm