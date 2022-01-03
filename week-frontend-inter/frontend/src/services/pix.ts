import api from './resources/api';

export const request = (value: number) => {
    return api.post('/pix/request', {value})
}

export const pay = (key: string) => {
    return api.post(`/pix/pay/${key}`)
}

export const transactions = () => {
    return api.get('/pix/transactions')
}