import axios from "axios"

import { BACKEND_URL } from "../../env.js"

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || BACKEND_URL,
})
