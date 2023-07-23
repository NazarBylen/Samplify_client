import { useForm } from "react-hook-form"

import "./style.css"
import {http} from '../../http'
import {useState} from "react";

const Signup = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const [backendError, setBackendError] = useState(null)
    const [backendSuccess, setBackendSuccess] = useState(null)

    const onSubmit = async (data) => {

        await http
            .post('/auth/sign-up', data )
            .then(response => {
                setBackendSuccess("Success")
                setBackendError(null)
            })
            .catch(err => {
                setBackendError(err.response.data.message);
                setBackendSuccess(null)
            })
    }



    return (
        <div className="container-fluid back-signup">
            <div className="signup">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">email</label>
                    <input type="text" placeholder="Enter your email" {...register("email")}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" {...register("password")}/>

                    <button className="artis-page-btn" type="submit">Submit</button>
                </form>
                <div className="backendError">{backendError?backendError:null}</div>
                <div className="backendSuccess">{backendSuccess?backendSuccess:null}</div>
            </div>
        </div>
    )
}

export default Signup;