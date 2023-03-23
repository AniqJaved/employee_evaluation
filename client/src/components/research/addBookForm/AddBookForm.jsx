import React, { useState,useContext, useEffect } from 'react';
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";




export default function AddBookForm ({onAddBook}) {

    const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);

    const bookList = config.filter(obj => obj.configType === "book")

    const [selectedBook, setSelectedBook] = useState('');
    const [noOfBook, setNoOfBook] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);
    const handleAddBook = (event) => {
        event.preventDefault();
        if (selectedBook && noOfBook) {
            onAddBook(selectedBook, noOfBook);
            // setSelectedCourse('');
            // setCourseContribution('');
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
      }
    
    return (
        <>
            <form>
                <label>
                    Book:
                    <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
                        <option value="">Select a Book</option>
                        {
                        bookList.map((book) => (
                        <option key={book._id} value={book._id}>
                            {book.bookType}
                        </option>
                        ))}
                    </select>
                </label>
                <label>
                    Number of Books:
                    <input type="number" value={noOfBook} onChange={(e) => setNoOfBook(e.target.value)} />
                </label>
                <button onClick={handleAddBook} type="submit">Add Book</button>
            </form>
        </>
    );
};

