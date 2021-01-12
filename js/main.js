
    var header_area = document.getElementById('headers');

    function headerEnter_highlighted_color() {
        header_area.style.backgroundColor = "rgb(113, 35, 35)";
        header_area.style.boxShadow = " 1px 1px 3px darkgray"
    }
    function headerOut() {
        header_area.style.backgroundColor = "white"
        header_area.style.boxShadow = "none"
    }
    
    function hightColorColor() {
        var Color_color = document.getElementsByTagName('td');

        Color_color.style.Color = 'red'
    }