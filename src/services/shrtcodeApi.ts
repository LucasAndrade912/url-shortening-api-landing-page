import axios from 'axios';

export const shrtcodeApi = axios.create({
	baseURL: 'https://api.shrtco.de/v2',
});
