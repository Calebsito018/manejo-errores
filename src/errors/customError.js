export default class CustomError {
    static createError(message) {
        // console.log(message);
        const error = new Error(message);
        return{
            message:error.message,
        }
    }
}