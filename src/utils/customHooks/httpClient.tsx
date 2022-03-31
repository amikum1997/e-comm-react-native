import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Environment from './environmet'

const HttpClient = () => {

    const { environment } = Environment()
    const [isEncrypted, setIsEncrypted] = useState(false)


    const axiosHead = axios.create({
        baseURL: `${environment.url}`,
        timeout: 30000,
        headers: {
            "Content-Type": "application/json"
        },
        transformRequest: [
            (data, headers) => {
                return JSON.stringify(data)
            },
        ],
        transformResponse: [
            (data) => {
                return data
            },
        ],
    })

    // axiosHead.interceptors.request.use(
    //     (config:any)=>{
    //     if(userAccessToken !== ''){
    //         config.headers.Authorization = `Bearer ${userAccessToken}`
    //         return config;
    //     }
    // },
    // (error)=>{
    //     return Promise.reject(error);
    // })


    // axiosHead.interceptors.response.use(
    //     (response)=>{
           
    //     },
    //     async (error) => {
    //         const originalConfig = error.config;
    //         if(error.data.status === false && error.data.msg === 'jwt expired'){
    //             const data = await axios.post('http://143.110.183.1:6051/web/login/refreshtoken' , {refreshToken : userAccessToken})
    //         }
    //      }
    // )

    const getRequest = async (url: string) => {
        try {
            return await axiosHead.get(url)
        } catch (error) {
            return error
        }
    }
    const postRequest = async (url: string, payload: any) => {
        try {
            return await axiosHead.post(url, payload)
        } catch (error) {
            return error
        }
    }
    const putRequest = async (url: string, payload: any) => {
        try {
            return await axiosHead.put(url, payload)
        } catch (error) {
            return error
        }
    }
    const deleteRequest = async (url: string) => {
        try {
            return await axiosHead.delete(url)
        } catch (error) {
            return error
        }
    }
    return { getRequest, postRequest, putRequest, deleteRequest }
}

export default HttpClient