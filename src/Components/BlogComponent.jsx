import {RiTimeFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const BlogComponent = ({blog}) => {
  return (
    <div className="w-full h-full">
      <Link to={'/detail'} >
      <img src={blog?.img} className="block" alt="" />
      </Link>
      
      <h2
      className='   text-xl  font-header text-blogText  font-extrabold font-akiraBold tracking-tight space-x-8   uppercase  '>{blog?.title}</h2>
      <p className='md:w-[90%] font-light font-normal text-para my-6'>{blog?.para}</p>
      <div className="flex items-center justify-start gap-2">
        <RiTimeFill/>
        <p className='font-light'>{blog?.time}</p>
      </div>
    </div>
  )
}

export default BlogComponent
