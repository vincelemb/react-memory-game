import React from 'react';

type OrderedListContent = {
    color?: string;
    content: string;
};

interface OrderedListProps {
    lists: OrderedListContent[];
}

const OrderedList: React.FC<OrderedListProps> = ({ lists }) => {
    const list = lists.map(({ color, content }, idx) => (
        <li className="_flex _p-sm" key={idx}>
            <span
                className={`_mr-sm _w-lg _rounded-rounded _text-white _leading-loose _text-center _min-w-lg _max-h-lg ${color ? `_bg-${color}` : '_bg-primary'}`}>
                {idx + 1}
            </span>
            <p className="_m-none">{content}</p>
        </li>
    ));

    return <ol className="_m-none _list-none _p-none">{list}</ol>;
};

export default OrderedList;
