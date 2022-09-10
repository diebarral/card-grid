import React from "react";

// Types
import { Post } from '../../types/post';

// Styling
import './card.styles.scss';

interface CardProps {
  post: Post
}

const Card = ({ post }: CardProps)  => (
  <div className="card-container">
    <div className="title">
      <h3>{post.title}</h3>
    </div>
    <div className="body">
      {post.body}
    </div>
  </div>
);

export default Card;