import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
function AddPost() {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const handleAddPost = (author, content) => {
        navigate('/home');
    }
    return (
        <div className="container">
            <div className="header">
                <div className="text">Add post</div>
                <div className="underline"></div>
            </div>
            <form className="inputs">
                <div className="input">
                    <input type="text" placeholder="Author name " value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="input">
                    <input type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
            </form>
            <div className="submit-container">
                <button type="button" onClick={() => handleAddPost(author,content)}>Add</button>
            </div>
        </div>
    );
}

export default AddPost;