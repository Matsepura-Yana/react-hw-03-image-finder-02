import { Component } from 'react'

export class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.props.forKeyPress)
    }
    styleModal = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        border: '3px solid MidnightBlue',
    }
    styleButton = {
        fontSize: '16px',
        border: '1px solid',
        fontFamily: 'Times New Roman',
        backgroundColor: 'MidnightBlue',
        color: 'white',
        padding: '10px 18px',
        marginLeft: '43%',
        marginBottom: '3px',
        width: '120px',
    }

    onClickForOverlay = e => {
        if (e.target.className === 'overlay') {
            this.props.closeModal(e)
        }
        console.log(e)
    }

    render() {
        return (
            <div
                className="overlay"
                onClick={this.onClickForOverlay}
                style={{
                    width: '100%',
                    height: '100vh',
                    position: 'fixed',
                    top: '0%',
                    left: '0%',
                }}
            >
                <div className="modal" style={this.styleModal}>
                    <img src={this.props.src} alt={'not found'} />
                    <br />
                    <button
                        onClick={this.props.onClickForButton}
                        style={this.styleButton}
                    >
                        Close modal
                    </button>
                </div>
            </div>
        )
    }
}
