import React, { useState } from 'react';
import styles from "./styles.module.css"
// destracte obj 
const ColorfulComponent = ({color, handleRemove}) => {
    return ( 
        <div className={styles.box} style={{ backgroundColor: color }}>
            {/* add delete sign to component */}
            <div className={styles.delete} onClick={handleRemove}>X</div>

        </div>
     );
}
 
export default ColorfulComponent;