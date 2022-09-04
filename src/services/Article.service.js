import httpReq from "./http.service";

export const getFeaturedArticles = async () => {
    const data = await httpReq.get(`/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`);
    return data;
}

export const getAllArticles = async () => {
    const data = await httpReq.get(`/everything?q=bitcoin&apiKey=${process.env.REACT_APP_API_KEY}`);
    return data;
}