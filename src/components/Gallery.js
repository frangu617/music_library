import { useContext, Suspense } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'


function Gallery(props) {
    const data = useContext(DataContext)
    // console.log(data.read())
    const myData = data.result.read()

    // //trying to fix this with the help of chat gpt
//     if (!data || Array.isArray(data.result)) {
//         return null
//     }
// console.log(Array.isArray(data.result))
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