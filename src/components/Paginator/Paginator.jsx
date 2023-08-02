import "./style.css"

const Paginator = ({songsPerPage, totalSongs, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    return (
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className="page-btn">{number}</button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Paginator;