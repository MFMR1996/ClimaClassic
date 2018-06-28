function img_select_temp(temp)
{
	var img;
	if(temp<14)
		img='assets/backCDMX/snowflake.png';
	else if((temp>=14)&&(temp<=25))
		img='assets/backCDMX/cloudsun.png';
	else if(temp>25)
		img='assets/backCDMX/sun.png';
		
	return img;
	
}
function init(wetherData) {
	var imgBgRandom = Math.floor((Math.random() * 3) + 1);
	switch(imgBgRandom) {
		case 1:
			var bgFile = 'assets/backCDMX/bg1.jpg'
			break;
		/*case 2:
			var bgFile = 'assets/backCDMX/turismo_23.jpg'
			break;
		case 3:
			var bgFile = 'assets/backCDMX/bellas.jpg'
			break;*/
		default:
			var bgFile = 'assets/backCDMX/facebook.jpg'
			break;
	};


	var win_principal = Titanium.UI.createWindow({
		backgroundImage: bgFile,
		width: '100%',
		height: Titanium.UI.FILL,
		layout: 'vertical'
	});


	/**
	*	CLIMA
	**/
	var v_clima = Ti.UI.createView({
		// backgroundColor: 'red',
		width: '100%',
		height: '75%',
		layout: 'vertical'
	});

	// -------- Temperatura --------
	var v_temp = Ti.UI.createView({
		// backgroundColor: 'yellow',
		width: '100%',
		height: '60%'
	});

	var lb_temp_data = Ti.UI.createLabel({
		text: wetherData.temp,
		bottom: '-10dp',
		color: '#FFFFFF',
		font: {
			fontSize: '120dp'
		},
		textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER
	});

	v_temp.add(lb_temp_data);

	// -------- Viento Humedad -------- 
	var v_air_data = Ti.UI.createView({
		// backgroundColor: 'pink',
		width: '100%',
		height: '10%',
		layout: 'absolute'
	});

	var v_wrap_air_data = Ti.UI.createView({
		// backgroundColor: 'green',
		width: Titanium.UI.SIZE,
		height: Titanium.UI.SIZE,
		layout: 'horizontal'
	});	

	var img_air_ico = Ti.UI.createImageView({
		height: '14dp',
		image:'assets/backCDMX/wind.png',
	});

	var lb_air = Ti.UI.createLabel({
		text: wetherData.air,
		color: '#FFFFFF',
		right: '10dp',
		font: {
			fontSize: '20dp'
		}
	});

	var img_hum_ico = Ti.UI.createImageView({
		height: '14dp',
		image: 'assets/backCDMX/drop.png',
	});

	var lb_hum = Ti.UI.createLabel({
		text: wetherData.hum,
		color: '#FFFFFF',
		font: {
			fontSize: '20dp'
		}
	});

	v_wrap_air_data.add(img_air_ico);
	v_wrap_air_data.add(lb_air);
	v_wrap_air_data.add(img_hum_ico);
	v_wrap_air_data.add(lb_hum);

	v_air_data.add(v_wrap_air_data);

	// -------- Lugar --------
	var v_place = Ti.UI.createView({
		// backgroundColor: 'purple',
		width: '100%',
		height: '30%'
	});

	var lb_place = Ti.UI.createLabel({
		text: wetherData.place,
		color: '#FFFFFF',
		bottom: '10dp',
		font: {
			fontSize: '20dp'
		}
	});

	v_place.add(lb_place);



	v_clima.add(v_temp);
	v_clima.add(v_air_data);
	v_clima.add(v_place);



	/**
	*	PRONOSTICO
	**/
	var v_pronostico = Ti.UI.createView({
		backgroundColor: '#000000',
		opacity: 0.5,
		width: '100%',
		height: '25%',
		layout:'horizontal'
	});
	
//-------------Temperatura maxima--------------------		
	var v_max_temp=Ti.UI.createView({
		width:'20%',
		height:'100%',
		layout:'vertical'
	});
	
	var lb_max_temp=Ti.UI.createLabel({
		text:'max\ntemp',
		color: '#FFFFFF',
		opacity: 1.0,
		top: '10dp',
		font: {
			fontSize: '20dp'
		}
	});
	
	var img_max_temp = Ti.UI.createImageView({
		height: '35%',
		image:img_select_temp(wetherData.max_temp)
	});
	
	var lb_max_temp_data=Ti.UI.createLabel({
		text:wetherData.max_temp+'°',
		color: '#FFFFFF',
		font: {
			fontSize: '15dp'
		}
	});
	
	v_max_temp.add(lb_max_temp);
	v_max_temp.add(img_max_temp);
	v_max_temp.add(lb_max_temp_data);
	
//-------------------Temperatura minima---------------
		
	var v_min_temp=Ti.UI.createView({
		width:'20%',
		height:'100%',
		layout:'vertical'
	});
	
	var lb_min_temp=Ti.UI.createLabel({
		text:'min\ntemp',
		color: '#FFFFFF',
		top: '10dp',
		font: {
			fontSize: '20dp'
		}
	});
	
	var img_min_temp = Ti.UI.createImageView({
		height: '35%',
		image:img_select_temp(wetherData.min_temp),
	});
	
	var lb_min_temp_data=Ti.UI.createLabel({
		text:wetherData.min_temp+'°',
		color: '#FFFFFF',
		font: {
			fontSize: '15dp'
		}
	});
	
	v_min_temp.add(lb_min_temp);
	v_min_temp.add(img_min_temp);
	v_min_temp.add(lb_min_temp_data);
	
	
//-------------------Temperatura promedio---------------	
	var v_temp_prom=Ti.UI.createView({
		width:'20%',
		height:'100%',
		layout:'vertical'
	});
	
	var lb_temp_prom=Ti.UI.createLabel({
		text:'temp\nprom',
		color: '#FFFFFF',
		top: '10dp',
		font: {
			fontSize: '20dp'
		}
	});
	
	var img_temp_prom = Ti.UI.createImageView({
		height: '35%',
		image:img_select_temp(wetherData.temp_prom),
	});
	
	var lb_temp_prom_data=Ti.UI.createLabel({
		text:wetherData.temp_prom+'°',
		color: '#FFFFFF',
		font: {
			fontSize: '15dp'
		}
	});
	
	v_temp_prom.add(lb_temp_prom);
	v_temp_prom.add(img_temp_prom);
	v_temp_prom.add(lb_temp_prom_data);

//-------------------Precipitacion---------------
	
	var img_select_preci;
	
	if(wetherData.precipitacion<=1)
		img_select_preci='assets/backCDMX/cloud.png';
	else if((wetherData.precipitacion>1)&&(wetherData.precipitacion<100))
		img_select_preci='assets/backCDMX/rain.png';
	else if(wetherData.precipitacion>=100)
		img_select_preci='assets/backCDMX/hail.png';
		
	var v_precipitacion=Ti.UI.createView({
		width:'20%',
		height:'100%',
		layout:'vertical'
	});
	
	var lb_precipitacion=Ti.UI.createLabel({
		text:'precip\n',
		color: '#FFFFFF',
		top: '10dp',
		font: {
			fontSize: '20dp'
		}
	});
	
	var img_prep = Ti.UI.createImageView({
		height: '35%',
		image:img_select_preci
	});

		
	var lb_precipitacion_data=Ti.UI.createLabel({
		text:wetherData.precipitacion,
		color: '#FFFFFF',
		font: {
			fontSize: '15dp'
		}
	});
	
	v_precipitacion.add(lb_precipitacion);
	v_precipitacion.add(img_prep);
	v_precipitacion.add(lb_precipitacion_data);

//-------------------Radiacion UV---------------
	var v_rad_uv=Ti.UI.createView({
		width:'20%',
		height:'100%',
		layout:'vertical'
	});
	
	var lb_ray_uv=Ti.UI.createLabel({
		text:'ray\nuv',
		color: '#FFFFFF',
		top: '10dp',
		font: {
			fontSize: '20dp'
		}
	});
	
	var img_ray_uv = Ti.UI.createImageView({
		height: '35%',
		image:'assets/backCDMX/uv-rays-of-sun.png'
	});

	var lb_ray_uv_data=Ti.UI.createLabel({
		text:wetherData.ray_uv,
		color: '#FFFFFF',
		font: {
			fontSize: '15dp'
		}
	});
	
	v_rad_uv.add(lb_ray_uv);
	v_rad_uv.add(img_ray_uv);
	v_rad_uv.add(lb_ray_uv_data);
	
	v_pronostico.add(v_max_temp);
	v_pronostico.add(v_min_temp);
	v_pronostico.add(v_temp_prom);
	v_pronostico.add(v_precipitacion);
	v_pronostico.add(v_rad_uv);
	/**
	*	PRINCIPAL
	**/

	win_principal.add(v_clima);
	win_principal.add(v_pronostico);

	if (Ti.Platform.osname = 'android') {
		win_principal.open({
			theme: 'materialThemeNoAB'
		});
	} else {
		win_principal.open();
	}
	
};

// var aux = "22" + "º";


var url = "http://api.apixu.com/v1/forecast.json?key=8a75c0e69e4a410a872150718181904&q=Mexico";
//"http://api.apixu.com/v1/current.json?key=4c1af01122744ff0938220636181804&q=Mexico";




var client = Ti.Network.createHTTPClient({
    onload : function(e) {
        var datos = this.responseText;
        try {
        	consultaAireCDMX = JSON.parse(datos);
        	datos = null;
            var temp = Math.round(consultaAireCDMX.current.temp_c);
            temp = temp + 'º';
            var place = consultaAireCDMX.location.name + ", " + consultaAireCDMX.location.country;
            var hum = consultaAireCDMX.current.humidity;
            var air = consultaAireCDMX.current.wind_kph + consultaAireCDMX.current.wind_dir;
            var max_temp=consultaAireCDMX.forecast.forecastday[0].day.maxtemp_c;
            var min_temp=consultaAireCDMX.forecast.forecastday[0].day.mintemp_c;
            var temp_prom=consultaAireCDMX.forecast.forecastday[0].day.avgtemp_c;
            var precipitacion=consultaAireCDMX.forecast.forecastday[0].day.totalprecip_mm;
            var ray_uv=consultaAireCDMX.forecast.forecastday[0].day.uv;
            var jsonWetherData = {
            	temp : temp,
            	place: place,
            	hum: hum,
            	air: air,
            	max_temp:max_temp,
            	min_temp:min_temp,
            	temp_prom:temp_prom,
            	precipitacion:precipitacion,
            	ray_uv:ray_uv
            };

            init(jsonWetherData);
            
        } catch(e_2) {
        	var a = Ti.UI.createAlertDialog({
				title : 'SmartCDMX',
				ok : 'Aceptar',
				message : 'Verifique su conexión a internet'
			});
			a.show();
        };
        
    },
    onerror : function(e) {
        
        Ti.API.debug(e.error);
        var a = Titanium.UI.createAlertDialog({
            title : 'SmartCDMX',
            ok : 'Aceptar',
            message : 'Verifique su conexión a internet.'
        });
        a.show();

    },
    timeout : 10000
});

client.open("GET", url);
client.send();