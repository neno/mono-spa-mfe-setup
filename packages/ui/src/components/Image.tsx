import { ImgHTMLAttributes, type FC } from 'react';
import { StyledImage } from './styled/StyledImage';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

export const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}) => {
  if (src) {
    return (
      <StyledImage
        {...props}
        src={`${imageBaseUrl}${src as string}`}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return null;
};
