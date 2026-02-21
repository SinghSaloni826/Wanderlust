// class ExpressError extends Error {
//     constructor(statuscode, message) {
//        super();
//        this.statusCode = this.statusCode;
//        this.message = message;
//  }
// }
    
   
// module.exports = ExpressError;

class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;