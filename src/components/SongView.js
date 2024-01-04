import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SongView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [songData, setSongData] = useState([]);

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setSongData(resData.results)
        }
        fetchData()
    }, [id])

    const justSongs = songData.filter(entry => entry.wrapperType === 'track')

    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Go Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
                |
                <button onClick={() => navigate('/album/songData[0].collectionId')}>Go Back to Album</button> {/* button to go back to album */}
            </div>
        )
    }
    const musicPlayer= ()=>{
        return (
            <div>
                <audio src={songData[0].previewUrl} controls preload='auto'></audio>
            </div>
        )
    }

    return (
        <div>
            {songData.length > 0 ? <h2>{songData[0].trackName}</h2> : <h2>Loading...</h2>}
            {musicPlayer()}
            {navButtons()}
            <h2>The song id is: {id}</h2>
            
            {/* knowledge from previous classes */}
            
           
            
            
        </div>

    )

}

export default SongView