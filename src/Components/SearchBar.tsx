import React from 'react'

interface SearchBarProps {
    content: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({content}) => {
  return (
    <div className="searchbar">
        <button className="searchbutton">{content}</button>
    </div>
  )
}
