import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/books");
            setBooks(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/books/${id}`);
            setBooks(books.filter(book => book._id !== id)); 
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

    return (
        <div className="mx-auto p-6">
            <div className="flex justify-between">
                <h1 className="font-bold text-4xl">Books Store</h1>
                <button 
                    className="px-2 bg-amber-500 rounded-md font-semibold cursor-pointer w-44"
                    onClick={() => navigate("/add")}
                >
                    Add Book
                </button>
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center mt-6">
                    <p>Books are loading...</p>
                </div>
            ) : books.length === 0 ? (
                <div className="flex justify-center items-center mt-6">
                    <p>No books available.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {books.map((book) => (
                        <div key={book._id} className="border p-4 rounded-md shadow-md">
                            <h2 className="text-lg font-bold">{book.title}</h2>
                            <p className="text-sm">{book.description}</p>
                            <div className="flex justify-between mt-3">
                                <button 
                                    className="bg-green-500 text-white px-3 py-1 rounded-md cursor-pointer
                                    "
                                    onClick={() => navigate(`/edit/${book._id}`)}
                                >
                                    Edit
                                </button>
                                <button 
                                    className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"
                                    onClick={() => handleDelete(book._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
