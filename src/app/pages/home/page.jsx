import NewPost from '@/app/api/NewPost';
import BlogList from '@/app/component/BlogList/BlogList';
import React from 'react';

const HomePage = async () => {
    const newBlogList = await NewPost();
    return (
        <div>
          <BlogList list={newBlogList}/>
        </div>
    );
};

export default HomePage;