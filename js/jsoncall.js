module.exports = {
		"api_key": "7fb22e55a5bafa415e02fe8d426ad2f9",
		"base_uri": "https://api.themoviedb.org/3",
		"images_uri": "http://image.this.org/t/p",
		"timeout": 5000,
		call: function(url, params){
			var that = this;
			return new Promise(function(resolve, reject){
				var params_str ="api_key="+that.api_key;
				for (var key in params) {
					if (params.hasOwnProperty(key)) {
						params_str+="&"+key+"="+encodeURIComponent(params[key]);
					}
				}
				var xhr = new XMLHttpRequest();
				xhr.timeout = that.timeout;
				xhr.ontimeout = function () {
					throw("Request timed out: " + url +" "+ params_str);
				};
				xhr.open("GET", that.base_uri + url + "?" + params_str, true);
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.responseType = "text";
				xhr.onreadystatechange = function () {
					if (this.readyState === 4) {
						if (this.status === 200){
							resolve(JSON.parse(this.response));
						}else{
							reject(JSON.parse(this.response));
						}
					}
				};
				xhr.send();

		})
	}
}
