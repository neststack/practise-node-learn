const url = 'https://neststack-simpleapi.herokuapp.com/posts';
const axios = require('axios').default;

const getLastPost = async () => {
    try {
        await axios.get(url);
        // add a new post
        await axios.post(url, {
            title: 'New Post Test 1234',
            description: 'test description test description',
        });
        // get that newly added last post
        const res = await axios.get(url);
        console.log(res.data[res.data.length - 1]);
    } catch (error) {
        console.log(error);
    }
};
getLastPost();
