<?php 
 include_once   "forma.php";

 $data = json_decode(file_get_contents('php://input'), true);
 if (isset($data)) {
   $customerEmail = GetEmail($data);
   $mailto = 'a2gil@mail.ru';
   $mailfrom = isset($customerEmail) ? $customerEmail : $mailto;
   $subject = 'Заказ PLETENEV';
   $message = 'Сообщения с сайта ';
   $success_url = '';
   $error_url = '';
   $error = '';
   $eol = "\n";
   $br = "<br>";
   $boundary = md5(uniqid(time()));

   $header  = 'From: '.$mailfrom.$eol;
   $header .= 'Reply-To: '.$mailfrom.$eol;
   $header .= 'MIME-Version: 1.0'.$eol;
   $header .= 'Content-Type: text/html; charset=ISO-8859-1'.$eol;
   $header .= 'X-Mailer: PHP v'.phpversion().$eol;

   $message .= $br;
   $message .= "IP Address : ";
   $message .= $_SERVER['REMOTE_ADDR'];
   $message .= $br;
   $logdata = '';
   $message .= GetMessage($data);

   $body = '<html><body>'.$br.stripslashes($message).$br.'</body></html>';

   if ($mailto != '')
   {
     mail($mailto, $subject, $body);
   }

   //header('Location:spasibo.html');
   exit;
 };
?>