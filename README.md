Thoughts.md is a log of how I came to the conclution I did.



function(a,b,c){
	args = arguments.filter({
		types : ['number','string','string'],
		defaults : [3, 'hello', 'world'],
		strict : true,
		amount : this.length,
		test : function(value, index){
			if(value > 0 && value < 100)
				return true;
		}
	})
}