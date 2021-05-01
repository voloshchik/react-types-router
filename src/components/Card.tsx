import React from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width: string
  height: string
  variant?: CardVariant
}

const Card: React.FC<CardProps> = ({ width, height, children, variant }) => {
  return (
    <div
      style={{
        width,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        height,
        background: variant === CardVariant.primary ? 'gray' : '',
      }}
    >
      {children}
    </div>
  )
}

export default Card
