import { Searchbar } from './Searchbar'
import { ImageGallery } from 'ImageGallery'
import { Button } from 'Button'
import { getSearchProductsApi } from './api'
import { Component } from 'react'
import { TheEnd } from 'TheEnd'
import { Modal } from 'Modal'
import React from 'react'

class App extends Component {
    state = {
        data: [],
        page: 1,
        value: '',
        totalHits: 0,
        imgSrc: '',
        modalIsOpen: false,
    }

    async componentDidUpdate(prevProps, prevState) {
        if (
            this.state.value !== prevState.value ||
            this.state.page !== prevState.page
        ) {
            this.getProductsFunction(this.state.value, this.state.page)
        }
    }
    submitFunction = async e => {
        e.preventDefault()

        this.setState(() => {
            return { value: e.target.elements.searchbarInput.value, page: 1 }
        })
    }

    getProductsFunction = async (value, page) => {
        if (page === 1) {
            const data = await getSearchProductsApi(value, page)

            this.setState(prevState => {
                return { data: data.hits, totalHits: data.totalHits }
            })
        } else {
            const data = await getSearchProductsApi(value, page)

            this.setState(prevState => {
                return {
                    data: [...prevState.data, ...data.hits],
                    totalHits: data.totalHits,
                }
            })
        }

        const data = await getSearchProductsApi(value, page)

        this.setState(prevState => {
            return { data: [...prevState.data, ...data.hits] }
        })
    }

    loadMoreFunction = async () => {
        this.setState(prevState => {
            return {
                page: prevState.page + 1,
                totalHits: prevState.totalHits - 20,
            }
        })
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    closeModal = e => {
        e.stopPropagation()
        this.setState({ modalIsOpen: false })
    }

    forImageFunction = e => {
        if (e.target.localName === 'img') {
            this.setState(() => {
                return { imgSrc: e.target.currentSrc }
            })
            this.openModal()
        }
    }
    handleKeyPress = e => {
        if (e.key === 'Escape') {
            this.closeModal(e)
        }
    }

    render() {
        return (
            <>
                <Searchbar onSubmit1={this.submitFunction}></Searchbar>
                <ImageGallery
                    arr={this.state.data}
                    onClick={this.forImageFunction}
                ></ImageGallery>
                {this.state.totalHits === 0 ? (
                    <TheEnd></TheEnd>
                ) : (
                    <Button loadMoreFunction={this.loadMoreFunction}></Button>
                )}
                {this.state.modalIsOpen === true && (
                    <Modal
                        onClickForButton={this.closeModal}
                        src={this.state.imgSrc}
                        closeModal={this.closeModal}
                        forKeyPress={this.handleKeyPress}
                    ></Modal>
                )}
            </>
        )
    }
}

export default App
