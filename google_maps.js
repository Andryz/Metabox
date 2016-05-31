 (function(){
 var myCenter=new google.maps.LatLng(50.56629001,30.8147552);
        function initialize() {
            var mapProp = {
                center:myCenter,
                zoom:10,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
          var marker = new google.maps.Marker({
              position:myCenter,
              icon:'content/images/contact.png',
              //animation:google.maps.Animation.BOUNCE
            });
          marker.setMap(map);
          var contentString='<div id="content_string">'+'<h6>'+'<i class="fa fa-map-marker"></i> '+' METABOX'+'</h6>'+'</div>';
          var infowindow = new google.maps.InfoWindow({
              content:contentString
            });
          infowindow.open(map,marker);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
})();
