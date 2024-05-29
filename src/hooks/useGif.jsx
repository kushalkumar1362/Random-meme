import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    async function fetchData(tag) {
        setLoading(true);
        try {
            const { data } = await axios.get(tag ? tagUrl : randomUrl);
            const imageSource = data.data.images.downsized_large.url;
            setGif(imageSource);
            setLoading(false);
        } catch (e) {
            console.log("Error");
        }
    }

    useEffect(() => {
        fetchData("Tom and Jerry");
    }, []);

    return { gif, loading, fetchData };
};

export default Tag;
