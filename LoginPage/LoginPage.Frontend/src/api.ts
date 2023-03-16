import { Users } from "./types/stateTypes";

export const getUsers = async () => {
    fetch('http://localhost:5076/api/users')
        .then(res => res.json())
        .then(data => {
            return data as Users;
        })
        .catch(err => err);
}

export const postUser = () => {
    // fetch('http://localhost:5076/api/users')
    //     .then(res => res.json())
    //     .then(data => {
    //         data as Users;
    //         return data;
    //     })
    //     .catch(err => err);
}