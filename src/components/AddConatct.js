import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./addContact.css";
import { Link } from "react-router-dom";
const AddContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state);
  console.log("id check contact", contact.length - 1);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: contact[contact.length - 1].id + 1,
      name,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    setName("");
    setNumber("");
  };

  const deleteContact = (id) => {
    console.log("id", id);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  return (
    <div className="container">
      <div className="contactheader">
        <h1>CONTACT LIST</h1>
      </div>
      <div className="inputcontainer">
        <form onSubmit={submitHandler}>
          <input
            tpye="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputtag"
          />

          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="inputtag"
          />

          <input type="submit" value="Add Contact" className="addbtn" />
        </form>
      </div>
      <div className="contactlist">
        <table>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Name</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="tablebody">
            {contact.map((val, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td >{val.name}</td>
                <td>{val.number}</td>
                <td>
                  <button
                    onClick={() => deleteContact(val.id)}
                    className="delete"
                  >
                    Delete
                  </button>
                  <span> </span>
                  <Link to={`/edit/${val.id}`}>
                    <button >UpdateContact</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AddContact;
