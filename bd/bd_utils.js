import Database from 'better-sqlite3';

const bd = new Database('./bd/esmforum.db');

function bd_query(query, params) {
  return bd.prepare(query).get(params);
}

function bd_queryAll(query, params) {
  return bd.prepare(query).all(params);
}

function bd_exec(statement, params) {
  bd.prepare(statement).run(params);
}

export { bd_query, bd_queryAll, bd_exec }