import { useState } from "react";
import { Fragment } from "react";


const Inbox = (props) => {
  const [mails, setMail] = useState([]);
  fetch("https://expense-36826-default-rtdb.firebaseio.com/mailData.json")
    .then((res) => res.json())
    .then((data) => {
      const mData = [];
      for (const key in data) {
        mData.push({
          id: key,
          email: data[key].email,
          sub: data[key].sub,
          body: data[key].body,
        });
      }
      setMail(mData);
      console.log(data);
    });

    const deleteHandler = (val) => {
        fetch(
          `https://expense-36826-default-rtdb.firebaseio.com/mailData/${val.target.id}.json`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("Mail Successfully Deleted");
            console.log(data);
          });
    }

    

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href=" ">
            MailBox!
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="card edit">
        {mails.map((data) => (
          <div className="row">
            <div className="col">{data.email}</div>
            <div className="col">{data.sub}</div>
            <div className="col">{data.body}</div>
            <div className="col">
              <button
                className="btn btn-outline-danger"
                id={data.id}
                onClick={deleteHandler}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Inbox;
