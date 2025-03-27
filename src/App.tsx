import './App.css'
import ImageAnimation from './components/ImageAnimation'
import { ImageAnimationVariant } from './components/ImageAnimation/config'
import { ImageUrlsConstants } from './utils/generateImageUrl';


function App() {

  return (
    <>
      <ImageAnimation
        images={ImageUrlsConstants.Nike2}
        variant={ImageAnimationVariant.Loop}
        className="your-class-name"
        onFinish={() => {
          console.log('Animation finished');
        }}
        onLoaded={() => {
          console.log('Image loaded');
        }}
      />
    </>
  );
}

export default App
