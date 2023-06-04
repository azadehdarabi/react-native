import { useState, useEffect } from "react"
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'my new website', body: 'nnfjwinv', author: 'azadeh', id: 1},
        { title: 'welcome party', body: 'nfeonveo', author: 'moti', id: 2},
        { title: 'web dev top tips', body: 'mkmvpos', author: 'azadeh', id: 3}

    ])


    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('moti');
    //     setAge(30);
    // }

    //use for fetching data, run at every render
    useEffect(() => { 
        console.log('use effect ran');
    }, []);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>

            {/* <BlogList blogs={blogs.filter((blog) => blog.author == 'azadeh')} title="Azadeh's Blogs!"/> */}
            {/* <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button> */}
        </div>
     );  
}
 
export default Home;