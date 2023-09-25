
import './Loader.css'; 

const Loader = () => {
    return (
        <div className="wrap-loader">
            <div className="loader">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className={`quarter-circle quarter-${index + 1}`} />
                ))}

                <div className="wrap-text">
                    <div className="text">
                        {['L', 'O', 'A', 'D', 'I', 'N', 'G', '...'].map((val, index) => (
                            <span key={index}>{val}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="loader-text">wait please</div>
        </div>
    );
};

export default Loader;
