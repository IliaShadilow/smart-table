# sp6-2_smart-table_starter

https://github.com/IliaShadilow/smart-table

# Для работы vite ввести в консоли npm install && npm run dev и перейти по ссылке, что он даст

# Как работает таблица

1. Пользователь что-то меняет (вводит текст, кликает сортировку)
2. render() собирает state из формы
3. Из state формируем query (search, filter, sort, page, limit)
4. Отправляем query на сервер
5. Сервер возвращает total и items
6. Обновляем пагинацию и таблицу