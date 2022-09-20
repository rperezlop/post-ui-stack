
    import axios from "axios";

    export const apiPost = axios.create({
      baseURL: 'https://dummyapi.io/data/v1/post?limit=10'
    })
