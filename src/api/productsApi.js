import axios from "axios"

const url = 'https://65f53317f54db27bc022c1f0.mockapi.io/products/products'

class ProductsApi {
    getProducts(){
        return axios.get(url).then((response) => response.data)
    }
}

export default new ProductsApi()