import BlogDetail from '@/app/api/BlogDetail';
import BlogDetails from '@/app/component/BlogDetails/BlogDetails';
import React from 'react';

const BlogDetailPage = async ({params}) => {
    const ID = params.slug;
    const blogDetail = await BlogDetail(ID);
    
    return (
        <div>
            <BlogDetails list={blogDetail}/>
        </div>
    );
};

export default BlogDetailPage;