function get_profit() {
    var total = parseInt(document.getElementById("Paid").value);
    var val2 = parseInt(document.getElementById("Resell").value);
    // to make sure that they are numbers
    if (!total) { total = 0; }
    if (!val2) { val2 = 0; }
    var ansD = document.getElementById("profitresult");
    ansD.value = val2 - total;
}