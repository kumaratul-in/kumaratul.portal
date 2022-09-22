import { Component } from 'react';

class HomeComponent extends Component {


    render(
        bgHeadingImgFront= require('../assets/images/bgHeading1.jpg'),
        bgHeadingImgBack = require('../assets/images/bgHeading2.jpg'),
        bgContentImg = require('../assets/images/bgContent.jpg') 

    ) {



        return (

            <div >

                {/* Social Media Section */}

                <div className='home-media-div'>
                    {/* Social media content */}
                </div>


                {/* Name Heading Section */}
                <div className='home-heading-div'> 
                    <img id="bgHeadingImgFront" src={bgHeadingImgFront} alt='Heading Background'></img>
                    <img id="bgHeadingImgBack" src={bgHeadingImgBack} alt='Heading Background'></img>
                       {/* <span id="greetingText"> Hey I'm</span>     */}
                   
                   <span id='greetingText'> Hey, I'm </span>
                    <span id="nameHeading" >  <b> K</b>umar <b> A</b>tul   </span>
                </div>


                {/* Content Section */}
                <div className='home-content-div'>
                    <img id="bgContentImg" src={bgContentImg} alt='Content Background'></img> 

                    <div className='row'> 
                    
                    <div className='col-md-1'> </div>
                
                    <div className='col-md-4 content-div1'>
                    Always have a zeal to Learn. Whatever you know it's good to Share with people and Help them whenever they need it. We will not loose anything by sharing something especially 'knowledge'.
                    </div>

                    <div className='col-md-2'> </div>

                    <div className='col-md-4  content-div2'>
                    Our goal is that each and every one who is interested to learn new things should get it without any cost. Towards this we are doing a bit from our side such that our knowledge and experience could be shared among all those who are seeking for it.
                    </div>

                    <div className='col-md-1'> </div>
                    </div>

                </div>


                {/* Footer Section */}

                <div className='home-footer-div'>
                    
                </div>


            </div>
        )


    }


}


export default HomeComponent