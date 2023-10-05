import { useEffect, useState } from "react";

function HomePage() {
  const imageUrls = [
    "/icons/front-icon.jpg",
    "/icons/front-icon2.jpg",
    "/icons/front-icon3.jpg",
    "/icons/front-icon4.jpg",
    "/icons/front-icon5.jpg",
    "/icons/front-icon34.jpg",
  ];

  const [randomImageUrl, setRandomImageUrl] = useState("");

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
    <div className="pt-8 pl-[20px] pr-[20px] items-center min-h-100vh lg:min-h-[90rem] lg:flex lg:justify-center lg:pt-0">
      <img src={randomImageUrl} alt="cover-photo" className="w-full object-cover h-full lg:h-full lg:w-fit lg:max-h-[1024px] lg:max-w-[680px]" />
    </div>
  );
}

export default HomePage;
