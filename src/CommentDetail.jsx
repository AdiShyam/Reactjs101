import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  const date = new Date();
  console.log(date.constructor());
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt='avatar' src={props.imageUrl} />
          {props.author}
        </a>
        <div className="metadate">
          <span className="date">{date.getMinutes()}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    )
}

export default CommentDetail;