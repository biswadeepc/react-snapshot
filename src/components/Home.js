import React, { useEffect } from 'react';
import images from '../data/images.json';

const Home = () => {
    /*
     * // Need to run for the first time
    useEffect(() => {
        const saveData = async () => {
            const response = await fetch('https://react-demo-1775-default-rtdb.asia-southeast1.firebasedatabase.app/pics.json', {
                method: 'POST',
                body: JSON.stringify(images),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!response.ok) {
                console.error('Error in submitting data');
            }
        };
        saveData();

    }, []);
*/
    //console.log(JSON.stringify(images));
    return (
        <h2>Welcome to Snapshot! Your image finder on the web.</h2>
        );
}

export default Home;