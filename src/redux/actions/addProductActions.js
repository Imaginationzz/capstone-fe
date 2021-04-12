import axios from "axios"
import { ADD_PRODUCT, ADD_PRODUCT_FAIL } from "../constants/addProductConstants"
export const addProduct = (name, category, image, price, brand, description) => async (dispatch) => {
    console.log("Sending image...")
    //const fd = new FormData();
    //fd.append("image", image);
    try {
        // const { data } = await axios("http://localhost:5000/products/addprod", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     data: { name, category, image: fd, price, brand, description }
        // })

        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('image', image);
        formData.append("price", price)
        formData.append("brand", brand)
        formData.append("description", description)

        const config = {
            method: 'post',
            url: 'http://localhost:5000/products/addprod',
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: formData
        };

        const { data } = await axios(config)

        console.log((data))


        dispatch({ type: ADD_PRODUCT, payload: data })

    } catch (error) {
        console.log(error.message)
        dispatch({ type: ADD_PRODUCT_FAIL, payload: error.message })
    }
}