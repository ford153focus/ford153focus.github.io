---
css_class: mysql
section: mysql
question: tmp_table_size & max_heap_table_size (Bitrix)
---
Переменные &#96;`tmp_table_size`&#96; и &#96;`max_heap_table_size`&#96; можно изменить отредактировав файл добавив в файл bitrix/php_interface/after_connect.php следующие строки

&#96;&#96;&#96;php <br>
$DB->Query('SET SESSION tmp_table_size = 9999999999');
$DB->Query('SET SESSION max_heap_table_size = 9999999999');
<br>&#96;&#96;&#96;