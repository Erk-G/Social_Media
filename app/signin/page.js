'use client';
import User from "../lib/data";
export default function Signin() {
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
          <button>Submit</button>
        </form>
      </main>
    );
  }