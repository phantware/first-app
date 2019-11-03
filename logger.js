var url = 'http://mylogger.io.log'; // this is a fiticious url

function log(message){
    // send an HTTP request
    console.log(message);
}


module.exports.log = log; //We are adding the method log into exports and logging the function into the log and exporting the module


