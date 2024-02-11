export const Searchbar = ({ onSubmit1 }) => {
    const styleInput = {
        width: '300px',
        height: '20px',
        padding: '0px',
        border: '0px solid',
        outline: 'none',
        marginLeft: '5px',
    }
    const styleHeader = {
        margin: '0px',
        height: '50px',
        width: '',
        backgroundColor: 'MidnightBlue',
        paddingLeft: '600px',
        paddingTop: '20px',
        paddingBottom: '0px',
    }
    const styleIcon = {
        padding: '0px',
        margin: '0px',
        height: '20px',
        backgroundColor: 'white',
        borderColor: 'white',
        marginRight: '5px',
    }
    const styleBotton = {
        padding: '0px',
        border: '0px solid white',
    }
    const styleForm = {
        height: '22.8px',
        width: '325px',
        display: 'flex',
        backgroundColor: 'white',
    }
    return (
        <header className="searchbar" style={styleHeader}>
            <form className="form" onSubmit={onSubmit1} style={styleForm}>
                <input
                    className="input"
                    name="searchbarInput"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    style={styleInput}
                />
                <button type="submit" className="button" style={styleBotton}>
                    <span className="button-label">
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
                            alt=""
                            style={styleIcon}
                        />
                    </span>
                </button>
            </form>
        </header>
    )
}
