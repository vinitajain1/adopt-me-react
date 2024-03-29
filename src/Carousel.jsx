import { useState } from "react";

const DEFAULT_IMAGE = "http://pets-images.dev-apis.com/pets/none.jpg";

export default function Carousel({ images }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images.length) {
    images[0] = DEFAULT_IMAGE;
  }

  function makeHeroImage(event) {
    setActiveImage(+event.target.dataset.index);
  }

  return (
    <div className="mt-2 flex h-96 items-center justify-around">
      <img
        src={images[activeImage]}
        alt="animal"
        style={{ maxWidth: "45%" }}
        className="max-h-96"
      />
      <div className="w-1/2">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            onClick={makeHeroImage}
            data-index={index}
            key={photo}
            src={photo}
            className="m-4 inline-block h-24 w-24 cursor-pointer rounded-full"
            // className={index === activeImage ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
}
