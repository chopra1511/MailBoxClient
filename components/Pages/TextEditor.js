import { Fragment, useState, useRef } from "react";
import "./TextEditor.css";
import React from "react";
import parse from "html-react-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const TextEditor = (props) => {
   
    const [text , setText] = useState('');
    const mailEntered = useRef();
    const subEntered = useRef();

   
   
    const submitHandler = (event) => {
        event.preventDefault();
        const mail = mailEntered.current.value;
        const sub = subEntered.current.value;
        
        console.log(mail,sub,parse(text).props.children);
        fetch(
          "https://expense-36826-default-rtdb.firebaseio.com/mailData.json",
          {
            method: "POST",
            body: JSON.stringify({
              email: mail,
              sub: sub,
              body: parse(text).props.children,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

         
    }


  return (
    <Fragment>
      <div className="card edit">
        <form onSubmit={submitHandler}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              To:
            </span>
            <input
              ref={mailEntered}
              type="email"
              className="form-control"
              required
            />
          </div>
          <div>
            <input
              ref={subEntered}
              type="text"
              className="form-control"
              placeholder="subject"
            />
          </div>
          <div>
            <CKEditor
              data={text}
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
              }}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Send
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default TextEditor;

