import request from '@/utils/request'

export const classifyImg = (data) => {
	return request({
		url: '/classify/img/',
		method: 'post',
		data: data
	})
}

export const classifyRecord = () => {
	return request({
		url: '/classify/records/',
		method: 'get',
	})
}