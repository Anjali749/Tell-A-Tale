import "./post.css"
import {Link} from "react-router-dom"

export default function Post({ post }) {
    const PF = "http://localhost:7000/images/"; //PF=Public Folder
    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" src={PF + post.photo} alt="" />)}
            <div className="postInfo"> 
                <Link to={`/post/${post._id}`} className="link"> 
                <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postAuthor">Author:
                <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
                </Link>
                </span>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}


