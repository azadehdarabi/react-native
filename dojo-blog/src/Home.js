// import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('moti');
    //     setAge(30);
    // }

    //use for fetching data, run at every render
    

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}

            {/* <BlogList blogs={blogs.filter((blog) => blog.author == 'azadeh')} title="Azadeh's Blogs!"/> */}
            {/* <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button> */}
        </div>
     );  
}
 
export default Home;