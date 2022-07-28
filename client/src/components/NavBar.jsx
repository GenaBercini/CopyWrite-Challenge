import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import getReversedText  from "../redux/actions/actions"

export default function NavBar() {
    const [text, setText] = useState('')

    const dispatch = useDispatch();

    const onHandleChange = (event) => {
        event.preventDefault();
        setText(event.target.value);
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        dispatch(getReversedText(text));
        setText('')
    }

    return (
        <nav className="navbar justify-content-center" style={{backgroundColor: '#E00002'}}>
            <div className="w-50 d-flex">
                <form onSubmit={(event) => onHandleSubmit(event)} className="d-flex container" role="search" >
                    <input className="form-control me-4" value={text} type="search" placeholder="Insert Text" onChange={(event) => onHandleChange(event)} aria-label="Search"/>
                        <button className="w-25 btn btn-outline-success text-white border-0 btn-lg" type="submit" style={{backgroundColor: '#4900FF'}}>Send</button>
                </form>
            </div>
        </nav>
    )
}