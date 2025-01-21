import React from 'react'

interface AdvertisementProps {
    image: string;
    header?: string;
    description?: string;
}

export const Advertisement: React.FC<AdvertisementProps> = ({image, header, description}) => {
  return (
    <div className="advertisement">
        <img src={image} alt="ad_image" />
        {header && <h3>{header}</h3>}
        {description && <div className='description'>{description}</div>}
    </div>
  )
}
