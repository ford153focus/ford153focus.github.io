---
css_class: sites
section: sites
question: change DOCUMENT_ROOT
---
Здравствуйте. На нашем хостинге это реализуется следующим образом (в скобках команды для SSH):
<br>&nbsp;- Загружаем сайт не внутрь public_html, а кладём рядом
<br>&nbsp;- Удаляем директорию public_html (rm -rf public_html)
<br>&nbsp;- Создаём символьную ссылку с именем public_html, указывающую на директорию public (ln -s public public_html)