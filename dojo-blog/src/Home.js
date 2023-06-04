import { useState } from "react"
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'my new website', body: 'nnfjwinv', author: 'azadeh', id: 1},
        { title: 'welcome party', body: 'nfeonveo', author: 'moti', id: 2},
        { title: 'web dev top tips', body: 'mkmvpos', author: 'zahra', id: 3}

    ])
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('moti');
    //     setAge(30);
    // }


    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}

            {/* <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button> */}
        </div>
     );  
}
 
export default Home;