import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'


function Gallery(props) {
    const data = useContext(DataContext)
    const myData = data.result.read()

   
    const display = myData.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div className="gallery">
            {display}
        </div>
    )
}

export default Gallery