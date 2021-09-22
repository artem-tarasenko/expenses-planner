import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./List.module.scss";

export default function List( {listId: id}) {
    const list = useSelector(state => state.lists.data[id])

    console.log("LIST", list);

    return <>
        <div className="content flex flex-col rounded bg-amber-600 flex-grow">
            <div className={styles.list}>
                <h2 className="mr-2 ">{list.Title}</h2>
                <hr />
                {
                    list.expenses && list.expenses.map( (exp, index) => {
                    return (
                            <div key={index} className={styles.listGrid}>
                                <p>{exp.Title}</p>
                                <p>{exp.Currency}</p>
                                <p>{exp.Sum}</p>
                            </div>
                        )       
                    })
                }
            </div>
        </div>
    </>
}