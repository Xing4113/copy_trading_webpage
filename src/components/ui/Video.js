
export default function Video({filePath, fileType, containerStyle, videoStyle}) {

  return (
    
    <div className={`${containerStyle}`}>

      <video
          width="300"
          className={videoStyle}
          autoPlay
          loop
      >
          <source src={filePath} type={fileType} />
          Your browser does not support the video tag.
      </video>
        
    </div>
  );
}
