import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="education-heading">EDUCATION</h2>
      <div className="education-cards">
        <div className="education-card">
          <div className="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1BAE70" viewBox="0 0 640 512" className="edu-icon">
              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
            </svg>
          </div>
          <div className="education-details">
            <h3>Bachelor's Degree</h3>
            <p className="college-name">Government City College, Nayapul</p>
            <p className="education-year">2021 - 2024</p>
            <p className="education-stream">BSC, Mathematics, Statistics, Commputer Science</p>
            <p className="education-score">CGPA: 8.85</p>
          </div>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1BAE70" viewBox="0 0 448 512" className="edu-icon">
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
            </svg>
          </div>
          <div className="education-details">
            <h3>Intermediate Education</h3>
            <p className="college-name">Trinity Junior College,</p>
            <p className="education-year">2019 - 2021</p>
            <p className="education-stream">MPC (Mathematics, Physics, Chemistry)</p>
            <p className="education-score">Percentage: 97.2%</p>
          </div>
        </div>

        <div className="education-card">
          <div className="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1BAE70" viewBox="0 0 576 512" className="edu-icon">
              <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/>
            </svg>
          </div>
          <div className="education-details">
            <h3>Secondary School Education</h3>
            <p className="college-name">Brilliant Grammar High School</p>
            <p className="education-year">2018 - 2019</p>
            <p className="education-stream">SSC (Secondary School Certificate)</p>
            <p className="education-score">GPA: 9.8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;