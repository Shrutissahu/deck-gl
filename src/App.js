import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';
import {ScatterplotLayer} from 'deck.gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic2hydXRpc3NhaHUiLCJhIjoiY2prMDNkbXR1MDJwOTNybWxhOTY3NHV5MSJ9.aNIOKKJiGvSDPS-m8RxDyA';

// const initialViewState = {
//   longitude: -91.4,
//   latitude: 40.76,
//   zoom: 10,
//   maxZoom: 16
// };

const initialViewState = {
  longitude: -74,
  latitude: 40.76,
  zoom: 11,
  maxZoom: 16
};

// Data to be used by the LineLayer
const data = [{sourcePosition: [-91.41669, 40.8021], targetPosition: [-91.41669, 40.681]}];



class App extends React.Component {
  render() {
    // const layers = [
    //   new LineLayer({id: 'line-layer', data})
    // ];

    const MALE_COLOR = [0, 128, 255];
    const FEMALE_COLOR = [255, 0, 128];

    const layers = new ScatterplotLayer({
      id: 'bart-stations',
      data: 'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/scatterplot/manhattan.json',
      radiusScale: 10,
      radiusMinPixels: 0.5,
      getPosition: d => [d[0], d[1], 0],
      getColor: d => (d[2] === 1 ? MALE_COLOR : FEMALE_COLOR)
    });
    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    );
  }
}

export default App;