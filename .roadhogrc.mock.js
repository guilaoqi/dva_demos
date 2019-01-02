
export default {
	'POST /api/login': (req, res) => { 
		console.log(req.body);
		res.end('OK'); 
	},
};
