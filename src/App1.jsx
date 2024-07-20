// import React from 'react'


// import './App.css'
// import { Link } from 'react-router-dom';
// import { Card } from 'react-bootstrap';
// function App1() {
//     return (
//         <div className="">
//             {route4.map((item, index) => (
//                 <div key={index}>
//                     <Link to={item.name}>{item.name}</Link>
//                 </div>
//             ))}

//         </div>
//     );
// }
// const route4 = [
//     {

//         name: "about",

//     },

// ];
// export default App1;

import React from 'react'
import Cardsd from './Cardsd'
import Sdata from './Sdata';
const faviconj = 'indexh';
const Fav = () => {

    if (faviconj === 'indexh') {
        return (
            <Cardsd
                key={Sdata[1].id}
                links={Sdata[1].links}

            />

        );
    } 
    else if (faviconj === 'indexh') {
        return (

            <Cardsd
                key={Sdata[2].id}

                links={Sdata[2].links}

            />
        );
    }
};
const App1 = () => {
    return (
        <div>
            <Fav />
        </div>
    )
}

export default App1
