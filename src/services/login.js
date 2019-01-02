import request from '../utils/request';

export function login(parameters){
	return request('/api/login',{
		method:'post',
		headers: {
    		'Content-Type': 'application/json'
  		},
		body:JSON.stringify(parameters)
	})
}