import React from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width: string
  height: string
  variant?: CardVariant
  onClick: () => void
}

const Card: React.FC<CardProps> = ({ width, height, children, variant, onClick }) => {
  return (
    <div
      style={{
        width,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        height,
        background: variant === CardVariant.primary ? 'gray' : '',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
