"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface RadarMapProps {
  coordinates?: [number, number];
}

const RadarMap: React.FC<RadarMapProps> = ({ coordinates }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        maxZoom: 5.99,
        minZoom: 4,
        zoom: 5,
        center: [-75.789, 41.874],
        style: "mapbox://styles/mapbox/dark-v11",
      });

      mapRef.current.on("load", () => {
        if (mapRef.current && !mapRef.current?.getSource("radar")) {
          mapRef.current.addSource("radar", {
            type: "image",
            url: "https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif",
            coordinates: [
              [-80.425, 46.437],
              [-71.516, 46.437],
              [-71.516, 37.936],
              [-80.425, 37.936],
            ],
          });

          mapRef.current.addLayer({
            id: "radar-layer",
            type: "raster",
            source: "radar",
            paint: {
              "raster-fade-duration": 0,
            },
          });
        }
      });
    }
  }, [coordinates]);

  return <div className="relative h-full" id="map" ref={mapContainerRef} style={{ height: "100%" }}></div>;
};

export default RadarMap;
