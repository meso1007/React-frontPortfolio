import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

const Hero = () => {
  const [greeting, setGreeting] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage; //get user main language

    if (userLanguage.startsWith("ja")) {
      setGreeting("こんにちは!");
    } else if (userLanguage.startsWith("en")) {
      setGreeting("Hello!");
    } else if (userLanguage.startsWith("es")) {
      setGreeting("¡Hola!");
    } else if (userLanguage.startsWith("fr")) {
      setGreeting("Bonjour!");
    } else if (userLanguage.startsWith("de")) {
      setGreeting("Hallo!");
    } else if (userLanguage.startsWith("it")) {
      setGreeting("Ciao!");
    } else if (userLanguage.startsWith("pt")) {
      setGreeting("Olá!");
    } else if (userLanguage.startsWith("zh")) {
      setGreeting("你好!");
    } else if (userLanguage.startsWith("ko")) {
      setGreeting("안녕하세요!");
    } else {
      setGreeting("Hello!");
    }
  }, []);

  useEffect(() => {
    const stackArea = document.querySelector(".stack-area");
    const cards = document.querySelectorAll(".maincard");
    const splitGreeting = greeting.split("");

    const interval = setInterval(() => {
      if (index < splitGreeting.length) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 300);

    const rotateCards = (scrollProgress) => {
      let angle = 0;
      cards.forEach((card, idx) => {
        if (card.classList.contains("away")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          const rotationAngle = scrollProgress * 30; //180 rotate
          card.style.transform = `rotate(${rotationAngle + angle}deg)`;
          angle -= 10;
          card.style.zIndex = cards.length - idx;
        }
      });
    };

    const handleScroll = () => {
      let distance = window.innerHeight; // h-screen
      let topVal = stackArea.getBoundingClientRect().top;
      let scrollProgress = Math.min(Math.max(-topVal / distance, 0), 1); // 0-1

      for (let i = 0; i < cards.length; i++) {
        if (i <= scrollProgress * cards.length) {
          cards[i].classList.add("away");
        } else {
          cards[i].classList.remove("away");
        }
      }

      rotateCards(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [greeting, index]);

  return (
    <>
      <section className="Roboto w-full bg-cover h-screen bg-center flex flex-col lg:flex-row items-center justify-center stack-area bg-ori_white">
        <div className="sticky top-0 left-section basis-1/2 h-screen flex flex-col space-y-6 items-start justify-center px-32">
          <div className="container flex md:mt-5">
            {greeting.split("").map((word, index) => (
              <span
                key={index}
                className="textani text-8xl md:text-9xl font-bold"
                style={{ animationDelay: `${index * 0.2}s` }} // 文字ごとのアニメーションの遅延
              >
                {word}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-2 items-center">
            <h1 className="text-4xl font-bold text-center">
              Welcome to MyPage!!
            </h1>

            <div className="h-[25vh] w-[30vw] flex justify-center md:hidden overflow-hidden rounded-t-full border-2 border-ori_blue shadow-lg flex-shrink-0 relative p-2">
              <div className="w-24 h-[22vh] md:w-96 md:min-h-[550px] md:max-h-[calc(100vh-50px)] overflow-hidden rounded-t-full border-2 border-ori_blue shadow-lg flex-shrink-0 relative">
                <img
                  src="./assets/profile.png"
                  alt="Profile"
                  className="object-cover absolute md:-top-11 left-1/2 transform -translate-x-1/2"
                />
              </div>
            </div>
          </div>

          <p className="block lg:hidden">
            I'm a web developer with full-stack experience, always exploring
            creative and practical solutions.
          </p>
          <p className="hidden lg:block">
            I am a passionate web developer with experience in both front-end
            and back-end technologies. My goal is to create innovative and
            user-friendly applications that solve real-world problems. I am
            constantly learning new skills and exploring creative solutions to
            challenges in web development.
          </p>

          <Button
            label="Download Resume"
            href="./CV.pdf"
            download
            className="bg-ori_orange hover:bg-orange-600 font-bold rounded-full py-3 px-6 cursor-pointer "
            size="lg"
          />
        </div>

        <div className="hidden md:block sticky top-0 right-screen basis-1/2 h-screen">
          <Card
            bgcolor="#296AFF"
            header="Education"
            desc1="Tamwood College Web Development-Canada"
            desc2="Tokai University-Japan"
          />
          <Card
            bgcolor="#FF3939"
            header="Experience"
            desc1="Freelance Web Developer-Canada"
            desc2="Parrot Language Test Inc.-Canada"
          />
          <Card
            bgcolor="#8B5CF6"
            header="History"
            desc1="Oct 7th, 2002"
            desc2="Born in Singapore. Move to Michigan, US -> Kanagawa, Japan"
          />
          <Card
            bgcolor="#EC4899"
            header="Location"
            desc1="Current: Vancouver, Canada."
            desc2="Previous: Fujisawa, Kanagawa, Japan"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
