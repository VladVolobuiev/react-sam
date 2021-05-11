import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg" />
      {props.message}
      <div>
        <span>like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
