---
title: Integracje - systemy płatności
description: ''
position: 14
category: ''
---

## Przelewy24

Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy chcemy przeprowadzić płatność testową. Tryb testowy działa po aktywacji konta Sandbox w systemie Przelewy24. I dla trybu testowego obowiązuje inny klucz CRC niż dla środowiska produkcyjnego. Pamiętaj o tym, w momencie przeprowadzania płatności testowych. 

**Gdzie znaleźć ID Sprzedawcy, ID Sklepu, Klucz CRC?**

**ID Sprzedawcy** - identyfikator Twojego konta w systemie Przelewy24, który został nadany przy rejestracji w serwisie. Inaczej mówiąc, jest to numer, którym logujesz się do Przelewy24.

**ID Sklepu** - identyfikator Twojego konta w systemie Przelewy24, który został nadany przy rejestracji w serwisie. Inaczej mówiąc, jest to numer, którym logujesz się do Przelewy24. I jest on identyczny jak w przypadku ID Sprzedawcy.

**Klucz CRC** - klucz możesz pobrać w zakładce Moje dane -> Ustawienia -> Dane API i konfiguracja.

<br>

## Dotpay

Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy chcemy przeprowadzić płatność testową. 

**Gdzie znaleźć ID Sklepu i PIN?**

Wybierz Ustawienia -> Powiadomienia -> Konfiguracja urlc

**Numer ID Sklepu** to 6-cyfrowy numer znajdujący się przed "hasztagiem".

**PIN** to ciąg znaków przypisany do danego Sklepu.

<img src="/img/screen-dotpay-1.jpg" alt=""/>

**Dodatkowo trzeba pamiętać o ustawieniu statusu NIE w kolumnie Blokuj zewnętrzne urlc. Aby to zmienić należy wejść w Edycję sklepu i odznaczyć pole Blokuj zewnętrzne urlc.**

<img src="/img/screen-dotpay-2.jpg" alt=""/>

<br>

## PayU

Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy chcemy przeprowadzić płatność testową. 

**Gdzie znaleźć Pos id, MD5, Client id, Client secret?**

Wybierz Płatności elektroniczne -> Moje sklepy -> Punkty płatności wybranego sklepu

<img src="/img/screen-payu-1.jpg" alt=""/>

Wybierz ponownie Punkt płatności i przejdź do szczegółówych informacji, na jego temat.

<img src="/img/screen-payu-3.jpg" alt=""/>

**Dodatkowo trzeba pamiętać, aby przy tworzeniu sklepu podać adres url platformy.**

<br>

## PayPal

Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy chcemy przeprowadzić płatność testową. 

**Gdzie znaleźć Secret i Client ID?**

Wejdź na stronę https://developer.paypal.com/home i zaloguj się do panelu

Wybierz Dashboard -> My Apps & Credentials -> Live -> Create App

<img src="/img/screen-paypal-1.jpg" alt=""/>

Podaj nazwę App, aby wiedzieć, w jakim celu została utworzona -> Create App

<img src="/img/screen-paypal-2.jpg" alt=""/>

<br>

## TPay

#### Jeśli prowadzisz sprzedaż wyłącznie pojedynczych produktów (kursów online, pakietów, konsultacji) to wypełnij pola: ID Sprzedawcy, Kod bezpieczeństwa, Klucz API i Hasło API.

**Gdzie znaleźć ID Sprzedawcy i Kod bezpieczeństwa?**

**ID Sprzedawcy** to identyfikator Twojego konta w systemi TPay. Inaczej mówiąc jest to numer, którym logujesz się do panelu TPay.

<img src="/img/screen-tpay-1.jpg" alt=""/>

**Kod bezpieczeństwa znajdziesz:** Menu -> Ustawienia -> Powiadomienia -> Zabezpieczenia.

<img src="/img/screen-tpay-2.png" alt=""/>

**Klucz API i Hasło API znajdziesz:** Menu -> Integracja -> API.

Kliknij prycisk DODAJ NOWY KLUCZ 

<img src="/img/screen-tpay-3.png" alt=""/>

A następnie utwórz hasło, aktywuj go i wybierz rodzaj uprawnienia. Po dodaniu klucza automatycznie zostanie wygenerowany klucz, który trzeba podać w integracji w Skyier.

<img src="/img/screen-tpay-4.png" alt=""/>


#### Jeśli prowadzisz sprzedaż subskrypcyjną kursów to dodatkowo wypełnij pola: Klucz API, Kod weryfikacyjny, Hasło API, Klucz publiczny RSA, Algorytm podpisu.

**Gdzie znaleźć te informacje?**

Wejdź w Menu -> Płatności kartami -> API

<img src="/img/screen-tpay-karta.png" alt=""/>

Przy pierwszej konfiguracji tej strony trzeba wygenerować Kod weryfikacyjny i ustawić Hasło API.

W przypadku:

**- Adresu url powiadomień - podaj: https://nazwadomeny.pl/api/tpay/subscription/notify**

**- Adres url powrotny (powodzenia i błąd) - podaj nazwę strony, czyli: https://nazwadomeny.pl**


<br>

## Stripe

**Gdzie znaleźć Publishable Api Key, Secret Api Key i Webhook Singing Secret?**

Publishable Api Key i Secret Api Key znajdziesz: Developers -> API keys -> Standard keys

<img src="/img/screen-stripe-0.jpg" alt=""/>

Aby poznać Secret key kliknij *Reveal live key*

<img src="/img/screen-stripe-1.jpg" alt=""/>

Aby ustawić Webhook Singing Secret należy najpierw ustawić Endpoint. Aby to zrobić przejdź do: Developers -> Webhooks -> Add endpoint.

<img src="/img/screen-stripe-2.jpg" alt=""/>

Następnie w polu

**- Url endpoint** podaj adres url, który ma taką strukturę: nazwadomeny.pl/api/stripe/notifications**

**- w Events to send wybierz:** receive all events

**Kliknij Update endpoint**

<img src="/img/screen-stripe-3.jpg" alt=""/>

**Webhook Singing Secret znajdziesz:** Developers -> Webhooks -> wybrany Endpoints (kliknij adres url, który stworzyłeś we wcześniejszym kroku) -> Signing Secret.

Aby poznać Webhook Signing Secret kliknij *Reveal live key*

<img src="/img/screen-stripe-4.jpg" alt=""/>

Sprawdź, czy Webhook ma status: **active**.

<img src="/img/screen-stripe-5.jpg" alt=""/>

<br>

## Paynow

Jeśli nie masz aktywowanej na swoim koncie bankowym platności Paynow to w pierwszym kroku złóż wniosek. 

**Aby to zrobić, zaloguj się w mbanku na swoje konto biznesowe, a następnie wybierz: Mój Biznes -> Paynow -> Aktywuj.**

Dopiero po aktywacji będziesz mógł przejść do wprowadzenia poniższych ustawień.


Wybór środowiska:<br>
- Produkcyjne - ustawiamy, kiedy chcemy przyjmować już faktyczne płatności.
- Testowe (Sandbox) - ustawiamy, kiedy chcemy przeprowadzić płatność testową. 

**Gdzie znaleźć Klucz API i Signature Key?**

Wybierz Mój Biznes -> Ustawienia -> Sprzedaż -> Sklepy i punkty płatności

<img src="/img/screen-paynow-1.png" alt=""/>

Kliknij Dodaj sklep

<img src="/img/screen-paynow-2.png" alt=""/>


I podaj następujące dane:

* **domena sklepu** - url Twojej platformy z kursami online, np. https://inspiracje.skyier.pl
* **kategoria sklepu** - wybierz kategorią, która najlepiej odpowiada tematyce Twojej platformy
* **platforma sklepowa** - wybierz: Własna platforma

Dodaj sklep

Ustaw:

* **adres powiadomień** - ma on strukturę: https://twojadomena/api/paynow/notify

* **adres powrotu** - ma on strukturę: https://twojadomena/transaction/pending

<img src="/img/screen-paynow-3.png" alt=""/>


A następnie skopiuj i podaj w Skyier:

* **Klucz dostępu do API** -> Klucz API

* **Klucz obliczania podpisu** -> Signature Key

<img src="/img/screen-paynow-4.png" alt=""/>
