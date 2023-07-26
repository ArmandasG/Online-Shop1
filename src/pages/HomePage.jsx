import { useEffect, useState } from "react";

function HomePage() {
  const imageUrls = [
    '/public/icons/front-icon.jpg',
    '/public/icons/front-icon2.jpg',
    '/public/icons/front-icon3.jpg',
    '/public/icons/front-icon4.jpg',
    '/public/icons/front-icon5.jpg',
    '/public/icons/front-icon34.jpg'
  ];

  const [randomImageUrl , setRandomImageUrl] = useState('')

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };

  const changeRandomImage = () => {
    const randomImage = getRandomImage();
    setRandomImageUrl(randomImage);
  };

  useEffect(() => {
    changeRandomImage();
  }, []);

  return (
    <div className="pt-8 pb-8">
      <img src={randomImageUrl} alt="cover-photo" />
    </div>
  );
}

export default HomePage;
