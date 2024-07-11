import React, { useState } from 'react';
import './MovieRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Component to display a row of movies
export default function MovieRow({ title, items }) {

    const [scrollX, setScrollX] = useState(0);

    // Function to handle scrolling left
    const handleBeforeBtn = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) x = 0;
        setScrollX(x);
    }

    // Function to handle scrolling right
    const handleNextBtn = () => {   
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            {/* Left arrow button */}
            <div className='movieRow--before-btn' onClick={handleBeforeBtn}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            {/* Right arrow button */}
            <div className='movieRow--next-btn' onClick={handleNextBtn}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 200
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
