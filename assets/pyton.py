import tkinter as tk
from tkinter import messagebox

def handle_paste(event):
    widget = event.widget
    if isinstance(widget, tk.Entry):
        widget.event_generate("<<Paste>>")

def generate_text():
    job_title = job_title_entry.get()
    job_category = job_category_entry.get()
    job_location = job_location_entry.get()
    job_description = job_description_entry.get()
    job_type = job_type_entry.get()
    job_vacancies = job_vacancies_entry.get()
    hourly_rate = hourly_rate_entry.get()
    monthly_range = monthly_range_entry.get()
    accommodation_info = accommodation_info_entry.get()
    city_info = city_info_entry.get()  # Получение информации о городе

    text = f'''
<section class="background-grey praca-oferta p-b-40">
    <div class="container">
        <div class="bg-white p-4">
            <div class="row no-margin">
                <div class="col-md-8 no-padding">
                    <h2 class="m-b-15">{job_title}</h2>
                    <div class="kategoria">
                        <a href="/">Etalones S&B</a> /
                        <a href="../vakansii.html">вакансии</a> /
                        {job_category}
                    </div>
                    <div class="miasto p-t-30 p-b-20">
                        <i class="bi bi-geo-alt-fill"></i> {job_location}
                    </div>
                </div>
                <div class="col-md-4 no-padding">
                    <div class="col-sm-6 col-md-9 col-lg-8 no-padding">
                        <div class="effect social-links mb-3">
                            <img src="../../img/vacansii/electrik1.jpeg" alt="{job_title}" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row smainfo no-margin m-t-50">
                <div class="col-md-4">
                    <div class="pddpo"><i class="bi bi-person-fill"></i>Вакансии</div>
                    <div class="miejsc">{job_vacancies}<br /><span style="font-size: 18px">мужчины</span></div>
                </div>
                <div class="col-md-4">
                    <div class="pddpo"><i class="bi bi-cash"></i>Вознаграждение.</div>
                    <p>Ставка в час {hourly_rate}&nbsp;€ брутто.</p>
                    <p>В месяц&nbsp;{monthly_range}&nbsp;€ брутто.&nbsp;</p>
                </div>
                <div class="col-md-4">
                    <div class="pddpo"><i class="bi bi-house-fill"></i>Проживание</div>
                    <p>{accommodation_info}</p>
                </div>
            </div>
            <div class="row opisoferta no-margin m-b-20">
                <div class="col-md-12">
                    <h2 class="m-b-15">Информация про работу</h2>
                    <p>{job_description}</p>
                    <p><strong>Вид договора:</strong></p>
                    <ul>
                        <li>{job_type}</li>
                    </ul>
                    <!-- Здесь могут быть дополнительные поля, если это необходимо -->
                </div>
            </div>
            <div class="row miastobox no-margin">
                <div class="col-md-6">
                    <h2 class="m-b-15">Информация о городе</h2>
                    <p>{city_info}</p>  # Отображение информации о городе
                </div>
                <div class="col-md-6">
                    <!-- Здесь может быть изображение города, если это необходимо -->
                </div>
            </div>
        </div>
    </div>
</section>
'''

    generated_text.delete("1.0", tk.END)  # Очистка предыдущего текста
    generated_text.insert(tk.END, text)  # Вставка сгенерированного текста

    # Копирование текста в буфер обмена
    window.clipboard_clear()
    window.clipboard_append(text)

    messagebox.showinfo("Текст со вставками", "Текст успешно сгенерирован и скопирован!")

# Создание графического интерфейса с использованием библиотеки tkinter
window = tk.Tk()
window.title("Форма для заполнения")
window.geometry("600x800")

# Поля для ввода
job_title_label = tk.Label(window, text="Название вакансии:")
job_title_label.pack()
job_title_entry = tk.Entry(window, width=100)  # Установка ширины поля
job_title_entry.pack()

job_category_label = tk.Label(window, text="Категория вакансии:")
job_category_label.pack()
job_category_entry = tk.Entry(window, width=100)  # Установка ширины поля
job_category_entry.pack()

job_location_label = tk.Label(window, text="Локация вакансии:")
job_location_label.pack()
job_location_entry = tk.Entry(window, width=100)  # Установка ширины поля
job_location_entry.pack()

job_description_label = tk.Label(window, text="Информация про работу:")
job_description_label.pack()
job_description_entry = tk.Entry(window, width=100)  # Установка ширины и высоты поля
job_description_entry.pack()

job_type_label = tk.Label(window, text="Вид договора:")
job_type_label.pack()
job_type_entry = tk.Entry(window, width=100)  # Установка ширины поля
job_type_entry.pack()

job_vacancies_label = tk.Label(window, text="Количество вакансий:")
job_vacancies_label.pack()
job_vacancies_entry = tk.Entry(window, width=100)  # Установка ширины поля
job_vacancies_entry.pack()

hourly_rate_label = tk.Label(window, text="Ставка в час (€ брутто):")
hourly_rate_label.pack()
hourly_rate_entry = tk.Entry(window, width=100)  # Установка ширины поля
hourly_rate_entry.pack()

monthly_range_label = tk.Label(window, text="Зарплата в месяц (€ брутто):")
monthly_range_label.pack()
monthly_range_entry = tk.Entry(window, width=100)  # Установка ширины поля
monthly_range_entry.pack()

accommodation_info_label = tk.Label(window, text="Информация о проживании:")
accommodation_info_label.pack()
accommodation_info_entry = tk.Entry(window, width=100)  # Установка ширины и высоты поля
accommodation_info_entry.pack()

city_info_label = tk.Label(window, text="Информация о городе:")  # Новое поле для информации о городе
city_info_label.pack()
city_info_entry = tk.Entry(window, width=100)  # Установка ширины и высоты поля
city_info_entry.pack()

# Кнопка для генерации текста
generate_button = tk.Button(window, text="Сгенерировать текст", command=generate_text)
generate_button.pack()

# Поле для отображения сгенерированного текста
generated_text_label = tk.Label(window, text="Сгенерированный текст:")
generated_text_label.pack()
generated_text = tk.Text(window, height=25, width=40)
generated_text.pack()

window.bind_class("Entry", "<Button-3><ButtonRelease-3>", handle_paste)

window.mainloop()
