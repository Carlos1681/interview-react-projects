import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      
      {/* Accordion component */}
      < Accordion />
      {/* Random Color component */}
      <RandomColor />
      {/* Star Rating component */}
      <StarRating noOfStars={8} />
      {/* Image Slider component */}
      <ImageSlider 
      url = {"https://picsum.photos/v2/list"}
      limit = {'9'}
      page = {'1'} />
      {/* Load More Data component */}
      <LoadMoreData />
      {/* Tree View component */}
      <TreeView menus = {menus} />
    </div>
  );
}

export default App;
