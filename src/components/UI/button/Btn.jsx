import React from 'react'
const BtnStyles = require('./MyBtn.module.css')

function Btn({children, ...props}) {
    return (
        <button {...props} className={BtnStyles.MyBtn}>
                {children}
        </button>
    )
}

export default Btn
