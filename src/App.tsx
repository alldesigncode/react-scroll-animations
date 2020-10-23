import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowSize } from './hooks/useWindowSize';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const size = useWindowSize();

  // refs
  const containerRef = useRef<HTMLDivElement>(null);
  const navList = useRef<HTMLUListElement>(null);
  const navLogo = useRef<HTMLDivElement>(null);
  const bottomList = useRef<HTMLDivElement>(null);

  const clothing = useRef<HTMLDivElement>(null);
  const introFig = useRef<HTMLDivElement>(null);
  const imported = useRef<HTMLDivElement>(null);
  const accra = useRef<HTMLDivElement>(null);
  const introBottomText = useRef<HTMLDivElement>(null);
  const volume = useRef<HTMLDivElement>(null);
  const author = useRef<HTMLDivElement>(null);
  const sectionOneImg = useRef<HTMLDivElement>(null);
  const sectionTwoHeading = useRef<HTMLDivElement>(null);
  const sectionTwoFig = useRef<HTMLDivElement>(null);
  const sectionThirdContainer = useRef<HTMLDivElement>(null);
  const sectionThirdText = useRef<HTMLDivElement>(null);

  const data = {
    ease: 0.1,
    curr: 0,
    prev: 0,
    rounded: 0,
  };

  const setBodyHeight = () => {
    document.body.style.height = `${
      containerRef.current!.getBoundingClientRect().height
    }px`;
  };

  const smoothScroll = useCallback(() => {
    data.curr = window.scrollY;
    data.prev += (data.curr - data.prev) * data.ease;
    data.rounded = Math.round(data.prev * 100) / 100;
    containerRef.current!.style.transform = `translateY(-${data.rounded}px)`;

    requestAnimationFrame(() => smoothScroll());
  }, [data]);

  const initScrollAnimations = useCallback(() => {
    const animationObj = {
      duration: 0.8,
      y: -80,
      opacity: 0,
    };
    gsap.to(clothing.current, {
      scrollTrigger: {
        trigger: clothing.current!,
        start: 'center 30%',
        scrub: true,
      },
      ...animationObj,
    });
    gsap.to(imported.current, {
      scrollTrigger: {
        trigger: imported.current!,
        start: 'center 13%',
        scrub: true,
      },
      ...animationObj,
    });
    gsap.to(accra.current, {
      scrollTrigger: {
        trigger: accra.current!,
        start: 'center 30%',
        scrub: true,
      },
      ...animationObj,
    });
    gsap.to(introBottomText.current, {
      scrollTrigger: {
        trigger: introBottomText.current!,
        start: 'center 60%',
        scrub: true,
      },
      y: -90,
      duration: 0.8,
    });
    gsap.to(volume.current, {
      scrollTrigger: {
        trigger: volume.current!,
        start: 'center 60%',
        scrub: true,
      },
      autoAlpha: 0,
      duration: 0.1,
    });
    gsap.to(author.current, {
      scrollTrigger: {
        trigger: author.current!,
        start: 'center 60%',
        scrub: true,
      },
      autoAlpha: 0,
      duration: 0.1,
    });
    gsap.to(sectionOneImg.current, {
      scrollTrigger: {
        trigger: sectionOneImg.current!,
        start: 'top 100%',
        scrub: true,
      },
      y: -300,
      filter: 'contrast(1)',
      duration: 0.8,
    });

    // toggle classes
    gsap.to(sectionTwoHeading.current, {
      scrollTrigger: {
        trigger: sectionTwoHeading.current!,
        start: 'center 100%',
        scrub: true,
        toggleClass: 'reveal',
      },
    });
    gsap.to(sectionTwoFig.current, {
      scrollTrigger: {
        trigger: sectionTwoFig.current!,
        start: 'center 100%',
        scrub: true,
        toggleClass: 'reveal',
      },
    });

    gsap.to(sectionTwoFig.current, {
      scrollTrigger: {
        trigger: sectionThirdContainer.current!,
        start: '30% 100%',
        scrub: true,
      },
      y: 600,
      height: '300px',
    });
    gsap.to(sectionThirdText.current, {
      scrollTrigger: {
        trigger: sectionThirdContainer.current!,
        start: '0% 100%',
        scrub: true,
      },
      y: -100,
      autoAlpha: 1,
    });
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, [smoothScroll]);

  useEffect(() => {
    setBodyHeight();
    initScrollAnimations();
  }, [size.height, initScrollAnimations]);

  return (
    <div className="App">
      <div className="container" ref={containerRef}>
        <div className="intro">
          <div className="nav">
            <div className="nav__logo" ref={navLogo}>
              m.
            </div>
            <ul className="navigation" ref={navList}>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Instagram
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Twitter
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Youtube
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
          <div className="intro-center">
            <span ref={clothing}>clothing</span>
            <figure ref={introFig}>
              <img
                src="https://images.unsplash.com/photo-1580870858053-8d0764624f4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2270&q=80"
                alt=""
              />
            </figure>
            <span className="top" ref={imported}>
              Imported
            </span>
            <div className="text" ref={accra}>
              in Accra <span>0'03'439'2</span>
            </div>
          </div>
          <div className="intro-bottom" ref={bottomList}>
            <div className="intro-bottom-list" ref={volume}>
              Volume 02.
            </div>
            <div className="intro-bottom-list" ref={introBottomText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sapiente ad commodi cumque saepe asperiores quaerat aut,
              explicabo.
            </div>
            <div className="intro-bottom-list" ref={author}>
              By Lorem Ipsum.
            </div>
          </div>
        </div>
        <div className="section section--one">
          <figure className="img-bg">
            <img
              src="https://images.unsplash.com/photo-1534320309096-17ce1f77021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2158&q=80"
              alt=""
            />
          </figure>
          <div className="wrapper-img">
            <figure className="img-reveal" ref={sectionOneImg}>
              <img
                src="https://images.unsplash.com/photo-1596432150438-3ef028cca147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                alt=""
              />
            </figure>
          </div>
        </div>
        <div className="section section--two">
          <h1 ref={sectionTwoHeading}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            dignissimos repellendus tenetur, sequi, nostrum aliquam corrupti aut
            accusamus itaque tempore nemo blanditiis a cumque vitae ducimus,
            dolorum explicabo corporis eveniet?
          </h1>
          <figure ref={sectionTwoFig}>
            <img
              src="https://images.unsplash.com/photo-1586753513812-462ed2a82584?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </figure>
        </div>
        <div className="section section--third" ref={sectionThirdContainer}>
          <h1 ref={sectionThirdText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            officia nobis in illum magnam pariatur autem impedit unde voluptas.
            Commodi obcaecati totam doloremque consectetur repudiandae odio
            laudantium cumque ipsam non?
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
