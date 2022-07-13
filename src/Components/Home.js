import React,{ useState, } from 'react'
import ParticleBackground from './ParticleBackground';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import ImageSlider from './ImageSlider';
import Axios from "axios";
import InfoComponent from './InfoComponent';
import Footer from './Footer/Footer';



import { SliderData } from './SliderData';



export const API_KEY = "e5203249"







const Home = () => {


    const [searchQuery, updateSearchQuery] = useState();

    const [movieList, updateMovieList] = useState([]);
    const [timeoutId, updateTimeoutId] = useState();

    const [selectedMovie, onMovieSelect] = useState();


    const fetchData = async (searchString) => {
        const response = await Axios.get(`http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)

        updateMovieList(response.data.Search);


    };


    

    const onTextChange = (e) => {
        // onMovieSelect("")
        clearTimeout(timeoutId);
        updateSearchQuery(e.target.value);
        const timeout = setTimeout(() => fetchData(e.target.value), 500);
        updateTimeoutId(timeout);
    };



    return (
        <>


            

                <ParticleBackground />

                <div className='content'>
                    <h2>Water TV</h2>
                    <h2>Water TV</h2>

                </div>
                <Section2 />
 
               

                <div className='h-styling'>
                    <h1 >What we’re watching now.</h1>
                    <p>But keep in mind, we’ve got over 50,000 more free on-demand titles waiting for you.</p>
                    <form className="d-flex me-auto mb-2 mb-lg-0" role="search">
                        <input className="form-control me-2 search-st" type="search" placeholder="Search Movies" aria-label="Search" value={searchQuery} onChange={onTextChange} />

                    </form>
                </div>
            


            <div className='sec-style'>

                {selectedMovie && <InfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}

                {movieList?.length ? movieList.map((movie, index) => (

                    <Section3 key={index}
                        movie={movie}
                        onMovieSelect={onMovieSelect}

                    />

                ))
                    : <ImageSlider slides={SliderData} />}

            </div>
            
            <Footer />

        </>
    )
}

export default Home
