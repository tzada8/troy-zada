import React from "react";
import "./DownloadResume.css";
import TroyZadaResume from "../../../../../files/Troy_Zada_Resume.pdf";

function DownloadResume() {
   return (
      <a
         className="download-resume"
         href={TroyZadaResume}
         download="Troy Zada Resume.pdf"
      >
         <i className="fas fa-file-download" />
         DOWNLOAD RESUME
      </a>
   );
}

export default DownloadResume;
