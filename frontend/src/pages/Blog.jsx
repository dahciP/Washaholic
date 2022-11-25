import React,{useState,useEffect} from 'react'
// import BlogView from '../components/blog/BlogView'
import Navbar from '../components/nav/Navbar'
import axios from 'axios'
import '../styles/blog.css'

const Blog = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(() => {
        const fetchBlogs = async () => {
        axios.get('http://localhost:5000/scrape')
        .then(res => {
            setBlogs(res.data.data)
            console.log(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })}
        fetchBlogs()
    },[])

        // const updateBlogs = async () => {
        // axios.post('http://localhost:5000/blog/update', blogs[0])
        // .then(res => {
        //     console.log(res)
        // }
        // )
        // .catch(err => {
        //     console.log(err)
        // })}
        // updateBlogs()
    // },[])


    return (
        <div>
            <Navbar/>

            <div className="blog1-container">

            { blogs && blogs.map(blog => (
                <div key={blog.id} className='blog1'>
                    <h1>{blog.title}</h1>
                    <p>{blog.text}</p>
                </div>
            ))}

            </div>
            
        </div>
    )
}

export default Blog