const Database = require('better-sqlite3');

var bd = new Database('./bd/esmforum.db');

function reconfig(nome) {
  bd = new Database(nome);
}

function query(query, params) {
  return bd.prepare(query).get(params);
}

function queryAll(query, params) {
  return bd.prepare(query).all(params);
}

function exec(statement, params) {
  bd.prepare(statement).run(params);
}

exports.reconfig = reconfig;
exports.query = query;
exports.queryAll = queryAll;
exports.exec = exec;