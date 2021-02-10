import React from 'react';

 import './custome.styles.scss';

 const CustomeButton=({children, isGoogleSignIn,...otherProps})=>{
    return(
        <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
 }
 export default CustomeButton;
