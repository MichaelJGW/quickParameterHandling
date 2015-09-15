This is to address a little a irritation I have with checking types and setting deafult values to parameteres in JavaScript.

To check parameter type would look something like this 

function (a, b, c){
	if(typeof a === 'number'){
		...
	}
	if(typeof b === 'string'){
		...
	}
	if(typeof c === 'string'){
		...
	}
}
This creates a lot of code just to check a type also it is a lot of the same code.

setting defaults

method 1----------

function(a = 4, b ='hello', c = 'world'){
}

This is really nice and would be the method I would recommend but it is not supported by most browsers so you are not really able to use it. I really wish we could.


method 2--------

function(a,b,c){
	a = a | 4;
	b = b | 'hello';
	c = c | 'world';
}

This is ok but as it does a turthy and falsy test and JS is wierd about truthy and falsy values. If the user used this function with (0,'','') all defaults would fire as these are falsy values. So a would turn into 4 and b would be 'hello' and c would be 'world'. So this has it's holes as well


method 3--------

function (a, b, c){
	if(a === 'undefined'){
		...
	}
	if(typeof b === 'undefined'){
		...
	}
	if(typeof c === 'undefined'){
		...
	}
}

This is supported by all and is what we want but we have the same issue we have with checking types. It is fat and does not follow the dry rule.



These are our options

option 1-----
function (a,b,c){ 
	arguments.check(
		['number',4],
		['string','hello'],
		['string','world']
	)
}
option 2-----
function (a,b,c){ 
	arguments.check(a).is('number').default(4);
	arguments.check(b).is('string').default('hello');
	arguments.check(c).is('string').default('world');
}

option 3-----
function (a,b,c){ 
	arguments.types('number','string','string'];
	arguments.defaults(4,'hello','world')
}

option 4------
creating a function that checks the info then calls the defined function after the parameters have been checked. def is more a python method not a JS one this could change.
def(['number',3],'string','string',function(a,b,c){
	
})

The difference here is do we check one parameter at a time or all at once.
Doing all at once would follow the dry rule in a nicer way. So this leaves out option 2

The main reason people do these checks is to verify the parameters are not undefined


We can just do something to an array and convert the arguments to an array and then finish the process this will make it more flexible. 

function(a,b,c){
	arguments.filter({
*		types : ['number','string','string'],
		defaults : [3, 'hello', 'world'],
		strict : true,
		amount : this.length,
		tests : [
		function(value){
			if(value > 0 && value < 100)
				return true;
		}]
		format : 'object',
*		log : console.log
	})
}


This gives a huge amount of additions and things we can do to check the arguments and we might not use all of these but it is very scalable to add new things to it. The small version of this would be like the following



tests-----------
You can run a test on the value or all the values. 
To apply the same test to all value just pass in a function
	will test all with one function
		tests : function(){}
If the tests are in an Array it will test the index in the array with the index in the arguments object



format----------

Format is the type of data the filter will return. By default it will change the argument elements directly.

if format = object we can get the variable names this way
arguments.callee.toString().split('(')[1].split(')')[0].split(',');

if format = array it will change the arguments to an array

after doing this for a bit I noticed this is way to large and all we need is type and value defaults
so I went back to defaults and values and notice the type and value had the same info so I created this.

var args = arguments.defaults([5,'HELLO']);
the types for arguments is number and string
so we have all the info we need right here.



