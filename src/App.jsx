import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App(){
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (data) => {
    setUsers([...users, data])
  }

  const handelRemove = (id) => {
    setUsers(()=>users.filter((item, index) => index != id))
  }

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center px-20">
        <div className="container mx-auto">
            <Cards handelRemove={handelRemove} users={users} />
            <Form handleFormSubmit = {handleFormSubmit} />
        </div>
    </div>
  )
}

export default App;
