const name = "Петро";
const earphons = "Airpods2";
const CinaEarphons = 1000;
const KilkistEarphons = 2;
const Garantiya = 1; 
const VartistGarantiyi = 100;
const CinaDostsvky = 60;
const Suma = CinaEarphons * KilkistEarphons + VartistGarantiyi * KilkistEarphons + CinaDostsvky ;
console.log(`Вітаю, ${name}! Ваше замовлення: \n ${earphons} за ціною- ${CinaEarphons}грн \n у кількості ${KilkistEarphons} штук Гарантія на ${Garantiya}рік вартістю ${VartistGarantiyi}грн \n  у кількості ${KilkistEarphons} штук \n\n Вартість доставки- ${CinaDostsvky}грн \n\n Прийнято та буде оброблено протягом 24 години \n\n Загальна вартість замовлення- ${Suma}грн`);