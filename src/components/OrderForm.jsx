import { useMemo, useState } from "react";
import { useTable } from "react-table";
import { dummyOrders } from "../api/orders";
import { dummyShips } from "../api/ships";

const OrderForm = ({ title, submitAction, submitName }) => {
    const [modularMethod, setModularMethod] = useState("Greedy");

    //handle placing orders
    const handleSubmit = (e) => {
        
        submitAction(e);
    };

    const sectionStyle = " p-1 m-1 [&>*]:p-1 [&>*]:m-1";
    const itemInputStyle =
        " px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent";

    const modularMethodNames = [
        "Greedy",
        "Heuristics",
        "Exact",
        "Metaheuristics",
    ];

    const [data, setData] = useState([
        {
            itemNumber: 123,
            itemSize: 123,
            itemDesc: "this is desc",
            itemQuantity: 123,
        },
    ]);

    const columns = useMemo(
        () => [
            {
                Header: "Item#",
                accessor: "itemNumber", // accessor is the "key" in the data
                Cell: ({ row, column, value, onChange }) => (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={itemInputStyle + " w-14"}
                    />
                ),
            },
            {
                Header: "Size",
                accessor: "itemSize",
                Cell: ({ row, column, value, onChange }) => (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={itemInputStyle + " w-14"}
                    />
                ),
            },
            {
                Header: "Description",
                accessor: "itemDesc",
                Cell: ({ row, column, value, onChange }) => (
                    <textarea
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={itemInputStyle + " w-full"}
                        rows="1"
                        cols="20"
                    />
                ),
            },
            {
                Header: "Quantity",
                accessor: "itemQuantity",
                Cell: ({ row, column, value, onChange }) => (
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={itemInputStyle + " w-14"}
                    />
                ),
            },
        ],
        []
    );

    const tableInstance = useTable({ columns, data });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    const addRow = () => {
        setData([...data, {}]);
    };

    const deleteRow = (index) => {
        setData(data.filter((row, i) => i !== index));
    };

    return (
        <div className="order-form flex flex-col items-center justify-center text-center ">
            <div className={sectionStyle}>
                <p>{title ? title : "New Order"}</p>
            </div>
            <div className={sectionStyle}>
                <label>Select your ship:</label>
                <select name="ships">
                    {dummyShips.map((ship) => {
                        return (
                            <option value={ship["name"]} key={ship["name"]}>
                                {ship["name"]}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className={sectionStyle}>
                <label>Shipping address:</label>
                <input type="text" />
            </div>
            <div className={sectionStyle}>
                <label>Delivery address:</label>
                <input type="text" />
            </div>

            <table {...getTableProps()} className="">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className="">
                                    {column.render("Header")}
                                </th>
                            ))}
                            <th>Action</th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, j) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell", {
                                                row,
                                                column: columns[j],
                                                value: data[i][
                                                    columns[j].accessor
                                                ],
                                                onChange: (value) => {
                                                    const updatedData = [
                                                        ...data,
                                                    ];
                                                    updatedData[i][
                                                        columns[j].accessor
                                                    ] = value;
                                                    setData(updatedData);
                                                },
                                            })}
                                        </td>
                                    );
                                })}
                                <td>
                                    <button
                                        className="btn-danger"
                                        onClick={() => deleteRow(i)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={addRow} className="btn-primary">
                Add Item
            </button>

            {/*select modularization methods from the list modularMethodNames*/}
            <div className={sectionStyle}>
                <label>Select preferred modularization method:</label>
                <select
                    name="methods"
                    onSelect={(e) => setModularMethod(e.target.value)}
                >
                    {modularMethodNames.map((method) => {
                        return (
                            <option value={method} key={method}>
                                {method}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div>
                <button onClick={handleSubmit} className="btn-primary">
                    {submitName ? submitName : "Order"}
                </button>
            </div>
        </div>
    );
};

export default OrderForm;
