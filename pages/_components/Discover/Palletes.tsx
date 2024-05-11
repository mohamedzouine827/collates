import React, { useState } from 'react';

function Palletes({ colors }: { colors: string[] }) {
  const [copiedText, setCopiedText] = useState('');
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    navigator.clipboard.writeText(color); // Copy color to clipboard
    setCopiedText('Copied');

    // Revert back to original text after 1 second
    setTimeout(() => {
      setCopiedText('');
    }, 1000);
  };

  return (
    <div className='bg-black w-56 h-32 rounded-3xl text-white flex flex-row'>
      {colors && colors.map((color, index) => (
        <div
          key={index}
          className={`h-full w-14  ${index === 0 ? 'rounded-l-3xl' : index === colors.length - 1 ? 'rounded-r-3xl' : ''}`}
          style={{ backgroundColor: color, cursor: 'pointer', position: 'relative' }}
          onClick={() => handleColorClick(color)}
          onMouseEnter={() => setHoveredColor(color)}
          onMouseLeave={() => setHoveredColor(null)}
        >
          {hoveredColor === color && (
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
              {copiedText || 'Click to copy'}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Palletes;
