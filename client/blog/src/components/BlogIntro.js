import {Link} from 'react-router-dom'
import './BlogIntro.css'

function BlogIntro(props) {
    return <>
        <div className="blog-intro">
            <h1 className="blog-title">{props.title}</h1>
            <div className="blog-tagline">{props.tagline}</div>
        <p>
            would you like to <Link to={`/blog/${props._id}`}> know more ??</Link>
        </p>


        </div>

    </>
}

export default BlogIntro;