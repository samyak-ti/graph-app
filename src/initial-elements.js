import React from 'react';

export const nodes = [
  {
    id: 'book1',
    data: {
      label: (
        <>
          Book 1
        </>
      ),
    },
    position: { x: 250, y: 0 },
  },
  {
    id: 'chapter1',
    data: {
      label: (
        <>
          Chapter 1
        </>
      ),
    },
    position: { x: 100, y: 100 },
  },
  {
    id: 'chapter2',
    data: {
      label: (
        <>
          Chapter 2
        </>
      ),
    },
    position: { x: 400, y: 100 },
  },
  {
    id: 'chapter3',
    data: {
      label: (
        <>
          Chapter 3
        </>
      ),
    },
    position: { x: 250, y: 200 },
  },

];

export const edges = [
  { id: 'btoc1', source: 'book1', target: 'chapter1' },
  { id: 'btoc2', source: 'book1', target: 'chapter2' },
  { id: 'btoc3', source: 'book1', target: 'chapter3' }
];
