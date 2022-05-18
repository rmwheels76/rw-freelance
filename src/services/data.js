import * as axios from 'axios'
// import store from '@/store';
// import { helperService } from './helper';

const apiURL = process.env.NODE_ENV === 'production' ? 'https://api.robwfreelance.com/' : '/api/index.php'
// 'http://'+apiURLMod+'m.ixchange.io/api/ixchange.php?'

const apiOptions = {
	withCredentials: true,
	headers: { 'content-type': 'application/x-www-form-urlencoded' },
}

const getData = async function (input) {
	try {
		const url = apiURL
		const response = await axios.post(url, new URLSearchParams(input).toString(), apiOptions)
		console.log('api response for ', input, response)
		return response.data
		/*
		if (response.status !== 200) {
			response.data.meta.status = 0;
			response.data.data = [];
			store.commit('noticeSet', { on: true, type: 'error', message: 'Error communicating with API.',  } );
			return response.data;
		} else if (Array.isArray(response.data) && (response.data.length==0 || !response.data) ){
			store.commit('noticeSet', { on: true, type: 'warning', message: 'invalid api response '+input.endpoint+'->'+input.method,  } );
			response.data.meta.status = false;
			response.data.data = [];
			return response.data;
		}else{
			return response.data;
		}
		*/
	} catch (error) {
		// store.commit('noticeSet', { on: true, type: 'error', message: 'Error communicating with API: '+input.endpoint+'->'+input.method, supplemental: error } );
		// console.warn({ type: 'api invalid data', message: 'Error communicating with API: '+input.endpoint+'->'+input.method, supplemental: error });
		console.log('getData error', error)
		return {
			status: false,
			message: 'Error communication with API',
			data: [],
		}
	}
}

export const dataService = {
	getData,
}
