import { HTTP } from './common'
import jQuery from 'jquery'

export const Order = {
  create (config) {
    return jQuery.post('https://immense-tundra-62701.herokuapp.com/api/v1/order/', config).done(response => {
      return response
    })
  },
  delete (OrderId) {
    return HTTP.delete(`/order/${OrderId}/`)
  },
  list () {
    return HTTP.get('/orders-list/').then(response => {
      return response.data
    })
  }
}
