<?php
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  // Set up the email
  $to = 'kanhakushwah87@gmail.com';
  $subject = 'New form submission';
  $headers = "From: $email\r\nReply-To: $email\r\n";
  
  // Build the email body
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  
  // Send the email
  mail($to, $subject, $body, $headers);
  
  // Redirect to a thank you page
  header('Location: thank-you.html');
?>
