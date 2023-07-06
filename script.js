$(document).ready(function() {
    function updateTableData(data) {
        $("#revenueToday").text(data.revenueToday);
        $("#revenueYesterday").text(data.revenueYesterday);
        $("#cashToday").text(data.cashToday);
        $("#cashYesterday").text(data.cashYesterday);
        $("#nonCashToday").text(data.nonCashToday);
        $("#nonCashYesterday").text(data.nonCashYesterday);
        $("#creditCardsToday").text(data.creditCardsToday);
        $("#creditCardsYesterday").text(data.creditCardsYesterday);
        $("#avgCheckToday").text(data.avgCheckToday);
        $("#avgCheckYesterday").text(data.avgCheckYesterday);
        $("#avgGuestToday").text(data.avgGuestToday);
        $("#avgGuestYesterday").text(data.avgGuestYesterday);
        $("#removalsAfterToday").text(data.removalsAfterToday);
        $("#removalsAfterYesterday").text(data.removalsAfterYesterday);
        $("#removalsBeforeToday").text(data.removalsBeforeToday);
        $("#removalsBeforeYesterday").text(data.removalsBeforeYesterday);
        $("#numChecksToday").text(data.numChecksToday);
        $("#numChecksYesterday").text(data.numChecksYesterday);
        $("#numGuestsToday").text(data.numGuestsToday);
        $("#numGuestsYesterday").text(data.numGuestsYesterday);
        $("#dayOfWeekToday").text(data.dayOfWeekToday);
        $("#dayOfWeekYesterday").text(data.dayOfWeekYesterday);
    }

function drawChart(data) {
    var chartData = [
        ['День', 'Выручка'],
        ['Этот день', parseFloat(data.revenueToday)],
        ['Вчера', parseFloat(data.revenueYesterday)]
    ];

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {
        var data = google.visualization.arrayToDataTable(chartData);

        var options = {
            title: 'Выручка',
            vAxis: { title: 'руб' },
            hAxis: { title: 'День' },
            seriesType: 'line',
            series: { 0: { type: 'line' } }
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart'));
        chart.draw(data, options);
    }
}




    function updateData() {
        $.ajax({
            url: 'get_data.php',
            dataType: 'json',
            success: function(data) {
                updateTableData(data);
                drawChart(data);
            },
            error: function() {
                console.log('Ошибка при загрузке данных');
            }
        });
    }

    setInterval(updateData, 5000);

    updateData();
});
