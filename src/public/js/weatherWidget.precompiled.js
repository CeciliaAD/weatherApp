(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['weatherWidget.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div id="
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":88,"column":16},"end":{"line":88,"column":24}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"selected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":25},"end":{"line":88,"column":81}}})) != null ? stack1 : "")
    + " class=\""
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"isTouch") : depths[1]), depth0))
    + "\">\r\n            <p class=\"bold700\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nombreDia") || (depth0 != null ? lookupProperty(depth0,"nombreDia") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombreDia","hash":{},"data":data,"loc":{"start":{"line":89,"column":31},"end":{"line":89,"column":44}}}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"diaAndMes") || (depth0 != null ? lookupProperty(depth0,"diaAndMes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"diaAndMes","hash":{},"data":data,"loc":{"start":{"line":90,"column":15},"end":{"line":90,"column":28}}}) : helper)))
    + "</p>\r\n            <img src=\"icons/tiempo/"
    + alias4(((helper = (helper = lookupProperty(helpers,"tiempoIcono") || (depth0 != null ? lookupProperty(depth0,"tiempoIcono") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tiempoIcono","hash":{},"data":data,"loc":{"start":{"line":91,"column":35},"end":{"line":91,"column":50}}}) : helper)))
    + ".svg\" alt=\"\" class=\"weekWeatherIcon\">\r\n            <img class=\"week-weather-paraguas\" src=\"icons/lluvia/paraguas.png\" alt=\"\">\r\n            <p> "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"lluvia") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":93,"column":16},"end":{"line":96,"column":23}}})) != null ? stack1 : "")
    + "            </p>\r\n\r\n            <p class=\"week-weather-rangoTemperatura bold\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"temperaturaMaxima") || (depth0 != null ? lookupProperty(depth0,"temperaturaMaxima") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"temperaturaMaxima","hash":{},"data":data,"loc":{"start":{"line":99,"column":58},"end":{"line":99,"column":79}}}) : helper)))
    + "° / "
    + alias4(((helper = (helper = lookupProperty(helpers,"temperaturaMinima") || (depth0 != null ? lookupProperty(depth0,"temperaturaMinima") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"temperaturaMinima","hash":{},"data":data,"loc":{"start":{"line":99,"column":83},"end":{"line":99,"column":104}}}) : helper)))
    + "°</p>\r\n            <img src=\"icons/viento/"
    + alias4(((helper = (helper = lookupProperty(helpers,"vientoIcono") || (depth0 != null ? lookupProperty(depth0,"vientoIcono") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vientoIcono","hash":{},"data":data,"loc":{"start":{"line":100,"column":35},"end":{"line":100,"column":50}}}) : helper)))
    + ".png\" alt=\"\" class=\"weekWindIcon\">\r\n            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"vientoKmh") || (depth0 != null ? lookupProperty(depth0,"vientoKmh") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vientoKmh","hash":{},"data":data,"loc":{"start":{"line":101,"column":15},"end":{"line":101,"column":28}}}) : helper)))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"vientoRachas") || (depth0 != null ? lookupProperty(depth0,"vientoRachas") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vientoRachas","hash":{},"data":data,"loc":{"start":{"line":101,"column":29},"end":{"line":101,"column":45}}}) : helper)))
    + "</p>\r\n            <p>km/h</p>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " class=\"selected "
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"isTouch") : depths[1]), depth0))
    + "\" ";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n                "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"lluvia") || (depth0 != null ? lookupProperty(depth0,"lluvia") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"lluvia","hash":{},"data":data,"loc":{"start":{"line":94,"column":16},"end":{"line":94,"column":26}}}) : helper)))
    + " mm\r\n                ";
},"6":function(container,depth0,helpers,partials,data) {
    return " -\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"weather\">\r\n    <div class=\"today-weather\">\r\n        <p class=\"today-weather-city block\">El Tiempo en <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"city") : stack1), depth0))
    + "</span></p>\r\n        <div class=\"today-weahter-time\">\r\n            <p class=\"time bold500\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"horaLocal") : stack1), depth0))
    + ":"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"minutos") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"estadoActual") : stack1), depth0))
    + "\r\n            </p>\r\n            <span class=\"icons\">\r\n                <i id=\"heart\" class=\"icon-heart-unselected\"></i>\r\n                <i id=\"share\" class=\"icon-share\">\r\n                    <div class=\"socialIcons\">\r\n                        <i id=\"facebook\" class=\"icon-social-facebook\"></i>\r\n                        <i id=\"twitter\" class=\"icon-social-twitter\"></i>\r\n                        <i id=\"linkedin\" class=\"icon-social-linkedin\"></i>\r\n                        <i id=\"pinterest\" class=\"icon-social-pinterest\"></i>\r\n                        <i id=\"mail\" class=\"icon-social-mail\"></i>\r\n                        <i id=\"tumblr\" class=\"icon-social-tumblr\"></i>\r\n                        <i id=\"xing\" class=\"icon-social-xing\"></i>\r\n                        <i id=\"print\" class=\"icon-social-print\"></i>\r\n                    </div>\r\n                </i>\r\n\r\n            </span>\r\n        </div>\r\n\r\n\r\n        <div class=\"container-today\">\r\n            <div class=\"container-today-tiempoTemperatura\">\r\n                <img src=\"icons/tiempo/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"indexIconoHoraActual") : stack1), depth0))
    + ".svg\" alt=\"\" class=\"todayWeatherIcon\">\r\n                <div class=\"today-weather-container-temperatura\">\r\n                    <p class=\"today-weather-temperatura block\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"temperaturaActual") : stack1), depth0))
    + "<sup\r\n                            class=\"supBig\">o</sup>\r\n                    </p>\r\n                    <p class=\"today-weather-sensacionTermica\">Sensación de\r\n                        <span class=\"bold700\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"sensacionTermica") : stack1), depth0))
    + "</span>\r\n                        <sup class=\"supSmall bold\">o</sup></span></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"today-weather-container-precipitaciones\">\r\n                <div class=\"today-weather-container-precipitaciones-lluvia flexWrap bottom05\">\r\n                    <img class=\"paraguas\" src=\"icons/lluvia/paraguas.png\" alt=\"\">\r\n                    <div class=\"porcentaje-container\">\r\n                        <p class=\"porcentaje block\">Cantidad</p>\r\n                        <p class=\"cantidad block\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"rainCantidad") : stack1), depth0))
    + " mm</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"today-weather-container-precipitaciones-luna flexWrap\">\r\n                    <img class=\"luna\" src=\"icons/luna/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"iconoLuna") : stack1), depth0))
    + ".png\" alt=\"\">\r\n                    <div class=\"porcentaje-container\">\r\n                        <p class=\"porcentaje block\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"tipoLuna") : stack1), depth0))
    + "</p>\r\n                        <p class=\"cantidad block\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"descripcionLuna") : stack1), depth0))
    + "</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"durante-container\">\r\n                <button class=\"btnDetalle\">i</button>\r\n                <div class=\"durante-container-mayorParte\">\r\n                    <p class=\"durante block bold subrayado\">La mayor parte del día</p>\r\n                    <p class=\"duranteblock \">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"estadoMayorParteDelDia") : stack1), depth0))
    + "</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"salidaPuesta\">\r\n            <div class=\"salidaPuesta-sol\">\r\n                <p>Salida Sol<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"solSalida") : stack1), depth0))
    + "</span> </p>\r\n                <p>Mediodía<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"solMediodia") : stack1), depth0))
    + "</span></p>\r\n                <p>Puesta Sol<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"solPuesta") : stack1), depth0))
    + "</span></p>\r\n                <p>Duración Día<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"duracionDia") : stack1), depth0))
    + "</span></p>\r\n            </div>\r\n            <div class=\"salidaPuesta-luna\">\r\n                <p>Salida Luna<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"lunaSalida") : stack1), depth0))
    + "</span></p>\r\n                <p>Puesta Luna<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"lunaPuesta") : stack1), depth0))
    + "</span></p>\r\n                <p>Duración Noche<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"weatherToday") : depth0)) != null ? lookupProperty(stack1,"duracionNoche") : stack1), depth0))
    + "</span></p>\r\n            </div>\r\n        </div>\r\n        <i class=\"copy\">*Datos obtenidos de tiempo.com</i>\r\n    </div>\r\n\r\n    <article id=\"graficas\" class=\"graficas\">\r\n        <canvas id=\"grafica\"></canvas>\r\n    </article>\r\n\r\n    <aticle id=\"week-weather\" class=\"week-weather\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"weatherWeek") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":8},"end":{"line":104,"column":17}}})) != null ? stack1 : "")
    + "    </aticle>\r\n\r\n    <article id=\"week-daySelected-hours\" class=\"week-daySelected-hours\">\r\n\r\n    </article>\r\n\r\n</section>";
},"useData":true,"useDepths":true});
})();