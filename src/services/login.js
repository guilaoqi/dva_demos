import request from '../utils/request';

export function login(parameters){
	return request('/api/login',{
		method:'post',
		body:JSON.stringify(parameters)
	})
}