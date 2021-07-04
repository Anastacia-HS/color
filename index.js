function changeColor() {
	var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('character').style.background = color;
}