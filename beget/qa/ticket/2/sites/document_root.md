---
css_class: sites
section: sites
question: change DOCUMENT_ROOT
---
Здравствуйте. На нашем хостинге это реализуется следующим образом (в скобках команды для SSH):
 - Загружаем сайт не внутрь public_html, а кладём рядом
 - Удаляем директорию public_html (rm -rf public_html)
 - Создаём символьную ссылку с именем public_html, указывающую на директорию public (ln -s public public_html)