// Custom Select
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
   selElmnt = x[i].getElementsByTagName("select")[0];
   a = document.createElement("div");
   a.setAttribute("class", "select-selected");
   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
   x[i].appendChild(a);
   b = document.createElement("ul");
   b.setAttribute("class", "select-items select-hide");
   for (j = 1; j < selElmnt.length; j++) {
      c = document.createElement("li");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
         var y, i, k, s, h;
         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
         h = this.parentNode.previousSibling;
         for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
               s.selectedIndex = i;
               h.innerHTML = this.innerHTML;
               y = this.parentNode.getElementsByClassName("same-as-selected");
               for (k = 0; k < y.length; k++) {
               y[k].removeAttribute("class");
               }
               this.setAttribute("class", "same-as-selected");
               break;
            }
         }
         h.click();
      });
      b.appendChild(c);
   }
   x[i].appendChild(b);
   a.addEventListener("click", function(e) {
         e.stopPropagation();
         closeAllSelect(this);
         this.nextSibling.classList.toggle("select-hide");
         this.classList.toggle("select-arrow-active");
      });
}
function closeAllSelect(elmnt) {
   var x, y, i, arrNo = [];
   x = document.getElementsByClassName("select-items");
   y = document.getElementsByClassName("select-selected");
   for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
         arrNo.push(i)
      } else {
         y[i].classList.remove("select-arrow-active");
      }
   }
   for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
         x[i].classList.add("select-hide");
      }
   }
}
document.addEventListener("click", closeAllSelect);
// End Custom Select

// Disable App - Sweet alert
$(function(){
   $('.switch-btn').click(function() {
      if( $(this).is(':checked')) {
         $('.switch-btn').prop( "checked", false );
         swal("Are you sure you want to enable this app?", {
            icon: "warning",
            buttons: ["Cancel", "Enable"],
         });

         $('.swal-button--confirm').click(function(){
            $('.grayscale').fadeOut('fast'); 
            $('.switch-btn').prop( "checked", true );
            $('.app-switch').removeClass('error-border'); 
         });
         
      } else {
         $('.switch-btn').prop( "checked", true );
         swal("Are you sure you want to disable this app?", {
            icon: "warning",
            buttons: ["Cancel", "Disable"],
            // dangerMode: true,
         });

         $('.swal-button--confirm').click(function() {
            $('.switch-btn').prop( "checked", false );
            $('.grayscale').fadeIn('fast');    
            $('.app-switch').addClass('error-border');  
         });
      }
   }); 
});


// Delete - Sweet alert
$(function(){

   var deleteBtn = $("[rel='deleteBanner']");

   $(deleteBtn).click(function() {
      swal({
         icon: "error",
         text: "Are you sure you want to delete the banner?",       
         buttons: ["Cancel", "Yes, delete it!"],
         dangerMode: true,
      })
      .then((willDelete) => {
         if (willDelete) {
            swal({
               //  title: 'Banner deleted',
               icon: "success",
               text: "Burado na boss!!!",        
               timer: 1500
            });
         }
      });
   }); 
});


// Sortable
$( function() {
   $( ".sortable" ).sortable({
      containment: 'parent',
      tolerance: 'pointer',
      placeholder: "ui-state-highlight",
   });
});
// End Sortable


$(function(){

});