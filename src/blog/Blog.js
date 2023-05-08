import Blogcss from "./Blog.module.scss";

const Blog = (props) => {
  return (
    <div className={Blogcss.Blog}>
      <h1>
        {props.text} <span>{props.blog}</span>
      </h1>
      <div className={Blogcss.blogs}>
        <div className={Blogcss.blogBox}>
          <h4>{props.useDate}</h4>

          <h2>{props.teamWork}</h2>

          <p>{props.lorem}</p>
        </div>
      </div>

      <div className={Blogcss.blogs}>
        <div className={Blogcss.blogBox}>
          <h4>{props.useDate}</h4>

          <h2>{props.teamWork}</h2>

          <p>{props.lorem}</p>
          <img src={props.image} className={Blogcss.Add__Blog} alt="Add" />
        </div>
      </div>
    </div>
  );
};
export default Blog;
