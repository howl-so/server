import neo4j, { QueryResult, Session, SessionMode, session } from "neo4j-driver";
import { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD, GRAPH } from "./util/secrets";

const WRITE = session.WRITE;
const READ = session.READ;

declare type Dict<Key extends PropertyKey = PropertyKey, Value = any> = {
  [K in Key]: Value;
};

type GraphResult = QueryResult<Dict<PropertyKey, any>>;

const graph = neo4j.driver(NEO4J_URI!!, neo4j.auth.basic(NEO4J_USERNAME!!, NEO4J_PASSWORD!!));

const start = (defaultAccessMode: SessionMode): Session => graph.session({ defaultAccessMode, database: GRAPH });

export const read = async (cypher: string, params = {}): Promise<GraphResult> => {
  const session = start(READ);
  const queryResult = await session.run(cypher, params);
  session.close();
  return queryResult;
};

export const write = async (cypher: string, params = {}): Promise<GraphResult> => {
  const session = start(WRITE);
  const queryResult = await session.run(cypher, params);
  session.close();
  return queryResult;
};

export default graph;
