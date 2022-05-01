import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Trump stumbled on his shoe', 'Top news - 9099 readers')}
      {newsArticle('Coronavirus is gone!', 'Top news - 890 readers')}
      {newsArticle('Bitcoin worth all the money', 'Top news - 43 readers')}
      {newsArticle('Redux scares me a little less.', 'Top news - 458 readers')}
      {newsArticle(
        'Sleep all day, Code all night, age 10 years in 3',
        'Top news - 456 readers'
      )}
      {newsArticle('Linkedin clone made by moi!', 'Top news - 890 readers')}
    </div>
  );
}

export default Widgets;
