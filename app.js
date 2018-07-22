var mymodule = require('./myModule');
var mkdwn = require('markdown').markdown;

mymodule.sayHello();
mymodule.sayGoodbye();
console.log(mkdwn.toHTML('A paragraph in **markdown**!'));
