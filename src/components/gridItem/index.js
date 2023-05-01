import React from "react";
import * as C from "./style";




const GridItem = ({item, onDelete}) => {
    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (
                    <p color="red">Saída</p>
                ) : (
                    <p color="green" >Entrada</p>
                )}
            </C.Td>
            {/* <C.Td alignCenter
                onclick={() => onDelete(item.id)}>X
            </C.Td> */}
        </C.Tr>
    );
};

export default GridItem;
