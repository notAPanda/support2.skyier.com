---
title: Integracje - narzędzia e-mail
description: ''
position: 13
category: ''
---

## Freshmail

**Gdzie znaleźć Api key i Api secret?**

1. Wybierz Ustawienia

2. W menu po lewej stronie przejdź do: API&SMTP, Wtyczki

3. Wybierz API&SMTP

4. W sekcji Twoje klucze API znajdziesz Api key i Api secret

5. Ustaw status subskrybenta:

1 - **Aktywny** - subskrybent pojawi się od razu na Twojej liście mailingowej. Nie będzie musiał potwierdzać, że chce otrzymywać maile (single opt-in).<br>
2 - **Do aktywacji** - subskrybent zanim pojawi się na Twojej liście mailingowej będzie musiał potwierdzić dodatkowo, że chce otrzymywać maile (double opt-in).

<img src="/img/screen-freshmail-api.jpg" alt=""/>

Po dokonaniu integracji, automatycznie we Freshmail'u pojawi się lista o nazwie Skyier, w której będą pojawiać się e-maile studentów.

<br>

## Mailchimp

**Gdzie znaleźć Api key i Audience id?**

**Aby znaleźć Api key, wybierz:**

Settings -> Account -> Extras -> API Keys -> Your API keys

<img src="/img/screen-mailchimp-8.jpg" alt=""/>

**Aby znaleźć Audience id, wybierz:**

Audience -> Audience dashboard -> Manage Audience -> View audiences

<img src="/img/screen-mailchimp-5.jpg" alt=""/>

Wybierz listę -> Settings

<img src="/img/screen-mailchimp-6.jpg" alt=""/>

A następnie Audience name and defaults -> Audience ID (napisane czerwonym kolorem fontu)

<img src="/img/screen-mailchimp-7.jpg" alt=""/>

E-maile studentów będą pojawiać na liście, której Audience ID zostanie wskazane w integracji.

<br>

## Mailerlite

**Gdzie znaleźć Api key?**

Wybierz Ustawienia -> Integrations

<img src="/img/screen-mailerlite-1.jpg" alt=""/>

A następnie przejdź do: Developer API -> API key

<img src="/img/screen-mailerlite-2.jpg" alt=""/>

Po dokonaniu integracji, automatycznie w Mailerlite pojawi się lista o nazwie Skyier, w której będą pojawiać się e-maile studentów.

<br>

## GetResponse

**Gdzie znaleźć Api key i List token?**

**Gdzie znaleźć Api key?**

Wybierz Menu -> Integracje & API
<img src="/img/screen-getresponse-1.jpg" alt=""/>

A następnie API -> Wygeneruj klucz API

**Gdzie znaleźć List token?**

Wybierz Listy -> a następnie listę, w której powinny pojawiać się e-maile studentów. Jeśli takiej listy jeszcze nie posiadasz to kliknij przycisk Utwórz listę (pamiętaj, że nazwa listy musi zawierać wyłącznie małe litery).

<img src="/img/screen-getresponse-2.jpg" alt=""/>

Pod nazwą listy znajduje się List token.

<img src="/img/screen-getresponse-3.jpg" alt=""/>

E-maile studentów będą pojawiać na liście, której token zostanie wskazany w integracji.