import React from 'react'
import { Link } from 'react-router-dom';

const Btn = ({value, txtcolor, urllink}) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Link onClick={scrollToTop} to={`${urllink}`} className={`bg-${txtcolor} bg-transparent text-gray-dark rounded-full mt-5 py-2 px-4  hover:bg-primary hover:text-white transition-all duration-500`}>{value}</Link>

        </>
    )
}

export default Btn
