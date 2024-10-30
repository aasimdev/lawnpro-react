const splitPath = (url : string) : Array<string> => {
    const matches = url.match(/\/[^\/]+|\/$/g)
    return matches || []; // Fallback to empty array if no matches
}

export default splitPath;