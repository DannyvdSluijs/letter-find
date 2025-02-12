"use client";

import React from "react";
import Letter from "@/components/Letter";

interface LetterRowProps {
    rowNumber: number;
}

const LetterRow: React.FC<LetterRowProps> = (props) => {
    if (props.rowNumber % 2 == 0) {
        return (
            <div className="grid grid-cols-9 gap-4">
                <Letter />
                <span></span>
                <Letter />
                <span></span>
                <Letter />
                <span></span>
                <Letter />
                <span></span>
                <Letter />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-9 gap-4">
            <span></span>
            <Letter />
            <span></span>
            <Letter />
            <span></span>
            <Letter />
            <span></span>
            <Letter />
            <span></span>
        </div>
    );
};

export default LetterRow;
