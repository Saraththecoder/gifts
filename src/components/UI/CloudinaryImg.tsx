import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { CSSProperties } from 'react';

// IMPORTANT: Replace 'YOUR_CLOUD_NAME' with your actual Cloudinary cloud name, 
// or set it in your .env file as VITE_CLOUDINARY_CLOUD_NAME
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'doegh5lpl'
  }
});

interface CloudinaryImgProps {
  publicId: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

export default function CloudinaryImg({ publicId, alt, className, width, height, style }: CloudinaryImgProps) {
  // Create a Cloudinary Image object
  const myImage = cld.image(publicId);

  // You can optionally add resizing or transformations here automatically
  // For example, if width and height are provided, we can crop/resize:
  if (width && height) {
    myImage.resize(fill().width(width).height(height));
  } else if (width) {
    myImage.resize(fill().width(width));
  }

  // Set automatic format and quality for optimization
  myImage.format('auto').quality('auto');

  return (
    <AdvancedImage 
      cldImg={myImage} 
      className={className} 
      alt={alt || ''} 
      style={style}
    />
  );
}
