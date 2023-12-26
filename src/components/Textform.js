// Below {useState} refers to importing it from react 
import React,{useState} from 'react'

export default function Textform(props) {
    // Below is declaration of function fired when action onClick is performed 
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success");
    }
    const handleClearClick = () =>{
        let newText = " ";
        setText(newText);
        props.showAlert('Text Cleared','success');
    }
    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const[text,setText] = useState('Enter the text here');
    // text = "new Text" This is wrong way of changing the state variable,i.e, text 
    // setText("new Text"); This is correct way of changing the state variable,i.e, text 
  return (<>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2 >{props.heading}</h2>
<div className="mb-3">
  {/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' 
  ,color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
  </div>
  <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>Your Text Summary Here</h1>
<p>The entered text has {text.split(" ").length} words and {text.length} characters.</p>
<p>The entered text has an average readtime of {0.008*text.split(" ").length} minutes</p>
  </div>
  </>
  
  )
}
// import React, {useState} from 'react'


// export default function TextForm(props) {
//     const handleUpClick = ()=>{
//         // console.log("Uppercase was clicked: " +  text);
//         let newText = text.toUpperCase();
//         setText(newText)
//     }

//     const handleLoClick = ()=>{ 
//         let newText = text.toLowerCase();
//         setText(newText)
//     }

//     const handleClearClick = ()=>{ 
//         let newText = '';
//         setText(newText)
//     }

//     const handleOnChange = (event)=>{
//         // console.log("On change");
//         setText(event.target.value)
//     }

//     // Credits: A
//     const handleCopy = () => {
//         console.log("I am copy");
//         var text = document.getElementById("myBox");
//         text.select();
//         text.setSelectionRange(0, 9999);
//         navigator.clipboard.writeText(text.value);
//     }

//     // Credits: Coding Wala
//     const handleExtraSpaces = () => {
//         let newText = text.split(/[ ]+/);
//         setText(newText.join(" "))
//     }

//     const [text, setText] = useState(''); 
//     // text = "new text"; // Wrong way to change the state
//     // setText("new text"); // Correct way to change the state
//     return (
//         <>
//         <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
//             <h1>{props.heading}</h1>
//             <div className="mb-3"> 
//             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
//             </div>
//             <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
//             <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
//             <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
//             <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
//             <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
//         </div>
//         <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
//             <h2>Your text summary</h2>
//             <p>{text.split(" ").length} words and {text.length} characters</p>
//             <p>{0.008 *  text.split(" ").length} Minutes read</p>
//             <h2>Preview</h2>
//             <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
//         </div>
//         </>
//     )
// }
