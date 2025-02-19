import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Signup({ setCurrentUser, setIsMentor }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    profile_image: "",
    mentor_id: 1,
    gender: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/student_signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setCurrentUser(data);
          setIsMentor(false);
          navigate("/myprofile");
          alert(" Account was created  successfully");
        });
      } else {
        alert("Failed to create account");
        response.json().then((error) => console.log(error.errors));
      }
    });
  }

  return (
    <>
      <Navbar />
      <figure className="min-h-screen flex bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNZTFgX8GFBqlSFcAP6RkY05JLyqncK6NMTZEZpQ-rr0g05zP2AXAhPkCkknPPUoUMqM&usqp=CAU')]">
        <div className="w-full max-w-md m-auto bg-[#EDF4F9]  mt-6 mb-6 rounded-lg border-8 border-[#1D6697] border-primaryBorder shadow-default py-10 px-1">
          <div className="text-primary m-6">
            <div className="flex items-center mt-3 justify-center">
              <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
                Create an account
              </h1>
              <br></br>
            </div>
            <form className="font-normal" onSubmit={handleSubmit}>
              <label className="text-left">Username:</label>
              <input
                name="username"
                value={formData.username}
                placeholder="Username..."
                onChange={handleChange}
                className={
                  "w-full p-2 text-primary border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <label>Email Address:</label>
              <input
                name="email"
                value={formData.email}
                type="email"
                onChange={handleChange}
                placeholder="Email..."
                className={
                  "w-full p-2 text-primary  border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <label>Password:</label>
              <input
                value={formData.password}
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password..."
                className={
                  "w-full p-2 text-primary  border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <label>Password confirmation:</label>
              <input
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                type="password"
                placeholder="Confirm password..."
                className={
                  "w-full p-2 text-primary  border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <label>Gender</label>
              <br />
              <div onChange={handleChange} value={formData.gender}>
                <input type="radio" value="Male" name="gender" /> Male
                <br />
                <input type="radio" value="Female" name="gender" /> Female
                <br />
                <br />
              </div>
              <label>Profile image:</label>
              <input
                name="profile_image"
                onChange={handleChange}
                value={formData.profile_image}
                type="text"
                // accept="image/*"
                placeholder="Profile image..."
                alt="profile photo"
                className={
                  "w-full p-2 text-primary  border-[#878282] border-b-2 rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <div className="flex items-center mt-3">
                <button
                  type="submit"
                  className="inline-block px-6 py-2.5 bg-[#1D6697] text-[#FFFFFF] font-medium text-xs leading-tight  rounded shadow-md hover:bg-[#FFFFFF] hover:text-[#1D6697] hover:border-2 border-[#1D6697] focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Create Account
                </button>

                {/* <button
                  className={
                    "bg-[#1D6697] hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue width-246 focus:outline-none focus:border-black"
                  }
                  value="Login"
                >
                  Login
                </button> */}
              </div>
            </form>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="flex items-center mt-2 space-x-0.5">
              <p>Already have an account?</p>
              <button
                type="button"
                onClick={() => navigate("/singin")}
                className="inline-block px-6 py-2.5 bg-white text-[#1D6697] border-2 border-[#1D6697] font-medium text-xs leading-tight  rounded shadow-md hover:bg-[#1D6697] hover:text-white focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </figure>
      <Footer />
    </>
  );
}
