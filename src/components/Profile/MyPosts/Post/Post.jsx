import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
	return (
		<div>
			<img className={style.avatar} src="https://i.pinimg.com/originals/4f/74/8e/4f748e205092e102d0deaa635f1a167e.jpg" alt="" />
			<span>{props.message}</span>
			<span>  like {props.like}</span>
		</div>
	);
}

export default Post;