
(function(){

	var createObjectWithArgNames = function (func, args){
	  var str = func;
	  var index1 = str.search(/[(]/);
	  var index2 = str.search(/[)]/);
	  str = (str.substr(index1+1,index2-index1-1)).split(',');

	  var obj = {};
	  for (var index = 0; index < args.length; index++) {
	  	obj[str[index]] = args[index];
	  };

	  return obj;
	}
	if(Array.isArray === undefined){
		Array.isArray = function(value){
			if(value.isArray !== undefined && value.isArray.toString() === Array.isArray.toString()){
				return true;
			}
			return false;
		}
	}
	arguments.__proto__.types = function(){
		var defaults = arguments.toArray(), thisType , defaultsType;
		for (var index = 0; index < this.length; index++) {
			
			thisType = typeof this[index];
			defaultsType = typeof defaults[index];
			
			if(thisType !== defaultsType && defaultsType !== 'undefined' || Array.isArray(this[index]) !== Array.isArray(defaults[index])){
				this[index] = defaults[index];
			}
		};
		return createObjectWithArgNames(this.callee.toString(), this);
	}
	arguments.__proto__.defaults = function(){
		var defaults = arguments.toArray();
		if(this.length < defaults.length){
			var index = this.length;
			this.length = defaults.length;
			while (index <= defaults.length) {
				this[index] = defaults[index];
				index++;
			};
		}
		return createObjectWithArgNames(this.callee.toString(), this);
	}
	arguments.__proto__.toArray = function(){
		return Array.prototype.slice.call(this);
	}
})();
