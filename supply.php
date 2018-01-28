<?php 

 $data = json_decode(file_get_contents('php://input'), true);
 if (isset($data)) {
   $mailto = 'a2gil@mail.ru';
   $mailfrom = $mailto;
   $subject = 'Заявка, сотрудничество PLETENEV';
   $message = 'Сообщения с сайта ';
   $success_url = '';
   $error_url = '';
   $error = '';
   $eol = "\r\n";
   $br = "<br>";
   $boundary = md5(uniqid(time()));

   $header  = 'From: '.strip_tags($mailfrom).$eol;
   $header .= 'Reply-To: '.strip_tags($mailfrom).$eol;
   $header .= 'MIME-Version: 1.0'.$eol;
   $header .= 'Content-Type: text/html; charset=UTF-8'.$eol;

   $message .= $br;
   $message .= "IP Address : ";
   $message .= $_SERVER['REMOTE_ADDR'];
   $message .= $br;
   $logdata = '';

   $name = '';
   $phone = '';
   
   if (isset($data['name'])) {
    $name = $data['name'];

  }

  if (isset($data['phone'])) {
    $phone = $data['phone'];
  }
    
   $message .= 'Имя: '.$name.$br.'Телефон: '.$phone;

   $body = '<html><body>'.$br.stripslashes($message).$br.'</body></html>';

   if ($mailto != '')
   {
     mail($mailto, $subject, $body);
   }
   exit;
 };
?>