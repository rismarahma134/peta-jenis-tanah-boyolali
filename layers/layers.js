var wms_layers = [];


        var lyr_acara5_0 = new ol.layer.Tile({
            'title': 'acara 5',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kecamatan_1 = new ol.format.GeoJSON();
var features_Kecamatan_1 = format_Kecamatan_1.readFeatures(json_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_1.addFeatures(features_Kecamatan_1);
var lyr_Kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_1, 
                style: style_Kecamatan_1,
                popuplayertitle: 'Kecamatan',
                interactive: true,
    title: 'Kecamatan<br />\
    <img src="styles/legend/Kecamatan_1_0.png" /> Ampel<br />\
    <img src="styles/legend/Kecamatan_1_1.png" /> Andong<br />\
    <img src="styles/legend/Kecamatan_1_2.png" /> Banyudono<br />\
    <img src="styles/legend/Kecamatan_1_3.png" /> Boyolali<br />\
    <img src="styles/legend/Kecamatan_1_4.png" /> Cepogo<br />\
    <img src="styles/legend/Kecamatan_1_5.png" /> Gladagsari<br />\
    <img src="styles/legend/Kecamatan_1_6.png" /> Juwangi<br />\
    <img src="styles/legend/Kecamatan_1_7.png" /> Karanggede<br />\
    <img src="styles/legend/Kecamatan_1_8.png" /> Kemusu<br />\
    <img src="styles/legend/Kecamatan_1_9.png" /> Klego<br />\
    <img src="styles/legend/Kecamatan_1_10.png" /> Mojosongo<br />\
    <img src="styles/legend/Kecamatan_1_11.png" /> Musuk<br />\
    <img src="styles/legend/Kecamatan_1_12.png" /> Ngemplak<br />\
    <img src="styles/legend/Kecamatan_1_13.png" /> Nogosari<br />\
    <img src="styles/legend/Kecamatan_1_14.png" /> Sambi<br />\
    <img src="styles/legend/Kecamatan_1_15.png" /> Sawit<br />\
    <img src="styles/legend/Kecamatan_1_16.png" /> Selo<br />\
    <img src="styles/legend/Kecamatan_1_17.png" /> Simo<br />\
    <img src="styles/legend/Kecamatan_1_18.png" /> Teras<br />\
    <img src="styles/legend/Kecamatan_1_19.png" /> Wonosegoro<br />' });
var format_JenisTanahBoyolali_2 = new ol.format.GeoJSON();
var features_JenisTanahBoyolali_2 = format_JenisTanahBoyolali_2.readFeatures(json_JenisTanahBoyolali_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenisTanahBoyolali_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenisTanahBoyolali_2.addFeatures(features_JenisTanahBoyolali_2);
var lyr_JenisTanahBoyolali_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JenisTanahBoyolali_2, 
                style: style_JenisTanahBoyolali_2,
                popuplayertitle: ' Jenis Tanah Boyolali',
                interactive: true,
    title: ' Jenis Tanah Boyolali<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_0.png" /> Andosol Coklat<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_1.png" /> Andosol Coklat dan Latosol Coklat Kemerahan<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_2.png" /> Asosiasi Litosol dan Grumusol Kelabu Tua<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_3.png" /> Asosiasi Mediteran Coklat Litosol<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_4.png" /> Grumusol Kelabu<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_5.png" /> Grumusol Kelabu Tua<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_6.png" /> Kompleks Andosol Kelabu Tua dan Litosol<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_7.png" /> Kompleks Grumusol Kelabu dan Litosol<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_8.png" /> Kompleks Regosol Kelabu dan Grumusol Kelabu Tua<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_9.png" /> Kompleks Regosol Kelabu dan Litosol<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_10.png" /> Mediteran Merah Tua dan Regosol<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_11.png" /> Regosol Coklat Kekelabuan<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_12.png" /> Regosol Kelabu<br />\
    <img src="styles/legend/JenisTanahBoyolali_2_13.png" /> <br />' });

lyr_acara5_0.setVisible(true);lyr_Kecamatan_1.setVisible(true);lyr_JenisTanahBoyolali_2.setVisible(true);
var layersList = [lyr_acara5_0,lyr_Kecamatan_1,lyr_JenisTanahBoyolali_2];
lyr_Kecamatan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JenisTanahBoyolali_2.set('fieldAliases', {'fid': 'fid', 'MACAM_TANA': 'MACAM_TANA', 'BAHAN_INDU': 'BAHAN_INDU', 'FISIOGRAFI': 'FISIOGRAFI', 'SKOR_JT': 'SKOR_JT', });
lyr_Kecamatan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JenisTanahBoyolali_2.set('fieldImages', {'fid': 'TextEdit', 'MACAM_TANA': 'TextEdit', 'BAHAN_INDU': 'TextEdit', 'FISIOGRAFI': 'TextEdit', 'SKOR_JT': 'Range', });
lyr_Kecamatan_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_JenisTanahBoyolali_2.set('fieldLabels', {'fid': 'no label', 'MACAM_TANA': 'no label', 'BAHAN_INDU': 'no label', 'FISIOGRAFI': 'no label', 'SKOR_JT': 'no label', });
lyr_JenisTanahBoyolali_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});