import "./style.css"
import {useState} from "react";

const Paginator = ({pagination, paginate}) => {

    console.log(pagination);

    const [currentPage, setCurrentPage] = useState(1)

    const { pages } = pagination;

    const goToPage = (number) => {
        setCurrentPage(number)
        paginate(number)
    }

    const goToLast = () => {
        setCurrentPage(pages)
        paginate(pages)
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
        if(currentPage<pages){
            paginate(currentPage+1)
            setCurrentPage(currentPage+1)
        }
    }

    return (
        <nav className="pagination-wrapper">
            <button onClick={goToFirst} className="page-btn">FIRST</button>
            <button onClick={goToPrevious} className="page-btn">PREV</button>
            <ul className="pagination">
                {Array.from(Array(pages),(x,i)=>i+1).map(number => {
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