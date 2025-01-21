import React from 'react'

interface WidgetProps{
    location: string;
    temperature: number;
    description: string;
    iconUrl?: string;
}

export const Widget: React.FC<WidgetProps> = ({location, temperature, description, iconUrl}) => {
  return (
    <div className='widget'>
        <h3 className="location">
            Погода в {location}
        </h3>
        <div className="info">
            {iconUrl&&<img src={iconUrl} alt={description} className="widget_image"/>}
            <p className="temperature">{temperature}°C</p>
            <p className="description">{description}</p>
        </div>
    </div>
  )
}
