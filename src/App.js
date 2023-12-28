import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddContact from "./components/AddConatct";
import EditConatct from "./components/EditContact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = [];
    const promise = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((json) => {
          json.map((contact) => {
            data.push({
              id: contact.id,
              name: contact.name,
              number: contact.phone,
            });
          });
        });
      dispatch({ type: "FETCH_CONTACTS", payload: data });
    };
    promise();
  }, []);

  return (
    <div className="App">
      {/* addcontact */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditConatct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
