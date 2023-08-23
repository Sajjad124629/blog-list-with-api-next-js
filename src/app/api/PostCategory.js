const PostCategory = async () => {
    const baseUrl = 'https://basic-blog.teamrabbil.com/api';
    const response = await fetch(`${baseUrl}/post-categories`);
    
    const postCategoryData = await response.json();
    if(!response.ok){
        return [];
    }
    else{
        return postCategoryData;
    }
};

export default PostCategory;