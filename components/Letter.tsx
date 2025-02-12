"use client";

import { useAppStore } from "@/store/appStore";
import {getLetterToFindOrRandomLetter} from "@/utils/randomLetter";
import React, {useEffect, useState} from "react";

const Letter = () => {
    const {letterToFind, lettersToPickFrom} = useAppStore();
    const [letter, setLetter] = useState<string>("");

    useEffect(() => {
        setLetter(getLetterToFindOrRandomLetter(letterToFind, lettersToPickFrom));
    }, [letterToFind]);

    return (
        <span>{letter}</span>
    );
};

export default Letter;
