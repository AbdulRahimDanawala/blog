import { useState } from 'react'
import axios from 'axios'
import setting from '../../settings'
import JoditEditor from "jodit-react";
import './CreateBlog.css'


function CreateNewBlog() {

    let categoryOptions = [
        '',
        'Tech',
        'Health',
        'DIY',
        'Books',
        'Beauty'
    ]


    let [category, setCategory] = useState('');
    let [title, setTitle] = useState('');
    let [tagLine, setTagLine] = useState('');
    let [body, setBody] = useState('');
    let [headerImage, setHeaderImage] = useState();

    let resetForm = function () {
        setCategory('')
        setTitle('')
        setTagLine('')
        setBody('')
    }

    let requestToCreateNewBlog = (e) => {
        e.preventDefault();


        let formData = new FormData();
        formData.append("blogDetails", JSON.stringify( {category,
            title,
            tagLine,
            body}))
        formData.append("headerImage", headerImage) 


        axios.post(`${setting.serverbaseUrl}/blogs/new`, formData, {"Content-type":"multipart/form-data"})
            .then(succes => {
                if (succes.data.status) {
                    alert("Your Blog Successfully Added")
                    resetForm();
                } else {
                    alert("Unable to save new blog in DB...!")
                }
            })
            .catch(err => {
                console.log(err)
            })

    }

    return <>
        <div className="blogFormWrapper">


            <h1>Awesome ..! Lets Start Writing</h1>

            <form onSubmit={requestToCreateNewBlog}>
                {/*   Category */}
                <label>category:<br />

                    <select value={category} onChange={event => setCategory(event.target.value)}>
                        {
                            categoryOptions.map((category, index) => <option key={index} value={category}>{category}</option>)
                        }

                    </select>
                </label>
                <br /><br />

                {/* Title */}

                <label>Title:<br />
                    <input type='text' value={title} onChange={event => setTitle(event.target.value)} />
                </label>
                <br /><br />

                {/* Tag Line */}


                <label>Tag Line:<br />
                    <input type='text' value={tagLine} onChange={event => setTagLine(event.target.value)} />
                </label>
                <br /><br />

                {/* Header Image */}

                <label>Header Image:<br />
                    <input type='file' onChange={event => setHeaderImage(event.target.files[0])} />
                </label>
                <br /><br />


                {/* Rict Text Editor */}
                <JoditEditor

                />

                <button>Save New Blog</button>

            </form>
        </div>
    </>
}

export default CreateNewBlog;