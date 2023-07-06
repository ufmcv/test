<?php
$servername = "localhost";
$username = "sale4_usr";
$password = "ZGRMy0Fu3WoP4D70";
$dbname = "sale4";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM revenue_data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data["revenueToday"] = $row["revenue_today"];
        $data["revenueYesterday"] = $row["revenue_yesterday"];
        $data["cashToday"] = $row["cash_today"];
        $data["cashYesterday"] = $row["cash_yesterday"];
        $data["nonCashToday"] = $row["non_cash_today"];
        $data["nonCashYesterday"] = $row["non_cash_yesterday"];
        $data["creditCardsToday"] = $row["credit_cards_today"];
        $data["creditCardsYesterday"] = $row["credit_cards_yesterday"];
        $data["avgCheckToday"] = $row["avg_check_today"];
        $data["avgCheckYesterday"] = $row["avg_check_yesterday"];
        $data["avgGuestToday"] = $row["avg_guest_today"];
        $data["avgGuestYesterday"] = $row["avg_guest_yesterday"];
        $data["removalsAfterToday"] = $row["removals_after_today"];
        $data["removalsAfterYesterday"] = $row["removals_after_yesterday"];
        $data["removalsBeforeToday"] = $row["removals_before_today"];
        $data["removalsBeforeYesterday"] = $row["removals_before_yesterday"];
        $data["numChecksToday"] = $row["num_checks_today"];
        $data["numChecksYesterday"] = $row["num_checks_yesterday"];
        $data["numGuestsToday"] = $row["num_guests_today"];
        $data["numGuestsYesterday"] = $row["num_guests_yesterday"];
        $data["dayOfWeekToday"] = $row["day_of_week_today"];
        $data["dayOfWeekYesterday"] = $row["day_of_week_yesterday"];
    }

    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo "No data available";
}

$conn->close();
?>
