'use client';
import React from 'react';
import { DATA } from "@/data/resume";

// Define the props type
type DownloadResumeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const DownloadResumeButton: React.FC<DownloadResumeButtonProps> = (props) => {
  const handleDownload = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (DATA.contact.social.DownloadResume.url) {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = DATA.contact.social.DownloadResume.url;
      link.download = 'resume.pdf';
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error('Resume URL is not defined');
    }
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
      {...props}
    >
      <svg
        width="20px"
        height="20x"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Download Resume</title>
        <path d="M25 23v4H7v-4H4v4c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-4h-3zM17 3v14.17l5.59-5.58L24 13l-8 8-8-8 1.41-1.41L15 17.17V3h2z" />
      </svg>
    </button>
  );
};

export default DownloadResumeButton;


