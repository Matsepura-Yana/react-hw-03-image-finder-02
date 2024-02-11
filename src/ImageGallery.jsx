import { ImageGalleryItem } from 'ImageGalleryItem'

export const ImageGallery = ({ arr, onClick }) => {
    const styleUl = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '10px 40px',
        margin: '0px',
    }
    return (
        <ul className="gallery" style={styleUl} onClick={onClick}>
            {arr.map(e => {
                return (
                    <ImageGalleryItem src={e.webformatURL}></ImageGalleryItem>
                )
            })}
        </ul>
    )
}
