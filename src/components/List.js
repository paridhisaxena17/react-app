import React from 'react';
import personnelStore from '../stores/personnelStore';

function List() {
  const data = personnelStore.getData();

  return (
    <div className="list">
      <h2>Personnel</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;