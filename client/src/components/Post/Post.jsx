import React from 'react';
import { Link } from 'react-router-dom'

const Post = (props) => {

  return (
    <div>
      <Link className="post" to={`/posts/${posts.id}`}>
        <div className="post-title">{props.title}</div>
        <div className="post-author">{props.author}</div>
        <img className="post-img" src={props.imgURL} alt={props.title} />
        <div className="post-content">{props.content}</div>
      </Link>
    </div>
  )
}

export default Post