import axios from 'axios'

interface payloadType {
    url: string,
    type: string,
    data?: any
}

export default function request(payload: payloadType) {
    axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
    const { url, type, data } = payload
    if (type === 'GET') {
        return axios.get(url, { params: data })
    } else {
        return axios.post(url, data)
    }
}

