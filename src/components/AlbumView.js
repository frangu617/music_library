import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function AlbumView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const justSongs = albumData.filter(entry => entry.wrapperType === 'track')

    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <Link to={`/song/${song.trackId}`}>
                <p>{song.trackName}</p>
                </Link>
            </div>
        )
    })

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Go Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    return (
        <div>
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <h2>Loading...</h2>}
            {navButtons()}
            <h2>The album id is: {id}</h2>
            <p>album data goes here</p>
            {renderSongs}
        </div>

    )

}

export default AlbumView