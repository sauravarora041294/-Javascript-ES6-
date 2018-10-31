wrapper = function(err, data){
	//const { status, message } = error;
	if(err){
		//const {status, message, data} = err;
		return {
			status: err.code,
			message: err.message,
			data: null
		}
	}
	return {
			status: 'success',
			message: 'success',
			data: data
		}
}

module.exports = wrapper;
