import React from 'react';
import github from './github.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
/* icon from https://flaticon.com */

const SocialFooter = () => {
    return (
        <div>
            <footer style={{flexShrink: 0}}>
                <ul style={{listStyleType: 'none', display: 'flex', justifyContent:'center'}}>
                    <li><a href="https://github.com/jeremievalili" title="jeremie valili github"><img src={github} alt="github logo" style={{width: '42px' , height: '42px'}}/></a></li>
                    <li><a href="https://twitter.com/jeremiemadara" title="jeremie valili Twitter"><img src={twitter} alt="twitter logo" style={{width: '42px' , height: '42px'}}/></a></li>
                    <li><a href="https://www.instagram.com/jeremie.madara/" title="jeremie valili Instagram"><img src={instagram} alt="instagram logo" style={{width: '42px' , height: '42px'}}/></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default SocialFooter;