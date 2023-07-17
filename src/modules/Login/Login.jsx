import "./style.css"

const Login = () => {
    return (
        <div className="container-fluid back-login">
            <div className="login">
                <h2>Login</h2>
                <form action="http://localhost:5000/login" method="POST">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username"/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />

                    <button className="artis-page-btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;