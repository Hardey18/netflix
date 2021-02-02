import React from 'react';
import { BrowseContainer } from '../containers/browse';
// import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { series } = useContent('series');
  // console.log("Series", series)
  const { films } = useContent('films');
  // console.log("Films", films)
  const slides = selectionFilter({ series, films });
  console.log("Slides", slides)

  return (
    <BrowseContainer slides={slides} />
  )
}
