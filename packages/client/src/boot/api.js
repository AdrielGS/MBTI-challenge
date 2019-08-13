import axios from 'axios'

export default class api {
  static async call (method, url, data) {
    try {
      const response = await axios({
        method: method,
        url: `${process.env.API_URI}${url}`,
        data
      })

      if (response.status === 200 && response.data) {
        return response.data
      }
    } catch (error) {
      console.error(error)
    }
  }
}
