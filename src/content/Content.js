import ContentModule from "./Content.module.scss";

const Content = () => {
  return (
    <div className={ContentModule.content__box}>
      <h2 className={ContentModule.experience}>Share Your Experiences</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        officiis blanditiis perferendis amet delectus corrupti commodi fuga
        aliquam expedita, in, tempora earum enim eveniet, similique explicabo?
      </p>
    </div>
  );
};

export default Content;
