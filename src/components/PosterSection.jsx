import { useState, useEffect } from 'react';

export default function PosterSection({ date, festivalData }) {

  const filteredGroups = festivalData.filter(group => group.date === date);

  const sortedGroups = filteredGroups.sort((a, b) => a.importance - b.importance);


  const groupElements = sortedGroups.map((group, index) => {

    let groupClass = '';
    if (group.importance === 1) groupClass = 'giant';
    else if (group.importance === 2) groupClass = 'big';
    else if (group.importance === 3) groupClass = 'medium';
    else if (group.importance === 4) groupClass = 'small';


    return <p key={index} className={groupClass}>{group.name}</p>;
  });

  return (
    <div className='lineup-container'>
      <div className='day-container'>
        <h3>{date}</h3>
      </div>
      

      {groupElements}
    </div>
  );
}
