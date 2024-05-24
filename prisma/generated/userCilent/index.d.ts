
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Characters
 * 
 */
export type Characters = $Result.DefaultSelection<Prisma.$CharactersPayload>
/**
 * Model Inventorys
 * 
 */
export type Inventorys = $Result.DefaultSelection<Prisma.$InventorysPayload>
/**
 * Model Equipments
 * 
 */
export type Equipments = $Result.DefaultSelection<Prisma.$EquipmentsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.characters`: Exposes CRUD operations for the **Characters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.characters.findMany()
    * ```
    */
  get characters(): Prisma.CharactersDelegate<ExtArgs>;

  /**
   * `prisma.inventorys`: Exposes CRUD operations for the **Inventorys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventorys
    * const inventorys = await prisma.inventorys.findMany()
    * ```
    */
  get inventorys(): Prisma.InventorysDelegate<ExtArgs>;

  /**
   * `prisma.equipments`: Exposes CRUD operations for the **Equipments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipments
    * const equipments = await prisma.equipments.findMany()
    * ```
    */
  get equipments(): Prisma.EquipmentsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Characters: 'Characters',
    Inventorys: 'Inventorys',
    Equipments: 'Equipments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'characters' | 'inventorys' | 'equipments'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Characters: {
        payload: Prisma.$CharactersPayload<ExtArgs>
        fields: Prisma.CharactersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharactersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharactersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findFirst: {
            args: Prisma.CharactersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharactersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findMany: {
            args: Prisma.CharactersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>[]
          }
          create: {
            args: Prisma.CharactersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          createMany: {
            args: Prisma.CharactersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharactersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          update: {
            args: Prisma.CharactersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          deleteMany: {
            args: Prisma.CharactersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharactersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharactersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          aggregate: {
            args: Prisma.CharactersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacters>
          }
          groupBy: {
            args: Prisma.CharactersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharactersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharactersCountArgs<ExtArgs>,
            result: $Utils.Optional<CharactersCountAggregateOutputType> | number
          }
        }
      }
      Inventorys: {
        payload: Prisma.$InventorysPayload<ExtArgs>
        fields: Prisma.InventorysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventorysFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventorysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventorysFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventorysPayload>
          }
          findFirst: {
            args: Prisma.InventorysFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventorysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventorysFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventorysPayload>
          }
          findMany: {
            args: Prisma.InventorysFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventorysPayload>[]
          }
          create: {
            args: Prisma.InventorysCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventorysPayload>
          }
          createMany: {
            args: Prisma.InventorysCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InventorysDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventorysPayload>
          }
          update: {
            args: Prisma.InventorysUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventorysPayload>
          }
          deleteMany: {
            args: Prisma.InventorysDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InventorysUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InventorysUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InventorysPayload>
          }
          aggregate: {
            args: Prisma.InventorysAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInventorys>
          }
          groupBy: {
            args: Prisma.InventorysGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InventorysGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventorysCountArgs<ExtArgs>,
            result: $Utils.Optional<InventorysCountAggregateOutputType> | number
          }
        }
      }
      Equipments: {
        payload: Prisma.$EquipmentsPayload<ExtArgs>
        fields: Prisma.EquipmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentsPayload>
          }
          findFirst: {
            args: Prisma.EquipmentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentsPayload>
          }
          findMany: {
            args: Prisma.EquipmentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentsPayload>[]
          }
          create: {
            args: Prisma.EquipmentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentsPayload>
          }
          createMany: {
            args: Prisma.EquipmentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EquipmentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentsPayload>
          }
          update: {
            args: Prisma.EquipmentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentsPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EquipmentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentsPayload>
          }
          aggregate: {
            args: Prisma.EquipmentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEquipments>
          }
          groupBy: {
            args: Prisma.EquipmentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EquipmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentsCountArgs<ExtArgs>,
            result: $Utils.Optional<EquipmentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Characters: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Characters?: boolean | UsersCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
  }


  /**
   * Count Type CharactersCountOutputType
   */

  export type CharactersCountOutputType = {
    Inventorys: number
    Equipments: number
  }

  export type CharactersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Inventorys?: boolean | CharactersCountOutputTypeCountInventorysArgs
    Equipments?: boolean | CharactersCountOutputTypeCountEquipmentsArgs
  }

  // Custom InputTypes
  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersCountOutputType
     */
    select?: CharactersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountInventorysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventorysWhereInput
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    user_pw: string | null
    user_name: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    user_pw: string | null
    user_name: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    user_pw: number
    user_name: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    user_pw?: true
    user_name?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    user_pw?: true
    user_name?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    user_pw?: true
    user_name?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    user_pw: string
    user_name: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_pw?: boolean
    user_name?: boolean
    Characters?: boolean | Users$CharactersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_id?: boolean
    user_pw?: boolean
    user_name?: boolean
  }


  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Characters?: boolean | Users$CharactersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Characters: Prisma.$CharactersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      user_pw: string
      user_name: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Characters<T extends Users$CharactersArgs<ExtArgs> = {}>(args?: Subset<T, Users$CharactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'String'>
    readonly user_pw: FieldRef<"Users", 'String'>
    readonly user_name: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.Characters
   */
  export type Users$CharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    cursor?: CharactersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Characters
   */

  export type AggregateCharacters = {
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  export type CharactersAvgAggregateOutputType = {
    character_id: number | null
    health: number | null
    power: number | null
    money: number | null
  }

  export type CharactersSumAggregateOutputType = {
    character_id: number | null
    health: number | null
    power: number | null
    money: number | null
  }

  export type CharactersMinAggregateOutputType = {
    character_id: number | null
    User_id: string | null
    character_name: string | null
    health: number | null
    power: number | null
    money: number | null
  }

  export type CharactersMaxAggregateOutputType = {
    character_id: number | null
    User_id: string | null
    character_name: string | null
    health: number | null
    power: number | null
    money: number | null
  }

  export type CharactersCountAggregateOutputType = {
    character_id: number
    User_id: number
    character_name: number
    health: number
    power: number
    money: number
    _all: number
  }


  export type CharactersAvgAggregateInputType = {
    character_id?: true
    health?: true
    power?: true
    money?: true
  }

  export type CharactersSumAggregateInputType = {
    character_id?: true
    health?: true
    power?: true
    money?: true
  }

  export type CharactersMinAggregateInputType = {
    character_id?: true
    User_id?: true
    character_name?: true
    health?: true
    power?: true
    money?: true
  }

  export type CharactersMaxAggregateInputType = {
    character_id?: true
    User_id?: true
    character_name?: true
    health?: true
    power?: true
    money?: true
  }

  export type CharactersCountAggregateInputType = {
    character_id?: true
    User_id?: true
    character_name?: true
    health?: true
    power?: true
    money?: true
    _all?: true
  }

  export type CharactersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to aggregate.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharactersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharactersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharactersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharactersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharactersMaxAggregateInputType
  }

  export type GetCharactersAggregateType<T extends CharactersAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacters[P]>
      : GetScalarType<T[P], AggregateCharacters[P]>
  }




  export type CharactersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithAggregationInput | CharactersOrderByWithAggregationInput[]
    by: CharactersScalarFieldEnum[] | CharactersScalarFieldEnum
    having?: CharactersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharactersCountAggregateInputType | true
    _avg?: CharactersAvgAggregateInputType
    _sum?: CharactersSumAggregateInputType
    _min?: CharactersMinAggregateInputType
    _max?: CharactersMaxAggregateInputType
  }

  export type CharactersGroupByOutputType = {
    character_id: number
    User_id: string
    character_name: string
    health: number
    power: number
    money: number
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  type GetCharactersGroupByPayload<T extends CharactersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharactersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharactersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharactersGroupByOutputType[P]>
            : GetScalarType<T[P], CharactersGroupByOutputType[P]>
        }
      >
    >


  export type CharactersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    character_id?: boolean
    User_id?: boolean
    character_name?: boolean
    health?: boolean
    power?: boolean
    money?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Inventorys?: boolean | Characters$InventorysArgs<ExtArgs>
    Equipments?: boolean | Characters$EquipmentsArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characters"]>

  export type CharactersSelectScalar = {
    character_id?: boolean
    User_id?: boolean
    character_name?: boolean
    health?: boolean
    power?: boolean
    money?: boolean
  }


  export type CharactersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Inventorys?: boolean | Characters$InventorysArgs<ExtArgs>
    Equipments?: boolean | Characters$EquipmentsArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CharactersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characters"
    objects: {
      User: Prisma.$UsersPayload<ExtArgs>
      Inventorys: Prisma.$InventorysPayload<ExtArgs>[]
      Equipments: Prisma.$EquipmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      character_id: number
      User_id: string
      character_name: string
      health: number
      power: number
      money: number
    }, ExtArgs["result"]["characters"]>
    composites: {}
  }


  type CharactersGetPayload<S extends boolean | null | undefined | CharactersDefaultArgs> = $Result.GetResult<Prisma.$CharactersPayload, S>

  type CharactersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharactersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharactersCountAggregateInputType | true
    }

  export interface CharactersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characters'], meta: { name: 'Characters' } }
    /**
     * Find zero or one Characters that matches the filter.
     * @param {CharactersFindUniqueArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharactersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersFindUniqueArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Characters that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharactersFindUniqueOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharactersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharactersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindFirstArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Characters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharactersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.characters.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.characters.findMany({ take: 10 })
     * 
     * // Only select the `character_id`
     * const charactersWithCharacter_idOnly = await prisma.characters.findMany({ select: { character_id: true } })
     * 
    **/
    findMany<T extends CharactersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Characters.
     * @param {CharactersCreateArgs} args - Arguments to create a Characters.
     * @example
     * // Create one Characters
     * const Characters = await prisma.characters.create({
     *   data: {
     *     // ... data to create a Characters
     *   }
     * })
     * 
    **/
    create<T extends CharactersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersCreateArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Characters.
     * @param {CharactersCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const characters = await prisma.characters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharactersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Characters.
     * @param {CharactersDeleteArgs} args - Arguments to delete one Characters.
     * @example
     * // Delete one Characters
     * const Characters = await prisma.characters.delete({
     *   where: {
     *     // ... filter to delete one Characters
     *   }
     * })
     * 
    **/
    delete<T extends CharactersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersDeleteArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Characters.
     * @param {CharactersUpdateArgs} args - Arguments to update one Characters.
     * @example
     * // Update one Characters
     * const characters = await prisma.characters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharactersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpdateArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Characters.
     * @param {CharactersDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.characters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharactersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharactersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const characters = await prisma.characters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharactersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Characters.
     * @param {CharactersUpsertArgs} args - Arguments to update or create a Characters.
     * @example
     * // Update or create a Characters
     * const characters = await prisma.characters.upsert({
     *   create: {
     *     // ... data to create a Characters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characters we want to update
     *   }
     * })
    **/
    upsert<T extends CharactersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharactersUpsertArgs<ExtArgs>>
    ): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.characters.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharactersCountArgs>(
      args?: Subset<T, CharactersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharactersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharactersAggregateArgs>(args: Subset<T, CharactersAggregateArgs>): Prisma.PrismaPromise<GetCharactersAggregateType<T>>

    /**
     * Group by Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharactersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharactersGroupByArgs['orderBy'] }
        : { orderBy?: CharactersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharactersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharactersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characters model
   */
  readonly fields: CharactersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharactersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Inventorys<T extends Characters$InventorysArgs<ExtArgs> = {}>(args?: Subset<T, Characters$InventorysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventorysPayload<ExtArgs>, T, 'findMany'> | Null>;

    Equipments<T extends Characters$EquipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Characters$EquipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Characters model
   */ 
  interface CharactersFieldRefs {
    readonly character_id: FieldRef<"Characters", 'Int'>
    readonly User_id: FieldRef<"Characters", 'String'>
    readonly character_name: FieldRef<"Characters", 'String'>
    readonly health: FieldRef<"Characters", 'Int'>
    readonly power: FieldRef<"Characters", 'Int'>
    readonly money: FieldRef<"Characters", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Characters findUnique
   */
  export type CharactersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findUniqueOrThrow
   */
  export type CharactersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findFirst
   */
  export type CharactersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findFirstOrThrow
   */
  export type CharactersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findMany
   */
  export type CharactersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters create
   */
  export type CharactersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to create a Characters.
     */
    data: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
  }

  /**
   * Characters createMany
   */
  export type CharactersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharactersCreateManyInput | CharactersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characters update
   */
  export type CharactersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to update a Characters.
     */
    data: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
    /**
     * Choose, which Characters to update.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters updateMany
   */
  export type CharactersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters upsert
   */
  export type CharactersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The filter to search for the Characters to update in case it exists.
     */
    where: CharactersWhereUniqueInput
    /**
     * In case the Characters found by the `where` argument doesn't exist, create a new Characters with this data.
     */
    create: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
    /**
     * In case the Characters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
  }

  /**
   * Characters delete
   */
  export type CharactersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter which Characters to delete.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters deleteMany
   */
  export type CharactersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters.Inventorys
   */
  export type Characters$InventorysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
    where?: InventorysWhereInput
    orderBy?: InventorysOrderByWithRelationInput | InventorysOrderByWithRelationInput[]
    cursor?: InventorysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventorysScalarFieldEnum | InventorysScalarFieldEnum[]
  }

  /**
   * Characters.Equipments
   */
  export type Characters$EquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
    where?: EquipmentsWhereInput
    orderBy?: EquipmentsOrderByWithRelationInput | EquipmentsOrderByWithRelationInput[]
    cursor?: EquipmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentsScalarFieldEnum | EquipmentsScalarFieldEnum[]
  }

  /**
   * Characters without action
   */
  export type CharactersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
  }


  /**
   * Model Inventorys
   */

  export type AggregateInventorys = {
    _count: InventorysCountAggregateOutputType | null
    _avg: InventorysAvgAggregateOutputType | null
    _sum: InventorysSumAggregateOutputType | null
    _min: InventorysMinAggregateOutputType | null
    _max: InventorysMaxAggregateOutputType | null
  }

  export type InventorysAvgAggregateOutputType = {
    inventory_id: number | null
    Character_id: number | null
    item_code: number | null
    count: number | null
  }

  export type InventorysSumAggregateOutputType = {
    inventory_id: number | null
    Character_id: number | null
    item_code: number | null
    count: number | null
  }

  export type InventorysMinAggregateOutputType = {
    inventory_id: number | null
    Character_id: number | null
    item_code: number | null
    item_name: string | null
    count: number | null
  }

  export type InventorysMaxAggregateOutputType = {
    inventory_id: number | null
    Character_id: number | null
    item_code: number | null
    item_name: string | null
    count: number | null
  }

  export type InventorysCountAggregateOutputType = {
    inventory_id: number
    Character_id: number
    item_code: number
    item_name: number
    count: number
    _all: number
  }


  export type InventorysAvgAggregateInputType = {
    inventory_id?: true
    Character_id?: true
    item_code?: true
    count?: true
  }

  export type InventorysSumAggregateInputType = {
    inventory_id?: true
    Character_id?: true
    item_code?: true
    count?: true
  }

  export type InventorysMinAggregateInputType = {
    inventory_id?: true
    Character_id?: true
    item_code?: true
    item_name?: true
    count?: true
  }

  export type InventorysMaxAggregateInputType = {
    inventory_id?: true
    Character_id?: true
    item_code?: true
    item_name?: true
    count?: true
  }

  export type InventorysCountAggregateInputType = {
    inventory_id?: true
    Character_id?: true
    item_code?: true
    item_name?: true
    count?: true
    _all?: true
  }

  export type InventorysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventorys to aggregate.
     */
    where?: InventorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventorys to fetch.
     */
    orderBy?: InventorysOrderByWithRelationInput | InventorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventorys
    **/
    _count?: true | InventorysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventorysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventorysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventorysMaxAggregateInputType
  }

  export type GetInventorysAggregateType<T extends InventorysAggregateArgs> = {
        [P in keyof T & keyof AggregateInventorys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventorys[P]>
      : GetScalarType<T[P], AggregateInventorys[P]>
  }




  export type InventorysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventorysWhereInput
    orderBy?: InventorysOrderByWithAggregationInput | InventorysOrderByWithAggregationInput[]
    by: InventorysScalarFieldEnum[] | InventorysScalarFieldEnum
    having?: InventorysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventorysCountAggregateInputType | true
    _avg?: InventorysAvgAggregateInputType
    _sum?: InventorysSumAggregateInputType
    _min?: InventorysMinAggregateInputType
    _max?: InventorysMaxAggregateInputType
  }

  export type InventorysGroupByOutputType = {
    inventory_id: number
    Character_id: number
    item_code: number
    item_name: string
    count: number
    _count: InventorysCountAggregateOutputType | null
    _avg: InventorysAvgAggregateOutputType | null
    _sum: InventorysSumAggregateOutputType | null
    _min: InventorysMinAggregateOutputType | null
    _max: InventorysMaxAggregateOutputType | null
  }

  type GetInventorysGroupByPayload<T extends InventorysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventorysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventorysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventorysGroupByOutputType[P]>
            : GetScalarType<T[P], InventorysGroupByOutputType[P]>
        }
      >
    >


  export type InventorysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventory_id?: boolean
    Character_id?: boolean
    item_code?: boolean
    item_name?: boolean
    count?: boolean
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventorys"]>

  export type InventorysSelectScalar = {
    inventory_id?: boolean
    Character_id?: boolean
    item_code?: boolean
    item_name?: boolean
    count?: boolean
  }


  export type InventorysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
  }


  export type $InventorysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventorys"
    objects: {
      Character: Prisma.$CharactersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      inventory_id: number
      Character_id: number
      item_code: number
      item_name: string
      count: number
    }, ExtArgs["result"]["inventorys"]>
    composites: {}
  }


  type InventorysGetPayload<S extends boolean | null | undefined | InventorysDefaultArgs> = $Result.GetResult<Prisma.$InventorysPayload, S>

  type InventorysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventorysFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventorysCountAggregateInputType | true
    }

  export interface InventorysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventorys'], meta: { name: 'Inventorys' } }
    /**
     * Find zero or one Inventorys that matches the filter.
     * @param {InventorysFindUniqueArgs} args - Arguments to find a Inventorys
     * @example
     * // Get one Inventorys
     * const inventorys = await prisma.inventorys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InventorysFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InventorysFindUniqueArgs<ExtArgs>>
    ): Prisma__InventorysClient<$Result.GetResult<Prisma.$InventorysPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Inventorys that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventorysFindUniqueOrThrowArgs} args - Arguments to find a Inventorys
     * @example
     * // Get one Inventorys
     * const inventorys = await prisma.inventorys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InventorysFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InventorysFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InventorysClient<$Result.GetResult<Prisma.$InventorysPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Inventorys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorysFindFirstArgs} args - Arguments to find a Inventorys
     * @example
     * // Get one Inventorys
     * const inventorys = await prisma.inventorys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InventorysFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InventorysFindFirstArgs<ExtArgs>>
    ): Prisma__InventorysClient<$Result.GetResult<Prisma.$InventorysPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Inventorys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorysFindFirstOrThrowArgs} args - Arguments to find a Inventorys
     * @example
     * // Get one Inventorys
     * const inventorys = await prisma.inventorys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InventorysFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InventorysFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InventorysClient<$Result.GetResult<Prisma.$InventorysPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Inventorys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventorys
     * const inventorys = await prisma.inventorys.findMany()
     * 
     * // Get first 10 Inventorys
     * const inventorys = await prisma.inventorys.findMany({ take: 10 })
     * 
     * // Only select the `inventory_id`
     * const inventorysWithInventory_idOnly = await prisma.inventorys.findMany({ select: { inventory_id: true } })
     * 
    **/
    findMany<T extends InventorysFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InventorysFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventorysPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Inventorys.
     * @param {InventorysCreateArgs} args - Arguments to create a Inventorys.
     * @example
     * // Create one Inventorys
     * const Inventorys = await prisma.inventorys.create({
     *   data: {
     *     // ... data to create a Inventorys
     *   }
     * })
     * 
    **/
    create<T extends InventorysCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InventorysCreateArgs<ExtArgs>>
    ): Prisma__InventorysClient<$Result.GetResult<Prisma.$InventorysPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Inventorys.
     * @param {InventorysCreateManyArgs} args - Arguments to create many Inventorys.
     * @example
     * // Create many Inventorys
     * const inventorys = await prisma.inventorys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends InventorysCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InventorysCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventorys.
     * @param {InventorysDeleteArgs} args - Arguments to delete one Inventorys.
     * @example
     * // Delete one Inventorys
     * const Inventorys = await prisma.inventorys.delete({
     *   where: {
     *     // ... filter to delete one Inventorys
     *   }
     * })
     * 
    **/
    delete<T extends InventorysDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InventorysDeleteArgs<ExtArgs>>
    ): Prisma__InventorysClient<$Result.GetResult<Prisma.$InventorysPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Inventorys.
     * @param {InventorysUpdateArgs} args - Arguments to update one Inventorys.
     * @example
     * // Update one Inventorys
     * const inventorys = await prisma.inventorys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InventorysUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InventorysUpdateArgs<ExtArgs>>
    ): Prisma__InventorysClient<$Result.GetResult<Prisma.$InventorysPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Inventorys.
     * @param {InventorysDeleteManyArgs} args - Arguments to filter Inventorys to delete.
     * @example
     * // Delete a few Inventorys
     * const { count } = await prisma.inventorys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InventorysDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InventorysDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventorys
     * const inventorys = await prisma.inventorys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InventorysUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InventorysUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventorys.
     * @param {InventorysUpsertArgs} args - Arguments to update or create a Inventorys.
     * @example
     * // Update or create a Inventorys
     * const inventorys = await prisma.inventorys.upsert({
     *   create: {
     *     // ... data to create a Inventorys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventorys we want to update
     *   }
     * })
    **/
    upsert<T extends InventorysUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InventorysUpsertArgs<ExtArgs>>
    ): Prisma__InventorysClient<$Result.GetResult<Prisma.$InventorysPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Inventorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorysCountArgs} args - Arguments to filter Inventorys to count.
     * @example
     * // Count the number of Inventorys
     * const count = await prisma.inventorys.count({
     *   where: {
     *     // ... the filter for the Inventorys we want to count
     *   }
     * })
    **/
    count<T extends InventorysCountArgs>(
      args?: Subset<T, InventorysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventorysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventorysAggregateArgs>(args: Subset<T, InventorysAggregateArgs>): Prisma.PrismaPromise<GetInventorysAggregateType<T>>

    /**
     * Group by Inventorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventorysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventorysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventorysGroupByArgs['orderBy'] }
        : { orderBy?: InventorysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventorysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventorysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventorys model
   */
  readonly fields: InventorysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventorys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventorysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Inventorys model
   */ 
  interface InventorysFieldRefs {
    readonly inventory_id: FieldRef<"Inventorys", 'Int'>
    readonly Character_id: FieldRef<"Inventorys", 'Int'>
    readonly item_code: FieldRef<"Inventorys", 'Int'>
    readonly item_name: FieldRef<"Inventorys", 'String'>
    readonly count: FieldRef<"Inventorys", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inventorys findUnique
   */
  export type InventorysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
    /**
     * Filter, which Inventorys to fetch.
     */
    where: InventorysWhereUniqueInput
  }

  /**
   * Inventorys findUniqueOrThrow
   */
  export type InventorysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
    /**
     * Filter, which Inventorys to fetch.
     */
    where: InventorysWhereUniqueInput
  }

  /**
   * Inventorys findFirst
   */
  export type InventorysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
    /**
     * Filter, which Inventorys to fetch.
     */
    where?: InventorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventorys to fetch.
     */
    orderBy?: InventorysOrderByWithRelationInput | InventorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventorys.
     */
    cursor?: InventorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventorys.
     */
    distinct?: InventorysScalarFieldEnum | InventorysScalarFieldEnum[]
  }

  /**
   * Inventorys findFirstOrThrow
   */
  export type InventorysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
    /**
     * Filter, which Inventorys to fetch.
     */
    where?: InventorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventorys to fetch.
     */
    orderBy?: InventorysOrderByWithRelationInput | InventorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventorys.
     */
    cursor?: InventorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventorys.
     */
    distinct?: InventorysScalarFieldEnum | InventorysScalarFieldEnum[]
  }

  /**
   * Inventorys findMany
   */
  export type InventorysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
    /**
     * Filter, which Inventorys to fetch.
     */
    where?: InventorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventorys to fetch.
     */
    orderBy?: InventorysOrderByWithRelationInput | InventorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventorys.
     */
    cursor?: InventorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventorys.
     */
    skip?: number
    distinct?: InventorysScalarFieldEnum | InventorysScalarFieldEnum[]
  }

  /**
   * Inventorys create
   */
  export type InventorysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventorys.
     */
    data: XOR<InventorysCreateInput, InventorysUncheckedCreateInput>
  }

  /**
   * Inventorys createMany
   */
  export type InventorysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventorys.
     */
    data: InventorysCreateManyInput | InventorysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventorys update
   */
  export type InventorysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventorys.
     */
    data: XOR<InventorysUpdateInput, InventorysUncheckedUpdateInput>
    /**
     * Choose, which Inventorys to update.
     */
    where: InventorysWhereUniqueInput
  }

  /**
   * Inventorys updateMany
   */
  export type InventorysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventorys.
     */
    data: XOR<InventorysUpdateManyMutationInput, InventorysUncheckedUpdateManyInput>
    /**
     * Filter which Inventorys to update
     */
    where?: InventorysWhereInput
  }

  /**
   * Inventorys upsert
   */
  export type InventorysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventorys to update in case it exists.
     */
    where: InventorysWhereUniqueInput
    /**
     * In case the Inventorys found by the `where` argument doesn't exist, create a new Inventorys with this data.
     */
    create: XOR<InventorysCreateInput, InventorysUncheckedCreateInput>
    /**
     * In case the Inventorys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventorysUpdateInput, InventorysUncheckedUpdateInput>
  }

  /**
   * Inventorys delete
   */
  export type InventorysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
    /**
     * Filter which Inventorys to delete.
     */
    where: InventorysWhereUniqueInput
  }

  /**
   * Inventorys deleteMany
   */
  export type InventorysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventorys to delete
     */
    where?: InventorysWhereInput
  }

  /**
   * Inventorys without action
   */
  export type InventorysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventorys
     */
    select?: InventorysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventorysInclude<ExtArgs> | null
  }


  /**
   * Model Equipments
   */

  export type AggregateEquipments = {
    _count: EquipmentsCountAggregateOutputType | null
    _avg: EquipmentsAvgAggregateOutputType | null
    _sum: EquipmentsSumAggregateOutputType | null
    _min: EquipmentsMinAggregateOutputType | null
    _max: EquipmentsMaxAggregateOutputType | null
  }

  export type EquipmentsAvgAggregateOutputType = {
    equipment_id: number | null
    Character_id: number | null
    item_code: number | null
  }

  export type EquipmentsSumAggregateOutputType = {
    equipment_id: number | null
    Character_id: number | null
    item_code: number | null
  }

  export type EquipmentsMinAggregateOutputType = {
    equipment_id: number | null
    Character_id: number | null
    item_code: number | null
    item_name: string | null
  }

  export type EquipmentsMaxAggregateOutputType = {
    equipment_id: number | null
    Character_id: number | null
    item_code: number | null
    item_name: string | null
  }

  export type EquipmentsCountAggregateOutputType = {
    equipment_id: number
    Character_id: number
    item_code: number
    item_name: number
    _all: number
  }


  export type EquipmentsAvgAggregateInputType = {
    equipment_id?: true
    Character_id?: true
    item_code?: true
  }

  export type EquipmentsSumAggregateInputType = {
    equipment_id?: true
    Character_id?: true
    item_code?: true
  }

  export type EquipmentsMinAggregateInputType = {
    equipment_id?: true
    Character_id?: true
    item_code?: true
    item_name?: true
  }

  export type EquipmentsMaxAggregateInputType = {
    equipment_id?: true
    Character_id?: true
    item_code?: true
    item_name?: true
  }

  export type EquipmentsCountAggregateInputType = {
    equipment_id?: true
    Character_id?: true
    item_code?: true
    item_name?: true
    _all?: true
  }

  export type EquipmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipments to aggregate.
     */
    where?: EquipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipments to fetch.
     */
    orderBy?: EquipmentsOrderByWithRelationInput | EquipmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipments
    **/
    _count?: true | EquipmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentsMaxAggregateInputType
  }

  export type GetEquipmentsAggregateType<T extends EquipmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipments[P]>
      : GetScalarType<T[P], AggregateEquipments[P]>
  }




  export type EquipmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentsWhereInput
    orderBy?: EquipmentsOrderByWithAggregationInput | EquipmentsOrderByWithAggregationInput[]
    by: EquipmentsScalarFieldEnum[] | EquipmentsScalarFieldEnum
    having?: EquipmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentsCountAggregateInputType | true
    _avg?: EquipmentsAvgAggregateInputType
    _sum?: EquipmentsSumAggregateInputType
    _min?: EquipmentsMinAggregateInputType
    _max?: EquipmentsMaxAggregateInputType
  }

  export type EquipmentsGroupByOutputType = {
    equipment_id: number
    Character_id: number
    item_code: number
    item_name: string
    _count: EquipmentsCountAggregateOutputType | null
    _avg: EquipmentsAvgAggregateOutputType | null
    _sum: EquipmentsSumAggregateOutputType | null
    _min: EquipmentsMinAggregateOutputType | null
    _max: EquipmentsMaxAggregateOutputType | null
  }

  type GetEquipmentsGroupByPayload<T extends EquipmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentsGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentsGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    equipment_id?: boolean
    Character_id?: boolean
    item_code?: boolean
    item_name?: boolean
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipments"]>

  export type EquipmentsSelectScalar = {
    equipment_id?: boolean
    Character_id?: boolean
    item_code?: boolean
    item_name?: boolean
  }


  export type EquipmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Character?: boolean | CharactersDefaultArgs<ExtArgs>
  }


  export type $EquipmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipments"
    objects: {
      Character: Prisma.$CharactersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      equipment_id: number
      Character_id: number
      item_code: number
      item_name: string
    }, ExtArgs["result"]["equipments"]>
    composites: {}
  }


  type EquipmentsGetPayload<S extends boolean | null | undefined | EquipmentsDefaultArgs> = $Result.GetResult<Prisma.$EquipmentsPayload, S>

  type EquipmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EquipmentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EquipmentsCountAggregateInputType | true
    }

  export interface EquipmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipments'], meta: { name: 'Equipments' } }
    /**
     * Find zero or one Equipments that matches the filter.
     * @param {EquipmentsFindUniqueArgs} args - Arguments to find a Equipments
     * @example
     * // Get one Equipments
     * const equipments = await prisma.equipments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EquipmentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentsFindUniqueArgs<ExtArgs>>
    ): Prisma__EquipmentsClient<$Result.GetResult<Prisma.$EquipmentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Equipments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EquipmentsFindUniqueOrThrowArgs} args - Arguments to find a Equipments
     * @example
     * // Get one Equipments
     * const equipments = await prisma.equipments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EquipmentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EquipmentsClient<$Result.GetResult<Prisma.$EquipmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Equipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentsFindFirstArgs} args - Arguments to find a Equipments
     * @example
     * // Get one Equipments
     * const equipments = await prisma.equipments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EquipmentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentsFindFirstArgs<ExtArgs>>
    ): Prisma__EquipmentsClient<$Result.GetResult<Prisma.$EquipmentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Equipments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentsFindFirstOrThrowArgs} args - Arguments to find a Equipments
     * @example
     * // Get one Equipments
     * const equipments = await prisma.equipments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EquipmentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EquipmentsClient<$Result.GetResult<Prisma.$EquipmentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Equipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipments
     * const equipments = await prisma.equipments.findMany()
     * 
     * // Get first 10 Equipments
     * const equipments = await prisma.equipments.findMany({ take: 10 })
     * 
     * // Only select the `equipment_id`
     * const equipmentsWithEquipment_idOnly = await prisma.equipments.findMany({ select: { equipment_id: true } })
     * 
    **/
    findMany<T extends EquipmentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Equipments.
     * @param {EquipmentsCreateArgs} args - Arguments to create a Equipments.
     * @example
     * // Create one Equipments
     * const Equipments = await prisma.equipments.create({
     *   data: {
     *     // ... data to create a Equipments
     *   }
     * })
     * 
    **/
    create<T extends EquipmentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentsCreateArgs<ExtArgs>>
    ): Prisma__EquipmentsClient<$Result.GetResult<Prisma.$EquipmentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Equipments.
     * @param {EquipmentsCreateManyArgs} args - Arguments to create many Equipments.
     * @example
     * // Create many Equipments
     * const equipments = await prisma.equipments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends EquipmentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Equipments.
     * @param {EquipmentsDeleteArgs} args - Arguments to delete one Equipments.
     * @example
     * // Delete one Equipments
     * const Equipments = await prisma.equipments.delete({
     *   where: {
     *     // ... filter to delete one Equipments
     *   }
     * })
     * 
    **/
    delete<T extends EquipmentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentsDeleteArgs<ExtArgs>>
    ): Prisma__EquipmentsClient<$Result.GetResult<Prisma.$EquipmentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Equipments.
     * @param {EquipmentsUpdateArgs} args - Arguments to update one Equipments.
     * @example
     * // Update one Equipments
     * const equipments = await prisma.equipments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EquipmentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentsUpdateArgs<ExtArgs>>
    ): Prisma__EquipmentsClient<$Result.GetResult<Prisma.$EquipmentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Equipments.
     * @param {EquipmentsDeleteManyArgs} args - Arguments to filter Equipments to delete.
     * @example
     * // Delete a few Equipments
     * const { count } = await prisma.equipments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EquipmentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipments
     * const equipments = await prisma.equipments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EquipmentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Equipments.
     * @param {EquipmentsUpsertArgs} args - Arguments to update or create a Equipments.
     * @example
     * // Update or create a Equipments
     * const equipments = await prisma.equipments.upsert({
     *   create: {
     *     // ... data to create a Equipments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipments we want to update
     *   }
     * })
    **/
    upsert<T extends EquipmentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentsUpsertArgs<ExtArgs>>
    ): Prisma__EquipmentsClient<$Result.GetResult<Prisma.$EquipmentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Equipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentsCountArgs} args - Arguments to filter Equipments to count.
     * @example
     * // Count the number of Equipments
     * const count = await prisma.equipments.count({
     *   where: {
     *     // ... the filter for the Equipments we want to count
     *   }
     * })
    **/
    count<T extends EquipmentsCountArgs>(
      args?: Subset<T, EquipmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentsAggregateArgs>(args: Subset<T, EquipmentsAggregateArgs>): Prisma.PrismaPromise<GetEquipmentsAggregateType<T>>

    /**
     * Group by Equipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentsGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipments model
   */
  readonly fields: EquipmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Character<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Equipments model
   */ 
  interface EquipmentsFieldRefs {
    readonly equipment_id: FieldRef<"Equipments", 'Int'>
    readonly Character_id: FieldRef<"Equipments", 'Int'>
    readonly item_code: FieldRef<"Equipments", 'Int'>
    readonly item_name: FieldRef<"Equipments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipments findUnique
   */
  export type EquipmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
    /**
     * Filter, which Equipments to fetch.
     */
    where: EquipmentsWhereUniqueInput
  }

  /**
   * Equipments findUniqueOrThrow
   */
  export type EquipmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
    /**
     * Filter, which Equipments to fetch.
     */
    where: EquipmentsWhereUniqueInput
  }

  /**
   * Equipments findFirst
   */
  export type EquipmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
    /**
     * Filter, which Equipments to fetch.
     */
    where?: EquipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipments to fetch.
     */
    orderBy?: EquipmentsOrderByWithRelationInput | EquipmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipments.
     */
    cursor?: EquipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipments.
     */
    distinct?: EquipmentsScalarFieldEnum | EquipmentsScalarFieldEnum[]
  }

  /**
   * Equipments findFirstOrThrow
   */
  export type EquipmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
    /**
     * Filter, which Equipments to fetch.
     */
    where?: EquipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipments to fetch.
     */
    orderBy?: EquipmentsOrderByWithRelationInput | EquipmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipments.
     */
    cursor?: EquipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipments.
     */
    distinct?: EquipmentsScalarFieldEnum | EquipmentsScalarFieldEnum[]
  }

  /**
   * Equipments findMany
   */
  export type EquipmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
    /**
     * Filter, which Equipments to fetch.
     */
    where?: EquipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipments to fetch.
     */
    orderBy?: EquipmentsOrderByWithRelationInput | EquipmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipments.
     */
    cursor?: EquipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipments.
     */
    skip?: number
    distinct?: EquipmentsScalarFieldEnum | EquipmentsScalarFieldEnum[]
  }

  /**
   * Equipments create
   */
  export type EquipmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipments.
     */
    data: XOR<EquipmentsCreateInput, EquipmentsUncheckedCreateInput>
  }

  /**
   * Equipments createMany
   */
  export type EquipmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipments.
     */
    data: EquipmentsCreateManyInput | EquipmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipments update
   */
  export type EquipmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipments.
     */
    data: XOR<EquipmentsUpdateInput, EquipmentsUncheckedUpdateInput>
    /**
     * Choose, which Equipments to update.
     */
    where: EquipmentsWhereUniqueInput
  }

  /**
   * Equipments updateMany
   */
  export type EquipmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipments.
     */
    data: XOR<EquipmentsUpdateManyMutationInput, EquipmentsUncheckedUpdateManyInput>
    /**
     * Filter which Equipments to update
     */
    where?: EquipmentsWhereInput
  }

  /**
   * Equipments upsert
   */
  export type EquipmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipments to update in case it exists.
     */
    where: EquipmentsWhereUniqueInput
    /**
     * In case the Equipments found by the `where` argument doesn't exist, create a new Equipments with this data.
     */
    create: XOR<EquipmentsCreateInput, EquipmentsUncheckedCreateInput>
    /**
     * In case the Equipments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentsUpdateInput, EquipmentsUncheckedUpdateInput>
  }

  /**
   * Equipments delete
   */
  export type EquipmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
    /**
     * Filter which Equipments to delete.
     */
    where: EquipmentsWhereUniqueInput
  }

  /**
   * Equipments deleteMany
   */
  export type EquipmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipments to delete
     */
    where?: EquipmentsWhereInput
  }

  /**
   * Equipments without action
   */
  export type EquipmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipments
     */
    select?: EquipmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    user_pw: 'user_pw',
    user_name: 'user_name'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CharactersScalarFieldEnum: {
    character_id: 'character_id',
    User_id: 'User_id',
    character_name: 'character_name',
    health: 'health',
    power: 'power',
    money: 'money'
  };

  export type CharactersScalarFieldEnum = (typeof CharactersScalarFieldEnum)[keyof typeof CharactersScalarFieldEnum]


  export const InventorysScalarFieldEnum: {
    inventory_id: 'inventory_id',
    Character_id: 'Character_id',
    item_code: 'item_code',
    item_name: 'item_name',
    count: 'count'
  };

  export type InventorysScalarFieldEnum = (typeof InventorysScalarFieldEnum)[keyof typeof InventorysScalarFieldEnum]


  export const EquipmentsScalarFieldEnum: {
    equipment_id: 'equipment_id',
    Character_id: 'Character_id',
    item_code: 'item_code',
    item_name: 'item_name'
  };

  export type EquipmentsScalarFieldEnum = (typeof EquipmentsScalarFieldEnum)[keyof typeof EquipmentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: StringFilter<"Users"> | string
    user_pw?: StringFilter<"Users"> | string
    user_name?: StringFilter<"Users"> | string
    Characters?: CharactersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    user_pw?: SortOrder
    user_name?: SortOrder
    Characters?: CharactersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    user_name?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_pw?: StringFilter<"Users"> | string
    Characters?: CharactersListRelationFilter
  }, "user_id" | "user_name">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_pw?: SortOrder
    user_name?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"Users"> | string
    user_pw?: StringWithAggregatesFilter<"Users"> | string
    user_name?: StringWithAggregatesFilter<"Users"> | string
  }

  export type CharactersWhereInput = {
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    character_id?: IntFilter<"Characters"> | number
    User_id?: StringFilter<"Characters"> | string
    character_name?: StringFilter<"Characters"> | string
    health?: IntFilter<"Characters"> | number
    power?: IntFilter<"Characters"> | number
    money?: IntFilter<"Characters"> | number
    User?: XOR<UsersRelationFilter, UsersWhereInput>
    Inventorys?: InventorysListRelationFilter
    Equipments?: EquipmentsListRelationFilter
  }

  export type CharactersOrderByWithRelationInput = {
    character_id?: SortOrder
    User_id?: SortOrder
    character_name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    User?: UsersOrderByWithRelationInput
    Inventorys?: InventorysOrderByRelationAggregateInput
    Equipments?: EquipmentsOrderByRelationAggregateInput
  }

  export type CharactersWhereUniqueInput = Prisma.AtLeast<{
    character_id?: number
    character_name?: string
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    User_id?: StringFilter<"Characters"> | string
    health?: IntFilter<"Characters"> | number
    power?: IntFilter<"Characters"> | number
    money?: IntFilter<"Characters"> | number
    User?: XOR<UsersRelationFilter, UsersWhereInput>
    Inventorys?: InventorysListRelationFilter
    Equipments?: EquipmentsListRelationFilter
  }, "character_id" | "character_name">

  export type CharactersOrderByWithAggregationInput = {
    character_id?: SortOrder
    User_id?: SortOrder
    character_name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    _count?: CharactersCountOrderByAggregateInput
    _avg?: CharactersAvgOrderByAggregateInput
    _max?: CharactersMaxOrderByAggregateInput
    _min?: CharactersMinOrderByAggregateInput
    _sum?: CharactersSumOrderByAggregateInput
  }

  export type CharactersScalarWhereWithAggregatesInput = {
    AND?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    OR?: CharactersScalarWhereWithAggregatesInput[]
    NOT?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    character_id?: IntWithAggregatesFilter<"Characters"> | number
    User_id?: StringWithAggregatesFilter<"Characters"> | string
    character_name?: StringWithAggregatesFilter<"Characters"> | string
    health?: IntWithAggregatesFilter<"Characters"> | number
    power?: IntWithAggregatesFilter<"Characters"> | number
    money?: IntWithAggregatesFilter<"Characters"> | number
  }

  export type InventorysWhereInput = {
    AND?: InventorysWhereInput | InventorysWhereInput[]
    OR?: InventorysWhereInput[]
    NOT?: InventorysWhereInput | InventorysWhereInput[]
    inventory_id?: IntFilter<"Inventorys"> | number
    Character_id?: IntFilter<"Inventorys"> | number
    item_code?: IntFilter<"Inventorys"> | number
    item_name?: StringFilter<"Inventorys"> | string
    count?: IntFilter<"Inventorys"> | number
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }

  export type InventorysOrderByWithRelationInput = {
    inventory_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    count?: SortOrder
    Character?: CharactersOrderByWithRelationInput
  }

  export type InventorysWhereUniqueInput = Prisma.AtLeast<{
    inventory_id?: number
    item_code?: number
    item_name?: string
    AND?: InventorysWhereInput | InventorysWhereInput[]
    OR?: InventorysWhereInput[]
    NOT?: InventorysWhereInput | InventorysWhereInput[]
    Character_id?: IntFilter<"Inventorys"> | number
    count?: IntFilter<"Inventorys"> | number
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }, "inventory_id" | "item_code" | "item_name">

  export type InventorysOrderByWithAggregationInput = {
    inventory_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    count?: SortOrder
    _count?: InventorysCountOrderByAggregateInput
    _avg?: InventorysAvgOrderByAggregateInput
    _max?: InventorysMaxOrderByAggregateInput
    _min?: InventorysMinOrderByAggregateInput
    _sum?: InventorysSumOrderByAggregateInput
  }

  export type InventorysScalarWhereWithAggregatesInput = {
    AND?: InventorysScalarWhereWithAggregatesInput | InventorysScalarWhereWithAggregatesInput[]
    OR?: InventorysScalarWhereWithAggregatesInput[]
    NOT?: InventorysScalarWhereWithAggregatesInput | InventorysScalarWhereWithAggregatesInput[]
    inventory_id?: IntWithAggregatesFilter<"Inventorys"> | number
    Character_id?: IntWithAggregatesFilter<"Inventorys"> | number
    item_code?: IntWithAggregatesFilter<"Inventorys"> | number
    item_name?: StringWithAggregatesFilter<"Inventorys"> | string
    count?: IntWithAggregatesFilter<"Inventorys"> | number
  }

  export type EquipmentsWhereInput = {
    AND?: EquipmentsWhereInput | EquipmentsWhereInput[]
    OR?: EquipmentsWhereInput[]
    NOT?: EquipmentsWhereInput | EquipmentsWhereInput[]
    equipment_id?: IntFilter<"Equipments"> | number
    Character_id?: IntFilter<"Equipments"> | number
    item_code?: IntFilter<"Equipments"> | number
    item_name?: StringFilter<"Equipments"> | string
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }

  export type EquipmentsOrderByWithRelationInput = {
    equipment_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    Character?: CharactersOrderByWithRelationInput
  }

  export type EquipmentsWhereUniqueInput = Prisma.AtLeast<{
    equipment_id?: number
    item_code?: number
    item_name?: string
    AND?: EquipmentsWhereInput | EquipmentsWhereInput[]
    OR?: EquipmentsWhereInput[]
    NOT?: EquipmentsWhereInput | EquipmentsWhereInput[]
    Character_id?: IntFilter<"Equipments"> | number
    Character?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }, "equipment_id" | "item_code" | "item_name">

  export type EquipmentsOrderByWithAggregationInput = {
    equipment_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    _count?: EquipmentsCountOrderByAggregateInput
    _avg?: EquipmentsAvgOrderByAggregateInput
    _max?: EquipmentsMaxOrderByAggregateInput
    _min?: EquipmentsMinOrderByAggregateInput
    _sum?: EquipmentsSumOrderByAggregateInput
  }

  export type EquipmentsScalarWhereWithAggregatesInput = {
    AND?: EquipmentsScalarWhereWithAggregatesInput | EquipmentsScalarWhereWithAggregatesInput[]
    OR?: EquipmentsScalarWhereWithAggregatesInput[]
    NOT?: EquipmentsScalarWhereWithAggregatesInput | EquipmentsScalarWhereWithAggregatesInput[]
    equipment_id?: IntWithAggregatesFilter<"Equipments"> | number
    Character_id?: IntWithAggregatesFilter<"Equipments"> | number
    item_code?: IntWithAggregatesFilter<"Equipments"> | number
    item_name?: StringWithAggregatesFilter<"Equipments"> | string
  }

  export type UsersCreateInput = {
    user_id: string
    user_pw: string
    user_name: string
    Characters?: CharactersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    user_id: string
    user_pw: string
    user_name: string
    Characters?: CharactersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_pw?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    Characters?: CharactersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_pw?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    Characters?: CharactersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    user_id: string
    user_pw: string
    user_name: string
  }

  export type UsersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_pw?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_pw?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
  }

  export type CharactersCreateInput = {
    character_name: string
    health?: number
    power?: number
    money?: number
    User: UsersCreateNestedOneWithoutCharactersInput
    Inventorys?: InventorysCreateNestedManyWithoutCharacterInput
    Equipments?: EquipmentsCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateInput = {
    character_id?: number
    User_id: string
    character_name: string
    health?: number
    power?: number
    money?: number
    Inventorys?: InventorysUncheckedCreateNestedManyWithoutCharacterInput
    Equipments?: EquipmentsUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUpdateInput = {
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    User?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    Inventorys?: InventorysUpdateManyWithoutCharacterNestedInput
    Equipments?: EquipmentsUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateInput = {
    character_id?: IntFieldUpdateOperationsInput | number
    User_id?: StringFieldUpdateOperationsInput | string
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    Inventorys?: InventorysUncheckedUpdateManyWithoutCharacterNestedInput
    Equipments?: EquipmentsUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersCreateManyInput = {
    character_id?: number
    User_id: string
    character_name: string
    health?: number
    power?: number
    money?: number
  }

  export type CharactersUpdateManyMutationInput = {
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersUncheckedUpdateManyInput = {
    character_id?: IntFieldUpdateOperationsInput | number
    User_id?: StringFieldUpdateOperationsInput | string
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
  }

  export type InventorysCreateInput = {
    item_code: number
    item_name: string
    count: number
    Character: CharactersCreateNestedOneWithoutInventorysInput
  }

  export type InventorysUncheckedCreateInput = {
    inventory_id?: number
    Character_id: number
    item_code: number
    item_name: string
    count: number
  }

  export type InventorysUpdateInput = {
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    Character?: CharactersUpdateOneRequiredWithoutInventorysNestedInput
  }

  export type InventorysUncheckedUpdateInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    Character_id?: IntFieldUpdateOperationsInput | number
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type InventorysCreateManyInput = {
    inventory_id?: number
    Character_id: number
    item_code: number
    item_name: string
    count: number
  }

  export type InventorysUpdateManyMutationInput = {
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type InventorysUncheckedUpdateManyInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    Character_id?: IntFieldUpdateOperationsInput | number
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type EquipmentsCreateInput = {
    item_code: number
    item_name: string
    Character: CharactersCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentsUncheckedCreateInput = {
    equipment_id?: number
    Character_id: number
    item_code: number
    item_name: string
  }

  export type EquipmentsUpdateInput = {
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    Character?: CharactersUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentsUncheckedUpdateInput = {
    equipment_id?: IntFieldUpdateOperationsInput | number
    Character_id?: IntFieldUpdateOperationsInput | number
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentsCreateManyInput = {
    equipment_id?: number
    Character_id: number
    item_code: number
    item_name: string
  }

  export type EquipmentsUpdateManyMutationInput = {
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentsUncheckedUpdateManyInput = {
    equipment_id?: IntFieldUpdateOperationsInput | number
    Character_id?: IntFieldUpdateOperationsInput | number
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CharactersListRelationFilter = {
    every?: CharactersWhereInput
    some?: CharactersWhereInput
    none?: CharactersWhereInput
  }

  export type CharactersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_pw?: SortOrder
    user_name?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_pw?: SortOrder
    user_name?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_pw?: SortOrder
    user_name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type InventorysListRelationFilter = {
    every?: InventorysWhereInput
    some?: InventorysWhereInput
    none?: InventorysWhereInput
  }

  export type EquipmentsListRelationFilter = {
    every?: EquipmentsWhereInput
    some?: EquipmentsWhereInput
    none?: EquipmentsWhereInput
  }

  export type InventorysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharactersCountOrderByAggregateInput = {
    character_id?: SortOrder
    User_id?: SortOrder
    character_name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type CharactersAvgOrderByAggregateInput = {
    character_id?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type CharactersMaxOrderByAggregateInput = {
    character_id?: SortOrder
    User_id?: SortOrder
    character_name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type CharactersMinOrderByAggregateInput = {
    character_id?: SortOrder
    User_id?: SortOrder
    character_name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type CharactersSumOrderByAggregateInput = {
    character_id?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CharactersRelationFilter = {
    is?: CharactersWhereInput
    isNot?: CharactersWhereInput
  }

  export type InventorysCountOrderByAggregateInput = {
    inventory_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    count?: SortOrder
  }

  export type InventorysAvgOrderByAggregateInput = {
    inventory_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    count?: SortOrder
  }

  export type InventorysMaxOrderByAggregateInput = {
    inventory_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    count?: SortOrder
  }

  export type InventorysMinOrderByAggregateInput = {
    inventory_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
    count?: SortOrder
  }

  export type InventorysSumOrderByAggregateInput = {
    inventory_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    count?: SortOrder
  }

  export type EquipmentsCountOrderByAggregateInput = {
    equipment_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
  }

  export type EquipmentsAvgOrderByAggregateInput = {
    equipment_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
  }

  export type EquipmentsMaxOrderByAggregateInput = {
    equipment_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
  }

  export type EquipmentsMinOrderByAggregateInput = {
    equipment_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
    item_name?: SortOrder
  }

  export type EquipmentsSumOrderByAggregateInput = {
    equipment_id?: SortOrder
    Character_id?: SortOrder
    item_code?: SortOrder
  }

  export type CharactersCreateNestedManyWithoutUserInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type CharactersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CharactersUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutUserInput | CharactersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutUserInput | CharactersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutUserInput | CharactersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type CharactersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput> | CharactersCreateWithoutUserInput[] | CharactersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutUserInput | CharactersCreateOrConnectWithoutUserInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutUserInput | CharactersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharactersCreateManyUserInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutUserInput | CharactersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutUserInput | CharactersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCharactersInput = {
    create?: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCharactersInput
    connect?: UsersWhereUniqueInput
  }

  export type InventorysCreateNestedManyWithoutCharacterInput = {
    create?: XOR<InventorysCreateWithoutCharacterInput, InventorysUncheckedCreateWithoutCharacterInput> | InventorysCreateWithoutCharacterInput[] | InventorysUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: InventorysCreateOrConnectWithoutCharacterInput | InventorysCreateOrConnectWithoutCharacterInput[]
    createMany?: InventorysCreateManyCharacterInputEnvelope
    connect?: InventorysWhereUniqueInput | InventorysWhereUniqueInput[]
  }

  export type EquipmentsCreateNestedManyWithoutCharacterInput = {
    create?: XOR<EquipmentsCreateWithoutCharacterInput, EquipmentsUncheckedCreateWithoutCharacterInput> | EquipmentsCreateWithoutCharacterInput[] | EquipmentsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EquipmentsCreateOrConnectWithoutCharacterInput | EquipmentsCreateOrConnectWithoutCharacterInput[]
    createMany?: EquipmentsCreateManyCharacterInputEnvelope
    connect?: EquipmentsWhereUniqueInput | EquipmentsWhereUniqueInput[]
  }

  export type InventorysUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<InventorysCreateWithoutCharacterInput, InventorysUncheckedCreateWithoutCharacterInput> | InventorysCreateWithoutCharacterInput[] | InventorysUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: InventorysCreateOrConnectWithoutCharacterInput | InventorysCreateOrConnectWithoutCharacterInput[]
    createMany?: InventorysCreateManyCharacterInputEnvelope
    connect?: InventorysWhereUniqueInput | InventorysWhereUniqueInput[]
  }

  export type EquipmentsUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<EquipmentsCreateWithoutCharacterInput, EquipmentsUncheckedCreateWithoutCharacterInput> | EquipmentsCreateWithoutCharacterInput[] | EquipmentsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EquipmentsCreateOrConnectWithoutCharacterInput | EquipmentsCreateOrConnectWithoutCharacterInput[]
    createMany?: EquipmentsCreateManyCharacterInputEnvelope
    connect?: EquipmentsWhereUniqueInput | EquipmentsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCharactersInput
    upsert?: UsersUpsertWithoutCharactersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCharactersInput, UsersUpdateWithoutCharactersInput>, UsersUncheckedUpdateWithoutCharactersInput>
  }

  export type InventorysUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<InventorysCreateWithoutCharacterInput, InventorysUncheckedCreateWithoutCharacterInput> | InventorysCreateWithoutCharacterInput[] | InventorysUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: InventorysCreateOrConnectWithoutCharacterInput | InventorysCreateOrConnectWithoutCharacterInput[]
    upsert?: InventorysUpsertWithWhereUniqueWithoutCharacterInput | InventorysUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: InventorysCreateManyCharacterInputEnvelope
    set?: InventorysWhereUniqueInput | InventorysWhereUniqueInput[]
    disconnect?: InventorysWhereUniqueInput | InventorysWhereUniqueInput[]
    delete?: InventorysWhereUniqueInput | InventorysWhereUniqueInput[]
    connect?: InventorysWhereUniqueInput | InventorysWhereUniqueInput[]
    update?: InventorysUpdateWithWhereUniqueWithoutCharacterInput | InventorysUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: InventorysUpdateManyWithWhereWithoutCharacterInput | InventorysUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: InventorysScalarWhereInput | InventorysScalarWhereInput[]
  }

  export type EquipmentsUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<EquipmentsCreateWithoutCharacterInput, EquipmentsUncheckedCreateWithoutCharacterInput> | EquipmentsCreateWithoutCharacterInput[] | EquipmentsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EquipmentsCreateOrConnectWithoutCharacterInput | EquipmentsCreateOrConnectWithoutCharacterInput[]
    upsert?: EquipmentsUpsertWithWhereUniqueWithoutCharacterInput | EquipmentsUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: EquipmentsCreateManyCharacterInputEnvelope
    set?: EquipmentsWhereUniqueInput | EquipmentsWhereUniqueInput[]
    disconnect?: EquipmentsWhereUniqueInput | EquipmentsWhereUniqueInput[]
    delete?: EquipmentsWhereUniqueInput | EquipmentsWhereUniqueInput[]
    connect?: EquipmentsWhereUniqueInput | EquipmentsWhereUniqueInput[]
    update?: EquipmentsUpdateWithWhereUniqueWithoutCharacterInput | EquipmentsUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: EquipmentsUpdateManyWithWhereWithoutCharacterInput | EquipmentsUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: EquipmentsScalarWhereInput | EquipmentsScalarWhereInput[]
  }

  export type InventorysUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<InventorysCreateWithoutCharacterInput, InventorysUncheckedCreateWithoutCharacterInput> | InventorysCreateWithoutCharacterInput[] | InventorysUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: InventorysCreateOrConnectWithoutCharacterInput | InventorysCreateOrConnectWithoutCharacterInput[]
    upsert?: InventorysUpsertWithWhereUniqueWithoutCharacterInput | InventorysUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: InventorysCreateManyCharacterInputEnvelope
    set?: InventorysWhereUniqueInput | InventorysWhereUniqueInput[]
    disconnect?: InventorysWhereUniqueInput | InventorysWhereUniqueInput[]
    delete?: InventorysWhereUniqueInput | InventorysWhereUniqueInput[]
    connect?: InventorysWhereUniqueInput | InventorysWhereUniqueInput[]
    update?: InventorysUpdateWithWhereUniqueWithoutCharacterInput | InventorysUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: InventorysUpdateManyWithWhereWithoutCharacterInput | InventorysUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: InventorysScalarWhereInput | InventorysScalarWhereInput[]
  }

  export type EquipmentsUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<EquipmentsCreateWithoutCharacterInput, EquipmentsUncheckedCreateWithoutCharacterInput> | EquipmentsCreateWithoutCharacterInput[] | EquipmentsUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: EquipmentsCreateOrConnectWithoutCharacterInput | EquipmentsCreateOrConnectWithoutCharacterInput[]
    upsert?: EquipmentsUpsertWithWhereUniqueWithoutCharacterInput | EquipmentsUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: EquipmentsCreateManyCharacterInputEnvelope
    set?: EquipmentsWhereUniqueInput | EquipmentsWhereUniqueInput[]
    disconnect?: EquipmentsWhereUniqueInput | EquipmentsWhereUniqueInput[]
    delete?: EquipmentsWhereUniqueInput | EquipmentsWhereUniqueInput[]
    connect?: EquipmentsWhereUniqueInput | EquipmentsWhereUniqueInput[]
    update?: EquipmentsUpdateWithWhereUniqueWithoutCharacterInput | EquipmentsUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: EquipmentsUpdateManyWithWhereWithoutCharacterInput | EquipmentsUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: EquipmentsScalarWhereInput | EquipmentsScalarWhereInput[]
  }

  export type CharactersCreateNestedOneWithoutInventorysInput = {
    create?: XOR<CharactersCreateWithoutInventorysInput, CharactersUncheckedCreateWithoutInventorysInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutInventorysInput
    connect?: CharactersWhereUniqueInput
  }

  export type CharactersUpdateOneRequiredWithoutInventorysNestedInput = {
    create?: XOR<CharactersCreateWithoutInventorysInput, CharactersUncheckedCreateWithoutInventorysInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutInventorysInput
    upsert?: CharactersUpsertWithoutInventorysInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutInventorysInput, CharactersUpdateWithoutInventorysInput>, CharactersUncheckedUpdateWithoutInventorysInput>
  }

  export type CharactersCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<CharactersCreateWithoutEquipmentsInput, CharactersUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutEquipmentsInput
    connect?: CharactersWhereUniqueInput
  }

  export type CharactersUpdateOneRequiredWithoutEquipmentsNestedInput = {
    create?: XOR<CharactersCreateWithoutEquipmentsInput, CharactersUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutEquipmentsInput
    upsert?: CharactersUpsertWithoutEquipmentsInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutEquipmentsInput, CharactersUpdateWithoutEquipmentsInput>, CharactersUncheckedUpdateWithoutEquipmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CharactersCreateWithoutUserInput = {
    character_name: string
    health?: number
    power?: number
    money?: number
    Inventorys?: InventorysCreateNestedManyWithoutCharacterInput
    Equipments?: EquipmentsCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutUserInput = {
    character_id?: number
    character_name: string
    health?: number
    power?: number
    money?: number
    Inventorys?: InventorysUncheckedCreateNestedManyWithoutCharacterInput
    Equipments?: EquipmentsUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutUserInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput>
  }

  export type CharactersCreateManyUserInputEnvelope = {
    data: CharactersCreateManyUserInput | CharactersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CharactersUpsertWithWhereUniqueWithoutUserInput = {
    where: CharactersWhereUniqueInput
    update: XOR<CharactersUpdateWithoutUserInput, CharactersUncheckedUpdateWithoutUserInput>
    create: XOR<CharactersCreateWithoutUserInput, CharactersUncheckedCreateWithoutUserInput>
  }

  export type CharactersUpdateWithWhereUniqueWithoutUserInput = {
    where: CharactersWhereUniqueInput
    data: XOR<CharactersUpdateWithoutUserInput, CharactersUncheckedUpdateWithoutUserInput>
  }

  export type CharactersUpdateManyWithWhereWithoutUserInput = {
    where: CharactersScalarWhereInput
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyWithoutUserInput>
  }

  export type CharactersScalarWhereInput = {
    AND?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    OR?: CharactersScalarWhereInput[]
    NOT?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    character_id?: IntFilter<"Characters"> | number
    User_id?: StringFilter<"Characters"> | string
    character_name?: StringFilter<"Characters"> | string
    health?: IntFilter<"Characters"> | number
    power?: IntFilter<"Characters"> | number
    money?: IntFilter<"Characters"> | number
  }

  export type UsersCreateWithoutCharactersInput = {
    user_id: string
    user_pw: string
    user_name: string
  }

  export type UsersUncheckedCreateWithoutCharactersInput = {
    user_id: string
    user_pw: string
    user_name: string
  }

  export type UsersCreateOrConnectWithoutCharactersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
  }

  export type InventorysCreateWithoutCharacterInput = {
    item_code: number
    item_name: string
    count: number
  }

  export type InventorysUncheckedCreateWithoutCharacterInput = {
    inventory_id?: number
    item_code: number
    item_name: string
    count: number
  }

  export type InventorysCreateOrConnectWithoutCharacterInput = {
    where: InventorysWhereUniqueInput
    create: XOR<InventorysCreateWithoutCharacterInput, InventorysUncheckedCreateWithoutCharacterInput>
  }

  export type InventorysCreateManyCharacterInputEnvelope = {
    data: InventorysCreateManyCharacterInput | InventorysCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentsCreateWithoutCharacterInput = {
    item_code: number
    item_name: string
  }

  export type EquipmentsUncheckedCreateWithoutCharacterInput = {
    equipment_id?: number
    item_code: number
    item_name: string
  }

  export type EquipmentsCreateOrConnectWithoutCharacterInput = {
    where: EquipmentsWhereUniqueInput
    create: XOR<EquipmentsCreateWithoutCharacterInput, EquipmentsUncheckedCreateWithoutCharacterInput>
  }

  export type EquipmentsCreateManyCharacterInputEnvelope = {
    data: EquipmentsCreateManyCharacterInput | EquipmentsCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCharactersInput = {
    update: XOR<UsersUpdateWithoutCharactersInput, UsersUncheckedUpdateWithoutCharactersInput>
    create: XOR<UsersCreateWithoutCharactersInput, UsersUncheckedCreateWithoutCharactersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCharactersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCharactersInput, UsersUncheckedUpdateWithoutCharactersInput>
  }

  export type UsersUpdateWithoutCharactersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_pw?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateWithoutCharactersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    user_pw?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
  }

  export type InventorysUpsertWithWhereUniqueWithoutCharacterInput = {
    where: InventorysWhereUniqueInput
    update: XOR<InventorysUpdateWithoutCharacterInput, InventorysUncheckedUpdateWithoutCharacterInput>
    create: XOR<InventorysCreateWithoutCharacterInput, InventorysUncheckedCreateWithoutCharacterInput>
  }

  export type InventorysUpdateWithWhereUniqueWithoutCharacterInput = {
    where: InventorysWhereUniqueInput
    data: XOR<InventorysUpdateWithoutCharacterInput, InventorysUncheckedUpdateWithoutCharacterInput>
  }

  export type InventorysUpdateManyWithWhereWithoutCharacterInput = {
    where: InventorysScalarWhereInput
    data: XOR<InventorysUpdateManyMutationInput, InventorysUncheckedUpdateManyWithoutCharacterInput>
  }

  export type InventorysScalarWhereInput = {
    AND?: InventorysScalarWhereInput | InventorysScalarWhereInput[]
    OR?: InventorysScalarWhereInput[]
    NOT?: InventorysScalarWhereInput | InventorysScalarWhereInput[]
    inventory_id?: IntFilter<"Inventorys"> | number
    Character_id?: IntFilter<"Inventorys"> | number
    item_code?: IntFilter<"Inventorys"> | number
    item_name?: StringFilter<"Inventorys"> | string
    count?: IntFilter<"Inventorys"> | number
  }

  export type EquipmentsUpsertWithWhereUniqueWithoutCharacterInput = {
    where: EquipmentsWhereUniqueInput
    update: XOR<EquipmentsUpdateWithoutCharacterInput, EquipmentsUncheckedUpdateWithoutCharacterInput>
    create: XOR<EquipmentsCreateWithoutCharacterInput, EquipmentsUncheckedCreateWithoutCharacterInput>
  }

  export type EquipmentsUpdateWithWhereUniqueWithoutCharacterInput = {
    where: EquipmentsWhereUniqueInput
    data: XOR<EquipmentsUpdateWithoutCharacterInput, EquipmentsUncheckedUpdateWithoutCharacterInput>
  }

  export type EquipmentsUpdateManyWithWhereWithoutCharacterInput = {
    where: EquipmentsScalarWhereInput
    data: XOR<EquipmentsUpdateManyMutationInput, EquipmentsUncheckedUpdateManyWithoutCharacterInput>
  }

  export type EquipmentsScalarWhereInput = {
    AND?: EquipmentsScalarWhereInput | EquipmentsScalarWhereInput[]
    OR?: EquipmentsScalarWhereInput[]
    NOT?: EquipmentsScalarWhereInput | EquipmentsScalarWhereInput[]
    equipment_id?: IntFilter<"Equipments"> | number
    Character_id?: IntFilter<"Equipments"> | number
    item_code?: IntFilter<"Equipments"> | number
    item_name?: StringFilter<"Equipments"> | string
  }

  export type CharactersCreateWithoutInventorysInput = {
    character_name: string
    health?: number
    power?: number
    money?: number
    User: UsersCreateNestedOneWithoutCharactersInput
    Equipments?: EquipmentsCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutInventorysInput = {
    character_id?: number
    User_id: string
    character_name: string
    health?: number
    power?: number
    money?: number
    Equipments?: EquipmentsUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutInventorysInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutInventorysInput, CharactersUncheckedCreateWithoutInventorysInput>
  }

  export type CharactersUpsertWithoutInventorysInput = {
    update: XOR<CharactersUpdateWithoutInventorysInput, CharactersUncheckedUpdateWithoutInventorysInput>
    create: XOR<CharactersCreateWithoutInventorysInput, CharactersUncheckedCreateWithoutInventorysInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutInventorysInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutInventorysInput, CharactersUncheckedUpdateWithoutInventorysInput>
  }

  export type CharactersUpdateWithoutInventorysInput = {
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    User?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    Equipments?: EquipmentsUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutInventorysInput = {
    character_id?: IntFieldUpdateOperationsInput | number
    User_id?: StringFieldUpdateOperationsInput | string
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    Equipments?: EquipmentsUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersCreateWithoutEquipmentsInput = {
    character_name: string
    health?: number
    power?: number
    money?: number
    User: UsersCreateNestedOneWithoutCharactersInput
    Inventorys?: InventorysCreateNestedManyWithoutCharacterInput
  }

  export type CharactersUncheckedCreateWithoutEquipmentsInput = {
    character_id?: number
    User_id: string
    character_name: string
    health?: number
    power?: number
    money?: number
    Inventorys?: InventorysUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharactersCreateOrConnectWithoutEquipmentsInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutEquipmentsInput, CharactersUncheckedCreateWithoutEquipmentsInput>
  }

  export type CharactersUpsertWithoutEquipmentsInput = {
    update: XOR<CharactersUpdateWithoutEquipmentsInput, CharactersUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<CharactersCreateWithoutEquipmentsInput, CharactersUncheckedCreateWithoutEquipmentsInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutEquipmentsInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutEquipmentsInput, CharactersUncheckedUpdateWithoutEquipmentsInput>
  }

  export type CharactersUpdateWithoutEquipmentsInput = {
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    User?: UsersUpdateOneRequiredWithoutCharactersNestedInput
    Inventorys?: InventorysUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutEquipmentsInput = {
    character_id?: IntFieldUpdateOperationsInput | number
    User_id?: StringFieldUpdateOperationsInput | string
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    Inventorys?: InventorysUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersCreateManyUserInput = {
    character_id?: number
    character_name: string
    health?: number
    power?: number
    money?: number
  }

  export type CharactersUpdateWithoutUserInput = {
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    Inventorys?: InventorysUpdateManyWithoutCharacterNestedInput
    Equipments?: EquipmentsUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateWithoutUserInput = {
    character_id?: IntFieldUpdateOperationsInput | number
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    Inventorys?: InventorysUncheckedUpdateManyWithoutCharacterNestedInput
    Equipments?: EquipmentsUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharactersUncheckedUpdateManyWithoutUserInput = {
    character_id?: IntFieldUpdateOperationsInput | number
    character_name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
  }

  export type InventorysCreateManyCharacterInput = {
    inventory_id?: number
    item_code: number
    item_name: string
    count: number
  }

  export type EquipmentsCreateManyCharacterInput = {
    equipment_id?: number
    item_code: number
    item_name: string
  }

  export type InventorysUpdateWithoutCharacterInput = {
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type InventorysUncheckedUpdateWithoutCharacterInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type InventorysUncheckedUpdateManyWithoutCharacterInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type EquipmentsUpdateWithoutCharacterInput = {
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentsUncheckedUpdateWithoutCharacterInput = {
    equipment_id?: IntFieldUpdateOperationsInput | number
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentsUncheckedUpdateManyWithoutCharacterInput = {
    equipment_id?: IntFieldUpdateOperationsInput | number
    item_code?: IntFieldUpdateOperationsInput | number
    item_name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersCountOutputTypeDefaultArgs instead
     */
    export type CharactersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersDefaultArgs instead
     */
    export type CharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventorysDefaultArgs instead
     */
    export type InventorysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventorysDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EquipmentsDefaultArgs instead
     */
    export type EquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EquipmentsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}