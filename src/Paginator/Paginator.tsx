import { useState } from "react";
import view from './Paginator.module.css'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    portionSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
let Paginator: React.FC<PropsType> = (props) => {
    let pagesCount: number = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;
    return (
        <div>
            <h4>Страницы</h4>
            {// @ts-ignore
                portionNumber > 1 && <span className={props.currentPage === pages[0] &&  view.selectedPage}
                    onClick={(e) => { props.onPageChanged(pages[0]); setPortionNumber(1); }}>
                    <button>{pages[0]}</button>
                </span>}
            {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>«</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p &&  view.selectedPage}
                        onClick={(e) => { props.onPageChanged(p); }}>
                        <button >{p}</button>
                    </span>
                })}
            {portionNumber < portionCount && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>»</button>}

            {// @ts-ignore
                portionNumber < portionCount && <span className={props.currentPage === (pages.length) &&  view.selectedPage}
                    onClick={(e) => { props.onPageChanged(pages.length); setPortionNumber(portionCount); }}>
                    <button >{pages.length}</button>
                </span>}
        </div>
    )
}

export default Paginator;