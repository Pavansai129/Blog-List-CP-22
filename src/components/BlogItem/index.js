// Write your JS code here
const BlogItem = props => {
  const {title, description, publishedDate} = props
  return (
    <li>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <p>{publishedDate}</p>
      </div>
    </li>
  )
}

export default BlogItem
