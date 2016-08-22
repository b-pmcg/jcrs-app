<?php 
header("HTTP/1.1 301 Moved Permanently");
if ($_SERVER['HTTP_HOST'] === 'localhost') {
	header("Location: http://" . $_SERVER['HTTP_HOST'] . "/jcrs/");
} else {
	header("Location: https://" . $_SERVER['HTTP_HOST'] . "/jcrs/");
}
?>

