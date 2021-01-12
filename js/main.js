
    var header_area = document.getElementById('headers');

    function headerEnter_highlighted_color() {
        header_area.style.backgroundColor = "white";
        header_area.style.boxShadow = "none"
    }
    function headerOut() {
        header_area.style.backgroundColor = "white"
        
        header_area.style.boxShadow = "2px 2px 10px black"
    }
    
    function hightColorColor() {
        var Color_color = document.getElementsByTagName('td');

        Color_color.style.Color = 'red'
        
    }