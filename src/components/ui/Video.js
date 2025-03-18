
export default function Video({filePath, fileType, containerStyle, videoStyle}) {

  return (
    
    <div className={`${containerStyle}`}>

      <video
        className={videoStyle}
        autoPlay
        loop
        muted 
        playsInline
      >
          <source src={filePath} type={fileType} />
          Your browser does not support the video tag.
      </video>
        
    </div>
  );
}
