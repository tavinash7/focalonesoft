<?php 

if ($_POST["emailAddress"]<>'') {
    $from = $_POST['emailAddress']; 
    $subject = $_POST['name'];
    $message = $_POST['name'] . " email address" .$_POST['emailAddress'] . " Message:" . "\n\n" . $_POST['message'];
    $to = "anudeep39@gmail.com";
    $headers = "From:" . $from;
    $headers  .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Mail Sent.";
    }
    else {
        echo "failed";
    }
}

?>