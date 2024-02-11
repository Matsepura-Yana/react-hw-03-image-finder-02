export const Api = async () => {
    const response = await fetch(
        'https://pixabay.com/api/?key=41429144-1650408828df83bb77410aa35'
    )
    const data = await response.json()
    return data
}

export const getSearchProductsApi = async (query, page) => {
    const response = await fetch(
        `https://pixabay.com/api/?key=41429144-1650408828df83bb77410aa35&q=${query}&page=${page}`
    )
    const data = await response.json()
    return data
}
