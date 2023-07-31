import "./style.css"
import {useForm} from "react-hook-form";
import {useState} from "react";
import {ChangeUserPassword} from "../../api/auth";

const ChangePassword = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const [backendError, setBackendError] = useState(null)
    const [backendSuccess, setBackendSuccess] = useState(null)

    const onSubmit = (data) => {

        const userId = localStorage.getItem("userId")

        ChangeUserPassword(userId, data)
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
        <div className="container-fluid back-change">
            <div className="login">
                <h2>Change Password</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="password">new password</label>
                    <input type="password" placeholder="Enter new password" {...register("newPassword")}/>

                    <button className="artis-page-btn" type="submit">Change Password</button>
                </form>
                <div className="backendError">{backendError?backendError:null}</div>
                <div className="backendSuccess">{backendSuccess?backendSuccess:null}</div>
            </div>
        </div>
    )
}

export default ChangePassword;