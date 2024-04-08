import React, { useRef } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import VrArchivingBoard from './components/VrArchivingBoard';
import Header from './components/Header';
import Banner from './components/Banner';
import VrArchiving from './components/VrArchiving';
import VideoBoard from './components/VideoBoard';
import ScrollToTop from './components/ScrollToTop';
// import Footer from './components/Footer';

function App() {
    const vrArchivingRef = useRef(null); 
    const videoBoardRef = useRef(null);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={
					<div>
						<Header vrArchivingRef={vrArchivingRef} videoBoardRef={videoBoardRef} />
	           			<Banner />				
			            <div ref={vrArchivingRef}><VrArchiving /></div> 
			            <div ref={videoBoardRef}><VideoBoard /></div>
					</div>
					} />
                <Route path="/vr-archiving-board" element={
					<div>
					<Header vrArchivingRef={vrArchivingRef} videoBoardRef={videoBoardRef} />
					<VrArchivingBoard />														
					</div>					
					} />
            </Routes>

            <ScrollToTop />              
        </div>
    );
}

export default App;
