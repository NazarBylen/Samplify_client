import "./style.css"

const Signup = () => {
    return (
        <div className="container-fluid back-signup">
            <div className="signup">
                <h2>Sign Up</h2>
                <form action="http://localhost:5000/submit" method="POST">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />

                    <button className="artis-page-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;