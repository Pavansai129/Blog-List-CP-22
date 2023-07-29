import BlogItem from '../BlogItem'
// Write your JS code here
const BlogList = props => {
  const {eachBlog} = props
  const {id, title, description, publishedDate} = eachBlog
  return (
    <BlogItem
      key={id}
      id={id}
      title={title}
      description={description}
      publishedDate={publishedDate}
    />
  )
}

export default BlogList
