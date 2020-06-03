var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var item = JSON.parse(this.responseText);
    Bokeh.embed.embed_item(item, "{{ .Get 0 }}");
  }
};
xmlhttp.open("GET", "{{ $item.RelPermalink }}", true);
xmlhttp.send(); 