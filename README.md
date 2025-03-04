# 🚀 Get started

## 1. Production
- Конфигурация проекта `.env`
  | variable                 | default value | description                                                                                                           |
  |--------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------|
  | NEXT_PUBLIC_LOGGER_STATE | 1             | Выводит в консоль лиги от класса Logger? 1 - да, 0 - нет                                                              |
  | NEXT_PUBLIC_TRACE_ERRORS | 1             | Если логер активен (NEXT_PUBLIC_LOGGER_STATE = 1) выводит путь ошибок для метода логера Logger.error? 1 - да, 0 - нет |

- Старт проекта
  ```shell
  docker-compose up --build -d
  ```

## 2. Development
Разработка приложения должна происходить в telegram mini app для того чтобы был доступ к фичам, которые предоставляют tg mini apps через объект window.Telegram. Открываться в telegram mini app могут только приложения, которые запущены c https сертификатом.

Есть несколько способов поднять приложение с https сертификатом:

### 2.1 На локальном https сертификате (рекомендуемый)
Для этого способа запуска нужно добавить хост, на который будет локально транслироваться хост localhost со всеми портами. Запуск приложения на `https://localhost:<PORT>` не будет успешным, так как telegram бот не допустит к запуску такую ссылку

#### 2.1.1 Добавление локального https домена

Для добавления локального домена нужно обновить файл `/etc/hosts` на вашей системе, для этого нужно выполнить следующие шаги. Эти шаги нужны для настройки локального резолвинга домена `tg-mini-app.local` на `127.0.0.1` хосте.

##### Шаги для macOS и Linux

1. Откройте терминал

2. Откройте файл `/etc/hosts` с правами администратора:
   Введите следующую команду и нажмите `Enter`:

   ```sh
   sudo nano /etc/hosts
   ```

   Вам потребуется ввести пароль администратора.

3. Добавьте новую строку для вашего локального домена:
   Прокрутите вниз файла и добавьте следующую строку:

   ```plaintext
   127.0.0.1 tg-mini-app.local
   ```

4. Сохраните изменения и выйдите:

   - Нажмите `Ctrl + O`, затем `Enter`, чтобы сохранить файл.
   - Нажмите `Ctrl + X`, чтобы выйти из редактора.

5. Проверьте изменения:
   В терминале выполните команду `ping`, чтобы убедиться, что домен резолвится правильно:
   ```sh
   ping tg-mini-app.local
   ```
   Вы должны увидеть ответ от `127.0.0.1`.

##### Шаги для Windows

1. Откройте блокнот с правами администратора:

   - Нажмите `Win + S`, введите `Notepad`, затем правой кнопкой мыши выберите `Run as administrator`.

2. Откройте файл `hosts`:
   В блокноте выберите `File > Open`, затем введите следующий путь в поле для файлов:

   ```plaintext
   C:\Windows\System32\drivers\etc\hosts
   ```

   Убедитесь, что внизу выбрано отображение всех файлов (`All Files`), чтобы вы могли видеть файл `hosts`.

3. Добавьте новую строку для вашего локального домена:
   Добавьте следующую строку в конец файла:

   ```plaintext
   127.0.0.1 tg-mini-app.local
   ```

4. Сохраните изменения и закройте блокнот.

5. Проверьте изменения:
   Откройте командную строку (Cmd) и выполните команду:
   ```sh
   ping tg-mini-app.local
   ```
   Вы должны увидеть ответ от `127.0.0.1`.

#### 2.1.2 Запуск в telegram webapp

Для запуска проекта в telegram webapp можно воспользоваться уже готовым ботом [Swipy Dating](https://t.me/swipy_dating_bot). Данный бот поддерживает команду для запуска другого проекта по предоставленной https ссылке.

- Необходимо отправить в бота следующее сообщение:
  ```sh
    /link https://tg-mini-app.local:3000
  ```
- Открыть telegram webapp приложение по высланной от бота ссылке

#### 2.1.3 Готово! Можно начинать разработку



### 2.2 Запуск через ngrok
`ngrok` будет транслировать локальный порт на открытую https ссылку. Данный способ удобен тем, что приложение запущенное таким способом можно открыть на разных устройствах, так как ссылка транслируется в веб.

##### 2.2.1. Запустить **ngrok** на локальном устройстве:

- _Опционально._ Может потребоваться процедура установки ngrok на устройство и авторизация в акаунт, про авторизацию в ngrok через терминал можно узнать тут: [Setup & Installation](https://dashboard.ngrok.com/get-started/setup/macos)
- Если была выполнена авторизацию через корпоративный аккаунт, то можно запустить ngrok tunnel следующими командами на выбор **(3000 - порт, на котором запущен проект на локалке)**:
  ```shell
   # № 1
   ngrok tunnel --label edge=edghts_2cM3nRLw8CI9EJc1ACGyb1bMFti 3000
   # или воспользоваться второй командой
   # № 2
   ngrok tunnel --label edge=edghts_2cjqgH7PN07CUnDj1d1XKA82ciX 3000
  ```

##### 2.2.2. Запуск в telegram webapp

Для запуска проекта в telegram webapp можно воспользоваться уже готовым ботом [Swipy Dating](https://t.me/swipy_dating_bot). Данный бот поддерживает команду для запуска другого проекта по предоставленной https ссылке.

- Необходимо отправить в бота одно из следующих сообщений:
  ```sh
    # если запущено на ngrok tunnel № 1
    /link https://c36e9febfb56b7f6.ngrok.app
    # если запущено на ngrok tunnel № 2
    /link https://e70d1cf77f746acd.ngrok.app
  ```
- Открыть telegram webapp приложение по высланной от бота ссылке

##### Готово! Проект готов к разработке.

- После запуска ngrok его можно больше не перезапускать, главное чтобы он был активен в запущенном терминале.
- Для просмотра внесенных изменений в проекте можно сделать ребилд (`npm run build & npm run start`) и переоткрыть telegram webapp приложение. Или можно запустить проект через `npm run dev` , тогда изменения будут приходит автоматически, но это может быть не быстро из-за проксирования приложения через ngrok.

# 🏗️ Структура проекта

На проекте используется структура FSD

- ссылка на подробную документацию FSD структуры [Feature-Sliced Design](https://feature-sliced.design/)
- ссылка на статью из документации FSD по использованию данной структуры с nextjs [Dealing with App Router](https://feature-sliced.design/docs/guides/tech/with-nextjs#app-router)
- На данном проекте структура немного адаптирована под nextjs.
  - `app` - директория для роутинга и страниц. Заменяет директорию `page` из FSD стиля
  - `public` - директория для хранения медиа, конфигов и подобное. Объединяет в себе фолдер **public** из базовой структуры проекта на nextjs и фолдер **app** согласно идеологии FSD
  - `widgets` - директория согласно идеологии FSD
  - `entities` - директория согласно идеологии FSD
  - `features` - директория согласно идеологии FSD
  - `shared` - директория согласно идеологии FSD

# 🔒 Предотвращение закрытия окна telegram webapp

**МОЖНО ОЗНАКОМИТСЯ С ДЕМО ПРОЕКТОМ, ГДЕ ПОКАЗАНО ВСЕ НА ПРИМЕРАХ** ВОТ ССЫЛКА НА РЕПОЗИТОРИЙ: https://github.com/KIWIbird717/prevent-tg-webapp-con-swipe-close

Окно telegram webapp может закрываться при свайпе вниз, если пользователь долистал с низу страницы до верха, или когда пользователь находится на странице, где нет скрола (то-есть контент помещается по высоте экрана) то если он сделает свайп вниз, то окно telegram webapp также свернется. Для каждого из этих случаев предусмотрено 3 сценария предотвращения закрытия окна telegram webapp:

##### 1. Для страниц со скролом.

Если на странице размещен контент который не помещается по ширине экрана (то-есть появляется скрол), то нужно использовать layout обвертку `View`. При использовании данной обертки предотвращается закрытие окна telegram webapp при скроле сверху вниз в начале страницы.

Пример:

```tsx
export default function WithViewFull() {
  return (
    <View className="flex flex-col gap-4 p-4">
      <Link href="./" className="rounded-xl bg-slate-100 px-4 py-2 text-[20px]">
        Назад
      </Link>
      <h1 className="text-center text-[40px] font-bold leading-[45px]">
        <span className="text-emerald-500">View</span> компонент и страница со скролом
      </h1>

      <PseduoContent />
    </View>
  );
}
```

##### 2. Для страниц без скрола. Кейс № 1

Если на странице контент помещается по ширине экрана без скрола, то для предотвращения закрытия страницы по свайпу внизу, можно также использовать обвертку `View`, контент от этого никак не изменится, но пропадет закрытие окна webapp по скролу вниз.

Это самый оптимальный вариант и в большинстве кейсов на страницах лучше использовать обвертку `View`. Но у первых 2-х способов есть небольшой минус в виде оверскрола страницы в самой верхней и нижней части страницы. Для предотвращения такого поведения есть 3-й способ.

#### 3. Для страниц без скрола. Кейс № 2

Если требуется полностью зафиксировать страницу с контентом который полностью помещается на экране (то-есть скрол при этом отсутствует) и при этом предотвратить закрытие окна telegram webapp, то для этого можно использовать хук `usePreventScroll`. Данный хук полностью блокирует эвент скрола в компоненте.
Описание хука и примеры использования в самом файле с хуком `usePreventScroll.ts`

# 🈶 Локализация

Локализация имплементирована с помощью библиотеки `next-intl`. Более подробная документация тут: [Документация для next-intl](https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing). Локализация на проекте была выполнена по инструкции с вышеупомянутого источника.

### Где находятся все переводы?

Переводы хранятся в фолдере `./public/localization` в файлах `ru.json` и `en.json`

### Как использовать переводы в компонентах?

Для создания переводов на сайте нужно просто воспользоваться хуком `useTranslations`. Данный хук работает как на client-side, так и на server-side. Пример использования:

```tsx
import { useTranslations } from "next-intl";

export function HelloComponent() {
  // в функцию можно сразу передать рабочий путь
  const t = useTranslations("Main");

  return <h1>{t("hello")}</h1>;
}
```

Внимание! Для того чтобы хук работал на client-side нужно обвернуть компонент в котором используется хук в `NextIntlClientProvider` и передать туда значение из хука `useMessages`. Пример:

```tsx
export default function Layout({ children }: { children: ReactNode }) {
  // этот хук можно использовать и в серверном компоненте
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <section>{children}</section>
    </NextIntlClientProvider>
  );
}
```

### Реализация установки нужного языка

1. При отправке запроса на сервер next для получения бандла отрабатывает `middleware`, который стразу перенаправляет пользователя по дефолтному указанному в настройках языку `en` (добавляет `../en` в конец роута). В middleware отключена автоматическое обнаружение языка.
2. В фале `i18n.ts` в корне проекта происходит запрос на сервер для получения необходимого перевода
3. Затем пользователь попадает на страницу первой загрузки приложения на дефолтный роут `{{ host }}/en`.


# 🖨️ Logger

Класс Logger выводит сообщения в консоль в зависимости от настроек окружения. Использование логера на проекте удобно тем, что можно легко отличить контекстные сообщения, которые пишутся в терминал от фреймворка или вебпака от лично логируемых сообщений. 
Данный логер работает в терминале на node и в среде браузера

## Get started with logger

Использовать вместо обычного console.log, console.error, console.warn. Данный
класс должен использоваться только во время разработки. После сборки проекта
отключить вывод сообщений в консоль в .env файле поставив переменную окружения
`NEXT_PUBLIC_LOGGER_STATE = off`. Изначально переменная окружения `NEXT_PUBLIC_LOGGER_STATE`

стоит в значении `on`.

Если в логере нужно отслеживать где была вызвана ошибка, то в переменной окружения
в .env файле нужно поставить переменную окружения `NEXT_PUBLIC_NEXT_PUBLIC_TRACE_ERRORS = true`.
Таким образом в консоли будет отображаться стек вызовов функций.

## Usage

```typescript
// Логирование без контекста
Logger.log("log message"); // [LOG] 05:10:21 - log message
Logger.debug("debug message"); // [DEBUG] 05:10:21 - debug message
Logger.warn("warn message"); // [WARN] 05:10:21 - warn message
Logger.error("error message"); // [ERROR] 05:10:21 - error message

// Логирование DiceRollHeader контекста
const logger = new Logger("context");
logger.log("log message with context"); // [LOG] 05:10:21 [context] - log message with context
logger.debug("debug message with context"); // [DEBUG] 05:10:21 [context] - debug message with context
logger.warn("warn message with context"); // [WARN] 05:10:21 [context] - warn message with context
logger.error("error message with context"); // [ERROR] 05:10:21 [context] - error message with context
```
