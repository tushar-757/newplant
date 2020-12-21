import React ,{useRef,useEffect}from 'react';
function Tool(){
 

 
    return(
    <div className= "Plant-Container">
        <div className= "Plant-inner-cover">
        <img src="https://alan.app/voice/images/previews/preview.jpg"
        className="Alan-logo" alt="logo" />
      <ul>
        <li>Say: "Hi!"</li>
        <li>Say: "What is Alan Platform?"</li>
      </ul>
     
         </div>
    </div>
    );
};
export default Tool;
/** useEffect(() => {
    alanBtn({
      key: '84d65a5b76e035d4b8ac38cc097717b72e956eca572e1d8b807a3e2338fdd0dc/stage',
      rootEl: alanBtnContainer.current,
      onCommand: (commandData) => {
        if (commandData.command === 'open menu') {
         window.open("/platform/Reviews","hacker")
        }
  }
})}, []);  <div ref={alanBtnContainer}></div>   const alanBtnContainer = useRef(); import alanBtn,{intent} from "@alan-ai/alan-sdk-web";*/