import { useState } from 'react';
import { fetchVideos } from './YoutubeAPI';
import { YTvideos } from './ytvideos';


export default function App() {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);

    const handleSearch = async () => {
        const results = await fetchVideos(query);
        setVideos(results);
    };

    return (
        <div className="App">
            <h1>YouTube Video Search</h1>
            <input
                type="text"
                placeholder="Search videos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <YTvideos videos={videos} />
        </div>
    );
}
