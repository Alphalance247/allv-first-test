const Blog = (props) => {
  return (
    <div className="Blog">
      <h1>
        {props.text} <span className="color-blog">{props.blog}</span>
      </h1>
      <div className="blogs">
        <div className="blog-box">
          <h4>{props.useDate}</h4>

          <h2>{props.teamWork}</h2>

          <p>{props.lorem}</p>
        </div>
      </div>

      <div className="blogs">
        <div className="blog-box">
          <h4>{props.useDate}</h4>

          <h2>{props.teamWork}</h2>

          <p>{props.lorem}</p>
          <img src={props.image} className="Add__Blog" alt="Add" />
        </div>
      </div>
    </div>
  );
};
export default Blog;
