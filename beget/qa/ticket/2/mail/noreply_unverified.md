---
css_class: mail
section: mail
question: noreply@unverified.beget.ru
---
Здравствуйте. Во избежание подстановки в заголовке письма в поле отправителя (FROM) всегда должен фигугрировать домен с которого ведётся отправка. Это делается в настройках вашей CMS или в коде вашего сайта. 

Механизм подстановки был введен как мера по борьбе с рассылкой спама с наших серверов, попаданием ваших писем в спам и наших серверов в черные списки. 

Если необходимо, чтобы ответ пользователя приходил не на доменную почту, а на другой e-mail - вы можете указать его в поле REPLY-TO

Если ваш сайт сделан на Drupal6/7 и вы используете для отправки внутреннее API друпала, возможно вам поможет данная ссылка на документацию - https://api.drupal.org/api/drupal/modules%21system%21system.api.php/function/hook_mail_alter/7.x

В случае Joomla, если компонент, отправляющий почту, опирается на системные настройки, это делается в админке сайта - "Сайт", "Общие настройки", "Сервер", "Настройка почты" - https://drive.google.com/file/d/0B67GYtU3HCSbYlY3YlpUMTdLUzQ/view?usp=sharing & https://drive.google.com/file/d/0B67GYtU3HCSbRHppRW9JMDE4T3c/view?usp=sharing

В случае OpenCart - авторизуйтесь в админке вашего OpenCart, перейдите в System, перейдите в Settings, нажмите Edit справа от нужного магазина, перейдите в Mail и в поле Mail Parameters впишите &#96;-forder@domain.com&#96;. &#96;-f&#96; в начале обязателен. Вместо domain.com - домен с которого идёт отправка.

В случае Prestashop посмотреть решение вы можете на https://www.prestashop.com/forums/topic/193476-how-to-change-address-of-email-notifications/

В случае плагина Contact Form 7 на CMS WordPress - перейдите на %адрес вашего сайта%/wp-admin/admin.php?page=wpcf7 , кликните на "Изменить" у нужной контактной формы, таб "Письмо", поле "From". ( https://drive.google.com/file/d/0B67GYtU3HCSbUGVTZ3pJSXB4TzA/view?usp=drivesdk )