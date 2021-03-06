	На некоторых полях ввода и на некоторых результатах расчета, которые нуждаются в комментариях, размещены всплывающие подсказки.
Содержание этих подсказок фактически повторяет пункты помощи.

	1. Потери в сердечнике зависят от сочетания индукции и частоты. При большой частоте и большой индукции потери окажутся на столько большими, что нагрев сердечника превысит разумные пределы. Поэтому программа сама ограничивает максимальную индукцию в зависимости от введенного значения частоты.

	2. Для ШИМ-контроллеров задается частота, равная половине частоты задающего генератора микросхемы. Импульсы задающего генератора подаются на выходы по очереди, поэтому частота на каждом выходе (и на трансформаторе) в 2 раза ниже частоты задающего генератора.
Микросхемы IR2153, и подобные ей этого семейства микросхем, не являются ШИМ-контроллерами, и частота на их выходах равна частоте задающего генератора.
Не стоит гнаться за большой частотой. При высокой частоте увеличиваются коммутационные потери в транзисторах и диодах. Также при большой частоте из-за малого числа витков ток намагничивания получается слишком велик, что приводит к большому току холостого хода и, соответственно, низкому КПД.

	3. Коэффициент заполнения окна характеризует, какую часть окна сердечника займут все обмотки. Для колец можно задавать больше, до 0,4, так как у них площадь окна большая. У Ш-образных сердечников площадь окна ограничена самим сердечником и каркасом. Для них коэффициент заполнения окна может быть в диапазоне 0,15 - 0,35, в зависимости от размера сердечника, меньшие значения соответствуют меньшим размерам.

	4. Плотность тока зависит от условий охлаждения и от размеров сердечника.
При естественном охлаждении следует выбирать 4 - 6 А/мм2.
При вентиляции плотность тока можно выбрать больше, до 8 - 10 А/мм2.
Большие значения плотности тока соответствуют маленьким сердечникам.
При принудительном охлаждении допустимая плотность тока зависит от интенсивности охлаждения.

	5. Если выбрана стабилизация выходных напряжений, то первый выход является ведущим. И на него надо назначать выход с наибольшим потреблением. Остальные выходы считаются по первому.
Для реальной стабилизации всех выходов следует применять дроссель групповой стабилизации.

	6. При однополярном выпрямлении, несмотря на больший расход меди, имеет преимущество схема выпрямления со средней точкой, так как потери на двух диодах будут в 2 раза меньше, чем на четырех диодах в мостовой схеме.

	7. Задание минимального тока потребления необходимо для расчета индуктивности дросселя.
Слишком маленькое значение не стоит задавать, так как может получиться большая величина индуктивности, и дроссель на большую индуктивность и маленький минимальный ток будет проблематично изготовить, поскольку еще нужно обеспечить, чтобы сердечник дросселя не входил в насыщение.

	8. Для правильной работы дросселя в выпрямителе после диодов перед дросселем не должно быть никаких конденсаторов! Даже маленького номинала.

	9. Для использования желаемого диаметра провода поставьте галочку "Использовать диаметры проводов".
Предлагаю сначала дать программе рассчитать диаметры проводов и число жил в обмотках, чтобы потом оптимально задать диаметры.

	10. При добавлении сердечника в базу в поле комбинированного списка вводится название нового сердечника.
Нет необходимости самостоятельно приписывать к названию сердечника префикс его формы. Префикс формы сердечника дописывается программой автоматически.

	11. При добавлении нового сердечника в базу в любом случае лучше пользоваться галочкой "Добавление в базу (ввод данных)". Данные следует взять из документации производителя.
Расшифровка обозначений данных:
    Ae - площадь сердечника, мм2
    An - площадь окна бобины под намотку, мм2
    le - средняя длина магнитной линии, мм
    Ve - объем, см3
В случае отсутствия в документации производителя площади окна бобины под намотку, рассчитать площадь окна самостоятельно.
Объем программа считает самостоятельно. Объем равен произведению площади сечения сердечника на длину средней магнитной линии.
Хотя я сделал расчет данных сердечника по геометрическим размерам, результаты такого расчета получаются не точными, так как данные от производителей несколько отличаются от прямого расчета по геометрическим размерам.

	12. При выборе формы сердечника "Другая" данные взять из документации производителя.
