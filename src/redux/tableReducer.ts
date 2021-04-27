import { Dispatch } from "redux";
import { tableAPI } from "../api/tableAPI";
import { TableLineType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
    tableElements: [
        {id: 1 , date: "01/01/2020", name: "A_Object", quantity:1, distance: 45 },
        {id: 2 , date: "01/01/2020", name: "Me", quantity:7, distance: 32 },
        {id: 3 , date: "01/01/2020", name: "Object3", quantity:3, distance: 78 },
        {id: 4 , date: "01/01/2020", name: "j_Object", quantity:2, distance: 100 },
        {id: 5 , date: "01/01/2020", name: "Surprize", quantity:5, distance: 12 }
    ] as Array<TableLineType>,
    pageSize: 5,
    totalItemsCount: 1,
    currentPage: 1,
    portionSize: 10,
};

const tableReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case "table/SET_TABLE_ELEMENTS":
            {
                return {
                    ...state,
                    tableElements: action.tableElements
                }
            }
        case "table/SET_CURRENT_PAGE":
            {
                return {
                    ...state,
                    currentPage: action.currentPage,
                }
            }
        case "table/SET_TOTAL_USERS_COUNT":
            {
                return {
                    ...state,
                    totalItemsCount: action.count,
                }
            }
        default:
            return state;
    }
}


export const actions = {
    setTableElements: (tableElements: Array<TableLineType>) => ({ type: "table/SET_TABLE_ELEMENTS", tableElements } as const),
    setCurrentPage: (currentPage: number) => ({ type: "table/SET_CURRENT_PAGE", currentPage } as const),
    settotalItemsCount: (totalItemsCount: number) => ({ type: "table/SET_TOTAL_USERS_COUNT", count: totalItemsCount } as const),   
}

export const getTableElements = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch: Dispatch<ActionsTypes>) => {

        dispatch(actions.setCurrentPage(currentPage));
       let data = await tableAPI.getUsers(currentPage, pageSize);
        dispatch(actions.setTableElements(data.items));
        dispatch(actions.settotalItemsCount(data.totalCount));
    }
}

export default tableReducer;

type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>