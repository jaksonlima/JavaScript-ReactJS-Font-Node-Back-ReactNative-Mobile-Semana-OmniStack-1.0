const { Router } = require('express');
const axios = require('axios');
const Dev = require('../src/models/Dev');

const router = Router();

router.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const {name = login, avatar_url, bio} = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsArray
    });

    return response.json(dev);
});

module.exports = router;