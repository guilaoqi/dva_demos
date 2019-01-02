
export default {
	'POST /api/login': (req, res) => { 
		console.log(req.body);
		let resp={ 
			status:200,
			isLogin:true
		}
		if(req.body.username!="admin"){
			 resp={
			 	status:100,
			 	isLogin:false
			 }
			 res.end(JSON.stringify(resp))
			 return
		}
		if(req.body.password!="admin"){
			resp={
				status:101,
			 	isLogin:false

			}
			res.end(JSON.stringify(resp))
			return
		}
		res.end(JSON.stringify(resp)); 
	},
};
