---
css_class: sites
section: sites
question: php.ini access
---
Здравствуйте. 

Вы можете изменять параметры PHP с помощью файла .htaccess, который расположен в директории вашего сайта.

Если нужно изменить значения, которые не изменяются в .htaccess - вы можете настройки интерпретатора PHP на https://cp.beget.ru/sites , кликнув на иконку РНР напротив нужного домена.

Если же вам нужен полный доступ к php.ini - на той же страничке вы можете переключить нужный сайт в режим PHP-CGI, тогда файл php.ini будет считываться из %директория сайта%/public_html/cgi-bin/php.ini. Однако просим учесть, что php-cgi работает несколько медленнее mod_php и лишён модулей кэширования OPCache/XCache.