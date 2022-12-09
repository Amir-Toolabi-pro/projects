import React from 'react';
import { useDispatch } from 'react-redux';
import { decreas, increas } from '../redux/Actions';


import styles from "../styles/buttons.css"


const Button = () => {

    const dispatch = useDispatch()

    return (
        <>
            <div className={styles.buttoncontent}>
                <button className={styles.firstbutton} onClick={() => dispatch(decreas())}>-</button>
                <button className={styles.secondbutton} onClick={() => dispatch(increas({ id: 52 }))} >+</button>
            </div>
        </>
    );
}

export default Button;