import "./App.css";
import PostsNews from "./components/PostsNews";
import Advertising from "./components/Advertising";
import SearchBar from "./components/SearchBar";
import AdvertisingBaner from "./components/AdvertisingBaners";
import Other from "./components/Other"

function App() {
  return (
    <div className="App">
      <div className="header">
        <PostsNews />
        <Advertising />
      </div>

      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="baner">
        <AdvertisingBaner />
      </div>
      <div>
        <Other />
      </div>
     
    </div>
  );
}

export default App;
