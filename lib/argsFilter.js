

(function(){
	arguments.__proto__.types = function(){
		var defaults = Array.prototype.slice.call(arguments);
		for (var index = 0; index < this.length; index++) {
			if(typeof this[index] !== typeof defaults[index] && defaults[index] !== undefined){
				this[index] = defaults[index];
			}
		};
		return this;
	}
	arguments.__proto__.defaults = function(){
		var defaults = Array.prototype.slice.call(arguments);
		if(this.length < defaults.length){
			var index = this.length;
			this.length = defaults.length;
			while (index <= defaults.length) {
				this[index] = defaults[index];
				index++;
			};
		}
		return this;
	}
})();

/*

if undefined then X
if type is not X then X
if value is not [X or Y or Z] then X
if overloaded then X

arguments.defaults(3,5,6).types(3,,6).values([1,2,3],,[3,3]);

*/