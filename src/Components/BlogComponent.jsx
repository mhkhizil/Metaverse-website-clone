import {RiTimeFill} from 'react-icons/ri'

const BlogComponent = ({blog}) => {
  return (
    <div className="w-full h-full">
      <img src={blog?.img} className="block" alt="" />
      <h2
      className='font-header font-medium text-lg'>{blog?.title}</h2>
      <p className='md:w-[90%] font-para font-normal text-para my-6'>{blog?.para}</p>
      <div className="flex items-center justify-start gap-2">
        <RiTimeFill/>
        <p>{blog?.time}</p>
      </div>
    </div>
  )
}

export default BlogComponent
