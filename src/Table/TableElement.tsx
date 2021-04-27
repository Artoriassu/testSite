import { TableLineType } from "../types/types";
import view from './Table.module.css'

type PropType = {
    tableElement: TableLineType
}
const TableElement: React.FC<PropType> = (props) => {
    let tableElement = props.tableElement;
    return <div className={view.tableTitles}>
        <div className={view.tT_date}>
            {tableElement.date}
        </div>
        <div className={view.tT_name}>
            {tableElement.name}
        </div>
        <div className={view.tT_quantity}>
            {tableElement.quantity}
        </div>
        <div className={view.tT_distance}>
            {tableElement.distance}
        </div>


    </div>
}

export default TableElement;