---
layout: lor-page
title:  "Composer"
---
```bash
mkdir $HOME/.local/opt/composer/
cd $HOME/.local/opt/composer/
curl -sS https://getcomposer.org/installer | /usr/local/php-cgi/5.6/bin/php
echo "/usr/local/php-cgi/5.6/bin/php -dshort_open_tag=On -ddate.timezone='Europe/Moscow' $HOME/.local/opt/composer/composer.phar \$@" > $HOME/.local/bin/composer
chmod +x $HOME/.local/bin/composer
```