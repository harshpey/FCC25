import React from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more";
import TreeView from "./components/tree-view/TreeView";
import LightDark from "./components/light-dark/LightDark";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import TabTest from "./components/tabs/tab-test";
import ModalTest from "./components/custom-model/modal-test";
import SearchAutocomplete from "./components/search-autocomplete";
import Timer from "./components/timer/Timer";
import CustomUrl from "./components/custom-url/CustomUrl";
import Throttle from "./components/throttle/Throttle";
const App = () => {
  return (
    <div>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'5'}/> */}
      {/* <LoadMoreData/> */}
      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView List={menus} /> */}
      {/* <LightDark/> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
      {/* <TabTest/> */}
      {/* <ModalTest/> */}
      {/* <SearchAutocomplete/> */}
      {/* <Timer/> */}
      {/* <CustomUrl/> */}
      <Throttle/>
    </div>
  );
};

export default App;
