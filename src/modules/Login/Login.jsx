import { useForm } from "react-hook-form"

import "./style.css"
import {LogIn} from "../../api/auth"
import {useState} from "react";
import axios from "axios";

const Login = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const [backendError, setBackendError] = useState(null)
    const [backendSuccess, setBackendSuccess] = useState(null)

    const onSubmit = (data) => {
      console.log(data);
      LogIn(data)
            .then(response => {
                console.log(response);
                localStorage.setItem("access-token",JSON.stringify(response.data.accessToken))
                localStorage.setItem("refresh-token",JSON.stringify(response.data.refreshToken))
                localStorage.setItem("userId",JSON.stringify(response.data.id))
                setBackendSuccess("Success")
                setBackendError(null)
            })
            .catch(err => {
                console.log(err);
                setBackendError(err.response.data.message);
                setBackendSuccess(null)
            })

    }

    return (
        <div className="container-fluid back-login">
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">email</label>
                    <input type="text" placeholder="Enter your email" {...register("email")}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" {...register("password")}/>

                    <button className="artis-page-btn" type="submit">Login</button>
                </form>
                <div className="backendError">{backendError?backendError:null}</div>
                <div className="backendSuccess">{backendSuccess?backendSuccess:null}</div>
            </div>
        </div>
    )
}

export default Login;
