import React from 'react';

export const Avatar = ({ children, className }) => (
  <div className={`rounded-full overflow-hidden ${className}`}>
    {children}
  </div>
);

export const AvatarImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-full object-cover" />
);
