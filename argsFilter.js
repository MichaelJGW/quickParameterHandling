

(function(){
	arguments.__proto__.defaults = function(defaults){
		var list = this.callee.toString().split('(')[1].split(')')[0].split(',');
		var args = {};
		var array = [];
		for (var index = 0; index < this.length; index++) {
			if(typeof this[index] !== typeof defaults[index] && defaults[index] !== undefined){
				this[index] = defaults[index];
			}
			args[list[index]] = this[index];
		};
		args['_array'];
		return args;
	}
})();



var boo = function(a,boo,length){
	arguments.defaults([5,'hello']);
	console.log('----end----');
	console.log('a = ', a);
	console.log('b = ', boo);
	console.log('-----------');
}

boo(1,34);

