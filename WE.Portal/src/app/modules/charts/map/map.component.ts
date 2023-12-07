import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import 'leaflet-draw';
import { WidgetInfoService } from 'src/app/services/widget.services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnChanges {
  private map?: L.Map;
  @Input() centroid: L.LatLngExpression = [42.3601, -71.0589];
  @Input() markers?: L.LatLngBoundsLiteral;
  @Input() device_id?: string;

  @Input() devices?: any[];
  @Input() geometry?: string | null | undefined;

  @Output() drawPolygon = new EventEmitter<string>();
  @ViewChild('command') myDiv?: ElementRef;

  checked: boolean = true;

  onDeviceLayer: any;
  offDeviceLayer: any;

  oldPolygonLayer: any;

  notfound = false;
  constructor(
    private widgetInfoService: WidgetInfoService,
    private router: Router
  ) {}
  toggleFunction(bool: boolean) {
    alert(bool);
  }
  private initMap(): void {
    if (this.markers?.length) {
      let devices = this.devices;
      let bounds = new L.LatLngBounds(this.markers!);

      if (this.device_id) {
        devices = devices?.filter((i) => i.source_id == this.device_id);
        this.markers = devices
          ?.filter((i) => i.gt_position?.lat && i.gt_position?.lat != 0)
          .map((i) => {
            return [i.gt_position?.lat, i.gt_position?.lng];
          });
        this.notfound = devices && devices.length > 0 ? false : true;

        bounds = new L.LatLngBounds(this.markers!);
      }

      if (this.geometry) {
        var oldPolygon = JSON.parse(this.geometry);

        var layer = L.geoJSON(oldPolygon);

        this.oldPolygonLayer = layer;
      }

      this.map = L.map('map', {
        center: bounds?.getCenter(),
      });
      var greenIcon = L.icon({
        iconUrl: '../../../../assets/images/marker-green.png',
        iconSize: [15, 24],
        iconAnchor: [17, 46],
      });

      var redIcon = L.icon({
        iconUrl: '../../../../assets/images/marker-red2.png',
        iconSize: [15, 24],
        iconAnchor: [17, 46],
      });
      const tiles = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        // 'https://{s}.tile2.openstreetmap.org/{z}/{x}/{y}.png',
        //'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
        //'https://vector.hereapi.com/v2/vectortiles/base/mc/{z}/{x}/{y}/omv?apikey=aRrXMN6rNeDunujbIgCqESvkttKlk4Pp2j5N7xTp4Ek',
        {
          maxZoom: 18,
          minZoom: 10,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      );

      this.map.fitBounds(bounds);
      // create 5 random jitteries and add them to map
      // this.devices
      //   ?.map((x) =>
      //     L.marker([x.gt_position!.lat!, x.gt_position!.lng!], {
      //       icon: x.operation_status == 'On' ? greenIcon : redIcon,
      //     })
      //       .bindTooltip(x.name)
      //       .on('click', (e) => {
      //         const panel = this.widgetInfoService.getPanelByDevice(
      //           x.source_id
      //         );
      //         const urls = this.router.url.split('/');

      //         if (urls[1] == 'apps') {
      //           const appName = urls[2];
      //           this.router.navigate([
      //             'apps/' + appName + '/panel/' + panel?.id,
      //           ]);
      //         }
      //       })
      //   )
      //   .forEach((x) => x.addTo(this.map!));

      this.widgetInfoService.currentOnDeviceLayer.subscribe((status) => {
        if (status) this.showOnMarkerLayer();
      });

      this.widgetInfoService.currentOffDeviceLayer.subscribe((status) => {
        if (status) this.showOffMarkerLayer();
      });

      this.offDeviceLayer = L.layerGroup(
        devices
          ?.filter((i) => i.operation_status != 'On')
          ?.map((x) =>
            L.marker([x.gt_position!.lat!, x.gt_position!.lng!], {
              icon: x.operation_status == 'On' ? greenIcon : redIcon,
            })
              .bindTooltip(x.name)
              .on('click', (e: any) => {
                const panel = this.widgetInfoService.getPanelByDevice(
                  x.source_id
                );
                const urls = this.router.url.split('/');

                if (urls[1] == 'apps') {
                  const appName = urls[2];
                  this.router.navigate([
                    'apps/' + appName + '/panel/' + panel?.id,
                  ]);
                }
              })
          )
      ).addTo(this.map);

      this.onDeviceLayer = L.layerGroup(
        devices
          ?.filter((i) => i.operation_status == 'On')
          ?.map((x) =>
            L.marker([x.gt_position!.lat!, x.gt_position!.lng!], {
              icon: x.operation_status == 'On' ? greenIcon : redIcon,
            })
              .bindTooltip(x.name)
              .on('click', (e: any) => {
                const panel = this.widgetInfoService.getPanelByDevice(
                  x.source_id
                );
                const urls = this.router.url.split('/');

                if (urls[1] == 'apps') {
                  const appName = urls[2];
                  this.router.navigate([
                    'apps/' + appName + '/panel/' + panel?.id,
                  ]);
                }
              })
          )
      ).addTo(this.map);

      // this.markers!.map((x) =>
      //   L.marker(x as L.LatLngExpression, { icon: redIcon }).bindTooltip(
      //     'name1'
      //   )
      // ).forEach((x) => x.addTo(this.map!));
      // Initialise the FeatureGroup to store editable layers

      tiles.addTo(this.map);
      var overLayMaps: any = {
        'Device OFF': this.offDeviceLayer,
        'Device On': this.onDeviceLayer,
      };
      var baseMaps = {};
      var options: any = { collapsed: false };

      L.control.layers(baseMaps, overLayMaps, options).addTo(this.map);

      if (this.device_id) {
        var editableLayers = new L.FeatureGroup();
        const drawPluginOptions: L.Control.DrawConstructorOptions = {
          position: 'topright',
          draw: {
            polygon: {
              allowIntersection: false, // Restricts shapes to simple polygons
              drawError: {
                color: '#e1e100', // Color the shape will turn when intersects
                message: "<strong>Oh snap!<strong> you can't draw that!", // Message that will show when intersect
              },
              shapeOptions: {
                color: '#97009c',
              },
            },
            // disable toolbar item by setting it to false
            polyline: false,
            circle: false, // Turns off this drawing tool
            rectangle: false,
            marker: false,
            circlemarker: false,
          },
          edit: {
            featureGroup: editableLayers, //REQUIRED!!
            remove: false,
          },
        };

        // Initialise the draw control and pass it the FeatureGroup of editable layers
        var drawControl = new L.Control.Draw(drawPluginOptions);

        this.map.addControl(drawControl);

        this.map.addLayer(editableLayers);

        var seft = this;

        this.map.on(L.Draw.Event.CREATED, function (e: any) {
          seft.removeOldPolygonLayer();

          var type = e.layerType,
            layer = e.layer;
          editableLayers.addLayer(layer);
          const rectangle = layer.getLatLngs();

          var geoJSONData = layer.toGeoJSON();

          var geoJSONString = JSON.stringify(geoJSONData.geometry);

          seft.drawPolygon.emit(geoJSONString);

          layer.on('edit', function (event: any) {
            var content = '';
            if (type == 'circle') {
              content =
                'Circle with : <ul><li> Radius : ' +
                layer.getRadius() +
                '</li>' +
                '<li> Center : ' +
                layer.getLatLng() +
                ' </li></ul>';
            } else if (type === 'polygon') {
              content =
                ' Polygone with : ' + layer.getLatLngs()[0].length + ' nodes';
            }

            layer.bindPopup(content).openPopup();
          });
        });

        if (this.oldPolygonLayer) {
          this.oldPolygonLayer.addTo(this.map);
        }
      }
    }
  }
  handleCommand() {
    alert('Clicked, checked = ' + this.checked);
  }

  // markerOnClick(id: string) {
  //   const ref = this.dialogservice.open(DeviceFormComponent, {
  //     data: { id: id },
  //     header: 'Edit Device',
  //     width: '50%',
  //     position: 'top',
  //     maximizable: true,
  //   });
  // }

  ngOnChanges(changes: SimpleChanges): void {
    this.initMap();
  }

  showOnMarkerLayer() {
    if (!this.onDeviceLayer || !this.offDeviceLayer) return;
    this.onDeviceLayer.eachLayer((layer: any) => {
      this.map?.addLayer(layer);
    });

    this.offDeviceLayer.eachLayer((layer: any) => {
      this.map?.removeLayer(layer);
    });
  }

  showOffMarkerLayer() {
    if (!this.onDeviceLayer || !this.offDeviceLayer) return;
    this.offDeviceLayer.eachLayer((layer: any) => {
      this.map?.addLayer(layer);
    });

    this.onDeviceLayer.eachLayer((layer: any) => {
      this.map?.removeLayer(layer);
    });
  }

  removeOldPolygonLayer() {
    if (this.oldPolygonLayer) {
      this.oldPolygonLayer.eachLayer((layer: any) => {
        this.map?.removeLayer(layer);
      });
    }
  }
}
