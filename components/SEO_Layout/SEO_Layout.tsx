import React from 'react';

//Types
//Local Types
type Props = {
  title: string;
  metaName: string;
  metaDescription: string;
  children?: React.ReactNode;
};

const SEO_Layout = ({ title, metaName, metaDescription, children }: Props) => {
  return (
    <>
      <title>{title}</title>
      <meta name={metaName} content={metaDescription} />
      {/* Prevents horizontal scroll due to animations on phone */}
      <meta
        name='viewport'
        content='width=device-width, height=device-height, initial-scale=1.0'
      />
      <div>
        {title && <title>{title}</title>}
        {metaName && <meta name={metaName} content={metaDescription} />}
        {children}
      </div>
    </>
  );
};

export default SEO_Layout;
