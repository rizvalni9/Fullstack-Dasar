import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    headers:{
        "Content-Type": "application/json",
    }
})

export async function getProducts(){
    const res = await api.get("/products");
    return res.data;
}