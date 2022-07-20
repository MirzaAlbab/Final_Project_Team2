import axios from 'axios';

export const getNotif = () => axios.get('/notification');
export const detailNotif = id => axios.get(`/notification${id}`);
