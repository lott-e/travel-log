'use client'
import type { TravelLogWithId } from '@/models/TravelLogs';
import Pin from 'public/punaise-mauve.svg'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';


import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';


const createIcon = (fill = '#56BC58', iconSize = 10) => {
    return L.divIcon({
        className: 'bg-transparent',
        html: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created with Inkscape (http://www.inkscape.org/) -->
        <svg
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            id="svg8057"
            viewBox="0 0 731.74 1046.7"
            sodipodi:docname="_svgclean2.svg"
            version="1.1"
            inkscape:version="0.48.3.1 r9886"
          >
          <defs
              id="defs3"
            >
            <linearGradient
                id="linearGradient7523"
                inkscape:collect="always"
              >
              <stop
                  id="stop7525"
                  style="stop-color:#c494d4"
                  offset="0"
              />
              <stop
                  id="stop7527"
                  style="stop-color:#700098"
                  offset="1"
              />
            </linearGradient
            >
            <linearGradient
                id="linearGradient8347"
                y2="254.59"
                xlink:href="#linearGradient7523"
                gradientUnits="userSpaceOnUse"
                x2="-145.21"
                gradientTransform="matrix(6.9859,0,0,5.9941,1373.9,-1226.4)"
                y1="265.45"
                x1="-140.41"
                inkscape:collect="always"
            />
            <linearGradient
                id="linearGradient8350"
                y2="254.59"
                xlink:href="#linearGradient7523"
                gradientUnits="userSpaceOnUse"
                x2="-145.21"
                gradientTransform="matrix(8.1614,0,0,8.3537,1714.2,-1462)"
                y1="268.53"
                x1="-136.74"
                inkscape:collect="always"
            />
            <radialGradient
                id="radialGradient8353"
                gradientUnits="userSpaceOnUse"
                cy="187.12"
                cx="-150.66"
                gradientTransform="matrix(-8.4868,6.3564,-4.9511,-6.9256,-84.975,2460.4)"
                r="34.438"
                inkscape:collect="always"
              >
              <stop
                  id="stop8369"
                  style="stop-color:#ffffff"
                  offset="0"
              />
              <stop
                  id="stop8371"
                  style="stop-color:#3c0050"
                  offset=".089956"
              />
              <stop
                  id="stop8373"
                  style="stop-color:#983cb4"
                  offset=".33118"
              />
              <stop
                  id="stop8375"
                  style="stop-color:#ac68c4"
                  offset=".56676"
              />
              <stop
                  id="stop8377"
                  style="stop-color:#000000"
                  offset=".89037"
              />
              <stop
                  id="stop8379"
                  style="stop-color:#ffaaaa"
                  offset="1"
              />
            </radialGradient
            >
            <linearGradient
                id="linearGradient8356"
                y2="113.32"
                gradientUnits="userSpaceOnUse"
                x2="-236.91"
                gradientTransform="matrix(7.0149,-4.2695,4.1712,7.1802,1714.2,-1462)"
                y1="114.42"
                x1="-276.06"
                inkscape:collect="always"
              >
              <stop
                  id="stop7519"
                  style="stop-color:#5e1976"
                  offset="0"
              />
              <stop
                  id="stop8389"
                  style="stop-color:#6c1c88"
                  offset=".5"
              />
              <stop
                  id="stop7521"
                  style="stop-color:#9438b4"
                  offset="1"
              />
            </linearGradient
            >
            <radialGradient
                id="radialGradient8359"
                fx="-168.25"
                fy="245.69"
                gradientUnits="userSpaceOnUse"
                cy="251.8"
                cx="-164.03"
                gradientTransform="matrix(4.6007,7.188,-9.0541,6.0709,3431.2,245.56)"
                r="36.711"
                inkscape:collect="always"
              >
              <stop
                  id="stop8393"
                  style="stop-color:#5e1976"
                  offset="0"
              />
              <stop
                  id="stop8395"
                  style="stop-color:#6c1c88"
                  offset=".5"
              />
              <stop
                  id="stop8397"
                  style="stop-color:#22002b"
                  offset="1"
              />
            </radialGradient
            >
            <linearGradient
                id="linearGradient8365"
                y2="273.53"
                gradientUnits="userSpaceOnUse"
                x2="-144.96"
                gradientTransform="matrix(8.1614,0,0,8.3537,1708.4,-1473.9)"
                y1="301.82"
                x1="-128.29"
                inkscape:collect="always"
              >
              <stop
                  id="stop7017-2"
                  style="stop-color:#cccccc"
                  offset="0"
              />
              <stop
                  id="stop7019-6"
                  style="stop-color:#000000"
                  offset="1"
              />
            </linearGradient
            >
            <radialGradient
                id="radialGradient8381"
                gradientUnits="userSpaceOnUse"
                cy="891.74"
                cx="602.64"
                gradientTransform="matrix(.71853 -.38321 1.1173 2.095 -839.45 -749.04)"
                r="50.37"
                inkscape:collect="always"
              >
              <stop
                  id="stop8385"
                  style="stop-color:#000000"
                  offset="0"
              />
              <stop
                  id="stop8387"
                  style="stop-color:#999999"
                  offset="1"
              />
            </radialGradient
            >
          </defs
          >
          <sodipodi:namedview
              id="base"
              bordercolor="#666666"
              inkscape:pageshadow="2"
              inkscape:window-y="0"
              pagecolor="#ffffff"
              inkscape:window-maximized="0"
              inkscape:zoom="0.35"
              inkscape:window-x="0"
              inkscape:window-height="645"
              showgrid="false"
              borderopacity="1.0"
              inkscape:current-layer="layer1"
              inkscape:cx="1201.9845"
              inkscape:cy="503.18927"
              inkscape:window-width="674"
              inkscape:pageopacity="0.0"
              inkscape:document-units="mm"
          />
          <g
              id="layer1"
              inkscape:label="Layer 1"
              inkscape:groupmode="layer"
              transform="translate(-5.56 -5.391)"
            >
            <path
                id="path7381"
                d="m566.85 790.69 87.007 171.46c24.715 51.671 14.82 79.155 3.5487 83.515-9.8107 6.3464-44.245 23.936-78.637-51.436-7.3438-16.46-82.392-167.95-82.392-167.95 25.513-6.9657 47.565-22.604 70.474-35.591z"
                sodipodi:nodetypes="cccccc"
                style="fill:url(#linearGradient8365)"
                inkscape:connector-curvature="0"
            />
            <path
                id="path7383"
                inkscape:connector-curvature="0"
                sodipodi:nodetypes="ssscccss"
                style="fill:url(#radialGradient8381)"
                d="m539.8 802.4 11.939-5.4976c7.2459-3.3365 21.095 10.39 31.052 30.776l41.575 85.123c15.75 39.189 13.623 57.205 6.4406 60.512-6.2518 4.8133-30.052-14.09-44.539-42.97l-41.575-85.124c-9.959-20.385-12.139-39.484-4.8928-42.82z"
            />
            <path
                id="path7385"
                inkscape:connector-curvature="0"
                sodipodi:nodetypes="sssss"
                style="fill:url(#radialGradient8359)"
                d="m737.3 538.29c0 103.15-59.679 215.59-229.81 296.84-143.4 68.48-317.65-16.32-346.1-150.09-31.82-149.56 110.54-333.53 295.63-333.53s280.28 83.623 280.28 186.78z"
            />
            <path
                id="path7387"
                d="m266.95 346.85 87.798-53.437c53.283-32.43 112.75-30.011 133.34 5.4224l85.954 147.96c31.723 84.171 1.8764 184.25-86.433 222-82.07 35.19-169.58 22.34-193.73-51.49l-85.96-147.96c-20.585-35.434 5.7394-90.068 59.023-122.5z"
                sodipodi:nodetypes="ssscccss"
                style="fill:url(#linearGradient8356)"
                inkscape:connector-curvature="0"
            />
            <path
                id="path7389"
                d="m550.68 169.9c17.84 87.46-57.71 235.28-224.43 284.61-141.04 41.73-289.8-42.65-316.53-158.03-29.891-129.01 105.28-264.79 277.69-287.69 118.51-15.737 234.65 20.714 263.27 161.11z"
                sodipodi:nodetypes="sssss"
                style="fill:url(#radialGradient8353)"
                inkscape:connector-curvature="0"
            />
            <path
                id="path7391"
                d="m325.46 771.37c127.38 112.48 344.58-65.45 350.85-210.13-48.82 129.31-225.15 251.27-350.85 210.13z"
                sodipodi:nodetypes="ccc"
                style="fill:url(#linearGradient8350)"
                inkscape:connector-curvature="0"
            />
            <path
                id="path7393"
                inkscape:connector-curvature="0"
                sodipodi:nodetypes="ccc"
                style="fill:url(#linearGradient8347)"
                d="m180.61 381.29c157.57 74.02 287.19-68.72 274.86-155.36-41.79 92.78-175.05 177.21-274.86 155.36z"
            />
          </g
          >
          <metadata
              id="metadata39"
            >
            <rdf:RDF
              >
              <cc:Work
                >
                <dc:format
                  >image/svg+xml</dc:format
                >
                <dc:type
                    rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                />
                <cc:license
                    rdf:resource="http://creativecommons.org/licenses/publicdomain/"
                />
                <dc:publisher
                  >
                  <cc:Agent
                      rdf:about="http://openclipart.org/"
                    >
                    <dc:title
                      >Openclipart</dc:title
                    >
                  </cc:Agent
                  >
                </dc:publisher
                >
              </cc:Work
              >
              <cc:License
                  rdf:about="http://creativecommons.org/licenses/publicdomain/"
                >
                <cc:permits
                    rdf:resource="http://creativecommons.org/ns#Reproduction"
                />
                <cc:permits
                    rdf:resource="http://creativecommons.org/ns#Distribution"
                />
                <cc:permits
                    rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
                />
              </cc:License
              >
            </rdf:RDF
            >
          </metadata
          >
        </svg
        >
        `,
        iconSize: [iconSize, iconSize],
        iconAnchor: [iconSize / 2, iconSize],
    });
};



L.Marker.prototype.options.icon = createIcon();

const currentMarkerIcon = createIcon('#F2BB05', 40);


interface TravelLogMapProps {
    logs: TravelLogWithId[];
}

interface InitMapProps {
    logs: TravelLogWithId[];
    // onMapClick: (event: L.LeafletMouseEvent) => void;
    // dispatch: TravelLogDispatch;
}


if (!process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
    throw new Error('Missing NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN in .env.local');
}



const InvalidateSize = ({ logs }: TravelLogMapProps) => {
    const map = useMap()
    useEffect(() => {
        console.log('invalidating....')
        map.invalidateSize()
        //grab all boundaries from all the logs, move the map to see those markers
        const bounds = new L.LatLngBounds(
            logs.map((log) => [log.latitude, log.longitude])
        );
        map.fitBounds(bounds);

    }, [map]);
    return null
}

//a pin for every log 

export default function TravelLogMap({ logs }: TravelLogMapProps) {

    // on mount invalidate the map

    // console.log('process.env.REACT_APP_MAPBOX_ACCESS_TOKEN', process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)
    console.log('logs', logs)
    return (

        <MapContainer style={{ height: "100vh", width: "100vw", zIndex: 0 }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <InvalidateSize logs={logs} />
            {logs.map((log) => (
                <Marker
                    icon={currentMarkerIcon}
                    key={log._id.toString()}
                    position={[log.latitude, log.longitude]}
                >
                    <Popup offset={[0, -10]}>
                        <p className="text-lg font-bold">{log.title}</p>
                        <div className="flex justify-center items-center">
                            <img alt={log.title} src={log.image} className="w-96" />
                        </div>
                        <p>{log.description}</p>
                        <p className="text-sm italic">
                            {new Date(log.visitDate.toString()).toLocaleDateString()}
                        </p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>

    )
}