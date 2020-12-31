import React from 'react';

interface TodoListItemProps {
    todo: {
        text: string;
        complete: boolean;
    }
}

export const TodoListItem: React.FC = (props) => {
    return(
        <h1>TodoListItem</h1>
    )
}