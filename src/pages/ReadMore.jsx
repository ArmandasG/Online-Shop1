import React, { useEffect } from "react";
import '../styles/index.css'

function ReadMore() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
  
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);
  return (
    <div className="lg:min-h-[70rem] container flex flex-col gap-14 lg:flex-row lg:pt-20">
      <div className="lg:w-1/2 flex items-center"><img className="" src="/icons/nbc-streaming-service-launch-date-april-2020.webp" alt="" /></div>
      <div className="lg:w-1/2">
      <h2 className="text-5xl lg:text-6xl">SHOPPERs Favorite Quotes</h2>
      <ul className="mt-16 text-2xl lg:text-4xl space-y-8">
      <li className="fade-in">
      “Nobody should have to go to work thinking, ‘Oh this is the place that I might die today.’ That’s what a hospital is for. An office is for not dying. An office is a place to live life to the fullest. To the max. An office is a place where dreams come true.” – Michael Scott
      </li>
      <li className="fade-in">“If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.” – Michael Scott</li>
      <li className="fade-in">“Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like a compulsive need to be liked. Like my need to be praised.” – Michael Scott</li>
      <li className="fade-in">“Whether you’re scared of dying, or dying alone, or dying drunk in a ditch, don’t be. It’s going to be ok.” – Michael Scott</li>
      <li className="fade-in">“I’m an early bird and I’m a night owl, so I’m wise and have worms.” – Michael Scott</li>
      <li className="fade-in">“They always say that it’s a mistake to hire your friends. And they are right. So, I hired my best friends. And this is what I get!” – Michael Scott</li>
      <li className="fade-in">“I’m not usually the butt of the joke. I’m usually the face of the joke.” – Michael Scott</li>
      <li className="fade-in">“Abraham Lincoln once said that ‘If you’re a racist, I will attack you with the North, and these are the principles I carry with me in the workplace.” – Michael Scott</li>
      <li className="fade-in">“I’m not a millionaire. I thought I would be by the time I was 30, but I wasn’t even close. Then I thought maybe by 40, but by 40 I had less money than I did when I was 30.” – Michael Scott</li>
      <li className="fade-in">“I’m not superstitious, but I am a little stitious.” – Michael Scott</li>
      </ul>
      </div>
    </div>
  );
}

export default ReadMore;
