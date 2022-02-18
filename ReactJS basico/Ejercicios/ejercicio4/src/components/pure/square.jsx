import React, {useState} from 'react';

const Square = () => {

    const [styleSquare, setStyleSquare] = useState({
        backgroundColor: 'black',
        width: '250px',
        height: '250px'
    });  

    let red;
    let green;
    let blue;   

    const newColor = () => {
        red = Math.random() * (255 - 0) + 0;
        green = Math.random() * (255 - 0) + 0;
        blue = Math.random() * (255 - 0) + 0;  
    }

    const changeColor = () => {
        const newStyleSquare = {
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            width: '250px',
            height: '250px'
        }
        setStyleSquare(newStyleSquare);
    }


    return (
        <div className='d-flex justify-content-center'>
            <div className='m-3' style={ styleSquare }
                onMouseOver={ newColor } 
                onMouseOut={ changeColor } 
                onDoubleClick={ changeColor }>
            </div>
        </div>
    );
}

export default Square;
