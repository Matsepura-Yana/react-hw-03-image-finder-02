export const Button = ({ loadMoreFunction }) => {
    const styles = {
        fontSize: '16px',
        border: '1px solid',
        fontFamily: 'Times New Roman',
        backgroundColor: 'MidnightBlue',
        color: 'white',
        padding: '10px 18px',
        margin: '0px 46%',
        width: '120px',
    }
    return (
        <button className="button" onClick={loadMoreFunction} style={styles}>
            Load more
        </button>
    )
}
