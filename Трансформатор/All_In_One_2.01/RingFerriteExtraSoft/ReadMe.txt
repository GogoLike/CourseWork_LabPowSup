        На некоторых полях ввода и на некоторых результатах расчета, которые нуждаются в комментариях, размещены всплывающие подсказки.
Содержание этих подсказок фактически повторяет пункты помощи.

        1. Основная работа в программе происходит в группе "Оптимизация".
Автоматический расчет применяется при выборе другого сердечника или при изменении любых исходных данных (за пределами группы "Оптимизация") для получения отправной точки при оптимизации намоточных данных трансформатора.

        2. В группе "Оптимизация" при изменении значений с помощью стрелок старт оптимизации запускается автоматически.
Но если новое значение введено "вручную", то следует запускать оптимизацию этой кнопкой.

        3. Для ШИМ-контроллеров задается частота, равная половине частоты задающего генератора микросхемы. Импульсы задающего генератора подаются на выходы по очереди, поэтому частота на каждом выходе (и на трансформаторе) в 2 раза ниже частоты задающего генератора.
        Микросхемы IR2153, и подобные ей этого семейства микросхем, не являются ШИМ-контроллерами, и частота на их выходах равна частоте задающего генератора.
        Не стоит гнаться за большой частотой. При высокой частоте увеличиваются коммутационные потери в транзисторах и диодах. Также при большой частоте из-за малого числа витков ток намагничивания получается слишком велик, что приводит к большому току холостого хода и, соответственно, низкому КПД.

        4. Коэффициент заполнения окна характеризует, какую часть окна сердечника займет медь всех обмоток.

        5. Плотность тока зависит от условий охлаждения и от размеров сердечника.
При естественном охлаждении следует выбирать 4 - 6 А/мм2.
При вентиляции плотность тока можно выбрать больше, до 8 - 10 А/мм2.
Большие значения плотности тока соответствуют маленьким сердечникам.
При принудительном охлаждении допустимая плотность тока зависит от интенсивности охлаждения.

        6. Если выбрана стабилизация выходных напряжений, то первый выход является ведущим. И на него надо назначать выход с наибольшим потреблением.
Остальные выходы считаются по первому.
Для реальной стабилизации всех выходов следует применять дроссель групповой стабилизации.

        7. При однополярном выпрямлении, несмотря на больший расход меди, имеет преимущество схема выпрямления со средней точкой, так как потери на двух диодах будут в 2 раза меньше, чем на четырех диодах в мостовой схеме.

        8. Для правильной работы дросселя в выпрямителе после диодов перед дросселем не должно быть никаких конденсаторов! Даже маленького номинала.

        9. На числах витков обмоток в результатах расчета помещены всплывающие подсказки с числом слоев, занимаемых обмотой.

        10. На числах проводов в обмотках в результатах расчета помещены всплывающие подсказки с плотностью тока в обмотке.