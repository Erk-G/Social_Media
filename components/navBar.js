import Link from 'next/link'

//Having created a navbar already, just modifying it because of current missing features
//For now /login won't work
//Will need have a way to switch navbar depending on if user is signed in
const Navbar=()=>{
    return(
        <div className="grid grid-cols-3">
                <Link className="btn-nav" href="/">Home</Link>
                <Link className="btn-nav" href="/login">Login</Link>
                <Link className="btn-nav" href="/signup">SignUp</Link>
        </div>
    )
}

export default Navbar;