###run with nodemon
<code>npm run dev</code>
###classic run
<code>npm start</code>
###Run with las configuration
<code>npm run dev:start</code>

####Sequelize
For run wit datetime format go to data-types.js in sequelize:
node_modules/sequelize/lib/data-types.js:447

    return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
    to
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
###To publish
    npm run build;

Copy this files to server:
- package.json
- build (rename to src)
- babelrc

In server run:  npm install
;)



