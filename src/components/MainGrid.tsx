import React from 'react';

interface MainGridProps {
    input: string;
}

const MainGrid: React.FC<MainGridProps> = ({ input }) => {
    return (
    <div className="main-grid">
    <div className="grid-item">{input}</div>
    </div>
    );
};
    
export default MainGrid;