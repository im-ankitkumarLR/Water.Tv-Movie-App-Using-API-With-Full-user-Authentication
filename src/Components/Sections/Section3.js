import React from 'react'
import './Section.css'



const Section3 = (props) => {

    const { Title, Year, imdbID, Type, Poster } = props.movie;


    return (
        <>
            <div className='div-1'
                onClick={() => {
                    props.onMovieSelect(imdbID);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}

            >
                <div>
                    <img src={Poster} className='cover-image' alt='Not found'></img>
                </div>

                <div className='MovieName'>
                    <span>{Title}</span>

                </div>
                <div className='InfoColumn'>
                    <div className='MovieInfo'>Year: {Year}</div>
                    <div className='MovieInfo'>Type: {Type}</div>


                </div>

            </div>




        </>

    )
};

export default Section3;