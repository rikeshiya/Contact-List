import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const EditConatct = () => {

  const { id } = useParams();
//   console.log("id", id);
  const contact =useSelector(state=>state)
  console.log("contact",contact)
  let item = contact.find((c)=>c.id === +id)
  const [name, setName] = useState(item?.name);
  const [number, setNumber] = useState(item?.number);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("item",item)
  const updateContact = (e) => {
    e.preventDefault();
    const finaldata = {
      id: parseInt(id),
      name: name,
      number: number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: finaldata });
    navigate("/");
  };
  
  return (
    <>
   
      <form onSubmit={updateContact}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          
        />
        <input
          type=" number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
      
    </>
  );
};
export default EditConatct;
