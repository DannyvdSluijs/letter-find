"use client";

import { useAppStore } from "@/store/appStore";
import React, { useState } from "react";

const Header = () => {
    const { letterToFind, updateLetterToFind } = useAppStore();

    const [isEditing, setIsEditing] = useState(false); // Track edit state
    const [newLetter, setNewLetter] = useState(letterToFind); // Track new letter input

    // Handle click to start editing
    const handleClickEvent = () => {
        setIsEditing(true);
    };

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewLetter(e.target.value);
    };

    // Handle form submission to update the letter
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setNewLetter(newLetter);
        updateLetterToFind(newLetter); // Update the letter in store
        setIsEditing(false); // Exit editing mode
    };

    return (
        <div className="w-[200mm] max-w-3xl bg-gray-100 p-2 rounded-lg shadow-md mb-8 border-2 border-gray-500">
            <div className="flex justify-start space-x-4">
                <div className="p-3 bg-gray-200 rounded-xl flex items-center justify-center w-12 h-12 border-2 border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 5c-7.633 0-11.427 6.48-11.427 6.48a1 1 0 000 1.041S4.367 19 12 19s11.427-6.479 11.427-6.479a1 1 0 000-1.041S19.633 5 12 5zm0 12c-4.378 0-7.798-3.368-9.365-5.006C4.2 9.368 7.622 6 12 6s7.8 3.368 9.365 5.994C19.8 13.632 16.378 17 12 17zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"/>
                    </svg>
                </div>

                <div
                    className="p-3 bg-gray-200 rounded-xl flex items-center justify-center w-12 h-12 border-2 border-gray-500"
                    onClick={handleClickEvent}>
                    {isEditing ? (
                        <form onSubmit={handleSubmit} className="flex items-center">
                            <input
                                type="text"
                                value={newLetter}
                                onChange={handleInputChange}
                                maxLength={1}
                                className="text-center text-gray-600 text-2xl font-bold w-10 h-10 bg-gray-200 border-2 border-gray-500 rounded-lg"
                                autoFocus
                            />
                        </form>
                    ) : (
                        <span className="text-gray-600 text-2xl font-bold">{newLetter}</span>
                    )}
                </div>

                <div className="p-3 bg-gray-200 rounded-xl flex items-center justify-center w-12 h-12 border-2 border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;
