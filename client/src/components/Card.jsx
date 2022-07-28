import React from "react";

export default function Card({ text, palindrome }) {
    return (
        <div className="card w-75 m-3" style={{height: '15%'}}>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>{text}</p>
                <footer className="blockquote-footer">{palindrome ?  "That word is a " : "That word isn't a "}<cite title="Source Title"><b>Palindrome</b></cite></footer>
            </blockquote>
        </div>
        </div>
    )
}