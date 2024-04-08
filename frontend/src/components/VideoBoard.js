import React from 'react';
import './VideoBoard.css';
import gwanghwamun from './images/gwanghwamun.jpg'; 


function VideoBoard() {
    return (
    <div className="VideoBoard">
        <div className="area-warp">
            <div className="left-area">
            <div className="title">영상게시판</div>
            <div className="content">법률이 정하는 주요방위산업체에 종사하는 근로자들의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 없다. 대통령·국무총리·국무위원</div>
            </div>
            <div className="right-area">
                <div className="see-more-button-wrapper">
                    <button className="see-more">See More<i className="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
        </div>
        
        <div className="card-warp"> 
	        <div className="card">
	            <img src={gwanghwamun} alt="광화문이미지" />
	            <div className="card-content">
	                <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, assumenda ipsam! Velit voluptatem fugit officia necessitatibus mollitia tenetur, accusantium accusamus nesciunt. Quod repellat ipsum commodi esse quo id, natus numquam?</div>
	            </div>
	            <div className="card-stats">
	                <span>250</span>
	                <a href="#" className="btn">Read More<i className="bi bi-chevron-compact-right"></i></a> 
	            </div>
	        </div>
	        
	        <div className="card">
	            <img src={gwanghwamun} alt="광화문이미지" />
	            <div className="card-content">
	                <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, assumenda ipsam! Velit voluptatem fugit officia necessitatibus mollitia tenetur, accusantium accusamus nesciunt. Quod repellat ipsum commodi esse quo id, natus numquam?</div>
	            </div>
	            <div className="card-stats">
	                <span>250</span>
	                <a href="#" className="btn">Read More<i className="bi bi-chevron-compact-right"></i></a> 
	            </div>
	        </div>
	        
	        <div className="card">
	            <img src={gwanghwamun} alt="광화문이미지" />
	            <div className="card-content">
	                <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, assumenda ipsam! Velit voluptatem fugit officia necessitatibus mollitia tenetur, accusantium accusamus nesciunt. Quod repellat ipsum commodi esse quo id, natus numquam?</div>
	            </div>
	            <div className="card-stats">
	                <span>250</span>
	                <a href="#" className="btn">Read More<i className="bi bi-chevron-compact-right"></i></a> 
	            </div>
	        </div>
	    </div>        
    </div>
    );
}

export default VideoBoard;
