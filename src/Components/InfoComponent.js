import './Sections/Section.css'

import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "./Home";
import styled from "styled-components";






const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  
`;

const InfoComponent = (props) => {

    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;

    useEffect(() => {
        Axios.get(
            `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
        ).then((response) => setMovieInfo(response.data));



    }, [selectedMovie]);





    return (

        <div className='info-div'>

            {MovieInfo ? <>


                <div className='CoverImage'>

                    <img src={movieInfo?.Poster} alt={movieInfo?.Title}></img>

                </div>
                <div className='InfoColumn2'>
                    <div className='MovieName2'>
                       Movie: <span>{movieInfo?.Title}</span>
                    </div>
                    <div className='MovieInfo'>
                        IMDB Rating: <span>{movieInfo?.imdbRating}</span>
                    </div>
                    <div className='MovieInfo'>
                        Year: <span>{movieInfo?.Year}</span>
                    </div>
                    <div className='MovieInfo'>
                        Language: <span>{movieInfo?.Language}</span>
                    </div>
                    <div className='MovieInfo'>
                        Rated: <span>{movieInfo?.Rated}</span>
                    </div>
                    <div className='MovieInfo'>
                        Released: <span>{movieInfo?.Released}</span>
                    </div>
                    <div className='MovieInfo'>
                        Runtime: <span>{movieInfo?.Runtime}</span>
                    </div>
                    <div className='MovieInfo'>
                        Genre: <span>{movieInfo?.Genre}</span>
                    </div>
                    <div className='MovieInfo'>
                        Director: <span>{movieInfo?.Director}</span>
                    </div>
                    <div className='MovieInfo'>
                        Actors: <span>{movieInfo?.Actors}</span>
                    </div>
                    {/* <div className='MovieInfo'>
                        Plot: <span>{movieInfo?.Plot}</span>
                    </div> */}
                </div>

                <div className='closeBtn' onClick={() => props.onMovieSelect()}>

                    Close
                </div>
            </> : "Loading......"}
        </div>


    )
}

export default InfoComponent