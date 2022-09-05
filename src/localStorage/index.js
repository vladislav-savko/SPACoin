export const store = key => {

    return {
        getStore: () => JSON.parse(localStorage.getItem(key)),
        getItemFromStore: idx => JSON.parse(localStorage.getItem(key))[idx],

        setStore: data => localStorage.setItem(key, JSON.stringify(data)),
    }
}