---
layout: lor-page
title:  "WP CLI"
---

Before this, you must to install Composer. You can find instruction on https://ford153focus.github.io/beget/wiki/install/composer.html

```bash
mkdir $HOME/.local/opt/wpcli/
cd $HOME/.local/opt/wpcli/
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
echo "/usr/local/php-cgi/5.6/bin/php $HOME/.local/opt/wpcli/wp-cli.phar \$@" > $HOME/.local/bin/wp
chmod +x $HOME/.local/bin/wp
curl -O https://github.com/wp-cli/wp-cli/raw/master/utils/wp-completion.bash
printf "\n\nsource $HOME/.local/opt/wpcli/wp-completion.bash" >> $HOME/.bash_profile
```