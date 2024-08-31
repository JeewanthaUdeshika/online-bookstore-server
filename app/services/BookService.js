import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
class BookService {
    constructor() {
    }

    async getAllBooks() {
        let booksResponse = [];
        try{
            booksResponse = await prisma.books.findMany();
            console.log("booksResponse", booksResponse);
        }
        catch(error){
            console.error("Error fetching books", error);
        }

        return booksResponse.length>0 ? booksResponse : "NO_BOOKS";
    }

    async createBook(args){
        try{
            // Create or update author table
            console.log("Create book Service", args)

            if (args){
                const author = await prisma.author.upsert({
                    where: { name: args.author },
                    create: { name: args.author, id: args.authorId},
                    update: {},  // Update author data if it exists
                });

                if (author) {
                    return await prisma.books.create({
                        data: {
                            title: args.title,
                            author: {
                                connect: {id: author.id}
                            },
                            published_date: new Date(args.published_date),
                            price: args.price,
                            description: args.description ? args.description : "",
                            isbn: args.isbn,
                            id: args.bookId
                        }
                    });
                } else {
                    console.error("Error creating author");
                }
            }

        }
        catch(error){
            console.error("Error creating book", error);
        }
    }

    async getBookById (id){
        try{
            const bookId = parseInt(id);
            return await prisma.books.findUnique({
                where: {id: bookId},
            });
        }
        catch(error){
            console.error("Error fetching book by id", error);
        }
    }

    async deleteBookById (id) {
        try{
            const bookId = parseInt(id);
            return await prisma.books.delete({
                where: {id: bookId},
            });
        }
        catch(error){
            console.error("Error deleting book by id", error);
        }
    }

    async updateBook(id, args) {
        try {
            const bookId = parseInt(id);
            const book = await prisma.books.findUnique({
                where: { id: bookId },
            });

            if (!book) {
                throw new Error(`Book with ID ${id} not found`);
            }

            return await prisma.books.update({
                where: { id: bookId },
                data: args,
            });
        } catch (error) {
            console.error("Error updating book:", error);
            throw error;
        }
    }
}

export default BookService;