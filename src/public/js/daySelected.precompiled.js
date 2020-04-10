(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['daySelected.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"week-daySelected-hours-hour\">\r\n    <div class=\"week-daySelected-hours-hour-time\">\r\n        <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":5,"column":14},"end":{"line":5,"column":22}}}) : helper)))
    + "</span>\r\n        <img src=\"icons/tiempo/"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"noche") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":31},"end":{"line":6,"column":57}}})) != null ? stack1 : "")
    + alias4(((helper = (helper = lookupProperty(helpers,"iconoTime") || (depth0 != null ? lookupProperty(depth0,"iconoTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconoTime","hash":{},"data":data,"loc":{"start":{"line":6,"column":57},"end":{"line":6,"column":70}}}) : helper)))
    + ".svg\" alt=\"\" class=\"todayWeatherIcon\">\r\n    </div>\r\n    <div class=\"week-daySelected-hours-temp\">\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"temp") || (depth0 != null ? lookupProperty(depth0,"temp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"temp","hash":{},"data":data,"loc":{"start":{"line":9,"column":11},"end":{"line":9,"column":19}}}) : helper)))
    + "°</p>\r\n    </div>\r\n    <div class=\"week-daySelected-hours-desc\">\r\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"descTemp") || (depth0 != null ? lookupProperty(depth0,"descTemp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"descTemp","hash":{},"data":data,"loc":{"start":{"line":12,"column":11},"end":{"line":12,"column":23}}}) : helper)))
    + "</p>\r\n        <p>Sensación T. "
    + alias4(((helper = (helper = lookupProperty(helpers,"sensacionTermica") || (depth0 != null ? lookupProperty(depth0,"sensacionTermica") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sensacionTermica","hash":{},"data":data,"loc":{"start":{"line":13,"column":24},"end":{"line":13,"column":44}}}) : helper)))
    + "°</p>\r\n    </div>\r\n    <div class=\"week-daySelected-hours-vientoUV\">\r\n        <img src=\"icons/viento/"
    + alias4(((helper = (helper = lookupProperty(helpers,"iconoViento") || (depth0 != null ? lookupProperty(depth0,"iconoViento") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconoViento","hash":{},"data":data,"loc":{"start":{"line":16,"column":31},"end":{"line":16,"column":46}}}) : helper)))
    + ".png\" alt=\"\" class=\"todayWeatherIcon\">\r\n        <div class=\"week-daySelected-hours-vientoUV-desc\">\r\n            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"vientoDireccion") || (depth0 != null ? lookupProperty(depth0,"vientoDireccion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vientoDireccion","hash":{},"data":data,"loc":{"start":{"line":18,"column":15},"end":{"line":18,"column":34}}}) : helper)))
    + "</p>\r\n            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"vientoKmh") || (depth0 != null ? lookupProperty(depth0,"vientoKmh") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vientoKmh","hash":{},"data":data,"loc":{"start":{"line":19,"column":15},"end":{"line":19,"column":28}}}) : helper)))
    + " - "
    + alias4(((helper = (helper = lookupProperty(helpers,"vientoRachas") || (depth0 != null ? lookupProperty(depth0,"vientoRachas") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vientoRachas","hash":{},"data":data,"loc":{"start":{"line":19,"column":31},"end":{"line":19,"column":47}}}) : helper)))
    + " km/h</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"week-daySelected-hours-vientoUV\">\r\n        <i class=\"icon-sun\"></i>\r\n        <div class=\"week-daySelected-hours-vientoUV-desc\">\r\n            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"uv") || (depth0 != null ? lookupProperty(depth0,"uv") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uv","hash":{},"data":data,"loc":{"start":{"line":25,"column":15},"end":{"line":25,"column":21}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"nivel") || (depth0 != null ? lookupProperty(depth0,"nivel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nivel","hash":{},"data":data,"loc":{"start":{"line":25,"column":22},"end":{"line":25,"column":31}}}) : helper)))
    + "</p>\r\n            <p>FPS: "
    + alias4(((helper = (helper = lookupProperty(helpers,"fpsMin") || (depth0 != null ? lookupProperty(depth0,"fpsMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fpsMin","hash":{},"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":26,"column":30}}}) : helper)))
    + " / "
    + alias4(((helper = (helper = lookupProperty(helpers,"fpsMax") || (depth0 != null ? lookupProperty(depth0,"fpsMax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fpsMax","hash":{},"data":data,"loc":{"start":{"line":26,"column":33},"end":{"line":26,"column":43}}}) : helper)))
    + "</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"week-daySelected-hours-more\">\r\n        <input type=\"checkbox\" name=\"btnDetalle\" class=\"week-daySelected-hours-more-checkbox\" id=\"btnDetalle"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":30,"column":108},"end":{"line":30,"column":117}}}) : helper)))
    + "\"\r\n            data-id="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":31,"column":20},"end":{"line":31,"column":29}}}) : helper)))
    + ">\r\n        <label class=\"week-daySelected-hours-more-label "
    + alias4(((helper = (helper = lookupProperty(helpers,"isTouch") || (depth0 != null ? lookupProperty(depth0,"isTouch") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"isTouch","hash":{},"data":data,"loc":{"start":{"line":32,"column":56},"end":{"line":32,"column":67}}}) : helper)))
    + "\" for=\"btnDetalle"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":32,"column":84},"end":{"line":32,"column":93}}}) : helper)))
    + "\">+</label>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div id=\"detalleHora"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":39,"column":20},"end":{"line":39,"column":29}}}) : helper)))
    + "\" class=\"detalleHora\">\r\n\r\n\r\n\r\n<div class=\"detalleHora-col1\">\r\n    <div class=\"detalleHora-col1-nombre\">\r\n        <div class=\"\"><span>Índice UV</span></div>\r\n        <div class=\"\">\r\n            <span>Exp. máxima</span>\r\n        </div>\r\n        <div class=\"\"><span>Humedad</span></div>\r\n        <div class=\"\"><span>Nubosidad</span></div>\r\n        <div class=\"\"><span>Viento - Medio</span></div>\r\n        <div class=\"\"><span>Presión</span></div>\r\n    </div>\r\n    <div class=\"detalleHora-col1-datos\">\r\n        <div class=\"\">\r\n            <img src=\"icons/detalle/spf.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"uv") || (depth0 != null ? lookupProperty(depth0,"uv") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uv","hash":{},"data":data,"loc":{"start":{"line":57,"column":18},"end":{"line":57,"column":24}}}) : helper)))
    + " FPS: "
    + alias4(((helper = (helper = lookupProperty(helpers,"fpsMin") || (depth0 != null ? lookupProperty(depth0,"fpsMin") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fpsMin","hash":{},"data":data,"loc":{"start":{"line":57,"column":30},"end":{"line":57,"column":40}}}) : helper)))
    + " - "
    + alias4(((helper = (helper = lookupProperty(helpers,"fpsMax") || (depth0 != null ? lookupProperty(depth0,"fpsMax") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fpsMax","hash":{},"data":data,"loc":{"start":{"line":57,"column":43},"end":{"line":57,"column":53}}}) : helper)))
    + "</span>\r\n        </div>\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/uv.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"tiempoSinProteccion") || (depth0 != null ? lookupProperty(depth0,"tiempoSinProteccion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tiempoSinProteccion","hash":{},"data":data,"loc":{"start":{"line":61,"column":18},"end":{"line":61,"column":41}}}) : helper)))
    + " minutos</span>\r\n        </div>\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/humidity.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"humedad") || (depth0 != null ? lookupProperty(depth0,"humedad") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"humedad","hash":{},"data":data,"loc":{"start":{"line":65,"column":18},"end":{"line":65,"column":29}}}) : helper)))
    + "%</span>\r\n        </div>\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/nubosidad.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"nubosidad") || (depth0 != null ? lookupProperty(depth0,"nubosidad") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nubosidad","hash":{},"data":data,"loc":{"start":{"line":69,"column":18},"end":{"line":69,"column":31}}}) : helper)))
    + "</span>\r\n        </div>\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/wind.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"vientoKmh") || (depth0 != null ? lookupProperty(depth0,"vientoKmh") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vientoKmh","hash":{},"data":data,"loc":{"start":{"line":73,"column":18},"end":{"line":73,"column":31}}}) : helper)))
    + " km/h</span>\r\n        </div>\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/presionazul.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"presion") || (depth0 != null ? lookupProperty(depth0,"presion") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"presion","hash":{},"data":data,"loc":{"start":{"line":77,"column":18},"end":{"line":77,"column":29}}}) : helper)))
    + " mb</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"detalleHora-col2\">\r\n    <div class=\"detalleHora-col2-nombre\">\r\n        <div class=\"\"><span>Altura de las nubes</span></div>\r\n        <div class=\"\"><span>Sensación Térmica</span>\r\n        </div>\r\n        <div class=\"\"><span>Punto de rocío</span></div>\r\n        <div class=\"\"><span>Niebla</span></div>\r\n        <div class=\"\"><span>Viento - Rachas</span></div>\r\n        <div class=\"\"><span>Cuota Nieve</span></div>\r\n    </div>\r\n    <div class=\"detalleHora-col2-datos\">\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/binoculars.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"alturaNubes") || (depth0 != null ? lookupProperty(depth0,"alturaNubes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alturaNubes","hash":{},"data":data,"loc":{"start":{"line":95,"column":18},"end":{"line":95,"column":33}}}) : helper)))
    + " metros</span>\r\n        </div>\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/sensaciontermica.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"sensacionTermica") || (depth0 != null ? lookupProperty(depth0,"sensacionTermica") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sensacionTermica","hash":{},"data":data,"loc":{"start":{"line":99,"column":18},"end":{"line":99,"column":38}}}) : helper)))
    + " °C</span>\r\n        </div>\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/puntorocio.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"puntoRocio") || (depth0 != null ? lookupProperty(depth0,"puntoRocio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"puntoRocio","hash":{},"data":data,"loc":{"start":{"line":103,"column":18},"end":{"line":103,"column":32}}}) : helper)))
    + " °C </span>\r\n        </div>\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/niebla.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"niebla") || (depth0 != null ? lookupProperty(depth0,"niebla") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"niebla","hash":{},"data":data,"loc":{"start":{"line":107,"column":18},"end":{"line":107,"column":28}}}) : helper)))
    + "</span>\r\n        </div>\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/vientorachas.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"vientoRachas") || (depth0 != null ? lookupProperty(depth0,"vientoRachas") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vientoRachas","hash":{},"data":data,"loc":{"start":{"line":111,"column":18},"end":{"line":111,"column":34}}}) : helper)))
    + " km/h</span>\r\n        </div>\r\n        <div class=\"\">\r\n               <img src=\"icons/detalle/snow.svg\" alt=\"\">\r\n            <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"cuotaNieve") || (depth0 != null ? lookupProperty(depth0,"cuotaNieve") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cuotaNieve","hash":{},"data":data,"loc":{"start":{"line":115,"column":18},"end":{"line":115,"column":32}}}) : helper)))
    + " m</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "noche/";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h2 class=\"week-daySelected-hours-title\"><span class=\"week-daySelected-hours-title-spanTitle\">El tiempo en </span><span class=\"week-daySelected-hours-title-spanCity\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"hour") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"city") : stack1), depth0))
    + "</span> <span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"hour") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"nombreDia") : stack1), depth0))
    + " "
    + alias2(((helper = (helper = lookupProperty(helpers,"fecha") || (depth0 != null ? lookupProperty(depth0,"fecha") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"fecha","hash":{},"data":data,"loc":{"start":{"line":1,"column":216},"end":{"line":1,"column":225}}}) : helper)))
    + "</span></h2>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"hour") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":125,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();