import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/books"); // Adjust the endpoint based on your backend
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='mx-auto'>

            {/* Header */}
            <div className='flex justify-between p-6'>
                <h1 className='font-bold text-4xl'>Books Store</h1>
                <button 
                    onClick={() => navigate("/add-book")} 
                    className='px-2 bg-amber-500 rounded-md font-semibold cursor-pointer w-44'>
                    Add Books
                </button>
            </div>

            {/* List of Books */}
            {isLoading ? (
                <div className='flex justify-center items-center'>
                    <p>Books are on the way...</p>
                </div>
            ) : books.length === 0 ? (
                <div className='flex justify-center items-center'>
                    <p>No books available.</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                    {books.map((book) => (
                        <div key={book._id} className='border border-black p-4 rounded-md'>
                            <h2 className='font-bold'>{book.title}</h2>
                            <p>{book.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
