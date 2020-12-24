import React,{useLayoutEffect,useState,createContext} from 'react';
function SlideContext(){
    const [slide,setslide]=useState();
useLayoutEffect(() => {
    function updateSize() {
      console.log([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
