export const guid = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const computeCommands = text => text.match(/^(\/nick|\/think|\/oops)/g);

export const sortByProperty = (prop, collection) => {
    const sorted = collection.sort((a, b) => a[prop] - b[prop])
    return sorted
}