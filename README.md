###run with nodemon
<code>npm run dev</code>
###classic run
<code>npm start</code>

####Sequelize
For run wit datetime format go to data-types.js in sequelize:
node_modules/sequelize/lib/data-types.js:447

    return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
    to
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');