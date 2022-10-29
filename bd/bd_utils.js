import Database from 'better-sqlite3';
const bd = new Database('./bd/esmforum.db');

function bd_queryAll(query) {
  return bd.prepare(query).all();
}

function bd_exec(statement, params) {
  bd.prepare(statement).run(params);
}

export { bd_queryAll, bd_exec }