<?php

    $to = "speedcarsrental@gmail.com";
	$carname = $_REQUEST['carname'];
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $subject = $_REQUEST['subject'];
    $phone = $_REQUEST['phone'];
    $message = $_REQUEST['message'];

    $headers = "From: $from";
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $subject = "You have a Request from your Speed Car Rental Website.";

    $logo = 'https://speedcarsrental.com/images/logo-dark.png';
    $link = 'https://speedcarsrental.com';

	$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
	$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
	$body .= "</td></tr></thead><tbody>";
	$body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$subject}</td></tr>";
	$body .= "<tr><td style='border:none;'><strong>Name:</strong> {$name}</td></tr>";
	$body .= "<tr><td style='border:none;'><strong>Email:</strong> {$from}</td>";
	$body .= "</tr>";
	$body .= "<tr><td style='border:none;'><strong>car:</strong> {$carname}</td></tr>";
	
	$body .= "<tr><td style='border:none;'><strong>Phone:</strong> {$phone}</td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'><strong>Message:</strong> {$message}</td></tr>";
	$body .= "</tbody></table>";
	$body .= "</body></html>";

    $send = mail($to, $subject, $body, $headers);
    header("Location: https://speedcarsrental.com/thank-you.html");

?>