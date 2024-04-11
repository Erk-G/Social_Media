'use client';
import Link from 'next/link';
import User from "../lib/data";

export default function Signup() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e.target.username.value);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName: </label>
        <input id="username" name="username" type="text" className="bg-transparent outline outline-2 outline-white" required/>
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" className="bg-transparent outline outline-2 outline-white" required/>

        <label htmlFor="first_name">First Name: </label>
        <input id="first_name" name="first_name" className="bg-transparent outline outline-2 outline-white" required/>

        <label htmlFor="last_name">Last Name: </label>
        <input id="last_name" name="last_name" className="bg-transparent outline outline-2 outline-white" required/>

        <label htmlFor="image_url">Profile Picture URL: </label>
        <input id="image_url" name="image_url" className="bg-transparent outline outline-2 outline-white" required/>

        <label htmlFor="header_image_url">Header Picture URL: </label>
        <input id="header_image_url" name="header_image_url" className="bg-transparent outline outline-2 outline-white" required/>

        <label htmlFor="email">Email Address: </label>
        <input id="email" name="email" className="bg-transparent outline outline-2 outline-white" required/>
        <button>Submit</button>
      </form>
    </main>
  );
}
