import React from 'react'

interface SectionItemProps {
    play_icon?: string;
    name?: string;
    content: string;
    comment?: string;
}

export const SectionItem: React.FC<SectionItemProps> = ({play_icon, name, comment, content}) => {
  return (
    <div className="section_item">
        {play_icon && <button className="play_button">{play_icon}</button>}
        <div className="item_name">{name}</div>
        <div className="content">{content}</div>
        {/* <div className="item_description">{name}</div> */}
        <div className="comment">{comment}</div>
    </div>

  )
}
