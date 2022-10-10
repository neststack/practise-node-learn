const url = 'https://neststack-simpleapi.herokuapp.com/posts';
const axios = require('axios').default;

axios
    .get(url)
    .then(
        // add a new post
        axios
            .post(url, {
                title: 'New Post Test',
                description: 'test description test description',
            })
            .then(
                // get that newly added last post
                axios
                    .get(url)
                    .then((res) => console.log(res.data[res.data.length - 1]))
                    .catch((error) => console.log(error))
            )
            .catch((error) => console.log(error))
    )
    .catch((error) => console.log(error));
