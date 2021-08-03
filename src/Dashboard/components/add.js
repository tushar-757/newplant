import React, { Component  } from 'react'

class MyLeaderBoardAd extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <div>
        <ins className = "adsbygoogle"
                style = { {display:"inline-block",width:"728px",height:"90px"} }
                data-ad-client = "ca-pub-7605684511525277"
                data-ad-slot = "4114704632"></ins>
        </div>)
    }
}

export default MyLeaderBoardAd;
