import React from "react";
import { Link } from "react-router-dom";
import "./DownloadResume.css";

function DownloadResume(props) {
   return (
      <Link className="download-resume" to={props.path}>
         <i className="fas fa-file-download" />
         DOWNLOAD RESUME
      </Link>
   );
}

export default DownloadResume;
