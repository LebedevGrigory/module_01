# git-config

git config --global user.name “Григорий Лебедев”
git config --global user.email “lga91@mail.ru”

git config --list # посмотреть настройки

git config --global core.safecrlf warn
git config --global init.defaultBranch main # Ветка по умолчанию
git config --global core.autocrlf input


git init # инициализация репозитория
git add . # добавление всех файлов в track
git commit -m 'описание' # сделать коммит
git status   # показывает текущий статус
git diff  # показывает текущие изменения
git diff --color-words # развернутые изменения
git checkout # вернуться к последнему
