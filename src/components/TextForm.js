import React, { useState } from 'react';

export default function TextForm(props) {
    const clickUppcase = () => {
        const newtext = text.toUpperCase();
        setText(newtext);
    };

    const clicklovercase = () => {
        const newtext = text.toLowerCase();
        setText(newtext);
    };

    const clickonchange = (event) => {
        setText(event.target.value);
    };

    const reverseText = () => {
        const newtext = text.split('').reverse().join('');
        setText(newtext);
    };

    const copyhandle = () => {
        let textarea = document.getElementById("mytext");
        textarea.select();
        navigator.clipboard.writeText(textarea.value);
    };

    const ExtraSpaceRemove = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    };

    const clear = () => {
        setText('');
    };

    const [isBold, setIsBold] = useState(false);

    const toggleBold = () => {
        setIsBold(!isBold);
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h1 className="heading">{props.heading}</h1>
                <div className="mb-3">
                    <textarea value={text}className="form-control"onChange={clickonchange}id="mytext"rows="8"style={{fontWeight: isBold ? 'bold' : 'normal',}}></textarea>
                </div>
                <button className="btn btn-primary" onClick={clickUppcase}>Convert to UpperCase</button>
                <button className="btn btn-primary" onClick={clicklovercase}>Convert to toLowerCase</button>
                <button className="btn btn-primary" onClick={reverseText}>Reverse Text</button>
                <button className="btn btn-primary" onClick={clear}>Clear</button>
                <button className="btn btn-primary" onClick={copyhandle}>Copy Text</button>
                <button className="btn btn-primary" onClick={ExtraSpaceRemove}>Remove Extra Spaces</button>
                <button className="btn btn-primary" onClick={toggleBold}>
                    {isBold ? "Remove Bold" : "Make Bold"}
                </button>
            </div>
            <div className="container m-3" style={{ color: 'white' }}>
                <h1 style={{ color: 'black' }}>Your text summary</h1>
                <p style={{ color: 'black' }}>
                    {text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters
                </p>
                <p style={{ color: 'black' }}>{0.008 * text.split(" ").filter((word) => word.length > 0).length} minutes read</p>
                <h2 style={{ color: 'black' }}>Preview</h2>
                <p style={{color: 'black',fontWeight: isBold ? 'bold' : 'normal',}}>
                    {text.length > 0 ? text : "Enter something to preview it here"}
                </p>
            </div>
        </>
    );
}
