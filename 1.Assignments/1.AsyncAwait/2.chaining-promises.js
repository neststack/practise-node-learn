const url = 'https://neststack-simpleapi.herokuapp.com/posts';
const axios = require('axios').default;

axios
    .get(url)
    .then(() => {
        // add a new post
        return axios.post(url, {
            title: 'New Post Test 5678',
            description: 'test description test description',
        });
    })
    .then(() => {
        // get that newly added last post
        return axios
            .get(url)
            .then((res) => console.log(res.data[res.data.length - 1]));
    })
    .catch((error) => console.log(error));
