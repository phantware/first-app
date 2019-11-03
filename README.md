# INFORMATION ABOUT NODE AND A LITTLE EXPLANATION ON NODE MODULES

## the first file define is called the main module and any other modules are sub modules
this is a modul, and a module allow us to separate different code from each other and they do not overright themselves 
and a module can be reusable
A module has json objes which are called properties and it has the following
module {
    id: '.',
    exports: {},
    parent: null,
    filename: '/Users/.....',
    loaded: false,
    paths: 
    [
        '/Users/../.../../..first-app/node_modules',
        '/Users/../.../../../node_modules',
        '/Users/../.../../../node_modules',
        '/Users/../.../../../node_modules',
        '/node_modules'

    ]
}

We are adding the method log into exports and logging the function into the log and exporting the module
to load a module, we use the require function and it takes in one argument of the type of module we want to load
If the module is in the same folder meaning current folder, we use require('./logger')
If it is in a sub folder we use require('./subfolder/logger')
If the module is in a parent foldr we can use require('../logger'), here we are using the relative path of the target module
The requre function returns object that is targetted from the require function i.e var logger = require('./logger')

HTTP Module: this is used for creating networking application
1. We load http using const http = require('http')
2. we then call http using the code below, with the code below, we can create a web server and store it in a server object
const server = createServer()
3. const server = http.createServer();
we then handle the event by using on() method Which is event listerner or handler,
but the code below is very low level, so i am going to comment is out and make use of req and res
             server.on('connection', (socket) => {
                 console.log('New connection ....');
            });

we then call the server to listen to a predefine port
server.listen(5000);
we then log the server
console.log('Listening on port 5000...');

back to 2.
instead of using server.on() event handle because the code is a low level code,
we then use a call back function and pass an argument (req, res)
instead of working with socket as we did on 3., we can work with the actual request or response object using the if statement
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }
});
we will see the result of Hello world in our browser
.......
4. if we want to build backend service for our web app or mobile app, we need to handle various router.
for example, we can have another statement which will return list of courses from the database [array of object in json]
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }
    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

going forward, we will not going to use this http module to build a backend service for our application, the reason is 
because the more we add more route, the code become complex, because we add all of then in a linear way in the call back 
function, so we use a frame work called express which gives our application a clean structure to add route.