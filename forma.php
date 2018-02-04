<?php   
function GetEmail($data) {
    if (isset($data['customer'])) {
        $customer = $data['customer'];

        return $customer['email'];
    }
}

function GetMessage($data) {
    $orderMessage = '';

    if (isset($data['forma'])) {
        $forma = $data['forma'];
        $formam = '';
        if ($forma['oval']) {
            $formam .= 'Овал, ';
        }

        if ($forma['shar']) {
            $formam .= 'Шар,';
        }

        if ($forma['kaplya']) {
            $formam .= 'Капля, ';
        }

        if ($forma['bstoyki']) {
            $formam .= 'Без стойки, ';
        }

        $orderMessage .= 'Форма кресла: '.$formam.'<br>';
    }

    if (isset($data['podushka'])) {
        $podushka = $data['podushka'];
        $podushkam = '';
        if ($podushka['blue']) {
            $podushkam .= 'Синий, ';
        }

        if ($podushka['brown']) {
            $podushkam .= 'Коричневый,';
        }

        if ($podushka['red']) {
            $podushkam .= 'Красный, ';
        }

        if ($podushka['bezhev']) {
            $podushkam .= 'Бежевый, ';
        }

        if ($podushka['other']) {
            $podushkam .= 'Другой цвет, ';
        }

        $orderMessage .= 'Цвет подушки:' . $podushkam . '<br>';
    }

    if (isset($data['kreslo'])) {
        $kreslo = $data['kreslo'];
        $kreslom = '';
        if ($kreslo['black']) {
            $kreslom .= 'Черный, ';
        }

        if ($kreslo['brown']) {
            $kreslom .= 'Коричневый,';
        }

        if ($kreslo['white']) {
            $kreslom .= 'Белый, ';
        }

        if ($kreslo['bezhev']) {
            $kreslom .= 'Бежевый, ';
        }

        if ($kreslo['other']) {
            $kreslom .= 'Другой цвет, ';
        }

        $orderMessage .= 'Цвет кресла:' . $kreslom . '<br>';
    }


    if (isset($data['customer'])) {
        $customer = $data['customer'];

        $orderMessage .= 'ФИО:'.$customer['fio'].'<br>';
        $orderMessage .= 'E-mail:'.$customer['email'].'<br>';
        $orderMessage .= 'Город:'.$customer['city'].'<br>';
        $orderMessage .= 'Адрес:'.$customer['address'].'<br>';
        $orderMessage .= 'Телефон:'.$customer['phone'].'<br>';
        $orderMessage .= 'Комментарий:'.$customer['comment'].'<br>';
    }

    if (isset($data['method'])) {
        $method = $data['method'];

        if ($method == 'sms') {
            $orderMessage .= 'Метод подтверждения: СМС<br>';
        } else if ($method == 'call') {
            $orderMessage .= 'Метод подтверждения: Звонок оператора<br>';
        }
    }
    return $orderMessage;
}
?>