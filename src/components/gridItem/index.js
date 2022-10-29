import React from "react";
import * as C from "./style";




const GridItem = ({item, onDelete}) => {
    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (
                    <a color="red"/>
                ) : (
                    <a color="green" />
                )}
            </C.Td>
            <C.Td alignCenter
                onclick={() => onDelete(item.id)}>x 
            </C.Td>
        </C.Tr>
    );
};

export default GridItem;
