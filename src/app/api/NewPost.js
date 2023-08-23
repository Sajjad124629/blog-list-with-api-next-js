const NewPost = async () => {
    const baseUrl = 'https://basic-blog.teamrabbil.com/api';
    const response = await fetch(`${baseUrl}/post-newest`);
    
    const postNewList = await response.json();
    if(!response.ok){
        return [];
    }
    else{
        return postNewList;
    }

};

export default NewPost;