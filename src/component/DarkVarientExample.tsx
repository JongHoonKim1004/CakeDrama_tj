import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://jonghoonkim1004.github.io/FirstReactData/img/Main/slider_1.jpg"
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jonghoonkim1004.github.io/FirstReactData/img/Main/slider_2.jpg"
          alt="Second slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jonghoonkim1004.github.io/FirstReactData/img/Main/slider_3.jpg"
          alt="Third slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jonghoonkim1004.github.io/FirstReactData/img/Main/slider_4.jpg"
          alt="Third slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jonghoonkim1004.github.io/FirstReactData/img/Main/slider_5.jpg"
          alt="Third slide"
          
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;