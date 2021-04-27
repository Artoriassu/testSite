import React, { useState } from "react"
import Paginator from "../Paginator/Paginator"
import { TableLineType } from "../types/types"
import TableElement from "./TableElement"
import view from './Table.module.css'
import FilterTable from "./FilterTable"

type PropType = {
    totalItemsCount: number
    pageSize: number
    portionSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    tableElements: Array<TableLineType>
}
const Table: React.FC<PropType> = (props) => {
    const onSubmit = (formData: any) => {
        props.onPageChanged(1)
    }
    const [sort, setSort] = useState("no");
    const changeSort = (change: string) => {
        switch (change) {
            case "name":
                {
                    if (sort != "nameUp") {
                        props.tableElements
                            .sort((first, second) => {
                                return first.name.localeCompare(second.name);
                            })
                        setSort("nameUp")
                    }
                    else {
                        props.tableElements
                            .sort((first, second) => {
                                return second.name.localeCompare(first.name);
                            })
                        setSort("nameDown")
                    }
                }; break;
            case "quantity":
                {
                    if (sort != "quantityUp") {
                        props.tableElements
                            .sort((first, second) => {
                                return first.quantity > second.quantity ? 1 : -1;
                            })
                        setSort("quantityUp")
                    }
                    else {
                        props.tableElements
                            .sort((first, second) => {
                                return first.quantity > second.quantity ? -1 : 1;
                            })
                        setSort("quantityDown")
                    }
                }; break;
            case "distance":
                {
                    if (sort != "distanceUp") {
                        props.tableElements
                            .sort((first, second) => {
                                return first.distance > second.distance ? 1 : -1;
                            })
                        setSort("distanceUp")
                    }
                    else {
                        props.tableElements
                            .sort((first, second) => {
                                return first.distance > second.distance ? -1 : 1;
                            })
                        setSort("distanceDown")
                    }
                }; break;
            default: break;
        }

    }
    return <div>
        <FilterTable />

        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
            totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} portionSize={props.portionSize} />
        <h4>Таблица</h4>
        <div className={view.tableTitles}>
            <div className={view.tT_date}>Дата</div>
            <div className={view.tT_name} >
                <a href="#" onClick={() => changeSort("name")}>
                    Название</a></div>
            <div className={view.tT_quantity}>
                <a href="#" onClick={() => changeSort("quantity")}>
                    Количество</a></div>
            <div className={view.tT_distance}>
                <a href="#" onClick={() => changeSort("distance")}>
                    Расстояние </a></div>
        </div>
        {
            props.tableElements
                .map(u =>
                    <TableElement key={u.id} tableElement={u} />)
        }
    </div >
}


export default Table;