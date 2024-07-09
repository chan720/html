<p>These are the data from Forms using JavaScript</p>
<script>
    const x = document.forms["Forms1"];
    let text = "";
    for (let i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
</script>