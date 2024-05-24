import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const API_KEY = "3e7719c948c53ad8ac07f1f2aacac3b9 ";
const HASH = "bcf154aac148765904a9bf8f4cf2ea7a3b6597ee";

export const Main = () => {
    const [item, setItem] = useState([]);
    const [search, setSearch] = useState("");

    const fetchCharaters = async (url) => {
        try {
            const res = await axios.get(url);
            setItem(res.data.data.results);

        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        const ts = Date.now();
        const initialUrl = `${BASE_URL}?ts=${ts}&apikey=${API_KEY}&hash=${HASH}`;
        fetchCharaters(initialUrl);
    }, []);

    const searchMarvel = (e) => {
        if (e.key === "Enter") {
            const ts = Date.now();
            const searchUrl = `${BASE_URL}?nameStartsWith=${search}&ts=${ts}&apikey=${API_KEY}&hash=${HASH}`;
            fetchCharaters(searchUrl);
            // setSearch("");
        }
    };

    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./Images/bg.gif" alt="" />
                </div>
                <br></br>
                <div className="search-bar">
                    <img className="logo" src="./Images/log.png" alt="logo" />
                    <p></p>
                    <input
                        type="search"
                        placeholder="Procurar Herói"
                        classname="search"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={searchMarvel}
                    />
                </div>
            </div>
            <div className="content">
                {!item.lengh ? <p>Não encontrado</p> : <Card data={item} />}
            </div>
        </>
    );

}


