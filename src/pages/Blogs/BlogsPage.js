import { Link } from 'react-router-dom';
import BlogCard from '../../components/BlogCard/BlogCard';
import { Blogs } from '../../components/BlogCard/BlogMockData';

function BlogsPage() {
  return (
    <div className="w-full h-full p-5 ">
      <div className="flex justify-start w-full px-5 my-5">
        <h1 className="text-lg font-bold ">Blogs</h1>
      </div>
      <div className=" w-full h-full grid grid-cols-2 md:grid-cols-3 gap-5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      sm:gap-5 md:gap-10 lg:gap-10">
        {Blogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <BlogCard
              key={blog.id}
              title={blog.title}
              img={blog.img}
              authImg={blog.authImg}
              authName={blog.authName}
              authTitle={blog.authTitle}
              minsRead={blog.minsRead}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
