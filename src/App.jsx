import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
    return (
        <div className="w-full h-screen flex flex-col background p-10">
            <h1 className="rounded-2xl mb-6 p-4 text-center text-xl lg:text-3xl font-bold bg-slate-50 border">
                RANDOM GIFS
            </h1>

            <div className="flex flex-col justify-center items-center">
                <Random></Random>
                <Tag></Tag>
            </div>
        </div>
    );
};

export default App;
