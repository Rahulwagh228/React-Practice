import React, { useState } from 'react'


export default function Textform(props) {
    const ChangeUpcase = (e) => {
        e.preventDefault();

        let newtext = Text.toUpperCase();
        setText(newtext);
        // console.log("You clicked on the button up case");
    }

    const Changelowcase = (e) =>{
        e.preventDefault();
        let newtext = Text.toLowerCase();
        setText(newtext);
    }

    const onchang = (event) => {
        setText(event.target.value)
    }
    const [Text, setText] = useState('Enter Your Text here');

    const cleartext = (e) =>{
        e.preventDefault();
        let newtext = ""
        setText(newtext);
    }

    const spacehandler = (e) =>{
        e.preventDefault();
        let newtext = Text.split(/[ ]+/);
        setText(newtext.join(" "))
        
    }

    const handleCopy = (e) =>{
        e.preventDefault();
        var text = document.getElementById("Text")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    return (
        <>
        <form>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value={Text} onChange={onchang} id="Text" rows="8">

                </textarea>
                <button className="btn btn-primary my-3 mx-2" onClick={ChangeUpcase} >Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={Changelowcase} >Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={spacehandler} >Remove Extra Spaces</button>
                <button className="btn btn-primary my-3 mx-2" onClick={cleartext} >Clear Text</button>

            </div>

        </form>
        <div className="container">
            <h1>Your Text summery</h1>
            <p>your text contains {Text.split(" ").length} words and {Text.length} character</p>
            <p>You can read this text in {Text.split(" ").length*0.008} minutes</p>
        </div>
      <h3>preview</h3>
      <p>{Text}</p>


        </>
    )
}
