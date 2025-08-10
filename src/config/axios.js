import axios from "axios";


export const apiClient = axios.create({
  baseURL: "https://jobrise-be-production.up.railway.app/api", // Mengarah ke backend lokal Anda
});

// Base URL untuk gambar/logo perusahaan
export const baseImageUrl = "https://jobrise-be-production.up.railway.app/public/";