---
css_class: ssl
section: ssl
question: difference between let's encrypt and paid certificate
---
Здравствуйте. Технически бесплатный сертификат от Let's Encrypt ничем не отличается от обычного платного сертификата (без wildcard и extended validation), но некоторые сервисы могут отказаться от работы с бесплатным сертификатом. Из известных примеров - из-за использования SNI, с бесплатными сертификатами отказывается работать Яндекс.Касса.