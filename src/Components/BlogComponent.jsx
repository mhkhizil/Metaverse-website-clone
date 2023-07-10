import {RiTimeFill} from 'react-icons/ri'

const BlogComponent = ({blog}) => {
  return (
    <div className="w-full h-full">
      <img src={blog?.img} className="block" alt="" />
      <h2
      className=' font-custom  text-2xl  font-header text-blogText  font-extrabold tracking-tight space-x-8   uppercase  '>{blog?.title}</h2>
      <p className='md:w-[90%] font-para font-normal text-para my-6'>{blog?.para}</p>
      <div className="flex items-center justify-start gap-2">
        <RiTimeFill/>
        <p>{blog?.time}</p>
      </div>
    </div>
  )
}

export default BlogComponent
