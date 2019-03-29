<?php
    $firstName = $_POST['name'];
    $surname = $_POST['surname'];
    $user_email = $_POST['email'];
    $user_need = $_POST['need'];
    $user_message = $_POST['message'];

    $email_from = 'testemail@gmail.com';
    $email_subject = "Test Submission";
    $email_body = "First Name: $firstName.\n".
                  "Last Name: $surname.\n".
                  "Email: $user_email.\n".
                  "User Need: $user_need.\n".
                  "User Message: $user_message.\n".

    $to_email = "saambell1996@gmail.com";
    $headers = "From: $email_from \r\n";

    $secretKey = "6LcdKJoUAAAAAEipoH-YAqkBDm680wkmh0Hm4HHQ";
    $responseKey = $_POST['g-recaptcha-response'];
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey";

    $response = file_get_contents($url);
    $response = json_decode($response);

    if ($response->success)
    {
        mail($to_email,$email_subject,$email_body,$headers);
        echo "Message sent Succesfully";
    }

    else 
    {
        echo "Invalid Captcha, Please Try Again!";
    }
    ?>