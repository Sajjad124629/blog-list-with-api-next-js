

const BlogDetail = async (id) => {
    const baseUrl = 'https://basic-blog.teamrabbil.com/api';
    const response = await fetch(`${baseUrl}/post-details/${id}`);
    
    const postDetail = await response.json();
    if(!response.ok){
        return null;
    }
    else{
        return postDetail;
    }
};

export default BlogDetail;