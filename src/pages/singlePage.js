import React from 'react';
import { useParams, Link } from "react-router-dom";

import postdata from '../components/postdata';


const singlePage = () => {
    let { postId } = useParams();
    let post = postdata.find((b) => b.title === postId);

    return (
        <div>
            <div>
             <img src={post.imageUrl} alt={post.title} />
             </div>

            <div>
                <h1>{post.title}</h1>
                <p>{post.shortDesc}</p>
                <Link to="/blog">Back to Blog</Link>
            </div>
        </div>
    );
};

export default singlePage;
