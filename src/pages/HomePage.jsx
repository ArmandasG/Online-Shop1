import { useEffect, useState } from "react";

function HomePage() {
  const imageUrls = [
    '/icons/front-icon.jpg',
    '/icons/front-icon2.jpg',
    '/icons/front-icon3.jpg',
    '/icons/front-icon4.jpg',
    '/icons/front-icon5.jpg',
    '/icons/front-icon34.jpg'
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
    <div className="pt-8 pb-8 container items-center">
      <img src={randomImageUrl} alt="cover-photo" className="w-full" />
    </div>
  );
}

export default HomePage;
