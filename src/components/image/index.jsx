import { useState, Suspense } from "react";
import errorImg from "/error.jpeg";
import "./index.css";

const LazyImage = ({
  src,
  srcSet,
  alt = "",
  className,
  size = {
    width: "auto",
    height: "auto",
    minWidth: "100%",
    minHeight: "100%",
  },
  objectFit = "cover",
  loading = "lazy",
  errorImage = errorImg,
  onLoad,
  onError, // e.g. send analytics
}) => {
  const [isError, setIsError] = useState(false);
  
  // for error handling we can create and use ErrorBoundary Component(wrapper to Suspense) instead of using state based error handling
  const handleImageError = (e) => {
    e.target.alt = "Image failed to load";
    setIsError(true);
    onError?.(e);
  };

  const handleImageLoad = (e) => {
    onLoad?.(e);
  };

  const isImageDecorative = !alt;

  return (
    <div
      style={{
        ...size,
        overflow: "hidden",
      }}
      className={className}
    >
      <img
        data-testid="image"
        src={isError ? errorImage : src}
        srcSet={srcSet}
        alt={alt}
        loading={loading}
        aria-hidden={isImageDecorative}
        onError={handleImageError}
        onLoad={handleImageLoad}
        className="img"
        style={{
          objectFit: objectFit,
        }}
      />
    </div>
  );
};

const Image = ({ loadingElement = <div>Loading...</div>, ...props }) => {
  return (
    <Suspense fallback={loadingElement}>
      <LazyImage {...props} />
    </Suspense>
  );
};

export default Image;
