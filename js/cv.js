// добавить язык
$(document).ready(function () {
  var max_fields = 10; // Максимальное количество элементов
  var wrapper = $(".input_fields_wrap"); // Контейнер для элементов
  var add_button = $(".add_field_button"); // Кнопка для добавления элемента

  var x = 1; // Счетчик элементов
  $(add_button).click(function (e) {
    e.preventDefault();
    if (x < max_fields) {
      x++; // Увеличиваем счетчик
      // Вставляем разметку при добавлении нового элемента
      $(wrapper).append(
        '<table class="table table-hover table-sortable tab_logic ">' +
          "<thead>" +
          "<tr>" +
          '<th class="text-center text-normal">Язык</th>' +
          '<th class="text-center text-normal">Уровень</th>' +
          "<th></th>" +
          "</tr>" +
          "</thead>" +
          '<tbody data-min-count="1" class="ui-sortable">' +
          '<tr id="addr' +
          x +
          '" data-id="' +
          x +
          '">' +
          '<td data-name="jezyk_nazwa">' +
          '<input type="text" name="false_jezyk_nazwa[]" placeholder="Языки" class="form-control">' +
          "</td>" +
          '<td data-name="jezyk_poziom">' +
          '<select name="false_jezyk_poziom[]" style="max-width:195px;" class="form-control">' +
          '<option value="">Выберите</option>' +
          '<option value="1">начальный</option>' +
          '<option value="2">предпороговый уровень</option>' +
          '<option value="3">пороговый уровень</option>' +
          '<option value="4">пороговый продвинутый уровень</option>' +
          '<option value="5">продвинутый</option>' +
          '<option value="6">владения в совершенстве</option>' +
          "</select>" +
          "</td>" +
          '<td data-name="del" data-name2="move">' +
          '<button type="button" name="del' +
          x +
          '<"button class="btn btn-sm btn-danger remove_field"><i class="bi bi-x-circle text-white"></i></button>' +
          "</td>" +
          "</tr>" +
          "</tbody>" +
          "</table>"
      );
    }
  });

  $(wrapper).on("click", ".remove_field", function (e) {
    e.preventDefault();
    $(this).closest("table").remove(); // Удаляем соответствующий элемент
    x--;
  });
});

// добавить опыт
$(document).ready(function () {
  var max_fields1 = 10; // Максимальное количество элементов
  var wrapper1 = $(".input_fields_wrap1"); // Контейнер для элементов
  var add_button1 = $(".add_field_button1"); // Кнопка для добавления элемента

  var x = 1; // Счетчик элементов
  $(add_button1).click(function (e) {
    e.preventDefault();
    if (x < max_fields1) {
      x++; // Увеличиваем счетчик
      // Вставляем разметку при добавлении нового элемента
      $(wrapper1).append(
        '<table class="table table-hover table-sortable tab_logic ">' +
          "<thead>" +
          "<tr>" +
          '<th class="text-center text-normal">Срок</th>' +
          '<th class="text-center text-normal">Опыт</th>' +
          "<th></th></tr>" +
          "</thead>" +
          '<tbody data-min-count="1" class="ui-sortable">' +
          '<td style=" width: 120px; ">' +
          '<input type="date" max="2023-10-11" style=" max-width: 120px; min-width: 116px; padding-left: 8px; padding-right: 6px; " min="1901-01-01" name="doswiadczenie_data_od[]" maxlength="10" placeholder="Дата от (РРРР-ММ-ДД)" class="form-control">' +
          '<input type="date" max="2023-10-11" style=" max-width: 120px; min-width: 116px; padding-left: 8px; padding-right: 6px; " min="1901-01-01" name="doswiadczenie_data_od[]" maxlength="10" placeholder="Дата от (РРРР-ММ-ДД)" class="form-control">' +
          "</td>" +
          '<td><input type="text" name="doswiadczenie_nazwa[]" placeholder="Опыт" class="form-control"></input>' +
          '<textarea type="text" name="doswiadczenie_opis[]" rows="3" placeholder="Описание трудового стажа" class="mt-2 form-control"></textarea></td>' +
          '<td data-name="del" data-name2="move">' +
          '<button type="button" name="del' +
          x +
          '<"button class="btn btn-sm btn-danger remove_field"><i class="bi bi-x-circle text-white"></i></button>' +
          "</td></tbody></table>"
      );
    }
  });

  $(wrapper1).on("click", ".remove_field", function (e) {
    e.preventDefault();
    $(this).closest("table").remove(); // Удаляем соответствующий элемент
    x--;
  });
});

// Добавить образование
$(document).ready(function () {
  var max_fields3 = 10; // Максимальное количество элементов
  var wrapper3 = $(".input_fields_wrap3"); // Контейнер для элементов
  var add_button3 = $(".add_field_button3"); // Кнопка для добавления элемента

  var x = 1; // Счетчик элементов
  $(add_button3).click(function (e) {
    e.preventDefault();
    if (x < max_fields3) {
      x++; // Увеличиваем счетчик
      // Вставляем разметку при добавлении нового элемента
      $(wrapper3).append(
        '<table class="table table-hover table-sortable tab_logic ">' +
          "<thead>" +
          "<tr>" +
          '<th class="text-center text-normal">Срок</th>' +
          '<th class="text-center text-normal">Образование</th>' +
          "<th></th></tr>" +
          "</thead>" +
          '<tbody data-min-count="1" class="ui-sortable">' +
          '<td style=" width: 120px; ">' +
          '<input type="date" max="2023-10-11" style=" max-width: 120px; min-width: 116px; padding-left: 8px; padding-right: 6px; " min="1901-01-01" name="doswiadczenie_data_od[]" maxlength="10" placeholder="Дата от (РРРР-ММ-ДД)" class="form-control">' +
          '<input type="date" max="2023-10-11" style=" max-width: 120px; min-width: 116px; padding-left: 8px; padding-right: 6px; " min="1901-01-01" name="doswiadczenie_data_od[]" maxlength="10" placeholder="Дата от (РРРР-ММ-ДД)" class="form-control">' +
          "</td>" +
          '<td><input type="text" name="doswiadczenie_nazwa[]" placeholder="Образование" class="form-control"></input>' +
          '<textarea type="text" name="doswiadczenie_opis[]" rows="3" placeholder="Описание образования" class="mt-2 form-control"></textarea></td>' +
          '<td data-name="del" data-name2="move">' +
          '<button type="button" name="del' +
          x +
          '<"button class="btn btn-sm btn-danger remove_field"><i class="bi bi-x-circle text-white"></i></button>' +
          "</td></tbody></table>"
      );
    }
  });

  $(wrapper3).on("click", ".remove_field", function (e) {
    e.preventDefault();
    $(this).closest("table").remove(); // Удаляем соответствующий элемент
    x--;
  });
});

// добавить курсы
$(document).ready(function () {
  var max_fields4 = 10; // Максимальное количество элементов
  var wrapper4 = $(".input_fields_wrap4"); // Контейнер для элементов
  var add_button4 = $(".add_field_button4"); // Кнопка для добавления элемента

  var x = 1; // Счетчик элементов
  $(add_button4).click(function (e) {
    e.preventDefault();
    if (x < max_fields4) {
      x++; // Увеличиваем счетчик
      // Вставляем разметку при добавлении нового элемента
      $(wrapper4).append(
        '<table class="table table-hover table-sortable tab_logic ">' +
          "<thead>" +
          "<tr>" +
          '<th class="text-center text-normal">Срок</th>' +
          '<th class="text-center text-normal">Курсы и тренинги</th>' +
          "<th></th></tr>" +
          "</thead>" +
          '<tbody data-min-count="1" class="ui-sortable">' +
          '<td style=" width: 120px; ">' +
          '<input type="date" max="2023-10-11" style=" max-width: 120px; min-width: 116px; padding-left: 8px; padding-right: 6px; " min="1901-01-01" name="doswiadczenie_data_od[]" maxlength="10" placeholder="Дата от (РРРР-ММ-ДД)" class="form-control">' +
          '<input type="date" max="2023-10-11" style=" max-width: 120px; min-width: 116px; padding-left: 8px; padding-right: 6px; " min="1901-01-01" name="doswiadczenie_data_od[]" maxlength="10" placeholder="Дата от (РРРР-ММ-ДД)" class="form-control">' +
          "</td>" +
          '<td><input type="text" name="doswiadczenie_nazwa[]" placeholder="Образование" class="form-control"></input>' +
          '<textarea type="text" name="doswiadczenie_opis[]" rows="3" placeholder="Описание образования" class="mt-2 form-control"></textarea></td>' +
          '<td data-name="del" data-name2="move">' +
          '<button type="button" name="del' +
          x +
          '<"button class="btn btn-sm btn-danger remove_field"><i class="bi bi-x-circle text-white"></i></button>' +
          "</td></tbody></table>"
      );
    }
  });

  $(wrapper4).on("click", ".remove_field", function (e) {
    e.preventDefault();
    $(this).closest("table").remove(); // Удаляем соответствующий элемент
    x--;
  });
});

// добавить навыки
$(document).ready(function () {
  var max_fields5 = 10; // Максимальное количество элементов
  var wrapper5 = $(".input_fields_wrap5"); // Контейнер для элементов
  var add_button5 = $(".add_field_button5"); // Кнопка для добавления элемента

  var x = 1; // Счетчик элементов
  $(add_button5).click(function (e) {
    e.preventDefault();
    if (x < max_fields5) {
      x++; // Увеличиваем счетчик
      // Вставляем разметку при добавлении нового элемента
      $(wrapper5).append(
        '<table class="table table-hover table-sortable tab_logic ">' +
          "<thead>" +
          "<tr >" +
          '<th class="text-center text-normal">Навык</th>' +
          "<th></th><th></th></tr>" +
          "</thead>" +
          '<tbody data-min-count="1" class="ui-sortable">' +
          '<td><input type="text"  placeholder="Название навыка" class="form-control w-100"></input>' +
          '<td><button class="btn btn-sm btn-danger remove_field"><i class="bi bi-x-circle text-white"></i></button>' +
          "<th></th></td></tbody></table>"
      );
    }
  });

  $(wrapper5).on("click", ".remove_field", function (e) {
    e.preventDefault();
    $(this).closest("table").remove(); // Удаляем соответствующий элемент
    x--;
  });
});
// добавить интерессы
$(document).ready(function () {
  var max_fields6 = 10; // Максимальное количество элементов
  var wrapper6 = $(".input_fields_wrap6"); // Контейнер для элементов
  var add_button6 = $(".add_field_button6"); // Кнопка для добавления элемента

  var x = 1; // Счетчик элементов
  $(add_button6).click(function (e) {
    e.preventDefault();
    if (x < max_fields6) {
      x++; // Увеличиваем счетчик
      // Вставляем разметку при добавлении нового элемента
      $(wrapper6).append(
        '<table class="table table-hover table-sortable tab_logic ">' +
          "<thead>" +
          "<tr >" +
          '<th class="text-center text-normal">Интерес</th>' +
          "<th></th><th></th></tr>" +
          "</thead>" +
          '<tbody data-min-count="1" class="ui-sortable">' +
          '<td><input type="text"  placeholder="Название навыка" class="form-control w-100"></input>' +
          '<td><button class="btn btn-sm btn-danger remove_field"><i class="bi bi-x-circle text-white"></i></button>' +
          "<th></th></td></tbody></table>"
      );
    }
  });

  $(wrapper6).on("click", ".remove_field", function (e) {
    e.preventDefault();
    $(this).closest("table").remove(); // Удаляем соответствующий элемент
    x--;
  });
});
// мультиселект профессии
$(document).ready(function () {
  $(".profesion-multiple").select2();
});
