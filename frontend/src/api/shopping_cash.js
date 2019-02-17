import { HTTP } from './common'
import jQuery from 'jquery'
//  post аналогично order.js
export const ShoppingCash = {
  add (config) {
    return jQuery.post('https://immense-tundra-62701.herokuapp.com/api/v1/add-shoping-cash/', config).done(response => {
      return response.data
    })
  },
  delete (ScId) {
    return HTTP.delete(`/shoping-cash/${ScId}/`)
  },
  list (OrderId) {
    return HTTP.get(`/order-details/${OrderId}/`).then(response => {
      return response.data
    })
  },
  dict () {
    return HTTP.get('/products/').then(response => {
      return response
    })
  }
}
