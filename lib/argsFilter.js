

(function(){
	Array.prototype.isArray = function(value){
		if(value.isArray !== undefined && value.isArray.toString() === Array.prototype.isArray.toString()){
			return true;
		}
		return false;
	}
	arguments.__proto__.types = function(){
		var defaults = Array.prototype.slice.call(arguments);
		for (var index = 0; index < this.length; index++) {
			var thisType = typeof this[index];
			var defaultsType = typeof defaults[index];
			if(thisType !== defaultsType && defaultsType !== 'undefined'){
				this[index] = defaults[index];
			}else if(thisType === 'object' && defaultsType === 'object'){
				if(Array.prototype.isArray(this[index]) !== Array.prototype.isArray(defaults[index]) ){
					this[index] = defaults[index];
				}
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

