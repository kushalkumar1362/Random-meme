import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //     setLoading(true);
    //     try {
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //         const { data } = await axios.get(url);
    //         const imageSource = data.data.images.downsized_large.url;
    //         setGif(imageSource);
    //         setLoading(false);
    //     } catch (e) {
    //         console.log("Error from Random.jsx");
    //         alert("API LIMIT Exceeds");
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // function generateHandler() {
    //     fetchData();
    // }

    const { gif, loading, fetchData } = useGif();
    return (
        <div className="flex flex-col justify-center items-center bg-green-400 border-2 border-gray-500 gap-4 py-4 w-full lg:w-1/2 rounded-2xl aspect-auto overflow-hidden">
            <h1 className="uppercase underline font-bold text-xl text-center md:text-2xl mb-5">
                a Random gif
            </h1>
            {loading ? (
                <Spinner />
            ) : (
                <img
                    src={gif}
                    alt=""
                    className="max-w-[30rem] px-4 object-containounded-sm"
                />
            )}

            <button
                onClick={() => fetchData()}
                className="uppercase w-4/5 bg-white/70 rounded-lg py-2 my-2 mt-5 hover:bg-white translate-all font-semibold text-center">
                Generate
            </button>
        </div>
    );
};

export default Random;
