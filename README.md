# Тестовое задание - АПРИКОД

## Примечание

Так как json-server не поддерживает авторизацию, было принято решение 
добавить дополнительный пакет json-server-auth.
```
npm install -D json-server-auth
```

json-server-auth добавляет простой поток аутентификации на основе JWT.  

Так же GET запросы фильтрации были сделны под другому, так как json-server,
не поддерживает query-параметры : all, done, undone.

## Запуск

```
json-server db.json -m ./node_modules/json-server-auth --port 5000
```
```
npm start
```