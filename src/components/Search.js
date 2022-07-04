//import { useState, useEffect } from 'react';

function Search(props) {
    // const [optionA, setOptionA] = useState(null);
    // const [optionB, setOptionB] = useState(null);
        //const sortUniqBy = uniqBy.sort((a, b) => a.Name.localeCompare(b.Name))
        const convert = (arr, optiona, optionb) => {
            console.log(arr)
            // console.log(optionb)
            // console.log(arr)
            // setOptionA(optiona)
            // setOptionB(optionb)
            return arr.filter((obj1) => {
                const one = obj1.Players.filter((obj2) => {
                    return obj2['Player'] === optionb
                })
                if (typeof(obj1[optiona]) === 'string') {
                    return obj1[optiona] === optionb
                } else {
                    return one[0][optiona] === true


                    // const one = obj1.Players.map((obj2) => {
                    //     if (typeof(obj2[optiona]) === 'string') {
                    //         return obj2[optiona] === optionb
                    //     } else if (obj2['Player'] === optionb) {
                    //         return obj2[optiona] === true
                    //     } else {
                    //         return false
                    //     }
                        
                    // })
            }
            });
        };
        // useEffect(() => {convert()}, [])
        const test = convert(props.bg, 'Picked', 'Evan')
        //const test2 = convert(props.bg, 'theme', '')
        console.log(test)
        // console.log(test2)
    // useEffect(() => console.log(test), [])
    // useEffect(() => console.log(test2), [])

}

export default Search;

//search by winner, player, who picked, most played, theme