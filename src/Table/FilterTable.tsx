import { useState } from "react"
import { reduxForm } from "redux-form"
import { createField, Input } from "../FormsControls/FormsControls"


const FilterTableForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>Ввод значения для фильтрации{createField('Enter here', 'filterWords', [], Input)}</div>
            <div>
                <button>Ок</button>
            </div>
        </form>)
}
const FilterTableReduxForm = reduxForm({
    form: 'filterTable'
})(FilterTableForm)

const FilterTable = (props: any) => {
    const ChangeFilter = () => {
    
    }
    const onSubmit = (formdata: any) => {
      
    }
    return <div >
        <h4>Фильтрация таблицы</h4>
        <FilterItem name="Выбор колонки">
            <ul> <button>Название</button></ul>
            <ul> <button>Количество</button></ul>
            <ul> <button>Расстояние</button></ul>
        </FilterItem>
        <FilterItem name="Выбор условия">
            <ul> <button>Равно</button></ul>
            <ul> <button>Содержит</button></ul>
            <ul> <button>Больше</button></ul>
            <ul> <button>Меньше</button></ul>
        </FilterItem>
        <FilterTableReduxForm onSubmit={onSubmit} />
    </div>
}
const FilterItem = (props: any) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <li>
                <a href="#" onClick={() => { setOpen(!open) }}>
                    {props.name}
                </a>
            </li>
            {open && props.children}
        </div>
    )
}
export default FilterTable;