import React from 'react'
import { useNavigate } from 'react-router-dom'

const LinkedRow = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  }

  return (
    <tr
      {...props}
      onClick={handleClick}
      style={{
        ...props.style,
        cursor: 'pointer', // Indicates it's clickable
        transition: 'background-color 0.2s',
      }}
      // Optional: Add hover effect for better UX
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#222';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {children}
    </tr>
  )
}
export default LinkedRow