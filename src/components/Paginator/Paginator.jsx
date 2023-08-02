import "./style.css"
import {useState} from "react";

const Paginator = ({songsPerPage, totalSongs, paginate}) => {
    const pageNumbers = []

    const [currentPage, setCurrentPage] = useState(1)

    for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
        pageNumbers.push(i);
    }

    const goToPage = (number) => {
        setCurrentPage(number)
        paginate(number)
    }

    const goToLast = () => {
        setCurrentPage(pageNumbers.length)
        paginate(pageNumbers.length)
    }

    const goToFirst = () => {
        setCurrentPage(1)
        paginate(1)
    }

    const goToPrevious = () => {
        if(currentPage>1){
            paginate(currentPage-1)
            setCurrentPage(currentPage-1)
        }
    }

    const goToNext = () => {
        if(currentPage<pageNumbers.length){
            paginate(currentPage+1)
            setCurrentPage(currentPage+1)
        }
    }

    return (
        <nav className="pagination-wrapper">
            <button onClick={goToFirst} className="page-btn">FIRST</button>
            <button onClick={goToPrevious} className="page-btn">PREV</button>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    return (
                        <li key={number} className="page-item">
                            <button onClick={()=>goToPage(number)} className="page-btn">{number}</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={goToNext} className="page-btn">NEXT</button>
            <button onClick={goToLast} className="page-btn">LAST</button>
        </nav>
    )
}

export default Paginator;