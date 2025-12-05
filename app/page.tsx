"use client";
import Image from "next/image";

const files = [
  {
    filename: "/DSC02645.JPG",
    type: "image/jpeg",
    url: "/DSC02645.JPG",
  },
  {
    filename: "/DSC02646.JPG",
    type: "image/jpeg",
    url: "/DSC02646.JPG",
  },
  {
    filename: "/DSC02649.JPG",
    type: "image/jpeg",
    url: "/DSC02649.JPG",
  },
  {
    filename: "/DSC02651.JPG",
    type: "image/jpeg",
    url: "/DSC02651.JPG",
  },
  {
    filename: "/DSC02652.JPG",
    type: "image/jpeg",
    url: "/DSC02652.JPG",
  },
  {
    filename: "/DSC02654.JPG",
    type: "image/jpeg",
    url: "/DSC02654.JPG",
  },
  {
    filename: "/DSC02656.JPG",
    type: "image/jpeg",
    url: "/DSC02656.JPG",
  },
  {
    filename: "/DSC02657.JPG",
    type: "image/jpeg",
    url: "/DSC02657.JPG",
  },
  {
    filename: "/DSC02658.JPG",
    type: "image/jpeg",
    url: "/DSC02658.JPG",
  },
  {
    filename: "/DSC02661.JPG",
    type: "image/jpeg",
    url: "/DSC02661.JPG",
  },
  {
    filename: "/DSC02666.JPG",
    type: "image/jpeg",
    url: "/DSC02666.JPG",
  },
  {
    filename: "/DSC02675.JPG",
    type: "image/jpeg",
    url: "/DSC02675.JPG",
  },
  {
    filename: "/DSC02676.JPG",
    type: "image/jpeg",
    url: "/DSC02676.JPG",
  },
  {
    filename: "/DSC02679.JPG",
    type: "image/jpeg",
    url: "/DSC02679.JPG",
  },
  {
    filename: "/DSC02680.JPG",
    type: "image/jpeg",
    url: "/DSC02680.JPG",
  },
  {
    filename: "/DSC02681.JPG",
    type: "image/jpeg",
    url: "/DSC02681.JPG",
  },
  {
    filename: "/DSC02682.JPG",
    type: "image/jpeg",
    url: "/DSC02682.JPG",
  },
  {
    filename: "/DSC02689.JPG",
    type: "image/jpeg",
    url: "/DSC02689.JPG",
  },
  {
    filename: "/DSC02690.JPG",
    type: "image/jpeg",
    url: "/DSC02690.JPG",
  },
  {
    filename: "/DSC02691.JPG",
    type: "image/jpeg",
    url: "/DSC02691.JPG",
  },
  {
    filename: "/DSC02693.JPG",
    type: "image/jpeg",
    url: "/DSC02693.JPG",
  },
  {
    filename: "/DSC02694.JPG",
    type: "image/jpeg",
    url: "/DSC02694.JPG",
  },
  {
    filename: "/DSC02698.JPG",
    type: "image/jpeg",
    url: "/DSC02698.JPG",
  },
  {
    filename: "/DSC02699.JPG",
    type: "image/jpeg",
    url: "/DSC02699.JPG",
  },
  {
    filename: "/DSC02702.JPG",
    type: "image/jpeg",
    url: "/DSC02702.JPG",
  },
  {
    filename: "/DSC02709.JPG",
    type: "image/jpeg",
    url: "/DSC02709.JPG",
  },
  {
    filename: "/DSC02782.JPG",
    type: "image/jpeg",
    url: "/DSC02782.JPG",
  },
  {
    filename: "/DSC02786.JPG",
    type: "image/jpeg",
    url: "/DSC02786.JPG",
  },
  {
    filename: "/DSC02787.JPG",
    type: "image/jpeg",
    url: "/DSC02787.JPG",
  },
  {
    filename: "/DSC02788.JPG",
    type: "image/jpeg",
    url: "/DSC02788.JPG",
  },
  {
    filename: "/DSC02789.JPG",
    type: "image/jpeg",
    url: "/DSC02789.JPG",
  },
  {
    filename: "/DSC02790.JPG",
    type: "image/jpeg",
    url: "/DSC02790.JPG",
  },
  {
    filename: "/DSC02791.JPG",
    type: "image/jpeg",
    url: "/DSC02791.JPG",
  },
  {
    filename: "/DSC02792.JPG",
    type: "image/jpeg",
    url: "/DSC02792.JPG",
  },
  {
    filename: "/DSC02793.JPG",
    type: "image/jpeg",
    url: "/DSC02793.JPG",
  },
  {
    filename: "/DSC02794.JPG",
    type: "image/jpeg",
    url: "/DSC02794.JPG",
  },
  {
    filename: "/DSC02795.JPG",
    type: "image/jpeg",
    url: "/DSC02795.JPG",
  },
  {
    filename: "/DSC02796.JPG",
    type: "image/jpeg",
    url: "/DSC02796.JPG",
  },
  {
    filename: "/DSC02797.JPG",
    type: "image/jpeg",
    url: "/DSC02797.JPG",
  },
  {
    filename: "/DSC02798.JPG",
    type: "image/jpeg",
    url: "/DSC02798.JPG",
  },
  {
    filename: "/DSC02801.JPG",
    type: "image/jpeg",
    url: "/DSC02801.JPG",
  },
  {
    filename: "/DSC02802.JPG",
    type: "image/jpeg",
    url: "/DSC02802.JPG",
  },
  {
    filename: "/DSC02806.JPG",
    type: "image/jpeg",
    url: "/DSC02806.JPG",
  },
  {
    filename: "/DSC02810.JPG",
    type: "image/jpeg",
    url: "/DSC02810.JPG",
  },
  {
    filename: "/DSC02838.JPG",
    type: "image/jpeg",
    url: "/DSC02838.JPG",
  },
  {
    filename: "/DSC02843.JPG",
    type: "image/jpeg",
    url: "/DSC02843.JPG",
  },
  {
    filename: "/DSC02845.JPG",
    type: "image/jpeg",
    url: "/DSC02845.JPG",
  },
  {
    filename: "/DSC02846.JPG",
    type: "image/jpeg",
    url: "/DSC02846.JPG",
  },
  {
    filename: "/DSC02847.JPG",
    type: "image/jpeg",
    url: "/DSC02847.JPG",
  },
  {
    filename: "/DSC02849.JPG",
    type: "image/jpeg",
    url: "/DSC02849.JPG",
  },
  {
    filename: "/DSC02850.JPG",
    type: "image/jpeg",
    url: "/DSC02850.JPG",
  },
  {
    filename: "/DSC02851.JPG",
    type: "image/jpeg",
    url: "/DSC02851.JPG",
  },
  {
    filename: "/DSC028153.JPG",
    type: "image/jpeg",
    url: "/DSC02853.JPG",
  },
  {
    filename: "/DSC02855.JPG",
    type: "image/jpeg",
    url: "/DSC02855.JPG",
  },
  {
    filename: "/DSC02856.JPG",
    type: "image/jpeg",
    url: "/DSC02856.JPG",
  },
  {
    filename: "/DSC02862.JPG",
    type: "image/jpeg",
    url: "/DSC02862.JPG",
  },
  {
    filename: "/DSC02864.JPG",
    type: "image/jpeg",
    url: "/DSC02864.JPG",
  },
  {
    filename: "/DSC02866.JPG",
    type: "image/jpeg",
    url: "/DSC02866.JPG",
  },
  {
    filename: "/DSC02868.JPG",
    type: "image/jpeg",
    url: "/DSC02868.JPG",
  },
  {
    filename: "/DSC02869.JPG",
    type: "image/jpeg",
    url: "/DSC02869.JPG",
  },
  {
    filename: "/DSC02870.JPG",
    type: "image/jpeg",
    url: "/DSC02870.JPG",
  },
  {
    filename: "/DSC02878.JPG",
    type: "image/jpeg",
    url: "/DSC02878.JPG",
  },
  {
    filename: "/DSC02880.JPG",
    type: "image/jpeg",
    url: "/DSC02886.JPG",
  },
  {
    filename: "/DSC02887.JPG",
    type: "image/jpeg",
    url: "/DSC02887.JPG",
  },
  {
    filename: "/DSC02888.JPG",
    type: "image/jpeg",
    url: "/DSC02888.JPG",
  },
  {
    filename: "/DSC02889.JPG",
    type: "image/jpeg",
    url: "/DSC02889.JPG",
  },
  {
    filename: "/DSC02890.JPG",
    type: "image/jpeg",
    url: "/DSC02890.JPG",
  },
  {
    filename: "/DSC02891.JPG",
    type: "image/jpeg",
    url: "/DSC02891.JPG",
  },
  {
    filename: "/DSC02894.JPG",
    type: "image/jpeg",
    url: "/DSC02894.JPG",
  },
  {
    filename: "/DSC02897.JPG",
    type: "image/jpeg",
    url: "/DSC02897.JPG",
  },
  {
    filename: "/DSC02928.JPG",
    type: "image/jpeg",
    url: "/DSC02928.JPG",
  },
  {
    filename: "/DSC02945.JPG",
    type: "image/jpeg",
    url: "/DSC02945.JPG",
  },
  {
    filename: "/DSC02948.JPG",
    type: "image/jpeg",
    url: "/DSC02948.JPG",
  },
  {
    filename: "/DSC02951.JPG",
    type: "image/jpeg",
    url: "/DSC02951.JPG",
  },
];

export default function DownloadableGallery() {
  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
      }, 100);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download image. Please try again.");
    }
  };
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Downloadable Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="h-48 overflow-hidden relative">
              <Image
                src={file.url}
                alt={file.filename}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3
                className="text-lg font-medium text-gray-800 truncate mb-3"
                title={file.filename}
              >
                {file.filename}
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {file.type.split("/")[1].toUpperCase()}
                </span>

                <button
                  onClick={() => handleDownload(file.url, file.filename)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <DownloadIcon />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
