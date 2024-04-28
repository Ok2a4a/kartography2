var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_highway_track_highway_path_2 = new ol.format.GeoJSON();
var features_highway_track_highway_path_2 = format_highway_track_highway_path_2.readFeatures(json_highway_track_highway_path_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_track_highway_path_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_track_highway_path_2.addFeatures(features_highway_track_highway_path_2);
var lyr_highway_track_highway_path_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_track_highway_path_2, 
                style: style_highway_track_highway_path_2,
                popuplayertitle: "highway_track_highway_path",
                interactive: true,
                title: '<img src="styles/legend/highway_track_highway_path_2.png" /> highway_track_highway_path'
            });
var format_shop_supermarket_shop_convenience_3 = new ol.format.GeoJSON();
var features_shop_supermarket_shop_convenience_3 = format_shop_supermarket_shop_convenience_3.readFeatures(json_shop_supermarket_shop_convenience_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shop_supermarket_shop_convenience_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shop_supermarket_shop_convenience_3.addFeatures(features_shop_supermarket_shop_convenience_3);
var lyr_shop_supermarket_shop_convenience_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shop_supermarket_shop_convenience_3, 
                style: style_shop_supermarket_shop_convenience_3,
                popuplayertitle: "shop_supermarket_shop_convenience",
                interactive: true,
                title: '<img src="styles/legend/shop_supermarket_shop_convenience_3.png" /> shop_supermarket_shop_convenience'
            });
var format_highway_motorway_highway_motorway_link_4 = new ol.format.GeoJSON();
var features_highway_motorway_highway_motorway_link_4 = format_highway_motorway_highway_motorway_link_4.readFeatures(json_highway_motorway_highway_motorway_link_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_motorway_highway_motorway_link_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_motorway_highway_motorway_link_4.addFeatures(features_highway_motorway_highway_motorway_link_4);
var lyr_highway_motorway_highway_motorway_link_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_motorway_highway_motorway_link_4, 
                style: style_highway_motorway_highway_motorway_link_4,
                popuplayertitle: "highway_motorway_highway_motorway_link",
                interactive: true,
                title: '<img src="styles/legend/highway_motorway_highway_motorway_link_4.png" /> highway_motorway_highway_motorway_link'
            });
var format_building_house_5 = new ol.format.GeoJSON();
var features_building_house_5 = format_building_house_5.readFeatures(json_building_house_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_5.addFeatures(features_building_house_5);
var lyr_building_house_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_5, 
                style: style_building_house_5,
                popuplayertitle: "building_house",
                interactive: true,
                title: '<img src="styles/legend/building_house_5.png" /> building_house'
            });
var format_building_house_6 = new ol.format.GeoJSON();
var features_building_house_6 = format_building_house_6.readFeatures(json_building_house_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_6.addFeatures(features_building_house_6);
var lyr_building_house_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_6, 
                style: style_building_house_6,
                popuplayertitle: "building_house",
                interactive: true,
                title: '<img src="styles/legend/building_house_6.png" /> building_house'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_highway_track_highway_path_2.setVisible(true);lyr_shop_supermarket_shop_convenience_3.setVisible(true);lyr_highway_motorway_highway_motorway_link_4.setVisible(true);lyr_building_house_5.setVisible(true);lyr_building_house_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_highway_track_highway_path_2,lyr_shop_supermarket_shop_convenience_3,lyr_highway_motorway_highway_motorway_link_4,lyr_building_house_5,lyr_building_house_6];
lyr_highway_track_highway_path_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'bicycle': 'bicycle', 'foot': 'foot', 'footway': 'footway', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', 'access': 'access', 'incline': 'incline', });
lyr_shop_supermarket_shop_convenience_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'shop': 'shop', 'beauty': 'beauty', 'opening_hours': 'opening_hours', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'name:ru': 'name:ru', 'name': 'name', });
lyr_highway_motorway_highway_motorway_link_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ford': 'ford', 'depth': 'depth', 'ref': 'ref', 'old_ref': 'old_ref', 'oneway': 'oneway', 'surface': 'surface', 'smoothness': 'smoothness', 'foot': 'foot', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', });
lyr_building_house_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'level': 'level', 'entrance': 'entrance', 'door': 'door', 'access': 'access', });
lyr_building_house_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'roof:shape': 'roof:shape', 'roof:levels': 'roof:levels', 'roof:colour': 'roof:colour', 'building:levels': 'building:levels', 'building:colour': 'building:colour', 'type': 'type', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'adress': 'adress', });
lyr_highway_track_highway_path_2.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'bicycle': 'TextEdit', 'foot': 'TextEdit', 'footway': 'TextEdit', 'surface': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'access': 'TextEdit', 'incline': 'TextEdit', });
lyr_shop_supermarket_shop_convenience_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'shop': '', 'beauty': '', 'opening_hours': '', 'addr:postcode': '', 'addr:housenumber': '', 'name:ru': '', 'name': '', });
lyr_highway_motorway_highway_motorway_link_4.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'ford': 'TextEdit', 'depth': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'foot': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'name': 'TextEdit', });
lyr_building_house_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'wheelchair': '', 'level': '', 'entrance': '', 'door': '', 'access': '', });
lyr_building_house_6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'roof:shape': 'TextEdit', 'roof:levels': 'TextEdit', 'roof:colour': 'TextEdit', 'building:levels': 'TextEdit', 'building:colour': 'TextEdit', 'type': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'adress': '', });
lyr_highway_track_highway_path_2.set('fieldLabels', {'fid': 'header label - visible with data', 'full_id': 'header label - visible with data', 'osm_id': 'header label - visible with data', 'osm_type': 'header label - visible with data', 'highway': 'header label - visible with data', 'bicycle': 'header label - visible with data', 'foot': 'header label - visible with data', 'footway': 'header label - visible with data', 'surface': 'header label - visible with data', 'layer': 'header label - visible with data', 'bridge': 'header label - visible with data', 'access': 'header label - visible with data', 'incline': 'header label - visible with data', });
lyr_shop_supermarket_shop_convenience_3.set('fieldLabels', {'fid': 'header label - visible with data', 'full_id': 'header label - visible with data', 'osm_id': 'header label - visible with data', 'osm_type': 'header label - visible with data', 'shop': 'header label - visible with data', 'beauty': 'header label - visible with data', 'opening_hours': 'header label - visible with data', 'addr:postcode': 'header label - visible with data', 'addr:housenumber': 'header label - visible with data', 'name:ru': 'header label - visible with data', 'name': 'header label - visible with data', });
lyr_highway_motorway_highway_motorway_link_4.set('fieldLabels', {'fid': 'header label - visible with data', 'full_id': 'header label - visible with data', 'osm_id': 'header label - visible with data', 'osm_type': 'inline label - visible with data', 'highway': 'header label - visible with data', 'ford': 'header label - visible with data', 'depth': 'header label - visible with data', 'ref': 'header label - visible with data', 'old_ref': 'header label - visible with data', 'oneway': 'header label - visible with data', 'surface': 'header label - visible with data', 'smoothness': 'header label - visible with data', 'foot': 'header label - visible with data', 'name:etymology:wikidata': 'header label - visible with data', 'name': 'header label - visible with data', });
lyr_building_house_5.set('fieldLabels', {'fid': 'header label - visible with data', 'full_id': 'header label - visible with data', 'osm_id': 'header label - visible with data', 'osm_type': 'header label - visible with data', 'wheelchair': 'header label - visible with data', 'level': 'header label - visible with data', 'entrance': 'header label - visible with data', 'door': 'header label - visible with data', 'access': 'header label - visible with data', });
lyr_building_house_6.set('fieldLabels', {'fid': 'header label - visible with data', 'full_id': 'header label - visible with data', 'osm_id': 'header label - visible with data', 'osm_type': 'header label - visible with data', 'building': 'header label - visible with data', 'name': 'header label - always visible', 'roof:shape': 'header label - visible with data', 'roof:levels': 'header label - visible with data', 'roof:colour': 'header label - visible with data', 'building:levels': 'header label - visible with data', 'building:colour': 'header label - visible with data', 'type': 'header label - visible with data', 'addr:street': 'header label - visible with data', 'addr:postcode': 'header label - visible with data', 'addr:housenumber': 'header label - visible with data', 'addr:city': 'header label - visible with data', 'adress': 'header label - visible with data', });
lyr_building_house_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});