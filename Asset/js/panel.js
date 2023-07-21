import {usersData} from './database.js'

let locationSearch = new URLSearchParams(location.search)
let searchUsername = locationSearch.get('un')
let searchAccess = locationSearch.get('access')

// usersData.find((user) => {
//     if (user.username === searchUsername) {
//         console.log(user);
//     }
// })
