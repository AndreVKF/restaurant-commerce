import axios from "axios"

import { BACKEND_URL } from "../../env.js"

export const api = axios.create({
  baseURL: BACKEND_URL,
})
