import {
    BASE_URL,
    fetchAndParse,
    headers
} from "./utils";



export function login(data) {
    return fetchAndParse(`${BASE_URL}/auth/login`, {
        method: "Post",
        body: JSON.stringify(data),
        headers
    })
}




export function register(data) {
    return fetchAndParse(`${BASE_URL}/auth/register`, {
        method: "Post",
        body: JSON.stringify(data),
        headers
    })
}