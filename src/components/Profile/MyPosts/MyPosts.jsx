import React from 'react';
import Post from './Post/Post';
import AddNewPostReduxForm from "./addNewPostReduxForm";

const MyPosts = React.memo ((props) => {
    let PostsElements = props.state.PostsData
        .map(post => <Post message={post.message} like={post.like} key={post.id}/>);

    let addPost = (dataForm) => {
        props.addPost(dataForm.newPostBody)
        console.log(dataForm)
    }

    return (
        <div>my post
            <div>
                {PostsElements}
            </div>
            <AddNewPostReduxForm onSubmit={addPost}/>
        </div>
    );
})

export default MyPosts;