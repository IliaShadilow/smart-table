export function initFiltering(elements) {
    // @todo: #4.1 — заполнить выпадающие списки опциями
    const updateIndexes = (elements, indexes) => {
        Object.keys(indexes).forEach((elementName) => {
            // Очищаем select перед добавлением новых опций
            elements[elementName].innerHTML = '';
            
            // Добавляем опцию "—" (пустое значение)
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '—';
            elements[elementName].append(defaultOption);
            
            // Добавляем опции из индексов
            Object.values(indexes[elementName]).forEach(name => {
                const el = document.createElement('option');
                el.textContent = name;
                el.value = name;
                elements[elementName].append(el);
            });
        });
    };

    // @todo: #4.5 — отфильтровать данные используя компаратор
    const applyFiltering = (query, state, action) => {
        // @todo: #4.2 — обработать очистку поля
        if (action && action.name === 'clear') {
            const parent = action.closest('.filter-wrapper');
            const input = parent.querySelector('input');
            if (input) {
                input.value = '';
                state[action.dataset.field] = '';
            }
        }

        // Формируем фильтр для запроса
        const filter = {};
        Object.keys(elements).forEach(key => {
            const element = elements[key];
            if (element && ['INPUT', 'SELECT'].includes(element.tagName) && element.value) {
                filter[`filter[${element.name}]`] = element.value;
            }
        });

        return Object.keys(filter).length ? Object.assign({}, query, filter) : query;
    };

    return {
        updateIndexes,
        applyFiltering
    };
}