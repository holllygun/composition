import React, {ReactNode} from 'react'

interface SectionProps {
    header?: string;
    button_name?: string;
    children?: ReactNode;
}

export const Section: React.FC<SectionProps> = ({header, button_name, children}) => {
  return (
    <div className="section">
        {header && (<h3 className="section_header">
            {header}
            {button_name && <button className="section_button">{button_name}</button>}
        </h3>)}
        <div className="section_items">
            {children}
        </div>
    </div>
  )
}
