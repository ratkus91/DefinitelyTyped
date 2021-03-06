import { GraphQLError } from "../error/GraphQLError";
import { ValueNode } from "../language/ast";
import { GraphQLInputType } from "../type/definition";

/**
 * Utility which determines if a value literal node is valid for an input type.
 *
 * Deprecated. Rely on validation for documents containing literal values.
 */
export function isValidLiteralValue(type: GraphQLInputType, valueNode: ValueNode): ReadonlyArray<GraphQLError>;
