import StoryModule from "./story.module.scss";

const SliderComp = (props) => {
  return (
    <div>
      <div className={StoryModule.overlay}></div>

      <div className={StoryModule.innerContent}>
        <p>{props.id}</p>
        <h4>{props.useDate}</h4>

        <h2>{props.teamwork}</h2>

        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default SliderComp;
