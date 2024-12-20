import PropTypes from 'prop-types';

export const YTvideos = ({ videos }) => {
    return (
        <div>
            <h2>Search Results</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {videos.map((video) => (
                    <div key={video.id.videoId}>
                        <iframe
                            width="300"
                            height="200"
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <p>{video.snippet.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

YTvideos.propTypes = {
    videos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.shape({
                videoId: PropTypes.string.isRequired,
            }).isRequired,
            snippet: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
};
