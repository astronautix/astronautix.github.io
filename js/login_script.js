/**
 * @Author: Antoine Tavant <tavant>
 * @Date:   2020-06-12T12:02:03+02:00
 * @Email:  antoine.tavant@polytechnique.edu
 * @Last modified by:   tavant
 * @Last modified time: 2020-06-12T12:02:30+02:00
 * @License: This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * @Copyright: Copyright (C) 2020 Antoine Tavant
 */



 "use strict";


 function loadPage(pwd) {

   var hash= pwd;
   hash= Sha1.hash(pwd);
   var url= hash ;

   $.ajax({
     url : url,
     dataType : "html",
     success : function(data) {

       window.location.assign(window.location.protocol +"//"+ window.location.host + "/" + url);

     },
     error : function(xhr, ajaxOptions, thrownError) {


       parent.location.hash= hash;

       //$("#wrongPassword").show();
       $("#password").attr("placeholder","wrong password");
       $("#password").val("");
     }
   });
 }


 $("#loginbutton").on("click", function() {
   loadPage($("#password").val());
 });
 $("#password").keypress(function(e) {
   if (e.which == 13) {

     loadPage($("#password").val());
   }
 });
 $("#password").focus();
