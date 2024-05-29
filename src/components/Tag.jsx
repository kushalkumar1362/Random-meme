import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    const [tag, setTag] = useState("tom and jerry");

    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //     setLoading(true);
    //     try {
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //         const { data } = await axios.get(url);
    //         const imageSource = data.data.images.downsized_large.url;
    //         setGif(imageSource);
    //         console.log(imageSource);
    //         setLoading(false);
    //     } catch (e) {
    //         console.log("Error");
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);
const { gif, loading, fetchData } = useGif(tag);
    return (
        <div className="flex flex-col justify-center items-center bg-blue-400 border-2 border-black gap-y-5 py-4 w-full lg:w-1/2 rounded-2xl aspect-auto overflow-hidden mt-10">
            <h1 className="uppercase underline font-bold text-xl text-center md:text-2xl mb-5">
                Random {tag} Gif
            </h1>
            {loading ? (
                <Spinner />
            ) : (
                <img
                    src={gif}
                    alt=""
                    className="max-w-[30rem] px-4 object-contain"
                />
            )}

            <input
                type="text"
                className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center mt-5"
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />

            <button
                onClick={() => fetchData(tag)}
                className="uppercase w-4/5 bg-white/70 rounded-lg py-2 my-2 mt-5 hover:bg-white translate-all font-semibold text-center">
                Generate
            </button>
        </div>
    );
};

export default Tag;
