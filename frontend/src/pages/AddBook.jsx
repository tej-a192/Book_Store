import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const [book, setBook] = useState({ title: "", description: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/books", book);
            navigate("/");
        } catch (error) {
            console.error("Error adding book:", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="border p-6 rounded-md shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Book Title" 
                    value={book.title} 
                    onChange={handleChange} 
                    className="w-full p-2 mb-3 border rounded-md"
                />
                <textarea 
                    name="description" 
                    placeholder="Book Description" 
                    value={book.description} 
                    onChange={handleChange} 
                    className="w-full p-2 mb-3 border rounded-md"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
