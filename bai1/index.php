<h1>Chuỗi trong php</h1>
<?php
$name = 'Võ Duy Tuấn';
$age = 23;
$info = "I'm bad boy"; //" "
$info = 'My name is $name I\'m bad boy'; // ''
$siteName = 'ANH LẬP TRÌNH VIÊN';
$siteUrl = 'https://anhlaptrinhvien.net';

echo $name; echo "<hr />";
echo $age;echo "<hr />";
echo $info;echo "<hr />";


//heredoc
$id= 1;
$html = <<< "HTML"
<h1 id="$id">$siteName</h1>
HTML;

echo $html;

$html2 = <<< 'HTML2'
<h1>$siteName</h1>
<form id="$id">
    <input type="text">
    <input type="button" value="gửi">
    
</form>
HTML2 ;

echo $html2;
?>