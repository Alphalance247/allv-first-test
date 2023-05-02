import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Story from "./Story";
import Footer from "./Footer";
import Blog from "./Blog";
import vectors from "./assets/Vector.svg";
import vector1 from "./assets/Vector-l.svg";
import unsplash from "./assets/unsplash.svg";
import add from "./assets/Add.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
// import Nav from "./Nav";

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
              <h1 className="Stories__head">Top Stories</h1>
              <Story
                useDate={getDate}
                teamWork="The Importance Of Team Work"
                lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            alias odio atque provident laboriosam eligendi ipsam ut totam"
                vector1={vector1}
                vector2={vectors}
                backgroundImage={unsplash}
              />

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
