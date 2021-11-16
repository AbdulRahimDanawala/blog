import { useParams } from 'react-router-dom'
import Settings from '../../settings'
import { useEffect, useState } from 'react'
import axios from 'axios'
function ViewBlog() {
    let requestParams = useParams()
    let [blogDetails, setBlogDetails] = useState()


    useEffect(() => {
        console.log(requestParams.id)
        axios.get(`${Settings.serverbaseUrl}/blogs/${requestParams.id}`)
            .then(success => {
                console.log(success.data.requestedblog)
                setBlogDetails(success.data.requestedblog)
            })
            .catch(err => {
                console.log("unable to find the requested  blog ..!")
            })
    }, [])

    return <>

        {
            blogDetails ? <>
            <h1>{}blogDetails.title</h1>
            <img src={blogDetails.headerImageURL}></img>
            </>:<h1>Loading..!</h1>
        }
    </>


}
export default ViewBlog;