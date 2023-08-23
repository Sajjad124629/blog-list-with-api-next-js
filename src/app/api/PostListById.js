const PostListById = async (id) => {
    const baseUrl = 'https://basic-blog.teamrabbil.com/api';
    const response = await fetch(`${baseUrl}/post-list/${id}`);
    
    const postCategoryData = await response.json();
    if(!response.ok){
        return [];
    }
    else{
        return postCategoryData;
    }
};

export default PostListById;