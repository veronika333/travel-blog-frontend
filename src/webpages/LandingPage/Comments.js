import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

const Comments = ({ comments }) => {
    return (
        <div>
            <p className="comments-lp"><FontAwesomeIcon icon={faCommentAlt} /> {comments} comments </p>
        </div>
    );
}

export default Comments;
