import PostListById from '@/app/api/PostListById';
import BlogList from '@/app/component/BlogList/BlogList';
import React from 'react';

const PostCategoryPage = async ({params}) => {
    const ID = params.slug;
    const specificPostList = await PostListById(ID);
    return (
        <div>
            <BlogList list={specificPostList}/>
        </div>
    );
};

export default PostCategoryPage;