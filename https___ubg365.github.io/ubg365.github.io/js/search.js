// for search bar
var divs = document.getElementsByClassName('link')
var texts = document.getElementsByClassName('toplay-info')

$("#run-input-search").keyup(function() {
    var val = $.trim(this.value);
    //val = val.split(" ").join("\\ ");

    if (val === ""){
      for( i=0; i< divs.length; i++)
      {
        divs[i].style.display = '';}}
    else {
      val = val.toLowerCase();
      for( i=0; i< divs.length; i++)
      {
        compare = texts[i].textContent.toLowerCase();
        //console.log(String(texts[i].textContent).includes(val))
        //console.log(String(texts[i].textContent).toLowerCase())
        if (compare.includes(val) || val == ''){
          divs[i].style =""
        } 
        else{
          //divs[i].setAttribute("style","width:0px","height:0px;");
          divs[i].style.display = 'none';
        }
        
      }
        //$('img').hide();
        //$(".gamediv div[alt*=" + val + " i]").show();

    }
});
