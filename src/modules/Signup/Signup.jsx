import { useForm } from "react-hook-form"

import "./style.css"
import {http} from '../../http'

const Signup = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {

        await http
            .post('/auth/sign-up', data )
            .then(response => console.log(response.status, response.data))
            .catch(err => console.log(err))
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
            </div>
        </div>
    )
}

export default Signup;