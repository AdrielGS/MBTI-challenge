import api from '../../boot/api'

export const setResult = async (context, data) => {
  const result = await api.call('POST', '/user/result', data)
  context.commit('setResult', result)
}
