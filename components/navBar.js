import Link from 'next/link';

//Having created a navbar already, just modifying it because of current missing features
//For now /login won't work and /users is temp
//Will need have a way to switch navbar depending on if user is signed in
const Navbar=()=>{
    return(
        <div className="grid grid-cols-4">
                <Link className="btn-nav" href="/">Home</Link>
                <Link className="btn-nav" href="/login">Login</Link>
                <Link className="btn-nav" href="/signup">SignUp</Link>
                <Link className="btn-nav" href="/users">Users</Link>
        </div>
    )
}

export default Navbar;