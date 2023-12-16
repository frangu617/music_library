import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumView() {
    const { id } = useParams();
    const [albumData, setAlbumData] = useState([]);

    return(
        <div>
            <h1>The album id is: {id}</h1>
            <p>album data goes here</p>
        </div>

    )

}

export default AlbumView