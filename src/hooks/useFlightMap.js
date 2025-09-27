import { useEffect } from 'react';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const useFlightMap = ({
  formRef,
  defaultData,
  isLoading = false,
  isDrawable = true,
  isViewable = false,
  mapContainer,
}) => {
  useEffect(() => {
    if (window.flightmap && !isLoading && mapContainer.current) {
      const map = new window.flightmap.Map({
        container: mapContainer.current,
        style: 'style-dark.json',
        center: [-77.38, 39],
        zoom: 5,
        accessToken: process.env.REACT_APP_FLIGHT_MAP_ACCESS_TOKEN,
      });

      if (isDrawable) {
        // To add polygon draw utility for map
        const draw = new MapboxDraw({
          displayControlsDefault: false,
          controls: {
            polygon: isDrawable, // Enable polygon drawing
            trash: true, // Enable the trash button
          },
          defaultMode: 'draw_polygon',
        });

        // Add Mapbox Draw to the map
        map.addControl(draw);

        //defaul polygon draw
        if (typeof defaultData !== 'undefined') {
          const defaultPolygon = {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [defaultData],
            },
            properties: {},
          };

          map.on('load', () => {
            return draw.add(defaultPolygon);
          });
        }
      }

      if (isViewable) {
        map.on('load', function () {
          map.addLayer({
            id: 'maine',
            type: 'fill',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry: {
                  type: 'Polygon',
                  coordinates: [defaultData],
                },
              },
            },
            layout: {},
            paint: {
              'fill-color': '#7638ff',
              'fill-opacity': 0.5,
            },
          });
        });
      }

      // Event listener for when a polygon is created
      map.on('draw.create', (e) => {
        const cordinatesArr = e.features[0]?.geometry?.coordinates[0] || [];
        if (cordinatesArr.length > 0) {
          const formattedArr = cordinatesArr.map((cordinate) =>
            cordinate.join(' ')
          );
          if (formRef && formRef.current) {
            formRef.current.setFieldValue('polygonArea', formattedArr);
          }
        }
      });

      // Event listener for when a polygon is updated
      map.on('draw.update', (e) => {
        const cordinatesArr = e.features[0]?.geometry?.coordinates[0] || [];
        if (cordinatesArr.length > 0) {
          // const formattedArr = cordinatesArr.map((cordinate: string[]) => cordinate.join(' '));
          if (formRef && formRef.current) {
            formRef.current.setFieldValue('polygonArea', cordinatesArr);
          }
        }
      });

      // Clean up the map and draw controls when the component unmounts
      return () => {
        map.remove();
      };
    }
  }, [defaultData, formRef, isDrawable, isLoading, isViewable, mapContainer]);
  return { mapContainer };
};

export default useFlightMap;
