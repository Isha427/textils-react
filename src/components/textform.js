import React,{useState} from "react";

const Textform=(props) =>{
  const handleUpClick=()=>
  {
    // console.log("Upper case was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Upper Case","success");
  }
  const handleLoClick=()=>
  {
    // console.log("Upper case was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lower Case","success");
  }
  const handleOnChange=(event)=>
  {
    setText(event.target.value);
    
  }
  const handleclear=()=>
  {
    setText("");
    props.showalert("Cleared Text","success");
  }
  const handlecopy=()=>
  {
    let word=document.getElementById("mybox");
    word.select();
    navigator.clipboard.writeText(word.value);
    props.showalert("Text Copied","success");
  }
  const [text,setText]=useState('');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}id="mybox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleclear}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((word)=>{return word.length!=0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((word)=>{return word.length!=0}).length} minutes read</p>
      <h1>Preview</h1>
      <p>{text.length===0?"Nothing to preview":text}</p>
      </div>
    </>
  );
  
}
export default Textform;
