import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  function handelSubmit(event) {
    
    window.location.reload();
  }

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "fname") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setMsg(e.target.value);
    }
  };
  return (
    <div className="bg-gradient-to-b from-amber-100 to-amber-500 w-full text-black  h-fit pt-24  mt-24 md:p-12 lg:p-16">
      <div className=" text-start bg-blue p-4 flex flex-col justify-center items-center w-fit">
        <h2 className="text-2xl">Get in Touch</h2>
        <p className="text-center">
          Hey!! that's all , If you enjoyed my work do let me know by sharing it
          to others or you think something can be improved then too message me
          on the below handles.
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center w-full h-full  px-16 pt-16">
        <form
          className="flex flex-col justify-center h-full md:w-1/2 w-full"
          method="POST"
          // onSubmit={handelSubmit}
          action="http://localhost:3000/"
        >
          <input
            className="m-4 p-2 rounded-md shadow-md  "
            placeholder="Enter name"
            value={name}
            name="fname"
            required
            type="text"
            onChange={handleChange}
          />
          <input
            className="m-4 p-2 rounded-md shadow-md "
            placeholder="Enter email"
            value={email}
            name="email"
            required
            type="email"
            onChange={handleChange}
          />
          <textarea
            className="m-4 p-4  rounded-md shadow-md  flex justify-center text-start "
            name="message"
            id=""
            value={msg}
            cols="30"
            required
            rows="10"
            onChange={handleChange}
          >
            Enter the message
          </textarea>
          <div className="w-full flex justify-center items-center">
            <button
              onClick={handelSubmit}
              type="submit"
              className=" my-8 text-xl md:w-1/2 hover:bg-yellow-400 bg-yellow-300 text-black py-2 h-fit w-full px-4 rounded-full border-black border-2 hover:border-x-4 duration-150 "
            >
              Submit
            </button>
          </div>
        </form>
        <footer>
          <h2 className="text-slate-500">@pandeyyash7052@gmail.com</h2>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
