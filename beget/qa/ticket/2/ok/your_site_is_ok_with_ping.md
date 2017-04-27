---
css_class: ok
section: we're ok (client-side troubles)
question: your site is ok (with ping)
---
Здравствуйте. Как я могу видеть, на данный момент SITENAME функционирует нормально. Уточните, актуальна ли проблема в данный момент? Если актуальна - уточните текст ошибки и, по возможности, приложите скриншот.

Также приложите, пожалуйста, вывод следующих команд:
<br>&nbsp;- &#96;`ping SITENAME -n 10`&#96; для Windows или &#96;`ping -c 10 SITENAME`&#96; для MacOS / OS X
<br>&nbsp;- &#96;`tracert SITENAME`&#96; для Windows или &#96;`traceroute SITENAME`&#96; для MacOS / OS X
<br>&nbsp;- &#96;`nslookup -type=a SITENAME 8.8.8.8`&#96; для Windows или &#96;`nslookup SITENAME 8.8.8.8`&#96; для MacOS / OS X
<br>&nbsp;- &#96;`nslookup -type=a SITENAME`&#96; для Windows или &#96;`nslookup SITENAME`&#96; для MacOS / OS X
<br>&nbsp;- &#96;`telnet SITENAME 80`&#96; для Windows и для MacOS / OS X
<br><br>
Данные команды необходимо выполнять в командной строке Windows http://windows.microsoft.com/ru-ru/windows/command-prompt-faq#1TC=windows-8 , если вы используете Windows. Или приложении "Терминал", если у вас используется система MacOS X.
<br><br>
Также у нас есть статья с подробным описанием этих действий на https://beget.com/articles/ping_tracert_site . Если команда &#96;`telnet`&#96; у Вас отсутствует, ее необходимо установить в компонентах Windows - http://windata.ru/windows-7/nachinayushim-7/vklyuchenie-ili-otklyuchenie-komponentov-windows-7/ .
<br><br>
Также скопируйте содержимое файла &#96;`hosts`&#96; - в помощь у нас есть соответствующая статья по ссылке https://beget.com/articles/hosts_file .
<br><br>
Также сообщите Ваш внешний IP адрес. IP можно узнать на сайте http://myip.ru
