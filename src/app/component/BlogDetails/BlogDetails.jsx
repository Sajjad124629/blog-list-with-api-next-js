import Image from "next/image";


const BlogDetails = ({list}) => {
    // console.log(list);
    return (
        <div>
                <div className="container mx-auto my-16 p-9">
        <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
            <div className="card w-100 glass">
            
                { list.postDetails != null ? <figure><Image width={800} height={800} src={ list['postDetails']['img']} alt="car!"/></figure> : <>No Data Found</> } 
                <div className="card-body">
                   {list.postDetails != null ? <h2 className="card-title">{list['postDetails']['title']}</h2> : <></>} 
                   {list.postDetails != null ?  <p>{list['postDetails']['content']}</p> : <></>} 
                </div>
            </div>

            <div className="collapse my-2 collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse my-2 collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse my-2 collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>

        </div>
    </div>
        </div>
    );
};

export default BlogDetails;