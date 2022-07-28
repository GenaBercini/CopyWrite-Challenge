import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function Box() {
    const reversedWords = useSelector(state => state.text);

    return (
        <div className="d-flex container-xxl mt-5" style={{ backgroundColor: '#FFFFFF', height: '70vh', boxShadow: "1px 1px 10px #9E9E9E", borderRadius: 10 }}>
            <h1>Results:</h1>
            <div className=" w-100 mt-5">
                {
                    reversedWords.length > 0 && reversedWords.map((word, index) => (
                        <Card key={index} text={word.text} palindrome={word.palindrome}/>
                    ))
                }
            </div>
        </div>
    )
}