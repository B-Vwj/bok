import React from "react";
import useAxios from "../hooks/useAxios";
import axios from "../api/libraryBooks";
import '../components/Books.css'

const Books = () => {
    const [books, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: '/books'
    })

    const booksList = books.map(
        (book) => {
            return (
                <tr key={book.bookId}>
                    <td>{book.bookId}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.isbn}</td>
                    <td>{book.bookEdition}</td>
                    <td>{book.publishDate}</td>
                    <td>{book.numberOfPages}</td>
                </tr>
            )
        }
    )

    return (
        <div>
            <table className="center table">
                <thead>
                    <tr>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Book Edition</th>
                    <th>Publish Date</th>
                    <th>Number of Pages</th>
                    </tr>
                </thead>
                <tbody>
                    {booksList}
                </tbody>
            </table>
        </div>
    )   
}

export default Books