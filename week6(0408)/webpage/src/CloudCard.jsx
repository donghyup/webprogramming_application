import React from "react";

function CloudCard({ title, description, url, onClick }) {
  return (
    <div className="cloud-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        공식 사이트
      </a>
    </div>
  );
}

export default CloudCard;
