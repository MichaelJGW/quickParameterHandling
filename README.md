
--NPM PACKAGE--

args-filter

        npm install --save args-filter

--Usage--

        var foo = function(num){
        	arguments.defaults(1); //checks if num is undefined if it is assign the default of 1
        	return num + 1;
        }
        var bar = function(num){
        	arguments.types(1); //checks value and type if either fail assign the default of 1
        	return num + 1;
        }
        foo()   //would be 2
        foo('') //would be '1'
        bar()   //would be 2
        bar('') //would be 2

--Issue Being Solved--

Needing to verify the parameters in javascript functions in an effective, clean, and scalable manner.

Lets say we have the following function.

        var foo = function(num){
        	return num / 3;
        }


We are assuming that num is a number, and currently we have no default values and no type checking so this will totally work foo({}) or foo(foo) or foo('anything') or even foo() and undefined / 3 is an error.
This is a simple version of this but it shows the issue.

We have methods of overcoming this such as the following.

method 1

        var foo = function(num){
        	if(num){
        		num = 1;
        	}
        	return num / 3;
        }
method 2

        var foo = function(num){
        	num = num | 1;
        	return num / 3;
        }

These methods do the same thing but what if num was 0 both would reassign it to 1 also if it is a string it would not catch this. This catches the edge cases and also verifies the type of data.`

method 3

        var foo = function(num){
        	if(typeof num !== 'number'){
        		num = 1;
        	}
        	return num / 3;
        }

Do this methods scale well

        var foo = function(num, str, arr, obj, func){
        	var boo = [] //holder for all values
        	
        	if(typeof num !== 'number'){
        		num = 1;
        	}
        	if(typeof str !== 'string'){
        		str = '';
        	}
        	if(Array.isArray(arr)){
        		arr = [];
        	}
        	if(typeof obj !== 'object'){
        		obj = {};
        	}
        	if(typeof func !== 'function'){
        		func = function(){};
        	}
        	boo.push(num, str, arr, obj, func);
        	return boo
        }

This take a good chunk of code just to verify types and set defaults.
What if we did the same code but this way

        var foo = function(num, str, arr, obj,func){
        	arguments.types(1,'',[],{},function(){});
        	return arguments.toArray();
        }

what if we didn't care about types we just wanted defaults just in case they were undefined.

        var foo = function(num, str, arr, obj,func){
        	arguments.defaults(1,'',[],{},function(){});
        	return arguments.toArray();
        }

This does convert the source variables so when you call num it will be num not arguments[0]

        var foo = function(num){
        	arguments.defaults(1);
        	return num + 1;
        }
        var bar = function(num){
        	arguments.types(1);
        	return num + 1;
        }
        foo()   //would be 2
        foo('') //would be '1'
        bar()   //would be 2
        bar('') //would be 2
