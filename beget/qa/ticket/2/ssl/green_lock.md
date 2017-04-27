---
css_class: ssl
section: ssl
question: there is no green lock on my site
---
Здравствуйте. Для появления "зелёного замка" необходимо чтобы абсолютно все файлы вашего сайта загружались по HTTPS.

Также формы, если таковые есть, тоже должны передавать информацию по https. Проще говоря аттрибут "action" тэга "&lt;form&gt;" должен начинаться с "https://" 

Для определения проблемных файлов и/или форм вы можете перейти на ваш сайт, нажать F12, перейти во вкладку Console (Консоль) и перезагрузить страничку.

В случае wordpress вы можете попробовать установить плагин, который должен решить данную проблему - https://wordpress.org/plugins/ssl-insecure-content-fixer/ . Либо же воспользоваться инструкцией на https://managewp.com/wordpress-ssl-settings-and-how-to-resolve-mixed-content-warnings (Option 1).

В случае OpenCart вам следует проверить файлы &#96;config.php&#96; и &#96;admin/config.php&#96;: значение констант &#96;HTTPS_SERVER&#96; и &#96;HTTPS_CATALOG&#96; должны начинаться на &#96;https://&#96;

В случае Drupal7 вам нужно отредактировать файл sites/default/settings.php (переменная $base_url) и сбросить кэш (&#96;`drush cc all`&#96; для Drupal7 и &#96;`drush cache-rebuild`&#96; для Drupal8)