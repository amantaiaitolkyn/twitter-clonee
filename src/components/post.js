import React, {useState} from "react";
import Posts from "../datas";
import {Link} from "react-router-dom";

const Post = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [comment, setComment] = useState("");
    const filteredPosts = Posts.filter((post) => {
        return (
            (post.author.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });
    function likePost(){
    }
    return(

        <div className="post">
            <div className="words">
                <h2>All Posts</h2>
            </div>
            <div className="search-form">
                <h3>Search Posts:</h3>
                <form>
                    <input
                        type="text"
                        placeholder="Search by author name "
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>
            </div>
            <div>
                <button><Link to="/addPost">Add new post</Link></button>
            </div>
            <div className="post-cards">
                { filteredPosts.map((post, index) => (
                    <div className="post-card" key={post.id}>
                        <div className="post-details">
                            <div className="post-header">
                                <Link to={`/posts/${post.id}`}><h4 className="link">{post.author}</h4></Link>
                                <img src={post.image} alt=" " width={400}/>
                                <p>Like: {post.like}</p>
                                <button type="button" onClick={() => likePost()}>Like</button>
                            </div>
                            <p className="room-title">{post.title}</p>
                            <div className="comment"><input
                                type="text"
                                placeholder="Comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            /></div>
                            <button>Send</button>
                            <div className="bottom">
                                <Link to={`/rooms/${post.id}`}><h6>Discover more</h6></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Post;