import axios from 'axios';
import md5 from 'md5';

const publicKey = '13e7719c948c53ad8ac07f1f2aacac3b9';
const privateKey = 'bcf154aac148765904a9bf8f4cf2ea7a3b6597ee';
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
        ts,
        apiKey: publicKey,
        hash,
    },
});

export const getCharacters = async (offset = 0, limit = 100) => {
    try {
        const responde = await api.get('/characters', {
            params: {
                offset,
                limit,
            },
        });
        return Response.data.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
};
