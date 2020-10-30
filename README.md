# Kawesqar api
This a nodejs express version for API Kawesqar.
###Run in develop mode
<code>npm run dev:start</code>

####Sequelize
This project run with SQL Sever. Is necessary validate sequelize datetime format go to data-types.js in sequelize:
node_modules/sequelize/lib/data-types.js:447

    return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
    to
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');

###To publish
    npm run build;

Copy this files to server:
- package.json
- build folder (rename to src)
- babelrc

In server run:  npm install
;)
