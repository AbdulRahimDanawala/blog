import { useEffect, useState } from 'react'
import BlogIntro from '../../components/BlogIntro'
import axios from 'axios'
import appSettings from '../../settings'

function ListBlogs() {
    let [listOfBlogs, setListOfBlogs] = useState([])
    let getListAllCreatedBlogs = () => {
        axios.get(`${appSettings.serverbaseUrl}/blogs/list`)
            .then(success => {
                if (success.data.status) {
                    setListOfBlogs(success.data.list)
                } else {
                    console.log("Unable to fetch list of blogs")

                }
            })
            .catch(err => {
                alert("Unable to connect Server")
            })
    }

    useEffect(() => {
        getListAllCreatedBlogs()
    }, [])


    return <>
        <h1>Total Blogs : {listOfBlogs.length}</h1>
        {listOfBlogs.map(blog => <BlogIntro key={blog._id} title={blog.title} tagline={blog.tagLine} _id={blog._id}/>)}
    </>
}

export default ListBlogs;