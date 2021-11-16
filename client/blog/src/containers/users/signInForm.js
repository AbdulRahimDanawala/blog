import { useState, } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import settings from '../../settings'
function SignInForm(props) {
    let history = useHistory()

    let attemptSignin = (e) => {
        e.preventDefault();

        let data = {emailId, password };
        axios.post(`${settings.serverbaseUrl}/users/signin`, data)
            .then(succes => {
                if (succes.data.status) {
                    console.log(succes)
                    history.push("/blogs/list")
                    localStorage.setItem("signedInUserName",succes.data.signedInUserName)
                } else {
                    alert("Invalid Details")
                }
            })
            .catch(err => {
                console.log("Unable to post..!")
                console.log(err)
            })
    }



    let [emailId, setemailId] = useState('')
    let [password, setPassword] = useState('')




    return <>
        <form onSubmit={attemptSignin}>
            
            <label>
                Email:<input type="email" value={emailId} required onChange={(e) => { setemailId(e.target.value) }} />
            </label>
            <label>
                Password:<input type="password" value={password} required onChange={(e) => { setPassword(e.target.value) }} />
            </label>
            <button>Login</button>
        </form>
    </>
}

export default SignInForm;