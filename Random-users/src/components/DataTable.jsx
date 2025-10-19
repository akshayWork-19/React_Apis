import React from 'react'
import LinkedRow from './LinkedRow';
import { useNavigate } from 'react-router-dom';
function DataTable({ data }) {
  const navigate = useNavigate();

  const handleRandomUser = () => {
    navigate('/random')
  }

  return (<div style={{ color: 'white' }}>
    {data.length > 0 ? (

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left'
        }}
      >
        <thead>
          <tr style={{ borderBottom: '2px solid #555' }}>
            <th style={{ padding: '10px' }}>Picture</th>
            <th style={{ padding: '10px' }}>Full Name</th>
            <th style={{ padding: '10px' }}>Email</th>
            <th style={{ padding: '10px' }}>Location</th>
            <th style={{ padding: '10px' }}>Age</th>
            <th style={{ padding: '10px' }}>Username</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the array of user objects to create table rows */}
          {data.map((user, index) => (

            <LinkedRow
              key={user.login?.uuid || index} to={`/user/${user?.id}`}
              style={{ borderBottom: '1px solid #333' }}
            >
              {/* Picture (Cell 1) */}
              <td style={{ padding: '10px' }}>
                <img
                  src={user.picture?.thumbnail}
                  alt={`${user.name?.first}`}
                  style={{
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px'
                  }}
                />
              </td>
              {/* Full Name (Cell 2) */}
              <td style={{ padding: '10px' }}>
                {user.name?.title}. {user.name?.first} {user.name?.last}
              </td>
              {/* Email (Cell 3) */}
              <td style={{ padding: '10px' }}>
                {user.email}
              </td>
              {/* Country (Cell 4) */}
              <td style={{ padding: '10px' }}>
                {`${user.location?.city}, ${user.location?.country}`}
              </td>
              {/* Age (Cell 5) */}
              <td style={{ padding: '10px' }}>
                {user.dob?.age}
              </td>
              {/* Login(Cell ) */}

              <td style={{ padding: '10px' }}>
                {user.login?.username}
              </td>
            </LinkedRow>
          ))}
        </tbody>
      </table>
    ) : (
      <p>Loading data...</p>
    )}


    <div>
      <button
        onClick={handleRandomUser}
        style={{ margin: '15px' }}
      >
        Generate Random User
      </button>
    </div>
  </div >)
}

export default DataTable;