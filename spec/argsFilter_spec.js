describe('Defaults', function(){
	it("All Numbers", function(){
		var args = [];
		var test = function(){
			arguments.defaults(1,2,3);
			for(var num = 0; num < arguments.length; num++){
				args.push(arguments[num]);
			}
		}
		test('sdaf');
		expect(args).toEqual(['sdaf',2,3]);
	});
});
describe('Types', function(){
	it("All Numbers", function(){
		var args = [];
		var test = function(){
			arguments.types(1,2,3);
			for(var num = 0; num < arguments.length; num++){
				args.push(arguments[num]);
			}
		}
		test('sdaf', 3, '5');
		expect(args).toEqual([1,3,3]);
	});
	it("Strings and Numbers", function(){
		var args = [];
		var test = function(){
			arguments.types('hello',3,'hello', 5);
			for(var num = 0; num < arguments.length; num++){
				args.push(arguments[num]);
			}
		}
		//all type match so it should be the same
		test('notHello', 3, 'hello', 3);
		expect(args).toEqual(['notHello', 3, 'hello', 3]);

		var args = [];
		test(['hello'], '3', 'hello', 3);
		expect(args).toEqual(['hello', 3, 'hello', 3]);
	});

	it("Arrays", function(){
		var args = [];
		var test = function(){
			arguments.types([]);
			for(var num = 0; num < arguments.length; num++){
				args.push(arguments[num]);
			}
		}
		//all type match so it should be the same
		test([1,2,3]);
		expect(args).toEqual([[1,2,3]]);
	});
	it("Objects", function(){
		var args = [];
		var test = function(){
			arguments.types({});
			for(var num = 0; num < arguments.length; num++){
				args.push(arguments[num]);
			}
		}
		//all type match so it should be the same
		test({test:1});
		expect(args).toEqual([{test:1}]);
	});
	it("Skipping", function(){
		var args = [];
		var test = function(){
			arguments.types(1,undefined,'hello');
			for(var num = 0; num < arguments.length; num++){
				args.push(arguments[num]);
			}
		}
		test(10,2,3);
		expect(args).toEqual([10,2,'hello']);
	});
})

