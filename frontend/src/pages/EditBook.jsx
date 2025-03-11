import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({ title: "", description: "" });
    const navigate = useNavigate();

    useEffect(() => {
        fetchBook();
    }, []);

    const fetchBook = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/books/${id}`);
            setBook(data);
        } catch (error) {
            console.error("Error fetching book:", error);
        }
    };

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/books/${id}`, book);
            navigate("/");
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleUpdate} className="border p-6 rounded-md shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Edit Book</h2>
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
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default EditBook;
