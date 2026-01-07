import React from 'react';
import PomodoroTimer from './PomodoroTimer';
import PayloadVault from './PayloadVault';

const RDLab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-16">
      <PomodoroTimer />
      <PayloadVault />
    </div>
  );
};

export default RDLab;