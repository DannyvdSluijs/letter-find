"use client";

import { useAppStore } from "@/store/appStore";
import {getLetterToFindOrRandomLetter} from "@/utils/randomLetter";
import React from "react";

interface LetterRowProps {
    rowNumber: number;
}

const LetterRow: React.FC<LetterRowProps> = (props) => {
    const { letterToFind, lettersToPickFrom } = useAppStore();

    if (props.rowNumber % 2 == 0) {
        return (
            <div className="grid grid-cols-9 gap-4">
                <span>{getLetterToFindOrRandomLetter(letterToFind, lettersToPickFrom)}</span>
                <span></span>
                <span>{getLetterToFindOrRandomLetter(letterToFind, lettersToPickFrom)}</span>
                <span></span>
                <span>{getLetterToFindOrRandomLetter(letterToFind, lettersToPickFrom)}</span>
                <span></span>
                <span>{getLetterToFindOrRandomLetter(letterToFind, lettersToPickFrom)}</span>
                <span></span>
                <span>{getLetterToFindOrRandomLetter(letterToFind, lettersToPickFrom)}</span>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-9 gap-4">
            <span></span>
            <span>{getLetterToFindOrRandomLetter(letterToFind, lettersToPickFrom)}</span>
            <span></span>
            <span>{getLetterToFindOrRandomLetter(letterToFind, lettersToPickFrom)}</span>
            <span></span>
            <span>{getLetterToFindOrRandomLetter(letterToFind, lettersToPickFrom)}</span>
            <span></span>
            <span>{getLetterToFindOrRandomLetter(letterToFind, lettersToPickFrom)}</span>
            <span></span>
        </div>
    );
};

export default LetterRow;
