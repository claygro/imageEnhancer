import Loading from "./Loading";

const ImagePreview = ({ uploaded, enhanced, loading }) => {
  return (
    <>
      <div className="mt-8 grid h-100 grid-col-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Original Image */}
        <div className="bg-white h-full shadow-lg rounded-2xl overflow-hidden">
          <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
            Original Image
          </h2>
          {uploaded ? (
            <img
              src={uploaded}
              alt="Original image"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200">
              No image selected
            </div>
          )}
        </div>

        {/* Enhanced Image */}
        <div className="bg-white h-full shadow-lg rounded-2xl overflow-hidden">
          <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
            Enhanced Image
          </h2>
          {enhanced && !loading ? (
            <img
              src={enhanced}
              alt="Enhanced Image"
              className="w-full h-full object-cover"
            />
          ) : loading ? (
            <div className="flex justify-center items-center h-full bg-gray-200">
              <Loading />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200">
              No Enhanced image selected
            </div>
          )}
        </div>
      </div>

      {/* Download Button using <a> tag */}
      <div className="flex justify-center mt-4">
        {enhanced && !loading ? (
          <a
            href={enhanced}
            download="enhanced_image.jpg"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Download
          </a>
        ) : (
          <button
            disabled
            className="px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold cursor-not-allowed"
          >
            Download
          </button>
        )}
      </div>
    </>
  );
};

export default ImagePreview;
