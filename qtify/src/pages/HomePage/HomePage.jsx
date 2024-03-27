import React from "react";
import Hero from  "../../Components/Hero/Hero";
import styles from "./HomePage.css";
import Section from "../../Components/Section/Section";
import {useOutletContext} from 'react-router-dom';
import { fetchFilters } from "../../api/api";


function HomePage(){

    const { data } = useOutletContext();
    const { topAlbums, newAlbums,songs} = data;
 
    return (
        <>
            <Hero/>
            <div className={styles.wrapper}>

            <Section title="Top Album"data={topAlbums}type="album" />
            <Section title="New Album" data={newAlbums} type ="album"/>
            <Section title="Songs" data={songs} filterSource={fetchFilters} type="song" />

            </div>

        </>
    )


}


export default HomePage;