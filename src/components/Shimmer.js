const Shimmer = () => {
   
    const Shimmer = () => {
        const shimmerCards = new Array(25).fill(null).map((_, index) => (
          <div key={index} className="shimmer-card"></div>
        ));
      
        return <div>{shimmerCards}</div>;
      };
     return (
        <div className="shimmer-container">
          < Shimmer />
        </div>
     );
    // return( 
    // <div className="shimmer-container">
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     </div>
    //     );

};

export default Shimmer;