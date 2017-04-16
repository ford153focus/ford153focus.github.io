---
css_class: sites
section: sites
question: subdomain in subfolder
---
Здравствуйте. Вы можете создать поддомен на https://cp.beget.com/domains и направить его на директорию домена

Если домены уже существуют - их можно прекрепить к директории основного домена на https://cp.beget.com/sites

После этого вам нужно будет добавить в файл .htaccess, который находится в директории public_html нужного сайта, строки следующего вида

&#96;&#96;&#96;

```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^subdomain.example.com$ [NC]
RewriteCond %{REQUEST_URI} !^/subdomain/ [NC]
RewriteRule (.*) /subdomain/$1 [L]
```

&#96;&#96;&#96;

/subdomain/ заменяем на имя директории, в которую мы будем заливать файлы поддомена, subdomain.example.com меняем на нужный поддомен.домен

Если файл .htaccess отсутствует - нужно его создать.