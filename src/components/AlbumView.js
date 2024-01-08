import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Spinner from '../spinner';

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

                <p>{song.trackName} </p>
                <audio src={song.previewUrl} controls preload="none" style={{ 'width': '25%' }}></audio>

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
            {albumData.length > 0 ? <div> <img src = {albumData[0].artworkUrl100} height = "200"></img><h2>{albumData[0].collectionName}</h2></div> : <Spinner />}
            {navButtons()}
            <h2>The album id is: {id}</h2>
            
            {renderSongs}
        </div>

    )

}

export default AlbumView