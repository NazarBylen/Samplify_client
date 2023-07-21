import { useForm } from "react-hook-form"

import "./style.css"
import {http} from '../../http'

const Login = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {

        await http
            .post('/auth/login', data )
            .then(response => {
                localStorage.setItem("access-token",JSON.stringify(response.data.accessToken))
                localStorage.setItem("refresh-token",JSON.stringify(response.data.refreshToken))
            })
            .catch(err => console.log(err))
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
            </div>
        </div>
    )
}

export default Login;