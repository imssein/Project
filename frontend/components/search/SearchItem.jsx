import React from 'react';

function SearchItem({store}) {
    return (
        <table>
            <thead>
                <tr>
                <th>식당명</th>
                <th>채식타입</th>
                <th>카테고리</th>
                </tr>
            </thead>
            <tbody>
            {store.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.vegetarianTypes}</td>
                    <td>{item.category}</td>
                </tr>
            ))}
            </tbody>
        </table>         
    );
}

export default SearchItem;