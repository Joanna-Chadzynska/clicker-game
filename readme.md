## Clicker Game

Napiszemy grę "Clicker", która będzie polegała na zbieraniu punktów poprzez klikanie.

- Za każde kliknięcie w przycisk o klasie “clicker” ma być dodawany punkt do globalnej puli punktów.
- Dodatkowo za każde kolejne zdobyte 50 punktów zostaje zwiększony licznik o 10 "auto punktów", czyli punktów, które się naliczają samoczynnie co 1s np. jeżeli licznik ma wartość 20, to co sekundę do puli globalnej punktów jest dodawane 20 punktów. Do implementacji “auto punktów” wykorzystajmy setInterval.
- Kolejny bonus jaki możemy zdobyć to 500 pkt doliczane jednorazowo do puli globalnej. Otrzymujemy je gdy w liczniku “auto punktów” przekroczymy kolejną 100-tke naliczoanych automatycznie punktów np. po przekroczeniu 200-tu otrzymamy jednorazowo 500pkt, po przekroczeniu 300-tu znów otrzymamy 500pkt.

Na stronie są przygotowane miejsca do wyświetlania wszystkich punktów jakie zdobyliśmy, licznika autopunktów, oraz infomację ile punktów mamy z premii “auto punktów”
Przed przystąpieniem do pisania kodu możecie zobaczyć jak puplarny clicker działa: http://orteil.dashnet.org/cookieclicker/
Spróbujcie napisać grę obiektowo - tworząc typ Clicker
# clicker-game
