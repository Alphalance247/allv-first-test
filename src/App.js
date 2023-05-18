import "./App.css";
import Header from "./Components/navbar/Header";
import Content from "./Components/content/Content";
import Story from "./Components/Story/Story";
import Footer from "./Components/footer/Footer";
import Blog from "./Components/blog/Blog";
import add from "./assets/Add.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import ContentModule from "./Components/content/Content.module.scss";

const date = new Date();
const getDate = date.toDateString();

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Nav /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Content />
              <h1 className={ContentModule.Stories__head}>Top Stories</h1>
              <Story />

              <Footer />
            </div>
          }
        />
        <Route
          path="/Blog"
          element={
            <div>
              <h1>
                <span className="color-blog"></span>
              </h1>
              <Blog
                text="The"
                blog="Blog"
                useDate={getDate}
                teamWork="The Importance Of Team Work"
                lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nunc dignissim facilisis sit vestibulum, tempus nam orci. Massa ultrices eget 
                 sit ultrices eget turpis eget. Nibh est tellus elementum dignissim nisl. 
                 Tincidunt sodales quam vestibulum tincidunt morbi. Lacinia nunc imperdiet mauris, 
                 placerat nisl, eu sit volutpat at. "
                image={add}
              />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
