 <?php

$recepient = "info@moss.by"; //почтовый ящик, на который будут приходить заявки
$sitename = "Бюро MOSS.BY";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");