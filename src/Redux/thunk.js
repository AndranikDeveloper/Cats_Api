import axios from "axios"
import { addCatsAC, setIsLoadingAC } from "./reducer"


const addCatsTC = ({category}) => async (dispatch) => {
    dispatch(setIsLoadingAC(true))
    try {
        const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10${category === null ? '' : (`&category_ids=` + category)}`)
        dispatch(addCatsAC(data))
        console.log(data)
    } catch (e) {
        throw new Error(e)
    } finally {
        dispatch(setIsLoadingAC(false))
    }
}

export default addCatsTC