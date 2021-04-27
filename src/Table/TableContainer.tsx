import React from "react";
import { compose } from "redux";
import { AppStateType } from "../redux/redux-store";
import { getTableElements } from "../redux/tableReducer";
import { TableLineType } from "../types/types";
import { connect } from 'react-redux';
import Table from "./Table";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    totalItemsCount: number
    tableElements: Array<TableLineType>
    portionSize: number
}
type MapDispatchPropsType = {
    getTableElements: (currentPage: number, pageSize: number) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getTableElements(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const { pageSize} = this.props;
        this.props.getTableElements(pageNumber, pageSize);
    }

    render() {
        return <>
            <h2>Table</h2>
            <Table totalItemsCount={this.props.totalItemsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                tableElements={this.props.tableElements}
                portionSize={this.props.portionSize}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        tableElements: state.tablePage.tableElements,
        pageSize: state.tablePage.pageSize,
        totalItemsCount: state.tablePage.totalItemsCount,
        currentPage: state.tablePage.currentPage,
        portionSize: state.tablePage.portionSize,
    }
}

export default compose(
    connect(
        mapStateToProps,
        { getTableElements }
    )
)(UsersContainer)