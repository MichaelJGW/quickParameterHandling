

(function(){
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
	arguments.__proto__.toArray = function(){
		return Array.prototype.slice.call(this);
	}
})();

/*

if undefined then X
if type is not X then X
if value is not [X or Y or Z] then X
if overloaded then X

arguments.defaults(3,5,6).types(3,,6).values([1,2,3],,[3,3]);

*/

