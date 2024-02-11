export const ImageGalleryItem = ({ src }) => {
    const styleLi = {
        listStyleType: 'none',
    }
    const styleImg = {
        height: '220px',
        marginLeft: '5px',
        marginRight: '5px',
    }
    return (
        <li className="gallery-item" style={styleLi}>
            <img src={`${src}`} alt="" style={styleImg} />
        </li>
    )
}
