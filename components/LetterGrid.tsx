"use client";

import React from "react";
import LetterRow from "@/components/LetterRow";

interface LetterGridProps {
    numberOfRows: number;
}

const LetterGrid: React.FC<LetterGridProps> = (props) => {
    const rows = [];
    for (let i = 1; i <= props.numberOfRows; i++) {
        rows.push(i);
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-[200mm] border-2 border-gray-500">
            <div className="space-y-16 text-xl text-center">
                {rows.map((row) => (
                    <LetterRow key={row} rowNumber={row}></LetterRow>
                ))}
            </div>
        </div>
    );
};

export default LetterGrid;
