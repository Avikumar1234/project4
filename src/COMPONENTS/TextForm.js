import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText)
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnchange=(event)=>{
        console.log("onchange")
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here ");
    
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"gray":"black"}}>
        <h1>{props.heading} </h1>
    <div className="mb-3">

    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode ==="dark"?"gray":"white",color:props.mode==="dark"?"gray":"blue"}} id="myBox"  rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleClearClick}>ClearText</button>
    <button className="btn btn-primary mx-3" onClick={handleCopy}>copyText</button>
    <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>

    </div>
    <div className="container my-3 " style={{color:props.mpde==="dark"?"gray":"black"}}>
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>can Read in {0.008*text.split(" ").length}</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the text to preview here"}</p>
    </div>
    </>
  )
}
