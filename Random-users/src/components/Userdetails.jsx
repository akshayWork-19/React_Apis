import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { dataUserRequest } from '../lib/backend'

function Userdetails({ }) {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      const data = await dataUserRequest(id);
      console.log(data);
      setUser(data?.data);
    };
    fetchData();
  }, [id]);

  // --- COMPACT SHADCN-LIKE STYLES ---

  const pageContainerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px', // Reduced padding
  };

  const cardStyle = {
    backgroundColor: '#18181B',
    color: '#FAFAFA',
    padding: '20px', // Reduced padding for compactness
    borderRadius: '6px', // Slightly less rounded
    maxWidth: '400px', // Smaller max width
    width: '100%',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5)',
    border: '1px solid #3F3F46',
    fontFamily: 'Inter, sans-serif',
  };

  const headerStyle = {
    fontSize: '1.25rem', // Smaller font size
    fontWeight: '600',
    marginBottom: '15px', // Reduced margin
    borderBottom: '1px solid #3F3F46',
    paddingBottom: '8px',
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '80px', // Smaller avatar
    height: '80px',
    display: 'block',
    margin: '0 auto 15px auto', // Reduced margin
    objectFit: 'cover',
    border: '2px solid #71717A',
  };

  const detailItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Align items to the top
    marginBottom: '8px', // Reduced margin
    padding: '4px 0',
    fontSize: '14px', // Smaller font size
    // Removed the dotted border for a cleaner, more compact look
  };

  const labelStyle = {
    color: '#A1A1AA',
    fontWeight: '400',
    flexShrink: 0, // Prevent label from shrinking
    marginRight: '10px', // Space between label and value
  };

  const valueStyle = {
    textAlign: 'right',
    fontWeight: '500',
    flexGrow: 1, // Allow value to take remaining space
    minWidth: '0', // Important for flex items to respect overflow settings
    wordBreak: 'break-all', // Ensure long words/strings break and wrap
  };

  // --- END COMPACT SHADCN-LIKE STYLES ---

  return (
    <><div style={pageContainerStyle}>
      <div style={cardStyle}>
        <h1 style={headerStyle}>{user?.name?.first} {user?.name?.last}</h1>

        {user?.picture?.large && (
          <img
            src={user.picture.large}
            alt={`${user.name?.first} ${user.name?.last}`}
            style={imageStyle}
          />
        )}

        <div style={detailItemStyle}>
          <span style={labelStyle}>Username:</span>
          <span style={valueStyle}>{user?.login?.username || 'N/A'}</span>
        </div>
        <div style={detailItemStyle}>
          <span style={labelStyle}>Email:</span>
          <span style={valueStyle}>{user?.email || 'N/A'}</span>
        </div>
        <div style={detailItemStyle}>
          <span style={labelStyle}>Date of Birth:</span>
          <span style={valueStyle}>{user?.dob?.date ? new Date(user.dob.date).toLocaleDateString() : 'N/A'}</span>
        </div>
        <div style={detailItemStyle}>
          <span style={labelStyle}>Phone:</span>
          <span style={valueStyle}>{user?.phone || 'N/A'}</span>
        </div>
        <div style={detailItemStyle}>
          <span style={labelStyle}>Country:</span>
          <span style={valueStyle}>{user?.location?.country || 'N/A'}</span>
        </div>
        <div style={detailItemStyle}>
          <span style={labelStyle}>Address:</span>
          <span style={valueStyle}>
            {user?.location ? `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}` : 'N/A'}
          </span>
        </div>
      </div>
    </div>
      <div>
        <button onClick={() => navigate("/")}>
          Back to home
        </button>
      </div>
    </>
  )
}

export default Userdetails