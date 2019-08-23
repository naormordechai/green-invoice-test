import axios from 'axios'
const login = async (userInfo) => {
    try {
        return await axios.post('https://sandbox.d.greeninvoice.co.il/api/v1/account/login', { email: userInfo.email, password: userInfo.password })
    } catch (e) {
        return e
    }
}

export default {
    login
}