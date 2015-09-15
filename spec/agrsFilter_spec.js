describe('Change Directly', function(){
	it("Default", function(){
		var args = [];
		var boo = function(a,boo,length){
			arguments.defaults([5,'hello']);
			for(arguments.length)
		}
		expect(_.first([5, 4, 3, 2, 1])).toEqual(5);
	});
	it("Testing Nth place", function(){
		expect(_.first([5, 4, 3, 2, 1], 3)).toEqual([5,4,3]);
	});
})


