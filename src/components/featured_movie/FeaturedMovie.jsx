import React from 'react';
import './FeaturedMovie.css'; // Importing CSS file for styling

export default function FeaturedMovie({ item }) {
    // Convert first air date to Date object
    let firstDate = new Date(item.first_air_date);

    // Extract genres from item data
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    // Truncate description if it exceeds 200 characters
    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    // Render component with item data
    return (
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`,
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    {/* Display original name of the item */}
                    <div className='featured--name'>{item.original_name}</div>
                    {/* Display additional information */}
                    <div className='featured--info'>
                        {/* Display vote average */}
                        <div className='featured--points'>{item.vote_average} points</div>
                        {/* Display year of first air date */}
                        <div className='featured--year'>{firstDate.getFullYear()}</div>
                        {/* Display number of seasons */}
                        <div className='featured--seasons'>{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    {/* Display truncated description */}
                    <div className='featured--description'>{description}</div>
                    {/* Display buttons with dynamic links */}
                    <div className='featured--buttons'>
                        <a href={`/watch/${item.id}`} className='featured--playbutton'> ► Play</a>
                        <a href={`/list/add/${item.id}`} className='featured--moreinfobutton'>+ More Info</a>
                    </div>
                    {/* Display genres */}
                    <div className='featured--genres'><strong>Genres: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}
