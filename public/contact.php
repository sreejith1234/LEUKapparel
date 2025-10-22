<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Simple rate limiting
    session_start();
    $now = time();
    if (isset($_SESSION['last_email']) && ($now - $_SESSION['last_email']) < 60) {
        echo json_encode(['success' => false, 'error' => 'Please wait 1 minute between submissions']);
        exit;
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = filter_var($input['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
    $phone = filter_var($input['phone'], FILTER_SANITIZE_STRING);
    $message = filter_var($input['message'], FILTER_SANITIZE_STRING);
    
    if (!$email) {
        echo json_encode(['success' => false, 'error' => 'Invalid email']);
        exit;
    }
    
    $to = 'sreejithaibi@gmail.com';
    $subject = 'Contact Form: ' . $name;
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        $_SESSION['last_email'] = $now;
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Failed to send']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid method']);
}
?>