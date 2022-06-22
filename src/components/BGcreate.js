import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Createbg from '../pages/Createbg';
import CreateShow from '../pages/CreateShow';




function BGCreate(props) {
    
    const [ bg, setBG ] = useState(null);
    const URL = 'https://bgbackend.herokuapp.com/bg/';

    const getBG = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBG(data);
    };
    const createBG = async (bg) => {
        // make post request to create people
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(bg),
    });

    //   update list of bg
    getBG();
    };
    const updateBG = async (bg, id) => {
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(bg),
        });
        getBG();
    }

    const deleteBGs = async id => {
        await fetch(URL + id, {
            method: 'DELETE',
        })
        getBG();
    }

    useEffect(() => getBG(), []);

    return (
    
            <Switch>
                <Route exact path='/bg'>
                    <Createbg bg={bg} createBG={createBG} />
                </Route>
                <Route 
                path='/bg/:id'
                render={(rp) => (
                    <CreateShow
                    bg = {bg}
                    updateBG = {updateBG}
                    deleteBGs = {deleteBGs}
                    {...rp}
                />
                )}
            />
            </Switch>
    );
}
export default BGCreate;