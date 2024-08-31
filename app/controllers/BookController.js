import BookService from "../services/BookService.js";
class BooksController{
    #BookService

    constructor() {
        this.#BookService = new BookService();
    }

    // Get all books
    async getAllBooks(){
        console.log("Get all books")
        try{
            console.log("Getting all books", this.#BookService.getAllBooks())
            return await this.#BookService.getAllBooks();
        }
        catch (e){
            return e.message;
        }
    }

    async createBook(args) {
        console.log("Create Book Controller", args);
        try{
            return await this.#BookService.createBook(args);
        }
        catch (e){
            return e.message;
        }
    }

    async getBookById(args) {
        try{
            if (args?.id){
                return await this.#BookService.getBookById(args.id);
            }
            else{
                return "Missing book id";
            }
        }
        catch (e){
            return e.message;
        }
    }

    async deleteBookById(args) {
        try{
            if (args?.id){
                return await this.#BookService.deleteBookById(args.id);
            }
            else{
                return "Missing book id";
            }
        }
        catch (e){
            return e.message;
        }
    }

    async updateBook(id, args) {
        try{
            if (id){
                return await this.#BookService.updateBook(id, args);
            }
            else{
                return "Missing book id";
            }
        }
        catch (e){
            return e.message;
        }
    }
}

export default BooksController;