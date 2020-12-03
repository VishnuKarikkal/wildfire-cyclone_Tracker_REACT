import React from 'react'
import spinner from './spinner.gif';

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="loading" />
            <h4>Fetching Data ! ! !</h4>
        </div>
    )
}

export default Loader;