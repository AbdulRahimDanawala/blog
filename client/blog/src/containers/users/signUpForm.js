import { useState, } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import settings from '../../settings'
function SignUpForm() {
    let history = useHistory()

    let attemptSignup = (e) => {
        e.preventDefault();

        let data = { name, emailId, password };
        axios.post(`${settings.serverbaseUrl}/users/signup`, data)
            .then(succes => {
                console.log()
                if (succes.data.status) {
                    history.push("/blogs/list")
                    localStorage.setItem( 'signedInUserName', succes.data.signedInUserName  )
                } else {
                    alert("Invalid Details")
                }
            })
            .catch(err => {
                console.log("Unable to post..!")
                console.log(err)
            })
    }



    let [name, setName] = useState('')
    let [emailId, setemailId] = useState('')
    let [password, setPassword] = useState('')




    return <>
        <form onSubmit={attemptSignup}>
            <label>
                UserName:<input type="text" value={name} required onChange={(e) => { setName(e.target.value) }} />
            </label>

            <label>
                Email:<input type="email" value={emailId} required onChange={(e) => { setemailId(e.target.value) }} />
            </label>
            <label>
                Password:<input type="password" value={password} required onChange={(e) => { setPassword(e.target.value) }} />
            </label>
            <button>SignUP</button>
        </form>

        <br />
        <br />

        <Link to="/signin" />
    </>
}

export default SignUpForm;