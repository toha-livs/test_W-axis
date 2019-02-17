import { HTTP } from './common'
import jQuery from 'jquery'
/* Я бы рад использовать axios post, но в гугле я не нашел информации о том что он такого делает
    с вложенными data данными, что джанга не может разобрать, и выдает статус 400, по этому извиняйте, jQuery */
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
