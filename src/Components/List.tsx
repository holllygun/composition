import React from 'react'

interface ListProps {
  header?: string;
  items: string[];
  className?: string;
}

export const List: React.FC<ListProps> = ({header, items, className}) => {
  return (
    <div>
      {header && <h2 className={className}>{header}</h2>}
        <ul className={className}>
          {items.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
    </div>
  )
};
