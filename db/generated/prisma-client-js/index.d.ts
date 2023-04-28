
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  createdAt: Date
  updatedAt: Date
  username: string
  name: string | null
  email: string
  emailVerified: Date | null
  image: string | null
  balance: number | null
  hashedPassword: string | null
  role: string
  level: string | null
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: number
  createdAt: Date
  updatedAt: Date
  expiresAt: Date | null
  handle: string
  hashedSessionToken: string | null
  antiCSRFToken: string | null
  publicData: string | null
  privateData: string | null
  userId: number
}

/**
 * Model Token
 * 
 */
export type Token = {
  id: number
  createdAt: Date
  updatedAt: Date
  hashedToken: string
  type: string
  expiresAt: Date
  sentTo: string
  userId: number
}

/**
 * Model Account
 * 
 */
export type Account = {
  id: number
  userId: number
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
}

/**
 * Model Link
 * 
 */
export type Link = {
  id: string
  userId: number
  url: string
  title: string | null
  description: string | null
  order: number
  type: Linktype
  icon: string | null
  image: string | null
  status: Status
  createdAt: Date
  updatedAt: Date
  profileId: string | null
}

/**
 * Model Message
 * 
 */
export type Message = {
  id: string
  userId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Customer
 * 
 */
export type Customer = {
  id: string
  userId: number
  companyId: string | null
  salutation: string
  firstname: string
  lastname: string
  email: string | null
  email_type: string | null
  phone_number: string | null
  phone_number_type: string | null
  street_address: string | null
  address_supplement: string | null
  postal_code: string | null
  city: string | null
  country: string | null
  title: string | null
  about: string | null
  image: string | null
  total_discount: number | null
  terms_of_payment: string | null
  delivery_terms: string | null
  note: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model BankAccount
 * 
 */
export type BankAccount = {
  id: string
  customerId: string
  bank_name: string
  account_owner: string
  iban: string
  bic: string
}

/**
 * Model File
 * 
 */
export type File = {
  id: string
  userId: number
  customerId: string
  invoiceId: string | null
  url: string
  title: string | null
  description: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Activity
 * 
 */
export type Activity = {
  id: string
  userId: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Notification
 * 
 */
export type Notification = {
  id: number
  userId: number
  title: string | null
  name: string | null
  subject: string | null
  yesno: string
  description: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Invoice
 * 
 */
export type Invoice = {
  id: string
  customerId: string
  termsOfPaymentId: string
  billNumber: string
  documentTitle: string
  introductoryText: string
  postScript: string | null
  totalPrice: number | null
  sendAt: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model InvoiceItems
 * 
 */
export type InvoiceItems = {
  id: string
  project: string
  amount: number
  currency: string
  unit: string
  hours: number
  rate: number
  price: number
  tax: number
  discount: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TermsOfPayment
 * 
 */
export type TermsOfPayment = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Profile
 * 
 */
export type Profile = {
  id: string
  userId: number
  title: string
  username: string
  description: string | null
  theme: Prisma.JsonValue | null
  widgets: Prisma.JsonValue | null
  current: Yesno
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Apps
 * 
 */
export type Apps = {
  id: number
  name: string | null
  description: string | null
  order: number
  api_key: string | null
  api_secret: string | null
  site_name: string | null
  show_feed: Yesno
  show_share: Yesno
  show_sub: Yesno
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Linktype: {
  custom: 'custom',
  site: 'site',
  email: 'email',
  phone: 'phone'
};

export type Linktype = (typeof Linktype)[keyof typeof Linktype]


export const Status: {
  active: 'active',
  archived: 'archived',
  inactive: 'inactive'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Yesno: {
  yes: 'yes',
  no: 'no'
};

export type Yesno = (typeof Yesno)[keyof typeof Yesno]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<GlobalReject>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<GlobalReject>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<GlobalReject>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<GlobalReject>;

  /**
   * `prisma.bankAccount`: Exposes CRUD operations for the **BankAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccounts
    * const bankAccounts = await prisma.bankAccount.findMany()
    * ```
    */
  get bankAccount(): Prisma.BankAccountDelegate<GlobalReject>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<GlobalReject>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<GlobalReject>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<GlobalReject>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<GlobalReject>;

  /**
   * `prisma.invoiceItems`: Exposes CRUD operations for the **InvoiceItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItems.findMany()
    * ```
    */
  get invoiceItems(): Prisma.InvoiceItemsDelegate<GlobalReject>;

  /**
   * `prisma.termsOfPayment`: Exposes CRUD operations for the **TermsOfPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TermsOfPayments
    * const termsOfPayments = await prisma.termsOfPayment.findMany()
    * ```
    */
  get termsOfPayment(): Prisma.TermsOfPaymentDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<GlobalReject>;

  /**
   * `prisma.apps`: Exposes CRUD operations for the **Apps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apps
    * const apps = await prisma.apps.findMany()
    * ```
    */
  get apps(): Prisma.AppsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Token: 'Token',
    Account: 'Account',
    Link: 'Link',
    Message: 'Message',
    Customer: 'Customer',
    BankAccount: 'BankAccount',
    File: 'File',
    Activity: 'Activity',
    Notification: 'Notification',
    Invoice: 'Invoice',
    InvoiceItems: 'InvoiceItems',
    TermsOfPayment: 'TermsOfPayment',
    Profile: 'Profile',
    Apps: 'Apps'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Accounts: number
    Sessions: number
    Files: number
    Activities: number
    Messages: number
    Notifications: number
    Customers: number
    Link: number
    Profile: number
    Token: number
  }

  export type UserCountOutputTypeSelect = {
    Accounts?: boolean
    Sessions?: boolean
    Files?: boolean
    Activities?: boolean
    Messages?: boolean
    Notifications?: boolean
    Customers?: boolean
    Link?: boolean
    Profile?: boolean
    Token?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    Invoices: number
    Files: number
  }

  export type CustomerCountOutputTypeSelect = {
    Invoices?: boolean
    Files?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomerCountOutputTypeArgs)
    ? CustomerCountOutputType 
    : S extends { select: any } & (CustomerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomerCountOutputType ? CustomerCountOutputType[P] : never
  } 
      : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Count Type InvoiceCountOutputType
   */


  export type InvoiceCountOutputType = {
    Files: number
  }

  export type InvoiceCountOutputTypeSelect = {
    Files?: boolean
  }

  export type InvoiceCountOutputTypeGetPayload<S extends boolean | null | undefined | InvoiceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? InvoiceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (InvoiceCountOutputTypeArgs)
    ? InvoiceCountOutputType 
    : S extends { select: any } & (InvoiceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof InvoiceCountOutputType ? InvoiceCountOutputType[P] : never
  } 
      : InvoiceCountOutputType




  // Custom InputTypes

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect | null
  }



  /**
   * Count Type ProfileCountOutputType
   */


  export type ProfileCountOutputType = {
    Link: number
  }

  export type ProfileCountOutputTypeSelect = {
    Link?: boolean
  }

  export type ProfileCountOutputTypeGetPayload<S extends boolean | null | undefined | ProfileCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProfileCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProfileCountOutputTypeArgs)
    ? ProfileCountOutputType 
    : S extends { select: any } & (ProfileCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProfileCountOutputType ? ProfileCountOutputType[P] : never
  } 
      : ProfileCountOutputType




  // Custom InputTypes

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    balance: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    balance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    balance: number | null
    hashedPassword: string | null
    role: string | null
    level: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    balance: number | null
    hashedPassword: string | null
    role: string | null
    level: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    username: number
    name: number
    email: number
    emailVerified: number
    image: number
    balance: number
    hashedPassword: number
    role: number
    level: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    balance?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    balance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    balance?: true
    hashedPassword?: true
    role?: true
    level?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    balance?: true
    hashedPassword?: true
    role?: true
    level?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    balance?: true
    hashedPassword?: true
    role?: true
    level?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    username: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    balance: number | null
    hashedPassword: string | null
    role: string
    level: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    balance?: boolean
    hashedPassword?: boolean
    role?: boolean
    level?: boolean
    Accounts?: boolean | User$AccountsArgs
    Sessions?: boolean | User$SessionsArgs
    Files?: boolean | User$FilesArgs
    Activities?: boolean | User$ActivitiesArgs
    Messages?: boolean | User$MessagesArgs
    Notifications?: boolean | User$NotificationsArgs
    Customers?: boolean | User$CustomersArgs
    Link?: boolean | User$LinkArgs
    Profile?: boolean | User$ProfileArgs
    Token?: boolean | User$TokenArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    Accounts?: boolean | User$AccountsArgs
    Sessions?: boolean | User$SessionsArgs
    Files?: boolean | User$FilesArgs
    Activities?: boolean | User$ActivitiesArgs
    Messages?: boolean | User$MessagesArgs
    Notifications?: boolean | User$NotificationsArgs
    Customers?: boolean | User$CustomersArgs
    Link?: boolean | User$LinkArgs
    Profile?: boolean | User$ProfileArgs
    Token?: boolean | User$TokenArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'Sessions' ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends 'Files' ? Array < FileGetPayload<S['include'][P]>>  :
        P extends 'Activities' ? Array < ActivityGetPayload<S['include'][P]>>  :
        P extends 'Messages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends 'Notifications' ? Array < NotificationGetPayload<S['include'][P]>>  :
        P extends 'Customers' ? Array < CustomerGetPayload<S['include'][P]>>  :
        P extends 'Link' ? Array < LinkGetPayload<S['include'][P]>>  :
        P extends 'Profile' ? Array < ProfileGetPayload<S['include'][P]>>  :
        P extends 'Token' ? Array < TokenGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'Sessions' ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends 'Files' ? Array < FileGetPayload<S['select'][P]>>  :
        P extends 'Activities' ? Array < ActivityGetPayload<S['select'][P]>>  :
        P extends 'Messages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends 'Notifications' ? Array < NotificationGetPayload<S['select'][P]>>  :
        P extends 'Customers' ? Array < CustomerGetPayload<S['select'][P]>>  :
        P extends 'Link' ? Array < LinkGetPayload<S['select'][P]>>  :
        P extends 'Profile' ? Array < ProfileGetPayload<S['select'][P]>>  :
        P extends 'Token' ? Array < TokenGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Accounts<T extends User$AccountsArgs= {}>(args?: Subset<T, User$AccountsArgs>): Prisma.PrismaPromise<Array<AccountGetPayload<T>>| Null>;

    Sessions<T extends User$SessionsArgs= {}>(args?: Subset<T, User$SessionsArgs>): Prisma.PrismaPromise<Array<SessionGetPayload<T>>| Null>;

    Files<T extends User$FilesArgs= {}>(args?: Subset<T, User$FilesArgs>): Prisma.PrismaPromise<Array<FileGetPayload<T>>| Null>;

    Activities<T extends User$ActivitiesArgs= {}>(args?: Subset<T, User$ActivitiesArgs>): Prisma.PrismaPromise<Array<ActivityGetPayload<T>>| Null>;

    Messages<T extends User$MessagesArgs= {}>(args?: Subset<T, User$MessagesArgs>): Prisma.PrismaPromise<Array<MessageGetPayload<T>>| Null>;

    Notifications<T extends User$NotificationsArgs= {}>(args?: Subset<T, User$NotificationsArgs>): Prisma.PrismaPromise<Array<NotificationGetPayload<T>>| Null>;

    Customers<T extends User$CustomersArgs= {}>(args?: Subset<T, User$CustomersArgs>): Prisma.PrismaPromise<Array<CustomerGetPayload<T>>| Null>;

    Link<T extends User$LinkArgs= {}>(args?: Subset<T, User$LinkArgs>): Prisma.PrismaPromise<Array<LinkGetPayload<T>>| Null>;

    Profile<T extends User$ProfileArgs= {}>(args?: Subset<T, User$ProfileArgs>): Prisma.PrismaPromise<Array<ProfileGetPayload<T>>| Null>;

    Token<T extends User$TokenArgs= {}>(args?: Subset<T, User$TokenArgs>): Prisma.PrismaPromise<Array<TokenGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Accounts
   */
  export type User$AccountsArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * User.Sessions
   */
  export type User$SessionsArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * User.Files
   */
  export type User$FilesArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    where?: FileWhereInput
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * User.Activities
   */
  export type User$ActivitiesArgs = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
    where?: ActivityWhereInput
    orderBy?: Enumerable<ActivityOrderByWithRelationInput>
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ActivityScalarFieldEnum>
  }


  /**
   * User.Messages
   */
  export type User$MessagesArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * User.Notifications
   */
  export type User$NotificationsArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    where?: NotificationWhereInput
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * User.Customers
   */
  export type User$CustomersArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * User.Link
   */
  export type User$LinkArgs = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    where?: LinkWhereInput
    orderBy?: Enumerable<LinkOrderByWithRelationInput>
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LinkScalarFieldEnum>
  }


  /**
   * User.Profile
   */
  export type User$ProfileArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    where?: ProfileWhereInput
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * User.Token
   */
  export type User$TokenArgs = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
    where?: TokenWhereInput
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    handle: string | null
    hashedSessionToken: string | null
    antiCSRFToken: string | null
    publicData: string | null
    privateData: string | null
    userId: number | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    handle: string | null
    hashedSessionToken: string | null
    antiCSRFToken: string | null
    publicData: string | null
    privateData: string | null
    userId: number | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    handle: number
    hashedSessionToken: number
    antiCSRFToken: number
    publicData: number
    privateData: number
    userId: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    handle?: true
    hashedSessionToken?: true
    antiCSRFToken?: true
    publicData?: true
    privateData?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    handle?: true
    hashedSessionToken?: true
    antiCSRFToken?: true
    publicData?: true
    privateData?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    handle?: true
    hashedSessionToken?: true
    antiCSRFToken?: true
    publicData?: true
    privateData?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: SessionScalarFieldEnum[]
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    expiresAt: Date | null
    handle: string
    hashedSessionToken: string | null
    antiCSRFToken: string | null
    publicData: string | null
    privateData: string | null
    userId: number
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    handle?: boolean
    hashedSessionToken?: boolean
    antiCSRFToken?: boolean
    publicData?: boolean
    privateData?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }


  export type SessionInclude = {
    user?: boolean | UserArgs
  }

  export type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Session :
    S extends undefined ? never :
    S extends { include: any } & (SessionArgs | SessionFindManyArgs)
    ? Session  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SessionArgs | SessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Session ? Session[P] : never
  } 
      : Session


  type SessionCountArgs = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): Prisma.PrismaPromise<Array<SessionGetPayload<T>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     */
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude | null
  }



  /**
   * Model Token
   */


  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    hashedToken: string | null
    type: string | null
    expiresAt: Date | null
    sentTo: string | null
    userId: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    hashedToken: string | null
    type: string | null
    expiresAt: Date | null
    sentTo: string | null
    userId: number | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    hashedToken: number
    type: number
    expiresAt: number
    sentTo: number
    userId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hashedToken?: true
    type?: true
    expiresAt?: true
    sentTo?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hashedToken?: true
    type?: true
    expiresAt?: true
    sentTo?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hashedToken?: true
    type?: true
    expiresAt?: true
    sentTo?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs = {
    where?: TokenWhereInput
    orderBy?: Enumerable<TokenOrderByWithAggregationInput>
    by: TokenScalarFieldEnum[]
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }


  export type TokenGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    hashedToken: string
    type: string
    expiresAt: Date
    sentTo: string
    userId: number
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hashedToken?: boolean
    type?: boolean
    expiresAt?: boolean
    sentTo?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }


  export type TokenInclude = {
    user?: boolean | UserArgs
  }

  export type TokenGetPayload<S extends boolean | null | undefined | TokenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Token :
    S extends undefined ? never :
    S extends { include: any } & (TokenArgs | TokenFindManyArgs)
    ? Token  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TokenArgs | TokenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Token ? Token[P] : never
  } 
      : Token


  type TokenCountArgs = 
    Omit<TokenFindManyArgs, 'select' | 'include'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Token'> extends True ? Prisma__TokenClient<TokenGetPayload<T>> : Prisma__TokenClient<TokenGetPayload<T> | null, null>

    /**
     * Find one Token that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TokenFindUniqueOrThrowArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Token'> extends True ? Prisma__TokenClient<TokenGetPayload<T>> : Prisma__TokenClient<TokenGetPayload<T> | null, null>

    /**
     * Find the first Token that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TokenFindFirstOrThrowArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TokenFindManyArgs>(
      args?: SelectSubset<T, TokenFindManyArgs>
    ): Prisma.PrismaPromise<Array<TokenGetPayload<T>>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
    **/
    create<T extends TokenCreateArgs>(
      args: SelectSubset<T, TokenCreateArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Create many Tokens.
     *     @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     *     @example
     *     // Create many Tokens
     *     const token = await prisma.token.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TokenCreateManyArgs>(
      args?: SelectSubset<T, TokenCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
    **/
    delete<T extends TokenDeleteArgs>(
      args: SelectSubset<T, TokenDeleteArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TokenUpdateArgs>(
      args: SelectSubset<T, TokenUpdateArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TokenDeleteManyArgs>(
      args?: SelectSubset<T, TokenDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TokenUpdateManyArgs>(
      args: SelectSubset<T, TokenUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
    **/
    upsert<T extends TokenUpsertArgs>(
      args: SelectSubset<T, TokenUpsertArgs>
    ): Prisma__TokenClient<TokenGetPayload<T>>

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TokenClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Token base type for findUnique actions
   */
  export type TokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUnique
   */
  export interface TokenFindUniqueArgs extends TokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token base type for findFirst actions
   */
  export type TokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: Enumerable<TokenScalarFieldEnum>
  }

  /**
   * Token findFirst
   */
  export interface TokenFindFirstArgs extends TokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * Token findMany
   */
  export type TokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * Token create
   */
  export type TokenCreateArgs = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }


  /**
   * Token createMany
   */
  export type TokenCreateManyArgs = {
    /**
     * The data used to create many Tokens.
     */
    data: Enumerable<TokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Token update
   */
  export type TokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
  }


  /**
   * Token upsert
   */
  export type TokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }


  /**
   * Token delete
   */
  export type TokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }


  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
  }


  /**
   * Token without action
   */
  export type TokenArgs = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenInclude | null
  }



  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    userId?: true
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    userId?: true
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: AccountScalarFieldEnum[]
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserArgs
  }


  export type AccountInclude = {
    user?: boolean | UserArgs
  }

  export type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Account :
    S extends undefined ? never :
    S extends { include: any } & (AccountArgs | AccountFindManyArgs)
    ? Account  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountArgs | AccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
      : Account


  type AccountCountArgs = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): Prisma.PrismaPromise<Array<AccountGetPayload<T>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     */
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
  }



  /**
   * Model Link
   */


  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkAvgAggregateOutputType = {
    userId: number | null
    order: number | null
  }

  export type LinkSumAggregateOutputType = {
    userId: number | null
    order: number | null
  }

  export type LinkMinAggregateOutputType = {
    id: string | null
    userId: number | null
    url: string | null
    title: string | null
    description: string | null
    order: number | null
    type: Linktype | null
    icon: string | null
    image: string | null
    status: Status | null
    createdAt: Date | null
    updatedAt: Date | null
    profileId: string | null
  }

  export type LinkMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    url: string | null
    title: string | null
    description: string | null
    order: number | null
    type: Linktype | null
    icon: string | null
    image: string | null
    status: Status | null
    createdAt: Date | null
    updatedAt: Date | null
    profileId: string | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    userId: number
    url: number
    title: number
    description: number
    order: number
    type: number
    icon: number
    image: number
    status: number
    createdAt: number
    updatedAt: number
    profileId: number
    _all: number
  }


  export type LinkAvgAggregateInputType = {
    userId?: true
    order?: true
  }

  export type LinkSumAggregateInputType = {
    userId?: true
    order?: true
  }

  export type LinkMinAggregateInputType = {
    id?: true
    userId?: true
    url?: true
    title?: true
    description?: true
    order?: true
    type?: true
    icon?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    profileId?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    userId?: true
    url?: true
    title?: true
    description?: true
    order?: true
    type?: true
    icon?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    profileId?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    userId?: true
    url?: true
    title?: true
    description?: true
    order?: true
    type?: true
    icon?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    profileId?: true
    _all?: true
  }

  export type LinkAggregateArgs = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: Enumerable<LinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs = {
    where?: LinkWhereInput
    orderBy?: Enumerable<LinkOrderByWithAggregationInput>
    by: LinkScalarFieldEnum[]
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _avg?: LinkAvgAggregateInputType
    _sum?: LinkSumAggregateInputType
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }


  export type LinkGroupByOutputType = {
    id: string
    userId: number
    url: string
    title: string | null
    description: string | null
    order: number
    type: Linktype
    icon: string | null
    image: string | null
    status: Status
    createdAt: Date
    updatedAt: Date
    profileId: string | null
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect = {
    id?: boolean
    userId?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    type?: boolean
    icon?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profileId?: boolean
    user?: boolean | UserArgs
    Profile?: boolean | ProfileArgs
  }


  export type LinkInclude = {
    user?: boolean | UserArgs
    Profile?: boolean | ProfileArgs
  }

  export type LinkGetPayload<S extends boolean | null | undefined | LinkArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Link :
    S extends undefined ? never :
    S extends { include: any } & (LinkArgs | LinkFindManyArgs)
    ? Link  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'Profile' ? ProfileGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (LinkArgs | LinkFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'Profile' ? ProfileGetPayload<S['select'][P]> | null :  P extends keyof Link ? Link[P] : never
  } 
      : Link


  type LinkCountArgs = 
    Omit<LinkFindManyArgs, 'select' | 'include'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LinkFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LinkFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Link'> extends True ? Prisma__LinkClient<LinkGetPayload<T>> : Prisma__LinkClient<LinkGetPayload<T> | null, null>

    /**
     * Find one Link that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LinkFindUniqueOrThrowArgs>
    ): Prisma__LinkClient<LinkGetPayload<T>>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LinkFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LinkFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Link'> extends True ? Prisma__LinkClient<LinkGetPayload<T>> : Prisma__LinkClient<LinkGetPayload<T> | null, null>

    /**
     * Find the first Link that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LinkFindFirstOrThrowArgs>
    ): Prisma__LinkClient<LinkGetPayload<T>>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LinkFindManyArgs>(
      args?: SelectSubset<T, LinkFindManyArgs>
    ): Prisma.PrismaPromise<Array<LinkGetPayload<T>>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
    **/
    create<T extends LinkCreateArgs>(
      args: SelectSubset<T, LinkCreateArgs>
    ): Prisma__LinkClient<LinkGetPayload<T>>

    /**
     * Create many Links.
     *     @param {LinkCreateManyArgs} args - Arguments to create many Links.
     *     @example
     *     // Create many Links
     *     const link = await prisma.link.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LinkCreateManyArgs>(
      args?: SelectSubset<T, LinkCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
    **/
    delete<T extends LinkDeleteArgs>(
      args: SelectSubset<T, LinkDeleteArgs>
    ): Prisma__LinkClient<LinkGetPayload<T>>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LinkUpdateArgs>(
      args: SelectSubset<T, LinkUpdateArgs>
    ): Prisma__LinkClient<LinkGetPayload<T>>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LinkDeleteManyArgs>(
      args?: SelectSubset<T, LinkDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LinkUpdateManyArgs>(
      args: SelectSubset<T, LinkUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
    **/
    upsert<T extends LinkUpsertArgs>(
      args: SelectSubset<T, LinkUpsertArgs>
    ): Prisma__LinkClient<LinkGetPayload<T>>

    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
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
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LinkClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    Profile<T extends ProfileArgs= {}>(args?: Subset<T, ProfileArgs>): Prisma__ProfileClient<ProfileGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Link base type for findUnique actions
   */
  export type LinkFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUnique
   */
  export interface LinkFindUniqueArgs extends LinkFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }


  /**
   * Link base type for findFirst actions
   */
  export type LinkFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: Enumerable<LinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: Enumerable<LinkScalarFieldEnum>
  }

  /**
   * Link findFirst
   */
  export interface LinkFindFirstArgs extends LinkFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: Enumerable<LinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: Enumerable<LinkScalarFieldEnum>
  }


  /**
   * Link findMany
   */
  export type LinkFindManyArgs = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: Enumerable<LinkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: Enumerable<LinkScalarFieldEnum>
  }


  /**
   * Link create
   */
  export type LinkCreateArgs = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }


  /**
   * Link createMany
   */
  export type LinkCreateManyArgs = {
    /**
     * The data used to create many Links.
     */
    data: Enumerable<LinkCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Link update
   */
  export type LinkUpdateArgs = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }


  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
  }


  /**
   * Link upsert
   */
  export type LinkUpsertArgs = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }


  /**
   * Link delete
   */
  export type LinkDeleteArgs = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }


  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
  }


  /**
   * Link without action
   */
  export type LinkArgs = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
  }



  /**
   * Model Message
   */


  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    userId: number | null
  }

  export type MessageSumAggregateOutputType = {
    userId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    userId?: true
  }

  export type MessageSumAggregateInputType = {
    userId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs = {
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithAggregationInput>
    by: MessageScalarFieldEnum[]
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }


  export type MessageGroupByOutputType = {
    id: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }


  export type MessageInclude = {
    user?: boolean | UserArgs
  }

  export type MessageGetPayload<S extends boolean | null | undefined | MessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Message :
    S extends undefined ? never :
    S extends { include: any } & (MessageArgs | MessageFindManyArgs)
    ? Message  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MessageArgs | MessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Message ? Message[P] : never
  } 
      : Message


  type MessageCountArgs = 
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Message'> extends True ? Prisma__MessageClient<MessageGetPayload<T>> : Prisma__MessageClient<MessageGetPayload<T> | null, null>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Message'> extends True ? Prisma__MessageClient<MessageGetPayload<T>> : Prisma__MessageClient<MessageGetPayload<T> | null, null>

    /**
     * Find the first Message that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs>
    ): Prisma.PrismaPromise<Array<MessageGetPayload<T>>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Message base type for findUnique actions
   */
  export type MessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUnique
   */
  export interface MessageFindUniqueArgs extends MessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message base type for findFirst actions
   */
  export type MessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: Enumerable<MessageScalarFieldEnum>
  }

  /**
   * Message findFirst
   */
  export interface MessageFindFirstArgs extends MessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message create
   */
  export type MessageCreateArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs = {
    /**
     * The data used to create many Messages.
     */
    data: Enumerable<MessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message without action
   */
  export type MessageArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
  }



  /**
   * Model Customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    userId: number | null
    total_discount: number | null
  }

  export type CustomerSumAggregateOutputType = {
    userId: number | null
    total_discount: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    userId: number | null
    companyId: string | null
    salutation: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    email_type: string | null
    phone_number: string | null
    phone_number_type: string | null
    street_address: string | null
    address_supplement: string | null
    postal_code: string | null
    city: string | null
    country: string | null
    title: string | null
    about: string | null
    image: string | null
    total_discount: number | null
    terms_of_payment: string | null
    delivery_terms: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    companyId: string | null
    salutation: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    email_type: string | null
    phone_number: string | null
    phone_number_type: string | null
    street_address: string | null
    address_supplement: string | null
    postal_code: string | null
    city: string | null
    country: string | null
    title: string | null
    about: string | null
    image: string | null
    total_discount: number | null
    terms_of_payment: string | null
    delivery_terms: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    userId: number
    companyId: number
    salutation: number
    firstname: number
    lastname: number
    email: number
    email_type: number
    phone_number: number
    phone_number_type: number
    street_address: number
    address_supplement: number
    postal_code: number
    city: number
    country: number
    title: number
    about: number
    image: number
    total_discount: number
    terms_of_payment: number
    delivery_terms: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    userId?: true
    total_discount?: true
  }

  export type CustomerSumAggregateInputType = {
    userId?: true
    total_discount?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    salutation?: true
    firstname?: true
    lastname?: true
    email?: true
    email_type?: true
    phone_number?: true
    phone_number_type?: true
    street_address?: true
    address_supplement?: true
    postal_code?: true
    city?: true
    country?: true
    title?: true
    about?: true
    image?: true
    total_discount?: true
    terms_of_payment?: true
    delivery_terms?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    salutation?: true
    firstname?: true
    lastname?: true
    email?: true
    email_type?: true
    phone_number?: true
    phone_number_type?: true
    street_address?: true
    address_supplement?: true
    postal_code?: true
    city?: true
    country?: true
    title?: true
    about?: true
    image?: true
    total_discount?: true
    terms_of_payment?: true
    delivery_terms?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    salutation?: true
    firstname?: true
    lastname?: true
    email?: true
    email_type?: true
    phone_number?: true
    phone_number_type?: true
    street_address?: true
    address_supplement?: true
    postal_code?: true
    city?: true
    country?: true
    title?: true
    about?: true
    image?: true
    total_discount?: true
    terms_of_payment?: true
    delivery_terms?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithAggregationInput>
    by: CustomerScalarFieldEnum[]
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    id: string
    userId: number
    companyId: string | null
    salutation: string
    firstname: string
    lastname: string
    email: string | null
    email_type: string | null
    phone_number: string | null
    phone_number_type: string | null
    street_address: string | null
    address_supplement: string | null
    postal_code: string | null
    city: string | null
    country: string | null
    title: string | null
    about: string | null
    image: string | null
    total_discount: number | null
    terms_of_payment: string | null
    delivery_terms: string | null
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect = {
    id?: boolean
    userId?: boolean
    companyId?: boolean
    salutation?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    email_type?: boolean
    phone_number?: boolean
    phone_number_type?: boolean
    street_address?: boolean
    address_supplement?: boolean
    postal_code?: boolean
    city?: boolean
    country?: boolean
    title?: boolean
    about?: boolean
    image?: boolean
    total_discount?: boolean
    terms_of_payment?: boolean
    delivery_terms?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Invoices?: boolean | Customer$InvoicesArgs
    Files?: boolean | Customer$FilesArgs
    user?: boolean | UserArgs
    BankAccount?: boolean | BankAccountArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }


  export type CustomerInclude = {
    Invoices?: boolean | Customer$InvoicesArgs
    Files?: boolean | Customer$FilesArgs
    user?: boolean | UserArgs
    BankAccount?: boolean | BankAccountArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerGetPayload<S extends boolean | null | undefined | CustomerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Customer :
    S extends undefined ? never :
    S extends { include: any } & (CustomerArgs | CustomerFindManyArgs)
    ? Customer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Invoices' ? Array < InvoiceGetPayload<S['include'][P]>>  :
        P extends 'Files' ? Array < FileGetPayload<S['include'][P]>>  :
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'BankAccount' ? BankAccountGetPayload<S['include'][P]> | null :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CustomerArgs | CustomerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Invoices' ? Array < InvoiceGetPayload<S['select'][P]>>  :
        P extends 'Files' ? Array < FileGetPayload<S['select'][P]>>  :
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'BankAccount' ? BankAccountGetPayload<S['select'][P]> | null :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Customer ? Customer[P] : never
  } 
      : Customer


  type CustomerCountArgs = 
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find the first Customer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>
    ): Prisma.PrismaPromise<Array<CustomerGetPayload<T>>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs>(
      args?: SelectSubset<T, CustomerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Invoices<T extends Customer$InvoicesArgs= {}>(args?: Subset<T, Customer$InvoicesArgs>): Prisma.PrismaPromise<Array<InvoiceGetPayload<T>>| Null>;

    Files<T extends Customer$FilesArgs= {}>(args?: Subset<T, Customer$FilesArgs>): Prisma.PrismaPromise<Array<FileGetPayload<T>>| Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    BankAccount<T extends BankAccountArgs= {}>(args?: Subset<T, BankAccountArgs>): Prisma__BankAccountClient<BankAccountGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Customer base type for findUnique actions
   */
  export type CustomerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUnique
   */
  export interface CustomerFindUniqueArgs extends CustomerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer base type for findFirst actions
   */
  export type CustomerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * Customer findFirst
   */
  export interface CustomerFindFirstArgs extends CustomerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs = {
    /**
     * The data used to create many Customers.
     */
    data: Enumerable<CustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer.Invoices
   */
  export type Customer$InvoicesArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
    where?: InvoiceWhereInput
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<InvoiceScalarFieldEnum>
  }


  /**
   * Customer.Files
   */
  export type Customer$FilesArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    where?: FileWhereInput
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
  }



  /**
   * Model BankAccount
   */


  export type AggregateBankAccount = {
    _count: BankAccountCountAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  export type BankAccountMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    bank_name: string | null
    account_owner: string | null
    iban: string | null
    bic: string | null
  }

  export type BankAccountMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    bank_name: string | null
    account_owner: string | null
    iban: string | null
    bic: string | null
  }

  export type BankAccountCountAggregateOutputType = {
    id: number
    customerId: number
    bank_name: number
    account_owner: number
    iban: number
    bic: number
    _all: number
  }


  export type BankAccountMinAggregateInputType = {
    id?: true
    customerId?: true
    bank_name?: true
    account_owner?: true
    iban?: true
    bic?: true
  }

  export type BankAccountMaxAggregateInputType = {
    id?: true
    customerId?: true
    bank_name?: true
    account_owner?: true
    iban?: true
    bic?: true
  }

  export type BankAccountCountAggregateInputType = {
    id?: true
    customerId?: true
    bank_name?: true
    account_owner?: true
    iban?: true
    bic?: true
    _all?: true
  }

  export type BankAccountAggregateArgs = {
    /**
     * Filter which BankAccount to aggregate.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: Enumerable<BankAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccounts
    **/
    _count?: true | BankAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountMaxAggregateInputType
  }

  export type GetBankAccountAggregateType<T extends BankAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccount[P]>
      : GetScalarType<T[P], AggregateBankAccount[P]>
  }




  export type BankAccountGroupByArgs = {
    where?: BankAccountWhereInput
    orderBy?: Enumerable<BankAccountOrderByWithAggregationInput>
    by: BankAccountScalarFieldEnum[]
    having?: BankAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountCountAggregateInputType | true
    _min?: BankAccountMinAggregateInputType
    _max?: BankAccountMaxAggregateInputType
  }


  export type BankAccountGroupByOutputType = {
    id: string
    customerId: string
    bank_name: string
    account_owner: string
    iban: string
    bic: string
    _count: BankAccountCountAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  type GetBankAccountGroupByPayload<T extends BankAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BankAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountSelect = {
    id?: boolean
    customerId?: boolean
    bank_name?: boolean
    account_owner?: boolean
    iban?: boolean
    bic?: boolean
    Customer?: boolean | CustomerArgs
  }


  export type BankAccountInclude = {
    Customer?: boolean | CustomerArgs
  }

  export type BankAccountGetPayload<S extends boolean | null | undefined | BankAccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BankAccount :
    S extends undefined ? never :
    S extends { include: any } & (BankAccountArgs | BankAccountFindManyArgs)
    ? BankAccount  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Customer' ? CustomerGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BankAccountArgs | BankAccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Customer' ? CustomerGetPayload<S['select'][P]> :  P extends keyof BankAccount ? BankAccount[P] : never
  } 
      : BankAccount


  type BankAccountCountArgs = 
    Omit<BankAccountFindManyArgs, 'select' | 'include'> & {
      select?: BankAccountCountAggregateInputType | true
    }

  export interface BankAccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BankAccount that matches the filter.
     * @param {BankAccountFindUniqueArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BankAccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BankAccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BankAccount'> extends True ? Prisma__BankAccountClient<BankAccountGetPayload<T>> : Prisma__BankAccountClient<BankAccountGetPayload<T> | null, null>

    /**
     * Find one BankAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BankAccountFindUniqueOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BankAccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BankAccountFindUniqueOrThrowArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Find the first BankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BankAccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BankAccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BankAccount'> extends True ? Prisma__BankAccountClient<BankAccountGetPayload<T>> : Prisma__BankAccountClient<BankAccountGetPayload<T> | null, null>

    /**
     * Find the first BankAccount that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BankAccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BankAccountFindFirstOrThrowArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany()
     * 
     * // Get first 10 BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BankAccountFindManyArgs>(
      args?: SelectSubset<T, BankAccountFindManyArgs>
    ): Prisma.PrismaPromise<Array<BankAccountGetPayload<T>>>

    /**
     * Create a BankAccount.
     * @param {BankAccountCreateArgs} args - Arguments to create a BankAccount.
     * @example
     * // Create one BankAccount
     * const BankAccount = await prisma.bankAccount.create({
     *   data: {
     *     // ... data to create a BankAccount
     *   }
     * })
     * 
    **/
    create<T extends BankAccountCreateArgs>(
      args: SelectSubset<T, BankAccountCreateArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Create many BankAccounts.
     *     @param {BankAccountCreateManyArgs} args - Arguments to create many BankAccounts.
     *     @example
     *     // Create many BankAccounts
     *     const bankAccount = await prisma.bankAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BankAccountCreateManyArgs>(
      args?: SelectSubset<T, BankAccountCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BankAccount.
     * @param {BankAccountDeleteArgs} args - Arguments to delete one BankAccount.
     * @example
     * // Delete one BankAccount
     * const BankAccount = await prisma.bankAccount.delete({
     *   where: {
     *     // ... filter to delete one BankAccount
     *   }
     * })
     * 
    **/
    delete<T extends BankAccountDeleteArgs>(
      args: SelectSubset<T, BankAccountDeleteArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Update one BankAccount.
     * @param {BankAccountUpdateArgs} args - Arguments to update one BankAccount.
     * @example
     * // Update one BankAccount
     * const bankAccount = await prisma.bankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BankAccountUpdateArgs>(
      args: SelectSubset<T, BankAccountUpdateArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Delete zero or more BankAccounts.
     * @param {BankAccountDeleteManyArgs} args - Arguments to filter BankAccounts to delete.
     * @example
     * // Delete a few BankAccounts
     * const { count } = await prisma.bankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BankAccountDeleteManyArgs>(
      args?: SelectSubset<T, BankAccountDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BankAccountUpdateManyArgs>(
      args: SelectSubset<T, BankAccountUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BankAccount.
     * @param {BankAccountUpsertArgs} args - Arguments to update or create a BankAccount.
     * @example
     * // Update or create a BankAccount
     * const bankAccount = await prisma.bankAccount.upsert({
     *   create: {
     *     // ... data to create a BankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccount we want to update
     *   }
     * })
    **/
    upsert<T extends BankAccountUpsertArgs>(
      args: SelectSubset<T, BankAccountUpsertArgs>
    ): Prisma__BankAccountClient<BankAccountGetPayload<T>>

    /**
     * Count the number of BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountCountArgs} args - Arguments to filter BankAccounts to count.
     * @example
     * // Count the number of BankAccounts
     * const count = await prisma.bankAccount.count({
     *   where: {
     *     // ... the filter for the BankAccounts we want to count
     *   }
     * })
    **/
    count<T extends BankAccountCountArgs>(
      args?: Subset<T, BankAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BankAccountAggregateArgs>(args: Subset<T, BankAccountAggregateArgs>): Prisma.PrismaPromise<GetBankAccountAggregateType<T>>

    /**
     * Group by BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountGroupByArgs} args - Group by arguments.
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
      T extends BankAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BankAccountClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Customer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BankAccount base type for findUnique actions
   */
  export type BankAccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findUnique
   */
  export interface BankAccountFindUniqueArgs extends BankAccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BankAccount findUniqueOrThrow
   */
  export type BankAccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }


  /**
   * BankAccount base type for findFirst actions
   */
  export type BankAccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: Enumerable<BankAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: Enumerable<BankAccountScalarFieldEnum>
  }

  /**
   * BankAccount findFirst
   */
  export interface BankAccountFindFirstArgs extends BankAccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BankAccount findFirstOrThrow
   */
  export type BankAccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: Enumerable<BankAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: Enumerable<BankAccountScalarFieldEnum>
  }


  /**
   * BankAccount findMany
   */
  export type BankAccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude | null
    /**
     * Filter, which BankAccounts to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: Enumerable<BankAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    distinct?: Enumerable<BankAccountScalarFieldEnum>
  }


  /**
   * BankAccount create
   */
  export type BankAccountCreateArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude | null
    /**
     * The data needed to create a BankAccount.
     */
    data: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
  }


  /**
   * BankAccount createMany
   */
  export type BankAccountCreateManyArgs = {
    /**
     * The data used to create many BankAccounts.
     */
    data: Enumerable<BankAccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BankAccount update
   */
  export type BankAccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude | null
    /**
     * The data needed to update a BankAccount.
     */
    data: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
    /**
     * Choose, which BankAccount to update.
     */
    where: BankAccountWhereUniqueInput
  }


  /**
   * BankAccount updateMany
   */
  export type BankAccountUpdateManyArgs = {
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
  }


  /**
   * BankAccount upsert
   */
  export type BankAccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude | null
    /**
     * The filter to search for the BankAccount to update in case it exists.
     */
    where: BankAccountWhereUniqueInput
    /**
     * In case the BankAccount found by the `where` argument doesn't exist, create a new BankAccount with this data.
     */
    create: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
    /**
     * In case the BankAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
  }


  /**
   * BankAccount delete
   */
  export type BankAccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude | null
    /**
     * Filter which BankAccount to delete.
     */
    where: BankAccountWhereUniqueInput
  }


  /**
   * BankAccount deleteMany
   */
  export type BankAccountDeleteManyArgs = {
    /**
     * Filter which BankAccounts to delete
     */
    where?: BankAccountWhereInput
  }


  /**
   * BankAccount without action
   */
  export type BankAccountArgs = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BankAccountInclude | null
  }



  /**
   * Model File
   */


  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    userId: number | null
  }

  export type FileSumAggregateOutputType = {
    userId: number | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    userId: number | null
    customerId: string | null
    invoiceId: string | null
    url: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    customerId: string | null
    invoiceId: string | null
    url: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    userId: number
    customerId: number
    invoiceId: number
    url: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    userId?: true
  }

  export type FileSumAggregateInputType = {
    userId?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    invoiceId?: true
    url?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    invoiceId?: true
    url?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    userId?: true
    customerId?: true
    invoiceId?: true
    url?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileAggregateArgs = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs = {
    where?: FileWhereInput
    orderBy?: Enumerable<FileOrderByWithAggregationInput>
    by: FileScalarFieldEnum[]
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }


  export type FileGroupByOutputType = {
    id: string
    userId: number
    customerId: string
    invoiceId: string | null
    url: string
    title: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect = {
    id?: boolean
    userId?: boolean
    customerId?: boolean
    invoiceId?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
    Customer?: boolean | CustomerArgs
    Invoice?: boolean | InvoiceArgs
  }


  export type FileInclude = {
    user?: boolean | UserArgs
    Customer?: boolean | CustomerArgs
    Invoice?: boolean | InvoiceArgs
  }

  export type FileGetPayload<S extends boolean | null | undefined | FileArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? File :
    S extends undefined ? never :
    S extends { include: any } & (FileArgs | FileFindManyArgs)
    ? File  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'Customer' ? CustomerGetPayload<S['include'][P]> :
        P extends 'Invoice' ? InvoiceGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (FileArgs | FileFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'Customer' ? CustomerGetPayload<S['select'][P]> :
        P extends 'Invoice' ? InvoiceGetPayload<S['select'][P]> | null :  P extends keyof File ? File[P] : never
  } 
      : File


  type FileCountArgs = 
    Omit<FileFindManyArgs, 'select' | 'include'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'File'> extends True ? Prisma__FileClient<FileGetPayload<T>> : Prisma__FileClient<FileGetPayload<T> | null, null>

    /**
     * Find one File that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FileFindUniqueOrThrowArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'File'> extends True ? Prisma__FileClient<FileGetPayload<T>> : Prisma__FileClient<FileGetPayload<T> | null, null>

    /**
     * Find the first File that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FileFindFirstOrThrowArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FileFindManyArgs>(
      args?: SelectSubset<T, FileFindManyArgs>
    ): Prisma.PrismaPromise<Array<FileGetPayload<T>>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
    **/
    create<T extends FileCreateArgs>(
      args: SelectSubset<T, FileCreateArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Create many Files.
     *     @param {FileCreateManyArgs} args - Arguments to create many Files.
     *     @example
     *     // Create many Files
     *     const file = await prisma.file.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FileCreateManyArgs>(
      args?: SelectSubset<T, FileCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
    **/
    delete<T extends FileDeleteArgs>(
      args: SelectSubset<T, FileDeleteArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FileUpdateArgs>(
      args: SelectSubset<T, FileUpdateArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FileDeleteManyArgs>(
      args?: SelectSubset<T, FileDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FileUpdateManyArgs>(
      args: SelectSubset<T, FileUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
    **/
    upsert<T extends FileUpsertArgs>(
      args: SelectSubset<T, FileUpsertArgs>
    ): Prisma__FileClient<FileGetPayload<T>>

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FileClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    Customer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    Invoice<T extends InvoiceArgs= {}>(args?: Subset<T, InvoiceArgs>): Prisma__InvoiceClient<InvoiceGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * File base type for findUnique actions
   */
  export type FileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUnique
   */
  export interface FileFindUniqueArgs extends FileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File base type for findFirst actions
   */
  export type FileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: Enumerable<FileScalarFieldEnum>
  }

  /**
   * File findFirst
   */
  export interface FileFindFirstArgs extends FileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * File findMany
   */
  export type FileFindManyArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * File create
   */
  export type FileCreateArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }


  /**
   * File createMany
   */
  export type FileCreateManyArgs = {
    /**
     * The data used to create many Files.
     */
    data: Enumerable<FileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * File update
   */
  export type FileUpdateArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File updateMany
   */
  export type FileUpdateManyArgs = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }


  /**
   * File upsert
   */
  export type FileUpsertArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }


  /**
   * File delete
   */
  export type FileDeleteArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }


  /**
   * File without action
   */
  export type FileArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
  }



  /**
   * Model Activity
   */


  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    userId: number | null
  }

  export type ActivitySumAggregateOutputType = {
    userId: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    userId: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    userId?: true
  }

  export type ActivitySumAggregateInputType = {
    userId?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: Enumerable<ActivityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs = {
    where?: ActivityWhereInput
    orderBy?: Enumerable<ActivityOrderByWithAggregationInput>
    by: ActivityScalarFieldEnum[]
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }


  export type ActivityGroupByOutputType = {
    id: string
    userId: number
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }


  export type ActivityInclude = {
    user?: boolean | UserArgs
  }

  export type ActivityGetPayload<S extends boolean | null | undefined | ActivityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Activity :
    S extends undefined ? never :
    S extends { include: any } & (ActivityArgs | ActivityFindManyArgs)
    ? Activity  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ActivityArgs | ActivityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Activity ? Activity[P] : never
  } 
      : Activity


  type ActivityCountArgs = 
    Omit<ActivityFindManyArgs, 'select' | 'include'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActivityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ActivityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Activity'> extends True ? Prisma__ActivityClient<ActivityGetPayload<T>> : Prisma__ActivityClient<ActivityGetPayload<T> | null, null>

    /**
     * Find one Activity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ActivityFindUniqueOrThrowArgs>
    ): Prisma__ActivityClient<ActivityGetPayload<T>>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActivityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ActivityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Activity'> extends True ? Prisma__ActivityClient<ActivityGetPayload<T>> : Prisma__ActivityClient<ActivityGetPayload<T> | null, null>

    /**
     * Find the first Activity that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ActivityFindFirstOrThrowArgs>
    ): Prisma__ActivityClient<ActivityGetPayload<T>>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActivityFindManyArgs>(
      args?: SelectSubset<T, ActivityFindManyArgs>
    ): Prisma.PrismaPromise<Array<ActivityGetPayload<T>>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
    **/
    create<T extends ActivityCreateArgs>(
      args: SelectSubset<T, ActivityCreateArgs>
    ): Prisma__ActivityClient<ActivityGetPayload<T>>

    /**
     * Create many Activities.
     *     @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     *     @example
     *     // Create many Activities
     *     const activity = await prisma.activity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActivityCreateManyArgs>(
      args?: SelectSubset<T, ActivityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
    **/
    delete<T extends ActivityDeleteArgs>(
      args: SelectSubset<T, ActivityDeleteArgs>
    ): Prisma__ActivityClient<ActivityGetPayload<T>>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActivityUpdateArgs>(
      args: SelectSubset<T, ActivityUpdateArgs>
    ): Prisma__ActivityClient<ActivityGetPayload<T>>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActivityDeleteManyArgs>(
      args?: SelectSubset<T, ActivityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActivityUpdateManyArgs>(
      args: SelectSubset<T, ActivityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
    **/
    upsert<T extends ActivityUpsertArgs>(
      args: SelectSubset<T, ActivityUpsertArgs>
    ): Prisma__ActivityClient<ActivityGetPayload<T>>

    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ActivityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Activity base type for findUnique actions
   */
  export type ActivityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUnique
   */
  export interface ActivityFindUniqueArgs extends ActivityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }


  /**
   * Activity base type for findFirst actions
   */
  export type ActivityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: Enumerable<ActivityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: Enumerable<ActivityScalarFieldEnum>
  }

  /**
   * Activity findFirst
   */
  export interface ActivityFindFirstArgs extends ActivityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: Enumerable<ActivityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: Enumerable<ActivityScalarFieldEnum>
  }


  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: Enumerable<ActivityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: Enumerable<ActivityScalarFieldEnum>
  }


  /**
   * Activity create
   */
  export type ActivityCreateArgs = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }


  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs = {
    /**
     * The data used to create many Activities.
     */
    data: Enumerable<ActivityCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Activity update
   */
  export type ActivityUpdateArgs = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }


  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
  }


  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }


  /**
   * Activity delete
   */
  export type ActivityDeleteArgs = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }


  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
  }


  /**
   * Activity without action
   */
  export type ActivityArgs = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityInclude | null
  }



  /**
   * Model Notification
   */


  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    name: string | null
    subject: string | null
    yesno: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    name: string | null
    subject: string | null
    yesno: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    name: number
    subject: number
    yesno: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    name?: true
    subject?: true
    yesno?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    name?: true
    subject?: true
    yesno?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    name?: true
    subject?: true
    yesno?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs = {
    where?: NotificationWhereInput
    orderBy?: Enumerable<NotificationOrderByWithAggregationInput>
    by: NotificationScalarFieldEnum[]
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }


  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    title: string | null
    name: string | null
    subject: string | null
    yesno: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect = {
    id?: boolean
    userId?: boolean
    title?: boolean
    name?: boolean
    subject?: boolean
    yesno?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }


  export type NotificationInclude = {
    user?: boolean | UserArgs
  }

  export type NotificationGetPayload<S extends boolean | null | undefined | NotificationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Notification :
    S extends undefined ? never :
    S extends { include: any } & (NotificationArgs | NotificationFindManyArgs)
    ? Notification  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (NotificationArgs | NotificationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Notification ? Notification[P] : never
  } 
      : Notification


  type NotificationCountArgs = 
    Omit<NotificationFindManyArgs, 'select' | 'include'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NotificationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Notification'> extends True ? Prisma__NotificationClient<NotificationGetPayload<T>> : Prisma__NotificationClient<NotificationGetPayload<T> | null, null>

    /**
     * Find one Notification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NotificationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Notification'> extends True ? Prisma__NotificationClient<NotificationGetPayload<T>> : Prisma__NotificationClient<NotificationGetPayload<T> | null, null>

    /**
     * Find the first Notification that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs>
    ): Prisma.PrismaPromise<Array<NotificationGetPayload<T>>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotificationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Notification base type for findUnique actions
   */
  export type NotificationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUnique
   */
  export interface NotificationFindUniqueArgs extends NotificationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification base type for findFirst actions
   */
  export type NotificationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }

  /**
   * Notification findFirst
   */
  export interface NotificationFindFirstArgs extends NotificationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs = {
    /**
     * The data used to create many Notifications.
     */
    data: Enumerable<NotificationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification without action
   */
  export type NotificationArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
  }



  /**
   * Model Invoice
   */


  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    totalPrice: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    totalPrice: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    termsOfPaymentId: string | null
    billNumber: string | null
    documentTitle: string | null
    introductoryText: string | null
    postScript: string | null
    totalPrice: number | null
    sendAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    termsOfPaymentId: string | null
    billNumber: string | null
    documentTitle: string | null
    introductoryText: string | null
    postScript: string | null
    totalPrice: number | null
    sendAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    customerId: number
    termsOfPaymentId: number
    billNumber: number
    documentTitle: number
    introductoryText: number
    postScript: number
    totalPrice: number
    sendAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    totalPrice?: true
  }

  export type InvoiceSumAggregateInputType = {
    totalPrice?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    customerId?: true
    termsOfPaymentId?: true
    billNumber?: true
    documentTitle?: true
    introductoryText?: true
    postScript?: true
    totalPrice?: true
    sendAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    customerId?: true
    termsOfPaymentId?: true
    billNumber?: true
    documentTitle?: true
    introductoryText?: true
    postScript?: true
    totalPrice?: true
    sendAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    customerId?: true
    termsOfPaymentId?: true
    billNumber?: true
    documentTitle?: true
    introductoryText?: true
    postScript?: true
    totalPrice?: true
    sendAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs = {
    where?: InvoiceWhereInput
    orderBy?: Enumerable<InvoiceOrderByWithAggregationInput>
    by: InvoiceScalarFieldEnum[]
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }


  export type InvoiceGroupByOutputType = {
    id: string
    customerId: string
    termsOfPaymentId: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript: string | null
    totalPrice: number | null
    sendAt: Date
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect = {
    id?: boolean
    customerId?: boolean
    termsOfPaymentId?: boolean
    billNumber?: boolean
    documentTitle?: boolean
    introductoryText?: boolean
    postScript?: boolean
    totalPrice?: boolean
    sendAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Customer?: boolean | CustomerArgs
    TermsOfPayment?: boolean | TermsOfPaymentArgs
    Files?: boolean | Invoice$FilesArgs
    _count?: boolean | InvoiceCountOutputTypeArgs
  }


  export type InvoiceInclude = {
    Customer?: boolean | CustomerArgs
    TermsOfPayment?: boolean | TermsOfPaymentArgs
    Files?: boolean | Invoice$FilesArgs
    _count?: boolean | InvoiceCountOutputTypeArgs
  }

  export type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Invoice :
    S extends undefined ? never :
    S extends { include: any } & (InvoiceArgs | InvoiceFindManyArgs)
    ? Invoice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Customer' ? CustomerGetPayload<S['include'][P]> :
        P extends 'TermsOfPayment' ? TermsOfPaymentGetPayload<S['include'][P]> :
        P extends 'Files' ? Array < FileGetPayload<S['include'][P]>>  :
        P extends '_count' ? InvoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (InvoiceArgs | InvoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Customer' ? CustomerGetPayload<S['select'][P]> :
        P extends 'TermsOfPayment' ? TermsOfPaymentGetPayload<S['select'][P]> :
        P extends 'Files' ? Array < FileGetPayload<S['select'][P]>>  :
        P extends '_count' ? InvoiceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Invoice ? Invoice[P] : never
  } 
      : Invoice


  type InvoiceCountArgs = 
    Omit<InvoiceFindManyArgs, 'select' | 'include'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvoiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InvoiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Invoice'> extends True ? Prisma__InvoiceClient<InvoiceGetPayload<T>> : Prisma__InvoiceClient<InvoiceGetPayload<T> | null, null>

    /**
     * Find one Invoice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InvoiceFindUniqueOrThrowArgs>
    ): Prisma__InvoiceClient<InvoiceGetPayload<T>>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvoiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InvoiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Invoice'> extends True ? Prisma__InvoiceClient<InvoiceGetPayload<T>> : Prisma__InvoiceClient<InvoiceGetPayload<T> | null, null>

    /**
     * Find the first Invoice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs>
    ): Prisma__InvoiceClient<InvoiceGetPayload<T>>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvoiceFindManyArgs>(
      args?: SelectSubset<T, InvoiceFindManyArgs>
    ): Prisma.PrismaPromise<Array<InvoiceGetPayload<T>>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
    **/
    create<T extends InvoiceCreateArgs>(
      args: SelectSubset<T, InvoiceCreateArgs>
    ): Prisma__InvoiceClient<InvoiceGetPayload<T>>

    /**
     * Create many Invoices.
     *     @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     *     @example
     *     // Create many Invoices
     *     const invoice = await prisma.invoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvoiceCreateManyArgs>(
      args?: SelectSubset<T, InvoiceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
    **/
    delete<T extends InvoiceDeleteArgs>(
      args: SelectSubset<T, InvoiceDeleteArgs>
    ): Prisma__InvoiceClient<InvoiceGetPayload<T>>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvoiceUpdateArgs>(
      args: SelectSubset<T, InvoiceUpdateArgs>
    ): Prisma__InvoiceClient<InvoiceGetPayload<T>>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvoiceDeleteManyArgs>(
      args?: SelectSubset<T, InvoiceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvoiceUpdateManyArgs>(
      args: SelectSubset<T, InvoiceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
    **/
    upsert<T extends InvoiceUpsertArgs>(
      args: SelectSubset<T, InvoiceUpsertArgs>
    ): Prisma__InvoiceClient<InvoiceGetPayload<T>>

    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InvoiceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Customer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    TermsOfPayment<T extends TermsOfPaymentArgs= {}>(args?: Subset<T, TermsOfPaymentArgs>): Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T> | Null>;

    Files<T extends Invoice$FilesArgs= {}>(args?: Subset<T, Invoice$FilesArgs>): Prisma.PrismaPromise<Array<FileGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Invoice base type for findUnique actions
   */
  export type InvoiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUnique
   */
  export interface InvoiceFindUniqueArgs extends InvoiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }


  /**
   * Invoice base type for findFirst actions
   */
  export type InvoiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: Enumerable<InvoiceScalarFieldEnum>
  }

  /**
   * Invoice findFirst
   */
  export interface InvoiceFindFirstArgs extends InvoiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: Enumerable<InvoiceScalarFieldEnum>
  }


  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: Enumerable<InvoiceScalarFieldEnum>
  }


  /**
   * Invoice create
   */
  export type InvoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }


  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs = {
    /**
     * The data used to create many Invoices.
     */
    data: Enumerable<InvoiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }


  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }


  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }


  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }


  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }


  /**
   * Invoice.Files
   */
  export type Invoice$FilesArgs = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FileInclude | null
    where?: FileWhereInput
    orderBy?: Enumerable<FileOrderByWithRelationInput>
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * Invoice without action
   */
  export type InvoiceArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvoiceInclude | null
  }



  /**
   * Model InvoiceItems
   */


  export type AggregateInvoiceItems = {
    _count: InvoiceItemsCountAggregateOutputType | null
    _avg: InvoiceItemsAvgAggregateOutputType | null
    _sum: InvoiceItemsSumAggregateOutputType | null
    _min: InvoiceItemsMinAggregateOutputType | null
    _max: InvoiceItemsMaxAggregateOutputType | null
  }

  export type InvoiceItemsAvgAggregateOutputType = {
    amount: number | null
    hours: number | null
    rate: number | null
    price: number | null
    tax: number | null
    discount: number | null
  }

  export type InvoiceItemsSumAggregateOutputType = {
    amount: number | null
    hours: number | null
    rate: number | null
    price: number | null
    tax: number | null
    discount: number | null
  }

  export type InvoiceItemsMinAggregateOutputType = {
    id: string | null
    project: string | null
    amount: number | null
    currency: string | null
    unit: string | null
    hours: number | null
    rate: number | null
    price: number | null
    tax: number | null
    discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceItemsMaxAggregateOutputType = {
    id: string | null
    project: string | null
    amount: number | null
    currency: string | null
    unit: string | null
    hours: number | null
    rate: number | null
    price: number | null
    tax: number | null
    discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceItemsCountAggregateOutputType = {
    id: number
    project: number
    amount: number
    currency: number
    unit: number
    hours: number
    rate: number
    price: number
    tax: number
    discount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceItemsAvgAggregateInputType = {
    amount?: true
    hours?: true
    rate?: true
    price?: true
    tax?: true
    discount?: true
  }

  export type InvoiceItemsSumAggregateInputType = {
    amount?: true
    hours?: true
    rate?: true
    price?: true
    tax?: true
    discount?: true
  }

  export type InvoiceItemsMinAggregateInputType = {
    id?: true
    project?: true
    amount?: true
    currency?: true
    unit?: true
    hours?: true
    rate?: true
    price?: true
    tax?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceItemsMaxAggregateInputType = {
    id?: true
    project?: true
    amount?: true
    currency?: true
    unit?: true
    hours?: true
    rate?: true
    price?: true
    tax?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceItemsCountAggregateInputType = {
    id?: true
    project?: true
    amount?: true
    currency?: true
    unit?: true
    hours?: true
    rate?: true
    price?: true
    tax?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceItemsAggregateArgs = {
    /**
     * Filter which InvoiceItems to aggregate.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: Enumerable<InvoiceItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemsMaxAggregateInputType
  }

  export type GetInvoiceItemsAggregateType<T extends InvoiceItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItems[P]>
      : GetScalarType<T[P], AggregateInvoiceItems[P]>
  }




  export type InvoiceItemsGroupByArgs = {
    where?: InvoiceItemsWhereInput
    orderBy?: Enumerable<InvoiceItemsOrderByWithAggregationInput>
    by: InvoiceItemsScalarFieldEnum[]
    having?: InvoiceItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemsCountAggregateInputType | true
    _avg?: InvoiceItemsAvgAggregateInputType
    _sum?: InvoiceItemsSumAggregateInputType
    _min?: InvoiceItemsMinAggregateInputType
    _max?: InvoiceItemsMaxAggregateInputType
  }


  export type InvoiceItemsGroupByOutputType = {
    id: string
    project: string
    amount: number
    currency: string
    unit: string
    hours: number
    rate: number
    price: number
    tax: number
    discount: number
    createdAt: Date
    updatedAt: Date
    _count: InvoiceItemsCountAggregateOutputType | null
    _avg: InvoiceItemsAvgAggregateOutputType | null
    _sum: InvoiceItemsSumAggregateOutputType | null
    _min: InvoiceItemsMinAggregateOutputType | null
    _max: InvoiceItemsMaxAggregateOutputType | null
  }

  type GetInvoiceItemsGroupByPayload<T extends InvoiceItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<InvoiceItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemsGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemsGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemsSelect = {
    id?: boolean
    project?: boolean
    amount?: boolean
    currency?: boolean
    unit?: boolean
    hours?: boolean
    rate?: boolean
    price?: boolean
    tax?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type InvoiceItemsGetPayload<S extends boolean | null | undefined | InvoiceItemsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? InvoiceItems :
    S extends undefined ? never :
    S extends { include: any } & (InvoiceItemsArgs | InvoiceItemsFindManyArgs)
    ? InvoiceItems 
    : S extends { select: any } & (InvoiceItemsArgs | InvoiceItemsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof InvoiceItems ? InvoiceItems[P] : never
  } 
      : InvoiceItems


  type InvoiceItemsCountArgs = 
    Omit<InvoiceItemsFindManyArgs, 'select' | 'include'> & {
      select?: InvoiceItemsCountAggregateInputType | true
    }

  export interface InvoiceItemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one InvoiceItems that matches the filter.
     * @param {InvoiceItemsFindUniqueArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvoiceItemsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InvoiceItemsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'InvoiceItems'> extends True ? Prisma__InvoiceItemsClient<InvoiceItemsGetPayload<T>> : Prisma__InvoiceItemsClient<InvoiceItemsGetPayload<T> | null, null>

    /**
     * Find one InvoiceItems that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InvoiceItemsFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvoiceItemsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InvoiceItemsFindUniqueOrThrowArgs>
    ): Prisma__InvoiceItemsClient<InvoiceItemsGetPayload<T>>

    /**
     * Find the first InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsFindFirstArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvoiceItemsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InvoiceItemsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'InvoiceItems'> extends True ? Prisma__InvoiceItemsClient<InvoiceItemsGetPayload<T>> : Prisma__InvoiceItemsClient<InvoiceItemsGetPayload<T> | null, null>

    /**
     * Find the first InvoiceItems that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsFindFirstOrThrowArgs} args - Arguments to find a InvoiceItems
     * @example
     * // Get one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InvoiceItemsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InvoiceItemsFindFirstOrThrowArgs>
    ): Prisma__InvoiceItemsClient<InvoiceItemsGetPayload<T>>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceItemsWithIdOnly = await prisma.invoiceItems.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvoiceItemsFindManyArgs>(
      args?: SelectSubset<T, InvoiceItemsFindManyArgs>
    ): Prisma.PrismaPromise<Array<InvoiceItemsGetPayload<T>>>

    /**
     * Create a InvoiceItems.
     * @param {InvoiceItemsCreateArgs} args - Arguments to create a InvoiceItems.
     * @example
     * // Create one InvoiceItems
     * const InvoiceItems = await prisma.invoiceItems.create({
     *   data: {
     *     // ... data to create a InvoiceItems
     *   }
     * })
     * 
    **/
    create<T extends InvoiceItemsCreateArgs>(
      args: SelectSubset<T, InvoiceItemsCreateArgs>
    ): Prisma__InvoiceItemsClient<InvoiceItemsGetPayload<T>>

    /**
     * Create many InvoiceItems.
     *     @param {InvoiceItemsCreateManyArgs} args - Arguments to create many InvoiceItems.
     *     @example
     *     // Create many InvoiceItems
     *     const invoiceItems = await prisma.invoiceItems.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvoiceItemsCreateManyArgs>(
      args?: SelectSubset<T, InvoiceItemsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InvoiceItems.
     * @param {InvoiceItemsDeleteArgs} args - Arguments to delete one InvoiceItems.
     * @example
     * // Delete one InvoiceItems
     * const InvoiceItems = await prisma.invoiceItems.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItems
     *   }
     * })
     * 
    **/
    delete<T extends InvoiceItemsDeleteArgs>(
      args: SelectSubset<T, InvoiceItemsDeleteArgs>
    ): Prisma__InvoiceItemsClient<InvoiceItemsGetPayload<T>>

    /**
     * Update one InvoiceItems.
     * @param {InvoiceItemsUpdateArgs} args - Arguments to update one InvoiceItems.
     * @example
     * // Update one InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvoiceItemsUpdateArgs>(
      args: SelectSubset<T, InvoiceItemsUpdateArgs>
    ): Prisma__InvoiceItemsClient<InvoiceItemsGetPayload<T>>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemsDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvoiceItemsDeleteManyArgs>(
      args?: SelectSubset<T, InvoiceItemsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvoiceItemsUpdateManyArgs>(
      args: SelectSubset<T, InvoiceItemsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InvoiceItems.
     * @param {InvoiceItemsUpsertArgs} args - Arguments to update or create a InvoiceItems.
     * @example
     * // Update or create a InvoiceItems
     * const invoiceItems = await prisma.invoiceItems.upsert({
     *   create: {
     *     // ... data to create a InvoiceItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItems we want to update
     *   }
     * })
    **/
    upsert<T extends InvoiceItemsUpsertArgs>(
      args: SelectSubset<T, InvoiceItemsUpsertArgs>
    ): Prisma__InvoiceItemsClient<InvoiceItemsGetPayload<T>>

    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItems.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemsCountArgs>(
      args?: Subset<T, InvoiceItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceItemsAggregateArgs>(args: Subset<T, InvoiceItemsAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemsAggregateType<T>>

    /**
     * Group by InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemsGroupByArgs} args - Group by arguments.
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
      T extends InvoiceItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemsGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InvoiceItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InvoiceItemsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * InvoiceItems base type for findUnique actions
   */
  export type InvoiceItemsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where: InvoiceItemsWhereUniqueInput
  }

  /**
   * InvoiceItems findUnique
   */
  export interface InvoiceItemsFindUniqueArgs extends InvoiceItemsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InvoiceItems findUniqueOrThrow
   */
  export type InvoiceItemsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where: InvoiceItemsWhereUniqueInput
  }


  /**
   * InvoiceItems base type for findFirst actions
   */
  export type InvoiceItemsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: Enumerable<InvoiceItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: Enumerable<InvoiceItemsScalarFieldEnum>
  }

  /**
   * InvoiceItems findFirst
   */
  export interface InvoiceItemsFindFirstArgs extends InvoiceItemsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InvoiceItems findFirstOrThrow
   */
  export type InvoiceItemsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: Enumerable<InvoiceItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: Enumerable<InvoiceItemsScalarFieldEnum>
  }


  /**
   * InvoiceItems findMany
   */
  export type InvoiceItemsFindManyArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: Enumerable<InvoiceItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     */
    cursor?: InvoiceItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    distinct?: Enumerable<InvoiceItemsScalarFieldEnum>
  }


  /**
   * InvoiceItems create
   */
  export type InvoiceItemsCreateArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect | null
    /**
     * The data needed to create a InvoiceItems.
     */
    data: XOR<InvoiceItemsCreateInput, InvoiceItemsUncheckedCreateInput>
  }


  /**
   * InvoiceItems createMany
   */
  export type InvoiceItemsCreateManyArgs = {
    /**
     * The data used to create many InvoiceItems.
     */
    data: Enumerable<InvoiceItemsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * InvoiceItems update
   */
  export type InvoiceItemsUpdateArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect | null
    /**
     * The data needed to update a InvoiceItems.
     */
    data: XOR<InvoiceItemsUpdateInput, InvoiceItemsUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItems to update.
     */
    where: InvoiceItemsWhereUniqueInput
  }


  /**
   * InvoiceItems updateMany
   */
  export type InvoiceItemsUpdateManyArgs = {
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemsUpdateManyMutationInput, InvoiceItemsUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemsWhereInput
  }


  /**
   * InvoiceItems upsert
   */
  export type InvoiceItemsUpsertArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect | null
    /**
     * The filter to search for the InvoiceItems to update in case it exists.
     */
    where: InvoiceItemsWhereUniqueInput
    /**
     * In case the InvoiceItems found by the `where` argument doesn't exist, create a new InvoiceItems with this data.
     */
    create: XOR<InvoiceItemsCreateInput, InvoiceItemsUncheckedCreateInput>
    /**
     * In case the InvoiceItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceItemsUpdateInput, InvoiceItemsUncheckedUpdateInput>
  }


  /**
   * InvoiceItems delete
   */
  export type InvoiceItemsDeleteArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect | null
    /**
     * Filter which InvoiceItems to delete.
     */
    where: InvoiceItemsWhereUniqueInput
  }


  /**
   * InvoiceItems deleteMany
   */
  export type InvoiceItemsDeleteManyArgs = {
    /**
     * Filter which InvoiceItems to delete
     */
    where?: InvoiceItemsWhereInput
  }


  /**
   * InvoiceItems without action
   */
  export type InvoiceItemsArgs = {
    /**
     * Select specific fields to fetch from the InvoiceItems
     */
    select?: InvoiceItemsSelect | null
  }



  /**
   * Model TermsOfPayment
   */


  export type AggregateTermsOfPayment = {
    _count: TermsOfPaymentCountAggregateOutputType | null
    _min: TermsOfPaymentMinAggregateOutputType | null
    _max: TermsOfPaymentMaxAggregateOutputType | null
  }

  export type TermsOfPaymentMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermsOfPaymentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermsOfPaymentCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TermsOfPaymentMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermsOfPaymentMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermsOfPaymentCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TermsOfPaymentAggregateArgs = {
    /**
     * Filter which TermsOfPayment to aggregate.
     */
    where?: TermsOfPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfPayments to fetch.
     */
    orderBy?: Enumerable<TermsOfPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermsOfPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TermsOfPayments
    **/
    _count?: true | TermsOfPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermsOfPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermsOfPaymentMaxAggregateInputType
  }

  export type GetTermsOfPaymentAggregateType<T extends TermsOfPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateTermsOfPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTermsOfPayment[P]>
      : GetScalarType<T[P], AggregateTermsOfPayment[P]>
  }




  export type TermsOfPaymentGroupByArgs = {
    where?: TermsOfPaymentWhereInput
    orderBy?: Enumerable<TermsOfPaymentOrderByWithAggregationInput>
    by: TermsOfPaymentScalarFieldEnum[]
    having?: TermsOfPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermsOfPaymentCountAggregateInputType | true
    _min?: TermsOfPaymentMinAggregateInputType
    _max?: TermsOfPaymentMaxAggregateInputType
  }


  export type TermsOfPaymentGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TermsOfPaymentCountAggregateOutputType | null
    _min: TermsOfPaymentMinAggregateOutputType | null
    _max: TermsOfPaymentMaxAggregateOutputType | null
  }

  type GetTermsOfPaymentGroupByPayload<T extends TermsOfPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TermsOfPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermsOfPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermsOfPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], TermsOfPaymentGroupByOutputType[P]>
        }
      >
    >


  export type TermsOfPaymentSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Invoice?: boolean | InvoiceArgs
  }


  export type TermsOfPaymentInclude = {
    Invoice?: boolean | InvoiceArgs
  }

  export type TermsOfPaymentGetPayload<S extends boolean | null | undefined | TermsOfPaymentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TermsOfPayment :
    S extends undefined ? never :
    S extends { include: any } & (TermsOfPaymentArgs | TermsOfPaymentFindManyArgs)
    ? TermsOfPayment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Invoice' ? InvoiceGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (TermsOfPaymentArgs | TermsOfPaymentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Invoice' ? InvoiceGetPayload<S['select'][P]> | null :  P extends keyof TermsOfPayment ? TermsOfPayment[P] : never
  } 
      : TermsOfPayment


  type TermsOfPaymentCountArgs = 
    Omit<TermsOfPaymentFindManyArgs, 'select' | 'include'> & {
      select?: TermsOfPaymentCountAggregateInputType | true
    }

  export interface TermsOfPaymentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TermsOfPayment that matches the filter.
     * @param {TermsOfPaymentFindUniqueArgs} args - Arguments to find a TermsOfPayment
     * @example
     * // Get one TermsOfPayment
     * const termsOfPayment = await prisma.termsOfPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TermsOfPaymentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TermsOfPaymentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TermsOfPayment'> extends True ? Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T>> : Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T> | null, null>

    /**
     * Find one TermsOfPayment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TermsOfPaymentFindUniqueOrThrowArgs} args - Arguments to find a TermsOfPayment
     * @example
     * // Get one TermsOfPayment
     * const termsOfPayment = await prisma.termsOfPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TermsOfPaymentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TermsOfPaymentFindUniqueOrThrowArgs>
    ): Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T>>

    /**
     * Find the first TermsOfPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfPaymentFindFirstArgs} args - Arguments to find a TermsOfPayment
     * @example
     * // Get one TermsOfPayment
     * const termsOfPayment = await prisma.termsOfPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TermsOfPaymentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TermsOfPaymentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TermsOfPayment'> extends True ? Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T>> : Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T> | null, null>

    /**
     * Find the first TermsOfPayment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfPaymentFindFirstOrThrowArgs} args - Arguments to find a TermsOfPayment
     * @example
     * // Get one TermsOfPayment
     * const termsOfPayment = await prisma.termsOfPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TermsOfPaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TermsOfPaymentFindFirstOrThrowArgs>
    ): Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T>>

    /**
     * Find zero or more TermsOfPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfPaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TermsOfPayments
     * const termsOfPayments = await prisma.termsOfPayment.findMany()
     * 
     * // Get first 10 TermsOfPayments
     * const termsOfPayments = await prisma.termsOfPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termsOfPaymentWithIdOnly = await prisma.termsOfPayment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TermsOfPaymentFindManyArgs>(
      args?: SelectSubset<T, TermsOfPaymentFindManyArgs>
    ): Prisma.PrismaPromise<Array<TermsOfPaymentGetPayload<T>>>

    /**
     * Create a TermsOfPayment.
     * @param {TermsOfPaymentCreateArgs} args - Arguments to create a TermsOfPayment.
     * @example
     * // Create one TermsOfPayment
     * const TermsOfPayment = await prisma.termsOfPayment.create({
     *   data: {
     *     // ... data to create a TermsOfPayment
     *   }
     * })
     * 
    **/
    create<T extends TermsOfPaymentCreateArgs>(
      args: SelectSubset<T, TermsOfPaymentCreateArgs>
    ): Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T>>

    /**
     * Create many TermsOfPayments.
     *     @param {TermsOfPaymentCreateManyArgs} args - Arguments to create many TermsOfPayments.
     *     @example
     *     // Create many TermsOfPayments
     *     const termsOfPayment = await prisma.termsOfPayment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TermsOfPaymentCreateManyArgs>(
      args?: SelectSubset<T, TermsOfPaymentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TermsOfPayment.
     * @param {TermsOfPaymentDeleteArgs} args - Arguments to delete one TermsOfPayment.
     * @example
     * // Delete one TermsOfPayment
     * const TermsOfPayment = await prisma.termsOfPayment.delete({
     *   where: {
     *     // ... filter to delete one TermsOfPayment
     *   }
     * })
     * 
    **/
    delete<T extends TermsOfPaymentDeleteArgs>(
      args: SelectSubset<T, TermsOfPaymentDeleteArgs>
    ): Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T>>

    /**
     * Update one TermsOfPayment.
     * @param {TermsOfPaymentUpdateArgs} args - Arguments to update one TermsOfPayment.
     * @example
     * // Update one TermsOfPayment
     * const termsOfPayment = await prisma.termsOfPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TermsOfPaymentUpdateArgs>(
      args: SelectSubset<T, TermsOfPaymentUpdateArgs>
    ): Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T>>

    /**
     * Delete zero or more TermsOfPayments.
     * @param {TermsOfPaymentDeleteManyArgs} args - Arguments to filter TermsOfPayments to delete.
     * @example
     * // Delete a few TermsOfPayments
     * const { count } = await prisma.termsOfPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TermsOfPaymentDeleteManyArgs>(
      args?: SelectSubset<T, TermsOfPaymentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsOfPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TermsOfPayments
     * const termsOfPayment = await prisma.termsOfPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TermsOfPaymentUpdateManyArgs>(
      args: SelectSubset<T, TermsOfPaymentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TermsOfPayment.
     * @param {TermsOfPaymentUpsertArgs} args - Arguments to update or create a TermsOfPayment.
     * @example
     * // Update or create a TermsOfPayment
     * const termsOfPayment = await prisma.termsOfPayment.upsert({
     *   create: {
     *     // ... data to create a TermsOfPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TermsOfPayment we want to update
     *   }
     * })
    **/
    upsert<T extends TermsOfPaymentUpsertArgs>(
      args: SelectSubset<T, TermsOfPaymentUpsertArgs>
    ): Prisma__TermsOfPaymentClient<TermsOfPaymentGetPayload<T>>

    /**
     * Count the number of TermsOfPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfPaymentCountArgs} args - Arguments to filter TermsOfPayments to count.
     * @example
     * // Count the number of TermsOfPayments
     * const count = await prisma.termsOfPayment.count({
     *   where: {
     *     // ... the filter for the TermsOfPayments we want to count
     *   }
     * })
    **/
    count<T extends TermsOfPaymentCountArgs>(
      args?: Subset<T, TermsOfPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermsOfPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TermsOfPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TermsOfPaymentAggregateArgs>(args: Subset<T, TermsOfPaymentAggregateArgs>): Prisma.PrismaPromise<GetTermsOfPaymentAggregateType<T>>

    /**
     * Group by TermsOfPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfPaymentGroupByArgs} args - Group by arguments.
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
      T extends TermsOfPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermsOfPaymentGroupByArgs['orderBy'] }
        : { orderBy?: TermsOfPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TermsOfPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermsOfPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TermsOfPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TermsOfPaymentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Invoice<T extends InvoiceArgs= {}>(args?: Subset<T, InvoiceArgs>): Prisma__InvoiceClient<InvoiceGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TermsOfPayment base type for findUnique actions
   */
  export type TermsOfPaymentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TermsOfPayment
     */
    select?: TermsOfPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsOfPaymentInclude | null
    /**
     * Filter, which TermsOfPayment to fetch.
     */
    where: TermsOfPaymentWhereUniqueInput
  }

  /**
   * TermsOfPayment findUnique
   */
  export interface TermsOfPaymentFindUniqueArgs extends TermsOfPaymentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TermsOfPayment findUniqueOrThrow
   */
  export type TermsOfPaymentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TermsOfPayment
     */
    select?: TermsOfPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsOfPaymentInclude | null
    /**
     * Filter, which TermsOfPayment to fetch.
     */
    where: TermsOfPaymentWhereUniqueInput
  }


  /**
   * TermsOfPayment base type for findFirst actions
   */
  export type TermsOfPaymentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TermsOfPayment
     */
    select?: TermsOfPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsOfPaymentInclude | null
    /**
     * Filter, which TermsOfPayment to fetch.
     */
    where?: TermsOfPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfPayments to fetch.
     */
    orderBy?: Enumerable<TermsOfPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsOfPayments.
     */
    cursor?: TermsOfPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsOfPayments.
     */
    distinct?: Enumerable<TermsOfPaymentScalarFieldEnum>
  }

  /**
   * TermsOfPayment findFirst
   */
  export interface TermsOfPaymentFindFirstArgs extends TermsOfPaymentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TermsOfPayment findFirstOrThrow
   */
  export type TermsOfPaymentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TermsOfPayment
     */
    select?: TermsOfPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsOfPaymentInclude | null
    /**
     * Filter, which TermsOfPayment to fetch.
     */
    where?: TermsOfPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfPayments to fetch.
     */
    orderBy?: Enumerable<TermsOfPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsOfPayments.
     */
    cursor?: TermsOfPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsOfPayments.
     */
    distinct?: Enumerable<TermsOfPaymentScalarFieldEnum>
  }


  /**
   * TermsOfPayment findMany
   */
  export type TermsOfPaymentFindManyArgs = {
    /**
     * Select specific fields to fetch from the TermsOfPayment
     */
    select?: TermsOfPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsOfPaymentInclude | null
    /**
     * Filter, which TermsOfPayments to fetch.
     */
    where?: TermsOfPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfPayments to fetch.
     */
    orderBy?: Enumerable<TermsOfPaymentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TermsOfPayments.
     */
    cursor?: TermsOfPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfPayments.
     */
    skip?: number
    distinct?: Enumerable<TermsOfPaymentScalarFieldEnum>
  }


  /**
   * TermsOfPayment create
   */
  export type TermsOfPaymentCreateArgs = {
    /**
     * Select specific fields to fetch from the TermsOfPayment
     */
    select?: TermsOfPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsOfPaymentInclude | null
    /**
     * The data needed to create a TermsOfPayment.
     */
    data: XOR<TermsOfPaymentCreateInput, TermsOfPaymentUncheckedCreateInput>
  }


  /**
   * TermsOfPayment createMany
   */
  export type TermsOfPaymentCreateManyArgs = {
    /**
     * The data used to create many TermsOfPayments.
     */
    data: Enumerable<TermsOfPaymentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TermsOfPayment update
   */
  export type TermsOfPaymentUpdateArgs = {
    /**
     * Select specific fields to fetch from the TermsOfPayment
     */
    select?: TermsOfPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsOfPaymentInclude | null
    /**
     * The data needed to update a TermsOfPayment.
     */
    data: XOR<TermsOfPaymentUpdateInput, TermsOfPaymentUncheckedUpdateInput>
    /**
     * Choose, which TermsOfPayment to update.
     */
    where: TermsOfPaymentWhereUniqueInput
  }


  /**
   * TermsOfPayment updateMany
   */
  export type TermsOfPaymentUpdateManyArgs = {
    /**
     * The data used to update TermsOfPayments.
     */
    data: XOR<TermsOfPaymentUpdateManyMutationInput, TermsOfPaymentUncheckedUpdateManyInput>
    /**
     * Filter which TermsOfPayments to update
     */
    where?: TermsOfPaymentWhereInput
  }


  /**
   * TermsOfPayment upsert
   */
  export type TermsOfPaymentUpsertArgs = {
    /**
     * Select specific fields to fetch from the TermsOfPayment
     */
    select?: TermsOfPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsOfPaymentInclude | null
    /**
     * The filter to search for the TermsOfPayment to update in case it exists.
     */
    where: TermsOfPaymentWhereUniqueInput
    /**
     * In case the TermsOfPayment found by the `where` argument doesn't exist, create a new TermsOfPayment with this data.
     */
    create: XOR<TermsOfPaymentCreateInput, TermsOfPaymentUncheckedCreateInput>
    /**
     * In case the TermsOfPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermsOfPaymentUpdateInput, TermsOfPaymentUncheckedUpdateInput>
  }


  /**
   * TermsOfPayment delete
   */
  export type TermsOfPaymentDeleteArgs = {
    /**
     * Select specific fields to fetch from the TermsOfPayment
     */
    select?: TermsOfPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsOfPaymentInclude | null
    /**
     * Filter which TermsOfPayment to delete.
     */
    where: TermsOfPaymentWhereUniqueInput
  }


  /**
   * TermsOfPayment deleteMany
   */
  export type TermsOfPaymentDeleteManyArgs = {
    /**
     * Filter which TermsOfPayments to delete
     */
    where?: TermsOfPaymentWhereInput
  }


  /**
   * TermsOfPayment without action
   */
  export type TermsOfPaymentArgs = {
    /**
     * Select specific fields to fetch from the TermsOfPayment
     */
    select?: TermsOfPaymentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TermsOfPaymentInclude | null
  }



  /**
   * Model Profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: number | null
    title: string | null
    username: string | null
    description: string | null
    current: Yesno | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    title: string | null
    username: string | null
    description: string | null
    current: Yesno | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    username: number
    description: number
    theme: number
    widgets: number
    current: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    username?: true
    description?: true
    current?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    username?: true
    description?: true
    current?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    username?: true
    description?: true
    theme?: true
    widgets?: true
    current?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs = {
    where?: ProfileWhereInput
    orderBy?: Enumerable<ProfileOrderByWithAggregationInput>
    by: ProfileScalarFieldEnum[]
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: string
    userId: number
    title: string
    username: string
    description: string | null
    theme: JsonValue | null
    widgets: JsonValue | null
    current: Yesno
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect = {
    id?: boolean
    userId?: boolean
    title?: boolean
    username?: boolean
    description?: boolean
    theme?: boolean
    widgets?: boolean
    current?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
    Link?: boolean | Profile$LinkArgs
    _count?: boolean | ProfileCountOutputTypeArgs
  }


  export type ProfileInclude = {
    user?: boolean | UserArgs
    Link?: boolean | Profile$LinkArgs
    _count?: boolean | ProfileCountOutputTypeArgs
  }

  export type ProfileGetPayload<S extends boolean | null | undefined | ProfileArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Profile :
    S extends undefined ? never :
    S extends { include: any } & (ProfileArgs | ProfileFindManyArgs)
    ? Profile  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'Link' ? Array < LinkGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProfileCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProfileArgs | ProfileFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'Link' ? Array < LinkGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProfileCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Profile ? Profile[P] : never
  } 
      : Profile


  type ProfileCountArgs = 
    Omit<ProfileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProfileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Profile'> extends True ? Prisma__ProfileClient<ProfileGetPayload<T>> : Prisma__ProfileClient<ProfileGetPayload<T> | null, null>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProfileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Profile'> extends True ? Prisma__ProfileClient<ProfileGetPayload<T>> : Prisma__ProfileClient<ProfileGetPayload<T> | null, null>

    /**
     * Find the first Profile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProfileGetPayload<T>>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs>(
      args?: SelectSubset<T, ProfileCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProfileClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    Link<T extends Profile$LinkArgs= {}>(args?: Subset<T, Profile$LinkArgs>): Prisma.PrismaPromise<Array<LinkGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Profile base type for findUnique actions
   */
  export type ProfileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUnique
   */
  export interface ProfileFindUniqueArgs extends ProfileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile base type for findFirst actions
   */
  export type ProfileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * Profile findFirst
   */
  export interface ProfileFindFirstArgs extends ProfileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs = {
    /**
     * The data used to create many Profiles.
     */
    data: Enumerable<ProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }


  /**
   * Profile.Link
   */
  export type Profile$LinkArgs = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LinkInclude | null
    where?: LinkWhereInput
    orderBy?: Enumerable<LinkOrderByWithRelationInput>
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LinkScalarFieldEnum>
  }


  /**
   * Profile without action
   */
  export type ProfileArgs = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude | null
  }



  /**
   * Model Apps
   */


  export type AggregateApps = {
    _count: AppsCountAggregateOutputType | null
    _avg: AppsAvgAggregateOutputType | null
    _sum: AppsSumAggregateOutputType | null
    _min: AppsMinAggregateOutputType | null
    _max: AppsMaxAggregateOutputType | null
  }

  export type AppsAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type AppsSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type AppsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    order: number | null
    api_key: string | null
    api_secret: string | null
    site_name: string | null
    show_feed: Yesno | null
    show_share: Yesno | null
    show_sub: Yesno | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    order: number | null
    api_key: string | null
    api_secret: string | null
    site_name: string | null
    show_feed: Yesno | null
    show_share: Yesno | null
    show_sub: Yesno | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    order: number
    api_key: number
    api_secret: number
    site_name: number
    show_feed: number
    show_share: number
    show_sub: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppsAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type AppsSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type AppsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    api_key?: true
    api_secret?: true
    site_name?: true
    show_feed?: true
    show_share?: true
    show_sub?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    api_key?: true
    api_secret?: true
    site_name?: true
    show_feed?: true
    show_share?: true
    show_sub?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    api_key?: true
    api_secret?: true
    site_name?: true
    show_feed?: true
    show_share?: true
    show_sub?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppsAggregateArgs = {
    /**
     * Filter which Apps to aggregate.
     */
    where?: AppsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: Enumerable<AppsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apps
    **/
    _count?: true | AppsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppsMaxAggregateInputType
  }

  export type GetAppsAggregateType<T extends AppsAggregateArgs> = {
        [P in keyof T & keyof AggregateApps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApps[P]>
      : GetScalarType<T[P], AggregateApps[P]>
  }




  export type AppsGroupByArgs = {
    where?: AppsWhereInput
    orderBy?: Enumerable<AppsOrderByWithAggregationInput>
    by: AppsScalarFieldEnum[]
    having?: AppsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppsCountAggregateInputType | true
    _avg?: AppsAvgAggregateInputType
    _sum?: AppsSumAggregateInputType
    _min?: AppsMinAggregateInputType
    _max?: AppsMaxAggregateInputType
  }


  export type AppsGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    order: number
    api_key: string | null
    api_secret: string | null
    site_name: string | null
    show_feed: Yesno
    show_share: Yesno
    show_sub: Yesno
    createdAt: Date
    updatedAt: Date
    _count: AppsCountAggregateOutputType | null
    _avg: AppsAvgAggregateOutputType | null
    _sum: AppsSumAggregateOutputType | null
    _min: AppsMinAggregateOutputType | null
    _max: AppsMaxAggregateOutputType | null
  }

  type GetAppsGroupByPayload<T extends AppsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AppsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppsGroupByOutputType[P]>
            : GetScalarType<T[P], AppsGroupByOutputType[P]>
        }
      >
    >


  export type AppsSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    api_key?: boolean
    api_secret?: boolean
    site_name?: boolean
    show_feed?: boolean
    show_share?: boolean
    show_sub?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type AppsGetPayload<S extends boolean | null | undefined | AppsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Apps :
    S extends undefined ? never :
    S extends { include: any } & (AppsArgs | AppsFindManyArgs)
    ? Apps 
    : S extends { select: any } & (AppsArgs | AppsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Apps ? Apps[P] : never
  } 
      : Apps


  type AppsCountArgs = 
    Omit<AppsFindManyArgs, 'select' | 'include'> & {
      select?: AppsCountAggregateInputType | true
    }

  export interface AppsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Apps that matches the filter.
     * @param {AppsFindUniqueArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AppsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Apps'> extends True ? Prisma__AppsClient<AppsGetPayload<T>> : Prisma__AppsClient<AppsGetPayload<T> | null, null>

    /**
     * Find one Apps that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AppsFindUniqueOrThrowArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AppsFindUniqueOrThrowArgs>
    ): Prisma__AppsClient<AppsGetPayload<T>>

    /**
     * Find the first Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppsFindFirstArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AppsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Apps'> extends True ? Prisma__AppsClient<AppsGetPayload<T>> : Prisma__AppsClient<AppsGetPayload<T> | null, null>

    /**
     * Find the first Apps that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppsFindFirstOrThrowArgs} args - Arguments to find a Apps
     * @example
     * // Get one Apps
     * const apps = await prisma.apps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AppsFindFirstOrThrowArgs>
    ): Prisma__AppsClient<AppsGetPayload<T>>

    /**
     * Find zero or more Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apps
     * const apps = await prisma.apps.findMany()
     * 
     * // Get first 10 Apps
     * const apps = await prisma.apps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appsWithIdOnly = await prisma.apps.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppsFindManyArgs>(
      args?: SelectSubset<T, AppsFindManyArgs>
    ): Prisma.PrismaPromise<Array<AppsGetPayload<T>>>

    /**
     * Create a Apps.
     * @param {AppsCreateArgs} args - Arguments to create a Apps.
     * @example
     * // Create one Apps
     * const Apps = await prisma.apps.create({
     *   data: {
     *     // ... data to create a Apps
     *   }
     * })
     * 
    **/
    create<T extends AppsCreateArgs>(
      args: SelectSubset<T, AppsCreateArgs>
    ): Prisma__AppsClient<AppsGetPayload<T>>

    /**
     * Create many Apps.
     *     @param {AppsCreateManyArgs} args - Arguments to create many Apps.
     *     @example
     *     // Create many Apps
     *     const apps = await prisma.apps.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppsCreateManyArgs>(
      args?: SelectSubset<T, AppsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apps.
     * @param {AppsDeleteArgs} args - Arguments to delete one Apps.
     * @example
     * // Delete one Apps
     * const Apps = await prisma.apps.delete({
     *   where: {
     *     // ... filter to delete one Apps
     *   }
     * })
     * 
    **/
    delete<T extends AppsDeleteArgs>(
      args: SelectSubset<T, AppsDeleteArgs>
    ): Prisma__AppsClient<AppsGetPayload<T>>

    /**
     * Update one Apps.
     * @param {AppsUpdateArgs} args - Arguments to update one Apps.
     * @example
     * // Update one Apps
     * const apps = await prisma.apps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppsUpdateArgs>(
      args: SelectSubset<T, AppsUpdateArgs>
    ): Prisma__AppsClient<AppsGetPayload<T>>

    /**
     * Delete zero or more Apps.
     * @param {AppsDeleteManyArgs} args - Arguments to filter Apps to delete.
     * @example
     * // Delete a few Apps
     * const { count } = await prisma.apps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppsDeleteManyArgs>(
      args?: SelectSubset<T, AppsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apps
     * const apps = await prisma.apps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppsUpdateManyArgs>(
      args: SelectSubset<T, AppsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apps.
     * @param {AppsUpsertArgs} args - Arguments to update or create a Apps.
     * @example
     * // Update or create a Apps
     * const apps = await prisma.apps.upsert({
     *   create: {
     *     // ... data to create a Apps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apps we want to update
     *   }
     * })
    **/
    upsert<T extends AppsUpsertArgs>(
      args: SelectSubset<T, AppsUpsertArgs>
    ): Prisma__AppsClient<AppsGetPayload<T>>

    /**
     * Count the number of Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppsCountArgs} args - Arguments to filter Apps to count.
     * @example
     * // Count the number of Apps
     * const count = await prisma.apps.count({
     *   where: {
     *     // ... the filter for the Apps we want to count
     *   }
     * })
    **/
    count<T extends AppsCountArgs>(
      args?: Subset<T, AppsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppsAggregateArgs>(args: Subset<T, AppsAggregateArgs>): Prisma.PrismaPromise<GetAppsAggregateType<T>>

    /**
     * Group by Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppsGroupByArgs} args - Group by arguments.
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
      T extends AppsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppsGroupByArgs['orderBy'] }
        : { orderBy?: AppsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AppsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Apps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AppsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Apps base type for findUnique actions
   */
  export type AppsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Apps
     */
    select?: AppsSelect | null
    /**
     * Filter, which Apps to fetch.
     */
    where: AppsWhereUniqueInput
  }

  /**
   * Apps findUnique
   */
  export interface AppsFindUniqueArgs extends AppsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Apps findUniqueOrThrow
   */
  export type AppsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Apps
     */
    select?: AppsSelect | null
    /**
     * Filter, which Apps to fetch.
     */
    where: AppsWhereUniqueInput
  }


  /**
   * Apps base type for findFirst actions
   */
  export type AppsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Apps
     */
    select?: AppsSelect | null
    /**
     * Filter, which Apps to fetch.
     */
    where?: AppsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: Enumerable<AppsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apps.
     */
    cursor?: AppsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: Enumerable<AppsScalarFieldEnum>
  }

  /**
   * Apps findFirst
   */
  export interface AppsFindFirstArgs extends AppsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Apps findFirstOrThrow
   */
  export type AppsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Apps
     */
    select?: AppsSelect | null
    /**
     * Filter, which Apps to fetch.
     */
    where?: AppsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: Enumerable<AppsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apps.
     */
    cursor?: AppsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: Enumerable<AppsScalarFieldEnum>
  }


  /**
   * Apps findMany
   */
  export type AppsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Apps
     */
    select?: AppsSelect | null
    /**
     * Filter, which Apps to fetch.
     */
    where?: AppsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: Enumerable<AppsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apps.
     */
    cursor?: AppsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    distinct?: Enumerable<AppsScalarFieldEnum>
  }


  /**
   * Apps create
   */
  export type AppsCreateArgs = {
    /**
     * Select specific fields to fetch from the Apps
     */
    select?: AppsSelect | null
    /**
     * The data needed to create a Apps.
     */
    data: XOR<AppsCreateInput, AppsUncheckedCreateInput>
  }


  /**
   * Apps createMany
   */
  export type AppsCreateManyArgs = {
    /**
     * The data used to create many Apps.
     */
    data: Enumerable<AppsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Apps update
   */
  export type AppsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Apps
     */
    select?: AppsSelect | null
    /**
     * The data needed to update a Apps.
     */
    data: XOR<AppsUpdateInput, AppsUncheckedUpdateInput>
    /**
     * Choose, which Apps to update.
     */
    where: AppsWhereUniqueInput
  }


  /**
   * Apps updateMany
   */
  export type AppsUpdateManyArgs = {
    /**
     * The data used to update Apps.
     */
    data: XOR<AppsUpdateManyMutationInput, AppsUncheckedUpdateManyInput>
    /**
     * Filter which Apps to update
     */
    where?: AppsWhereInput
  }


  /**
   * Apps upsert
   */
  export type AppsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Apps
     */
    select?: AppsSelect | null
    /**
     * The filter to search for the Apps to update in case it exists.
     */
    where: AppsWhereUniqueInput
    /**
     * In case the Apps found by the `where` argument doesn't exist, create a new Apps with this data.
     */
    create: XOR<AppsCreateInput, AppsUncheckedCreateInput>
    /**
     * In case the Apps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppsUpdateInput, AppsUncheckedUpdateInput>
  }


  /**
   * Apps delete
   */
  export type AppsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Apps
     */
    select?: AppsSelect | null
    /**
     * Filter which Apps to delete.
     */
    where: AppsWhereUniqueInput
  }


  /**
   * Apps deleteMany
   */
  export type AppsDeleteManyArgs = {
    /**
     * Filter which Apps to delete
     */
    where?: AppsWhereInput
  }


  /**
   * Apps without action
   */
  export type AppsArgs = {
    /**
     * Select specific fields to fetch from the Apps
     */
    select?: AppsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const AppsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    order: 'order',
    api_key: 'api_key',
    api_secret: 'api_secret',
    site_name: 'site_name',
    show_feed: 'show_feed',
    show_share: 'show_share',
    show_sub: 'show_sub',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppsScalarFieldEnum = (typeof AppsScalarFieldEnum)[keyof typeof AppsScalarFieldEnum]


  export const BankAccountScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    bank_name: 'bank_name',
    account_owner: 'account_owner',
    iban: 'iban',
    bic: 'bic'
  };

  export type BankAccountScalarFieldEnum = (typeof BankAccountScalarFieldEnum)[keyof typeof BankAccountScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyId: 'companyId',
    salutation: 'salutation',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    email_type: 'email_type',
    phone_number: 'phone_number',
    phone_number_type: 'phone_number_type',
    street_address: 'street_address',
    address_supplement: 'address_supplement',
    postal_code: 'postal_code',
    city: 'city',
    country: 'country',
    title: 'title',
    about: 'about',
    image: 'image',
    total_discount: 'total_discount',
    terms_of_payment: 'terms_of_payment',
    delivery_terms: 'delivery_terms',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    customerId: 'customerId',
    invoiceId: 'invoiceId',
    url: 'url',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const InvoiceItemsScalarFieldEnum: {
    id: 'id',
    project: 'project',
    amount: 'amount',
    currency: 'currency',
    unit: 'unit',
    hours: 'hours',
    rate: 'rate',
    price: 'price',
    tax: 'tax',
    discount: 'discount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceItemsScalarFieldEnum = (typeof InvoiceItemsScalarFieldEnum)[keyof typeof InvoiceItemsScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    termsOfPaymentId: 'termsOfPaymentId',
    billNumber: 'billNumber',
    documentTitle: 'documentTitle',
    introductoryText: 'introductoryText',
    postScript: 'postScript',
    totalPrice: 'totalPrice',
    sendAt: 'sendAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const LinkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    url: 'url',
    title: 'title',
    description: 'description',
    order: 'order',
    type: 'type',
    icon: 'icon',
    image: 'image',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profileId: 'profileId'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    name: 'name',
    subject: 'subject',
    yesno: 'yesno',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    username: 'username',
    description: 'description',
    theme: 'theme',
    widgets: 'widgets',
    current: 'current',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    handle: 'handle',
    hashedSessionToken: 'hashedSessionToken',
    antiCSRFToken: 'antiCSRFToken',
    publicData: 'publicData',
    privateData: 'privateData',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TermsOfPaymentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TermsOfPaymentScalarFieldEnum = (typeof TermsOfPaymentScalarFieldEnum)[keyof typeof TermsOfPaymentScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hashedToken: 'hashedToken',
    type: 'type',
    expiresAt: 'expiresAt',
    sentTo: 'sentTo',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    username: 'username',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    balance: 'balance',
    hashedPassword: 'hashedPassword',
    role: 'role',
    level: 'level'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    username?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringFilter | string
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    balance?: IntNullableFilter | number | null
    hashedPassword?: StringNullableFilter | string | null
    role?: StringFilter | string
    level?: StringNullableFilter | string | null
    Accounts?: AccountListRelationFilter
    Sessions?: SessionListRelationFilter
    Files?: FileListRelationFilter
    Activities?: ActivityListRelationFilter
    Messages?: MessageListRelationFilter
    Notifications?: NotificationListRelationFilter
    Customers?: CustomerListRelationFilter
    Link?: LinkListRelationFilter
    Profile?: ProfileListRelationFilter
    Token?: TokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    balance?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    level?: SortOrder
    Accounts?: AccountOrderByRelationAggregateInput
    Sessions?: SessionOrderByRelationAggregateInput
    Files?: FileOrderByRelationAggregateInput
    Activities?: ActivityOrderByRelationAggregateInput
    Messages?: MessageOrderByRelationAggregateInput
    Notifications?: NotificationOrderByRelationAggregateInput
    Customers?: CustomerOrderByRelationAggregateInput
    Link?: LinkOrderByRelationAggregateInput
    Profile?: ProfileOrderByRelationAggregateInput
    Token?: TokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    username?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    balance?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    level?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    username?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    balance?: IntNullableWithAggregatesFilter | number | null
    hashedPassword?: StringNullableWithAggregatesFilter | string | null
    role?: StringWithAggregatesFilter | string
    level?: StringNullableWithAggregatesFilter | string | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    expiresAt?: DateTimeNullableFilter | Date | string | null
    handle?: StringFilter | string
    hashedSessionToken?: StringNullableFilter | string | null
    antiCSRFToken?: StringNullableFilter | string | null
    publicData?: StringNullableFilter | string | null
    privateData?: StringNullableFilter | string | null
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    handle?: SortOrder
    hashedSessionToken?: SortOrder
    antiCSRFToken?: SortOrder
    publicData?: SortOrder
    privateData?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = {
    id?: number
    handle?: string
    userId?: number
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    handle?: SortOrder
    hashedSessionToken?: SortOrder
    antiCSRFToken?: SortOrder
    publicData?: SortOrder
    privateData?: SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    handle?: StringWithAggregatesFilter | string
    hashedSessionToken?: StringNullableWithAggregatesFilter | string | null
    antiCSRFToken?: StringNullableWithAggregatesFilter | string | null
    publicData?: StringNullableWithAggregatesFilter | string | null
    privateData?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
  }

  export type TokenWhereInput = {
    AND?: Enumerable<TokenWhereInput>
    OR?: Enumerable<TokenWhereInput>
    NOT?: Enumerable<TokenWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    hashedToken?: StringFilter | string
    type?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
    sentTo?: StringFilter | string
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedToken?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    sentTo?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = {
    id?: number
    hashedToken_type?: TokenHashedTokenTypeCompoundUniqueInput
  }

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedToken?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    sentTo?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<TokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TokenScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    hashedToken?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
    sentTo?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
  }

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = {
    id?: number
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    type?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
  }

  export type LinkWhereInput = {
    AND?: Enumerable<LinkWhereInput>
    OR?: Enumerable<LinkWhereInput>
    NOT?: Enumerable<LinkWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    url?: StringFilter | string
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    order?: IntFilter | number
    type?: EnumLinktypeFilter | Linktype
    icon?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    profileId?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    Profile?: XOR<ProfileRelationFilter, ProfileWhereInput> | null
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileId?: SortOrder
    user?: UserOrderByWithRelationInput
    Profile?: ProfileOrderByWithRelationInput
  }

  export type LinkWhereUniqueInput = {
    id?: string
  }

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileId?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _avg?: LinkAvgOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
    _sum?: LinkSumOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LinkScalarWhereWithAggregatesInput>
    OR?: Enumerable<LinkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LinkScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    title?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    order?: IntWithAggregatesFilter | number
    type?: EnumLinktypeWithAggregatesFilter | Linktype
    icon?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    status?: EnumStatusWithAggregatesFilter | Status
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    profileId?: StringNullableWithAggregatesFilter | string | null
  }

  export type MessageWhereInput = {
    AND?: Enumerable<MessageWhereInput>
    OR?: Enumerable<MessageWhereInput>
    NOT?: Enumerable<MessageWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = {
    id?: string
    userId?: number
  }

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    companyId?: StringNullableFilter | string | null
    salutation?: StringFilter | string
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    email?: StringNullableFilter | string | null
    email_type?: StringNullableFilter | string | null
    phone_number?: StringNullableFilter | string | null
    phone_number_type?: StringNullableFilter | string | null
    street_address?: StringNullableFilter | string | null
    address_supplement?: StringNullableFilter | string | null
    postal_code?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    country?: StringNullableFilter | string | null
    title?: StringNullableFilter | string | null
    about?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    total_discount?: FloatNullableFilter | number | null
    terms_of_payment?: StringNullableFilter | string | null
    delivery_terms?: StringNullableFilter | string | null
    note?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Invoices?: InvoiceListRelationFilter
    Files?: FileListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    BankAccount?: XOR<BankAccountRelationFilter, BankAccountWhereInput> | null
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    salutation?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    email_type?: SortOrder
    phone_number?: SortOrder
    phone_number_type?: SortOrder
    street_address?: SortOrder
    address_supplement?: SortOrder
    postal_code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    title?: SortOrder
    about?: SortOrder
    image?: SortOrder
    total_discount?: SortOrder
    terms_of_payment?: SortOrder
    delivery_terms?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Invoices?: InvoiceOrderByRelationAggregateInput
    Files?: FileOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    BankAccount?: BankAccountOrderByWithRelationInput
  }

  export type CustomerWhereUniqueInput = {
    id?: string
    companyId?: string
    email?: string
  }

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    salutation?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    email_type?: SortOrder
    phone_number?: SortOrder
    phone_number_type?: SortOrder
    street_address?: SortOrder
    address_supplement?: SortOrder
    postal_code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    title?: SortOrder
    about?: SortOrder
    image?: SortOrder
    total_discount?: SortOrder
    terms_of_payment?: SortOrder
    delivery_terms?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    companyId?: StringNullableWithAggregatesFilter | string | null
    salutation?: StringWithAggregatesFilter | string
    firstname?: StringWithAggregatesFilter | string
    lastname?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    email_type?: StringNullableWithAggregatesFilter | string | null
    phone_number?: StringNullableWithAggregatesFilter | string | null
    phone_number_type?: StringNullableWithAggregatesFilter | string | null
    street_address?: StringNullableWithAggregatesFilter | string | null
    address_supplement?: StringNullableWithAggregatesFilter | string | null
    postal_code?: StringNullableWithAggregatesFilter | string | null
    city?: StringNullableWithAggregatesFilter | string | null
    country?: StringNullableWithAggregatesFilter | string | null
    title?: StringNullableWithAggregatesFilter | string | null
    about?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    total_discount?: FloatNullableWithAggregatesFilter | number | null
    terms_of_payment?: StringNullableWithAggregatesFilter | string | null
    delivery_terms?: StringNullableWithAggregatesFilter | string | null
    note?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BankAccountWhereInput = {
    AND?: Enumerable<BankAccountWhereInput>
    OR?: Enumerable<BankAccountWhereInput>
    NOT?: Enumerable<BankAccountWhereInput>
    id?: StringFilter | string
    customerId?: StringFilter | string
    bank_name?: StringFilter | string
    account_owner?: StringFilter | string
    iban?: StringFilter | string
    bic?: StringFilter | string
    Customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type BankAccountOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    bank_name?: SortOrder
    account_owner?: SortOrder
    iban?: SortOrder
    bic?: SortOrder
    Customer?: CustomerOrderByWithRelationInput
  }

  export type BankAccountWhereUniqueInput = {
    id?: string
    customerId?: string
  }

  export type BankAccountOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    bank_name?: SortOrder
    account_owner?: SortOrder
    iban?: SortOrder
    bic?: SortOrder
    _count?: BankAccountCountOrderByAggregateInput
    _max?: BankAccountMaxOrderByAggregateInput
    _min?: BankAccountMinOrderByAggregateInput
  }

  export type BankAccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BankAccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<BankAccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BankAccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    customerId?: StringWithAggregatesFilter | string
    bank_name?: StringWithAggregatesFilter | string
    account_owner?: StringWithAggregatesFilter | string
    iban?: StringWithAggregatesFilter | string
    bic?: StringWithAggregatesFilter | string
  }

  export type FileWhereInput = {
    AND?: Enumerable<FileWhereInput>
    OR?: Enumerable<FileWhereInput>
    NOT?: Enumerable<FileWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    customerId?: StringFilter | string
    invoiceId?: StringNullableFilter | string | null
    url?: StringFilter | string
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    Customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    Invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput> | null
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    invoiceId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Customer?: CustomerOrderByWithRelationInput
    Invoice?: InvoiceOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = {
    id?: string
  }

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    invoiceId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FileScalarWhereWithAggregatesInput>
    OR?: Enumerable<FileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FileScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    customerId?: StringWithAggregatesFilter | string
    invoiceId?: StringNullableWithAggregatesFilter | string | null
    url?: StringWithAggregatesFilter | string
    title?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ActivityWhereInput = {
    AND?: Enumerable<ActivityWhereInput>
    OR?: Enumerable<ActivityWhereInput>
    NOT?: Enumerable<ActivityWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    title?: StringFilter | string
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = {
    id?: string
    userId?: number
  }

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ActivityScalarWhereWithAggregatesInput>
    OR?: Enumerable<ActivityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ActivityScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type NotificationWhereInput = {
    AND?: Enumerable<NotificationWhereInput>
    OR?: Enumerable<NotificationWhereInput>
    NOT?: Enumerable<NotificationWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    title?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    subject?: StringNullableFilter | string | null
    yesno?: StringFilter | string
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    yesno?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = {
    id?: number
  }

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    yesno?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    OR?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    title?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    subject?: StringNullableWithAggregatesFilter | string | null
    yesno?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: Enumerable<InvoiceWhereInput>
    OR?: Enumerable<InvoiceWhereInput>
    NOT?: Enumerable<InvoiceWhereInput>
    id?: StringFilter | string
    customerId?: StringFilter | string
    termsOfPaymentId?: StringFilter | string
    billNumber?: StringFilter | string
    documentTitle?: StringFilter | string
    introductoryText?: StringFilter | string
    postScript?: StringNullableFilter | string | null
    totalPrice?: FloatNullableFilter | number | null
    sendAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    TermsOfPayment?: XOR<TermsOfPaymentRelationFilter, TermsOfPaymentWhereInput>
    Files?: FileListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    termsOfPaymentId?: SortOrder
    billNumber?: SortOrder
    documentTitle?: SortOrder
    introductoryText?: SortOrder
    postScript?: SortOrder
    totalPrice?: SortOrder
    sendAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Customer?: CustomerOrderByWithRelationInput
    TermsOfPayment?: TermsOfPaymentOrderByWithRelationInput
    Files?: FileOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = {
    id?: string
    customerId?: string
    termsOfPaymentId?: string
  }

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    termsOfPaymentId?: SortOrder
    billNumber?: SortOrder
    documentTitle?: SortOrder
    introductoryText?: SortOrder
    postScript?: SortOrder
    totalPrice?: SortOrder
    sendAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InvoiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<InvoiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InvoiceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    customerId?: StringWithAggregatesFilter | string
    termsOfPaymentId?: StringWithAggregatesFilter | string
    billNumber?: StringWithAggregatesFilter | string
    documentTitle?: StringWithAggregatesFilter | string
    introductoryText?: StringWithAggregatesFilter | string
    postScript?: StringNullableWithAggregatesFilter | string | null
    totalPrice?: FloatNullableWithAggregatesFilter | number | null
    sendAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type InvoiceItemsWhereInput = {
    AND?: Enumerable<InvoiceItemsWhereInput>
    OR?: Enumerable<InvoiceItemsWhereInput>
    NOT?: Enumerable<InvoiceItemsWhereInput>
    id?: StringFilter | string
    project?: StringFilter | string
    amount?: IntFilter | number
    currency?: StringFilter | string
    unit?: StringFilter | string
    hours?: IntFilter | number
    rate?: FloatFilter | number
    price?: FloatFilter | number
    tax?: FloatFilter | number
    discount?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type InvoiceItemsOrderByWithRelationInput = {
    id?: SortOrder
    project?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    unit?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
    price?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceItemsWhereUniqueInput = {
    id?: string
  }

  export type InvoiceItemsOrderByWithAggregationInput = {
    id?: SortOrder
    project?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    unit?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
    price?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceItemsCountOrderByAggregateInput
    _avg?: InvoiceItemsAvgOrderByAggregateInput
    _max?: InvoiceItemsMaxOrderByAggregateInput
    _min?: InvoiceItemsMinOrderByAggregateInput
    _sum?: InvoiceItemsSumOrderByAggregateInput
  }

  export type InvoiceItemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InvoiceItemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<InvoiceItemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InvoiceItemsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    project?: StringWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    currency?: StringWithAggregatesFilter | string
    unit?: StringWithAggregatesFilter | string
    hours?: IntWithAggregatesFilter | number
    rate?: FloatWithAggregatesFilter | number
    price?: FloatWithAggregatesFilter | number
    tax?: FloatWithAggregatesFilter | number
    discount?: FloatWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TermsOfPaymentWhereInput = {
    AND?: Enumerable<TermsOfPaymentWhereInput>
    OR?: Enumerable<TermsOfPaymentWhereInput>
    NOT?: Enumerable<TermsOfPaymentWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput> | null
  }

  export type TermsOfPaymentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Invoice?: InvoiceOrderByWithRelationInput
  }

  export type TermsOfPaymentWhereUniqueInput = {
    id?: string
  }

  export type TermsOfPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TermsOfPaymentCountOrderByAggregateInput
    _max?: TermsOfPaymentMaxOrderByAggregateInput
    _min?: TermsOfPaymentMinOrderByAggregateInput
  }

  export type TermsOfPaymentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TermsOfPaymentScalarWhereWithAggregatesInput>
    OR?: Enumerable<TermsOfPaymentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TermsOfPaymentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProfileWhereInput = {
    AND?: Enumerable<ProfileWhereInput>
    OR?: Enumerable<ProfileWhereInput>
    NOT?: Enumerable<ProfileWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    title?: StringFilter | string
    username?: StringFilter | string
    description?: StringNullableFilter | string | null
    theme?: JsonNullableFilter
    widgets?: JsonNullableFilter
    current?: EnumYesnoFilter | Yesno
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    Link?: LinkListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    username?: SortOrder
    description?: SortOrder
    theme?: SortOrder
    widgets?: SortOrder
    current?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Link?: LinkOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = {
    id?: string
    username?: string
  }

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    username?: SortOrder
    description?: SortOrder
    theme?: SortOrder
    widgets?: SortOrder
    current?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    theme?: JsonNullableWithAggregatesFilter
    widgets?: JsonNullableWithAggregatesFilter
    current?: EnumYesnoWithAggregatesFilter | Yesno
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AppsWhereInput = {
    AND?: Enumerable<AppsWhereInput>
    OR?: Enumerable<AppsWhereInput>
    NOT?: Enumerable<AppsWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    order?: IntFilter | number
    api_key?: StringNullableFilter | string | null
    api_secret?: StringNullableFilter | string | null
    site_name?: StringNullableFilter | string | null
    show_feed?: EnumYesnoFilter | Yesno
    show_share?: EnumYesnoFilter | Yesno
    show_sub?: EnumYesnoFilter | Yesno
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type AppsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    api_key?: SortOrder
    api_secret?: SortOrder
    site_name?: SortOrder
    show_feed?: SortOrder
    show_share?: SortOrder
    show_sub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppsWhereUniqueInput = {
    id?: number
  }

  export type AppsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    api_key?: SortOrder
    api_secret?: SortOrder
    site_name?: SortOrder
    show_feed?: SortOrder
    show_share?: SortOrder
    show_sub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppsCountOrderByAggregateInput
    _avg?: AppsAvgOrderByAggregateInput
    _max?: AppsMaxOrderByAggregateInput
    _min?: AppsMinOrderByAggregateInput
    _sum?: AppsSumOrderByAggregateInput
  }

  export type AppsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AppsScalarWhereWithAggregatesInput>
    OR?: Enumerable<AppsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AppsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    order?: IntWithAggregatesFilter | number
    api_key?: StringNullableWithAggregatesFilter | string | null
    api_secret?: StringNullableWithAggregatesFilter | string | null
    site_name?: StringNullableWithAggregatesFilter | string | null
    show_feed?: EnumYesnoWithAggregatesFilter | Yesno
    show_share?: EnumYesnoWithAggregatesFilter | Yesno
    show_sub?: EnumYesnoWithAggregatesFilter | Yesno
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
    Sessions?: SessionCreateNestedManyWithoutUserInput
    Files?: FileCreateNestedManyWithoutUserInput
    Activities?: ActivityCreateNestedManyWithoutUserInput
    Messages?: MessageCreateNestedManyWithoutUserInput
    Notifications?: NotificationCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Link?: LinkCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Files?: FileUncheckedCreateNestedManyWithoutUserInput
    Activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    Notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Link?: LinkUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
    Sessions?: SessionUpdateManyWithoutUserNestedInput
    Files?: FileUpdateManyWithoutUserNestedInput
    Activities?: ActivityUpdateManyWithoutUserNestedInput
    Messages?: MessageUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Link?: LinkUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Files?: FileUncheckedUpdateManyWithoutUserNestedInput
    Activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Link?: LinkUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    handle: string
    hashedSessionToken?: string | null
    antiCSRFToken?: string | null
    publicData?: string | null
    privateData?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    handle: string
    hashedSessionToken?: string | null
    antiCSRFToken?: string | null
    publicData?: string | null
    privateData?: string | null
    userId: number
  }

  export type SessionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handle?: StringFieldUpdateOperationsInput | string
    hashedSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    antiCSRFToken?: NullableStringFieldUpdateOperationsInput | string | null
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handle?: StringFieldUpdateOperationsInput | string
    hashedSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    antiCSRFToken?: NullableStringFieldUpdateOperationsInput | string | null
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    handle: string
    hashedSessionToken?: string | null
    antiCSRFToken?: string | null
    publicData?: string | null
    privateData?: string | null
    userId: number
  }

  export type SessionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handle?: StringFieldUpdateOperationsInput | string
    hashedSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    antiCSRFToken?: NullableStringFieldUpdateOperationsInput | string | null
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handle?: StringFieldUpdateOperationsInput | string
    hashedSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    antiCSRFToken?: NullableStringFieldUpdateOperationsInput | string | null
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedToken: string
    type: string
    expiresAt: Date | string
    sentTo: string
    user: UserCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedToken: string
    type: string
    expiresAt: Date | string
    sentTo: string
    userId: number
  }

  export type TokenUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTo?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTo?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedToken: string
    type: string
    expiresAt: Date | string
    sentTo: string
    userId: number
  }

  export type TokenUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTo?: StringFieldUpdateOperationsInput | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTo?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: number
    userId: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkCreateInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    order?: number
    type?: Linktype
    icon?: string | null
    image?: string | null
    status?: Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLinkInput
    Profile?: ProfileCreateNestedOneWithoutLinkInput
  }

  export type LinkUncheckedCreateInput = {
    id?: string
    userId: number
    url: string
    title?: string | null
    description?: string | null
    order?: number
    type?: Linktype
    icon?: string | null
    image?: string | null
    status?: Status
    createdAt?: Date | string
    updatedAt?: Date | string
    profileId?: string | null
  }

  export type LinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumLinktypeFieldUpdateOperationsInput | Linktype
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLinkNestedInput
    Profile?: ProfileUpdateOneWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumLinktypeFieldUpdateOperationsInput | Linktype
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkCreateManyInput = {
    id?: string
    userId: number
    url: string
    title?: string | null
    description?: string | null
    order?: number
    type?: Linktype
    icon?: string | null
    image?: string | null
    status?: Status
    createdAt?: Date | string
    updatedAt?: Date | string
    profileId?: string | null
  }

  export type LinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumLinktypeFieldUpdateOperationsInput | Linktype
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumLinktypeFieldUpdateOperationsInput | Linktype
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    Files?: FileCreateNestedManyWithoutCustomerInput
    user: UserCreateNestedOneWithoutCustomersInput
    BankAccount?: BankAccountCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    userId: number
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    Files?: FileUncheckedCreateNestedManyWithoutCustomerInput
    BankAccount?: BankAccountUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    Files?: FileUpdateManyWithoutCustomerNestedInput
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    BankAccount?: BankAccountUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    Files?: FileUncheckedUpdateManyWithoutCustomerNestedInput
    BankAccount?: BankAccountUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    userId: number
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateInput = {
    id?: string
    bank_name: string
    account_owner: string
    iban: string
    bic: string
    Customer: CustomerCreateNestedOneWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateInput = {
    id?: string
    customerId: string
    bank_name: string
    account_owner: string
    iban: string
    bic: string
  }

  export type BankAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    account_owner?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    bic?: StringFieldUpdateOperationsInput | string
    Customer?: CustomerUpdateOneRequiredWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    account_owner?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    bic?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountCreateManyInput = {
    id?: string
    customerId: string
    bank_name: string
    account_owner: string
    iban: string
    bic: string
  }

  export type BankAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    account_owner?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    bic?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    account_owner?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    bic?: StringFieldUpdateOperationsInput | string
  }

  export type FileCreateInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
    Customer: CustomerCreateNestedOneWithoutFilesInput
    Invoice?: InvoiceCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    id?: string
    userId: number
    customerId: string
    invoiceId?: string | null
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    Customer?: CustomerUpdateOneRequiredWithoutFilesNestedInput
    Invoice?: InvoiceUpdateOneWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateManyInput = {
    id?: string
    userId: number
    customerId: string
    invoiceId?: string | null
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    userId: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id?: string
    userId: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title?: string | null
    name?: string | null
    subject?: string | null
    yesno?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    title?: string | null
    name?: string | null
    subject?: string | null
    yesno?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    yesno?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    yesno?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    title?: string | null
    name?: string | null
    subject?: string | null
    yesno?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    yesno?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    yesno?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript?: string | null
    totalPrice?: number | null
    sendAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer: CustomerCreateNestedOneWithoutInvoicesInput
    TermsOfPayment: TermsOfPaymentCreateNestedOneWithoutInvoiceInput
    Files?: FileCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    customerId: string
    termsOfPaymentId: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript?: string | null
    totalPrice?: number | null
    sendAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Files?: FileUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
    TermsOfPayment?: TermsOfPaymentUpdateOneRequiredWithoutInvoiceNestedInput
    Files?: FileUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    termsOfPaymentId?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Files?: FileUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    customerId: string
    termsOfPaymentId: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript?: string | null
    totalPrice?: number | null
    sendAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    termsOfPaymentId?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemsCreateInput = {
    id?: string
    project: string
    amount: number
    currency: string
    unit: string
    hours: number
    rate: number
    price: number
    tax: number
    discount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemsUncheckedCreateInput = {
    id?: string
    project: string
    amount: number
    currency: string
    unit: string
    hours: number
    rate: number
    price: number
    tax: number
    discount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemsCreateManyInput = {
    id?: string
    project: string
    amount: number
    currency: string
    unit: string
    hours: number
    rate: number
    price: number
    tax: number
    discount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    project?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsOfPaymentCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoice?: InvoiceCreateNestedOneWithoutTermsOfPaymentInput
  }

  export type TermsOfPaymentUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoice?: InvoiceUncheckedCreateNestedOneWithoutTermsOfPaymentInput
  }

  export type TermsOfPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoice?: InvoiceUpdateOneWithoutTermsOfPaymentNestedInput
  }

  export type TermsOfPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoice?: InvoiceUncheckedUpdateOneWithoutTermsOfPaymentNestedInput
  }

  export type TermsOfPaymentCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermsOfPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsOfPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    title: string
    username: string
    description?: string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    Link?: LinkCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: number
    title: string
    username: string
    description?: string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
    Link?: LinkUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    Link?: LinkUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Link?: LinkUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: number
    title: string
    username: string
    description?: string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppsCreateInput = {
    name?: string | null
    description?: string | null
    order?: number
    api_key?: string | null
    api_secret?: string | null
    site_name?: string | null
    show_feed?: Yesno
    show_share?: Yesno
    show_sub?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppsUncheckedCreateInput = {
    id?: number
    name?: string | null
    description?: string | null
    order?: number
    api_key?: string | null
    api_secret?: string | null
    site_name?: string | null
    show_feed?: Yesno
    show_share?: Yesno
    show_sub?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    api_secret?: NullableStringFieldUpdateOperationsInput | string | null
    site_name?: NullableStringFieldUpdateOperationsInput | string | null
    show_feed?: EnumYesnoFieldUpdateOperationsInput | Yesno
    show_share?: EnumYesnoFieldUpdateOperationsInput | Yesno
    show_sub?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    api_secret?: NullableStringFieldUpdateOperationsInput | string | null
    site_name?: NullableStringFieldUpdateOperationsInput | string | null
    show_feed?: EnumYesnoFieldUpdateOperationsInput | Yesno
    show_share?: EnumYesnoFieldUpdateOperationsInput | Yesno
    show_sub?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppsCreateManyInput = {
    id?: number
    name?: string | null
    description?: string | null
    order?: number
    api_key?: string | null
    api_secret?: string | null
    site_name?: string | null
    show_feed?: Yesno
    show_share?: Yesno
    show_sub?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    api_secret?: NullableStringFieldUpdateOperationsInput | string | null
    site_name?: NullableStringFieldUpdateOperationsInput | string | null
    show_feed?: EnumYesnoFieldUpdateOperationsInput | Yesno
    show_share?: EnumYesnoFieldUpdateOperationsInput | Yesno
    show_sub?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    api_secret?: NullableStringFieldUpdateOperationsInput | string | null
    site_name?: NullableStringFieldUpdateOperationsInput | string | null
    show_feed?: EnumYesnoFieldUpdateOperationsInput | Yesno
    show_share?: EnumYesnoFieldUpdateOperationsInput | Yesno
    show_sub?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    balance?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    level?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    balance?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    level?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    balance?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    level?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    handle?: SortOrder
    hashedSessionToken?: SortOrder
    antiCSRFToken?: SortOrder
    publicData?: SortOrder
    privateData?: SortOrder
    userId?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    handle?: SortOrder
    hashedSessionToken?: SortOrder
    antiCSRFToken?: SortOrder
    publicData?: SortOrder
    privateData?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    handle?: SortOrder
    hashedSessionToken?: SortOrder
    antiCSRFToken?: SortOrder
    publicData?: SortOrder
    privateData?: SortOrder
    userId?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenHashedTokenTypeCompoundUniqueInput = {
    hashedToken: string
    type: string
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedToken?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    sentTo?: SortOrder
    userId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedToken?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    sentTo?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashedToken?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    sentTo?: SortOrder
    userId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires_at?: SortOrder
  }

  export type EnumLinktypeFilter = {
    equals?: Linktype
    in?: Enumerable<Linktype>
    notIn?: Enumerable<Linktype>
    not?: NestedEnumLinktypeFilter | Linktype
  }

  export type EnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type ProfileRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileId?: SortOrder
  }

  export type LinkAvgOrderByAggregateInput = {
    userId?: SortOrder
    order?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileId?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profileId?: SortOrder
  }

  export type LinkSumOrderByAggregateInput = {
    userId?: SortOrder
    order?: SortOrder
  }

  export type EnumLinktypeWithAggregatesFilter = {
    equals?: Linktype
    in?: Enumerable<Linktype>
    notIn?: Enumerable<Linktype>
    not?: NestedEnumLinktypeWithAggregatesFilter | Linktype
    _count?: NestedIntFilter
    _min?: NestedEnumLinktypeFilter
    _max?: NestedEnumLinktypeFilter
  }

  export type EnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type BankAccountRelationFilter = {
    is?: BankAccountWhereInput | null
    isNot?: BankAccountWhereInput | null
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    salutation?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    email_type?: SortOrder
    phone_number?: SortOrder
    phone_number_type?: SortOrder
    street_address?: SortOrder
    address_supplement?: SortOrder
    postal_code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    title?: SortOrder
    about?: SortOrder
    image?: SortOrder
    total_discount?: SortOrder
    terms_of_payment?: SortOrder
    delivery_terms?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    userId?: SortOrder
    total_discount?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    salutation?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    email_type?: SortOrder
    phone_number?: SortOrder
    phone_number_type?: SortOrder
    street_address?: SortOrder
    address_supplement?: SortOrder
    postal_code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    title?: SortOrder
    about?: SortOrder
    image?: SortOrder
    total_discount?: SortOrder
    terms_of_payment?: SortOrder
    delivery_terms?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
    salutation?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    email_type?: SortOrder
    phone_number?: SortOrder
    phone_number_type?: SortOrder
    street_address?: SortOrder
    address_supplement?: SortOrder
    postal_code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    title?: SortOrder
    about?: SortOrder
    image?: SortOrder
    total_discount?: SortOrder
    terms_of_payment?: SortOrder
    delivery_terms?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    userId?: SortOrder
    total_discount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type BankAccountCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    bank_name?: SortOrder
    account_owner?: SortOrder
    iban?: SortOrder
    bic?: SortOrder
  }

  export type BankAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    bank_name?: SortOrder
    account_owner?: SortOrder
    iban?: SortOrder
    bic?: SortOrder
  }

  export type BankAccountMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    bank_name?: SortOrder
    account_owner?: SortOrder
    iban?: SortOrder
    bic?: SortOrder
  }

  export type InvoiceRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    invoiceId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    invoiceId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    customerId?: SortOrder
    invoiceId?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    yesno?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    yesno?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    yesno?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TermsOfPaymentRelationFilter = {
    is?: TermsOfPaymentWhereInput
    isNot?: TermsOfPaymentWhereInput
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    termsOfPaymentId?: SortOrder
    billNumber?: SortOrder
    documentTitle?: SortOrder
    introductoryText?: SortOrder
    postScript?: SortOrder
    totalPrice?: SortOrder
    sendAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    termsOfPaymentId?: SortOrder
    billNumber?: SortOrder
    documentTitle?: SortOrder
    introductoryText?: SortOrder
    postScript?: SortOrder
    totalPrice?: SortOrder
    sendAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    termsOfPaymentId?: SortOrder
    billNumber?: SortOrder
    documentTitle?: SortOrder
    introductoryText?: SortOrder
    postScript?: SortOrder
    totalPrice?: SortOrder
    sendAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type InvoiceItemsCountOrderByAggregateInput = {
    id?: SortOrder
    project?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    unit?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
    price?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceItemsAvgOrderByAggregateInput = {
    amount?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
    price?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
  }

  export type InvoiceItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    project?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    unit?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
    price?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceItemsMinOrderByAggregateInput = {
    id?: SortOrder
    project?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    unit?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
    price?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceItemsSumOrderByAggregateInput = {
    amount?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
    price?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type TermsOfPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermsOfPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermsOfPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type EnumYesnoFilter = {
    equals?: Yesno
    in?: Enumerable<Yesno>
    notIn?: Enumerable<Yesno>
    not?: NestedEnumYesnoFilter | Yesno
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    username?: SortOrder
    description?: SortOrder
    theme?: SortOrder
    widgets?: SortOrder
    current?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    username?: SortOrder
    description?: SortOrder
    current?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    username?: SortOrder
    description?: SortOrder
    current?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type EnumYesnoWithAggregatesFilter = {
    equals?: Yesno
    in?: Enumerable<Yesno>
    notIn?: Enumerable<Yesno>
    not?: NestedEnumYesnoWithAggregatesFilter | Yesno
    _count?: NestedIntFilter
    _min?: NestedEnumYesnoFilter
    _max?: NestedEnumYesnoFilter
  }

  export type AppsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    api_key?: SortOrder
    api_secret?: SortOrder
    site_name?: SortOrder
    show_feed?: SortOrder
    show_share?: SortOrder
    show_sub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppsAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type AppsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    api_key?: SortOrder
    api_secret?: SortOrder
    site_name?: SortOrder
    show_feed?: SortOrder
    show_share?: SortOrder
    show_sub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    api_key?: SortOrder
    api_secret?: SortOrder
    site_name?: SortOrder
    show_feed?: SortOrder
    show_share?: SortOrder
    show_sub?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppsSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type FileCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FileCreateWithoutUserInput>, Enumerable<FileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutUserInput>
    createMany?: FileCreateManyUserInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type ActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ActivityCreateWithoutUserInput>, Enumerable<ActivityUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ActivityCreateOrConnectWithoutUserInput>
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: Enumerable<ActivityWhereUniqueInput>
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<MessageCreateWithoutUserInput>, Enumerable<MessageUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutUserInput>
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: Enumerable<NotificationWhereUniqueInput>
  }

  export type CustomerCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CustomerCreateWithoutUserInput>, Enumerable<CustomerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CustomerCreateOrConnectWithoutUserInput>
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: Enumerable<CustomerWhereUniqueInput>
  }

  export type LinkCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LinkCreateWithoutUserInput>, Enumerable<LinkUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutUserInput>
    createMany?: LinkCreateManyUserInputEnvelope
    connect?: Enumerable<LinkWhereUniqueInput>
  }

  export type ProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type FileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FileCreateWithoutUserInput>, Enumerable<FileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutUserInput>
    createMany?: FileCreateManyUserInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type ActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ActivityCreateWithoutUserInput>, Enumerable<ActivityUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ActivityCreateOrConnectWithoutUserInput>
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: Enumerable<ActivityWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<MessageCreateWithoutUserInput>, Enumerable<MessageUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutUserInput>
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: Enumerable<NotificationWhereUniqueInput>
  }

  export type CustomerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CustomerCreateWithoutUserInput>, Enumerable<CustomerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CustomerCreateOrConnectWithoutUserInput>
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: Enumerable<CustomerWhereUniqueInput>
  }

  export type LinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LinkCreateWithoutUserInput>, Enumerable<LinkUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutUserInput>
    createMany?: LinkCreateManyUserInputEnvelope
    connect?: Enumerable<LinkWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    connect?: Enumerable<ProfileWhereUniqueInput>
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type FileUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FileCreateWithoutUserInput>, Enumerable<FileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FileCreateManyUserInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type ActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ActivityCreateWithoutUserInput>, Enumerable<ActivityUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ActivityCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ActivityUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: Enumerable<ActivityWhereUniqueInput>
    disconnect?: Enumerable<ActivityWhereUniqueInput>
    delete?: Enumerable<ActivityWhereUniqueInput>
    connect?: Enumerable<ActivityWhereUniqueInput>
    update?: Enumerable<ActivityUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ActivityUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ActivityScalarWhereInput>
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutUserInput>, Enumerable<MessageUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutUserInput>
    createMany?: MessageCreateManyUserInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: Enumerable<NotificationWhereUniqueInput>
    disconnect?: Enumerable<NotificationWhereUniqueInput>
    delete?: Enumerable<NotificationWhereUniqueInput>
    connect?: Enumerable<NotificationWhereUniqueInput>
    update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NotificationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NotificationScalarWhereInput>
  }

  export type CustomerUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CustomerCreateWithoutUserInput>, Enumerable<CustomerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CustomerCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CustomerUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: Enumerable<CustomerWhereUniqueInput>
    disconnect?: Enumerable<CustomerWhereUniqueInput>
    delete?: Enumerable<CustomerWhereUniqueInput>
    connect?: Enumerable<CustomerWhereUniqueInput>
    update?: Enumerable<CustomerUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CustomerUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CustomerScalarWhereInput>
  }

  export type LinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<LinkCreateWithoutUserInput>, Enumerable<LinkUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LinkUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LinkCreateManyUserInputEnvelope
    set?: Enumerable<LinkWhereUniqueInput>
    disconnect?: Enumerable<LinkWhereUniqueInput>
    delete?: Enumerable<LinkWhereUniqueInput>
    connect?: Enumerable<LinkWhereUniqueInput>
    update?: Enumerable<LinkUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LinkUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LinkScalarWhereInput>
  }

  export type ProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type FileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FileCreateWithoutUserInput>, Enumerable<FileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FileCreateManyUserInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type ActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ActivityCreateWithoutUserInput>, Enumerable<ActivityUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ActivityCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ActivityUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: Enumerable<ActivityWhereUniqueInput>
    disconnect?: Enumerable<ActivityWhereUniqueInput>
    delete?: Enumerable<ActivityWhereUniqueInput>
    connect?: Enumerable<ActivityWhereUniqueInput>
    update?: Enumerable<ActivityUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ActivityUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ActivityScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutUserInput>, Enumerable<MessageUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutUserInput>
    createMany?: MessageCreateManyUserInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NotificationCreateWithoutUserInput>, Enumerable<NotificationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NotificationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NotificationUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: Enumerable<NotificationWhereUniqueInput>
    disconnect?: Enumerable<NotificationWhereUniqueInput>
    delete?: Enumerable<NotificationWhereUniqueInput>
    connect?: Enumerable<NotificationWhereUniqueInput>
    update?: Enumerable<NotificationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NotificationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NotificationScalarWhereInput>
  }

  export type CustomerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CustomerCreateWithoutUserInput>, Enumerable<CustomerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CustomerCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CustomerUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: Enumerable<CustomerWhereUniqueInput>
    disconnect?: Enumerable<CustomerWhereUniqueInput>
    delete?: Enumerable<CustomerWhereUniqueInput>
    connect?: Enumerable<CustomerWhereUniqueInput>
    update?: Enumerable<CustomerUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CustomerUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CustomerScalarWhereInput>
  }

  export type LinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<LinkCreateWithoutUserInput>, Enumerable<LinkUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LinkUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LinkCreateManyUserInputEnvelope
    set?: Enumerable<LinkWhereUniqueInput>
    disconnect?: Enumerable<LinkWhereUniqueInput>
    delete?: Enumerable<LinkWhereUniqueInput>
    connect?: Enumerable<LinkWhereUniqueInput>
    update?: Enumerable<LinkUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LinkUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LinkScalarWhereInput>
  }

  export type ProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProfileCreateWithoutUserInput>, Enumerable<ProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProfileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProfileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProfileCreateManyUserInputEnvelope
    set?: Enumerable<ProfileWhereUniqueInput>
    disconnect?: Enumerable<ProfileWhereUniqueInput>
    delete?: Enumerable<ProfileWhereUniqueInput>
    connect?: Enumerable<ProfileWhereUniqueInput>
    update?: Enumerable<ProfileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProfileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProfileScalarWhereInput>
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutLinkInput = {
    create?: XOR<UserCreateWithoutLinkInput, UserUncheckedCreateWithoutLinkInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkInput
    connect?: UserWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutLinkInput = {
    create?: XOR<ProfileCreateWithoutLinkInput, ProfileUncheckedCreateWithoutLinkInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutLinkInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumLinktypeFieldUpdateOperationsInput = {
    set?: Linktype
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: Status
  }

  export type UserUpdateOneRequiredWithoutLinkNestedInput = {
    create?: XOR<UserCreateWithoutLinkInput, UserUncheckedCreateWithoutLinkInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkInput
    upsert?: UserUpsertWithoutLinkInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLinkInput, UserUncheckedUpdateWithoutLinkInput>
  }

  export type ProfileUpdateOneWithoutLinkNestedInput = {
    create?: XOR<ProfileCreateWithoutLinkInput, ProfileUncheckedCreateWithoutLinkInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutLinkInput
    upsert?: ProfileUpsertWithoutLinkInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<ProfileUpdateWithoutLinkInput, ProfileUncheckedUpdateWithoutLinkInput>
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutCustomerInput>, Enumerable<InvoiceUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutCustomerInput>
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: Enumerable<InvoiceWhereUniqueInput>
  }

  export type FileCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<FileCreateWithoutCustomerInput>, Enumerable<FileUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutCustomerInput>
    createMany?: FileCreateManyCustomerInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutCustomersInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    connect?: UserWhereUniqueInput
  }

  export type BankAccountCreateNestedOneWithoutCustomerInput = {
    create?: XOR<BankAccountCreateWithoutCustomerInput, BankAccountUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutCustomerInput
    connect?: BankAccountWhereUniqueInput
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutCustomerInput>, Enumerable<InvoiceUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutCustomerInput>
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: Enumerable<InvoiceWhereUniqueInput>
  }

  export type FileUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<FileCreateWithoutCustomerInput>, Enumerable<FileUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutCustomerInput>
    createMany?: FileCreateManyCustomerInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type BankAccountUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<BankAccountCreateWithoutCustomerInput, BankAccountUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutCustomerInput
    connect?: BankAccountWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutCustomerInput>, Enumerable<InvoiceUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<InvoiceUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: Enumerable<InvoiceWhereUniqueInput>
    disconnect?: Enumerable<InvoiceWhereUniqueInput>
    delete?: Enumerable<InvoiceWhereUniqueInput>
    connect?: Enumerable<InvoiceWhereUniqueInput>
    update?: Enumerable<InvoiceUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<InvoiceUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<InvoiceScalarWhereInput>
  }

  export type FileUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<FileCreateWithoutCustomerInput>, Enumerable<FileUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: FileCreateManyCustomerInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    upsert?: UserUpsertWithoutCustomersInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type BankAccountUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<BankAccountCreateWithoutCustomerInput, BankAccountUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutCustomerInput
    upsert?: BankAccountUpsertWithoutCustomerInput
    disconnect?: boolean
    delete?: boolean
    connect?: BankAccountWhereUniqueInput
    update?: XOR<BankAccountUpdateWithoutCustomerInput, BankAccountUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutCustomerInput>, Enumerable<InvoiceUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<InvoiceUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: Enumerable<InvoiceWhereUniqueInput>
    disconnect?: Enumerable<InvoiceWhereUniqueInput>
    delete?: Enumerable<InvoiceWhereUniqueInput>
    connect?: Enumerable<InvoiceWhereUniqueInput>
    update?: Enumerable<InvoiceUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<InvoiceUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<InvoiceScalarWhereInput>
  }

  export type FileUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<FileCreateWithoutCustomerInput>, Enumerable<FileUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: FileCreateManyCustomerInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type BankAccountUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<BankAccountCreateWithoutCustomerInput, BankAccountUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutCustomerInput
    upsert?: BankAccountUpsertWithoutCustomerInput
    disconnect?: boolean
    delete?: boolean
    connect?: BankAccountWhereUniqueInput
    update?: XOR<BankAccountUpdateWithoutCustomerInput, BankAccountUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerCreateNestedOneWithoutBankAccountInput = {
    create?: XOR<CustomerCreateWithoutBankAccountInput, CustomerUncheckedCreateWithoutBankAccountInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBankAccountInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutBankAccountNestedInput = {
    create?: XOR<CustomerCreateWithoutBankAccountInput, CustomerUncheckedCreateWithoutBankAccountInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBankAccountInput
    upsert?: CustomerUpsertWithoutBankAccountInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutBankAccountInput, CustomerUncheckedUpdateWithoutBankAccountInput>
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutFilesInput = {
    create?: XOR<CustomerCreateWithoutFilesInput, CustomerUncheckedCreateWithoutFilesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFilesInput
    connect?: CustomerWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutFilesInput = {
    create?: XOR<InvoiceCreateWithoutFilesInput, InvoiceUncheckedCreateWithoutFilesInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutFilesInput
    connect?: InvoiceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type CustomerUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<CustomerCreateWithoutFilesInput, CustomerUncheckedCreateWithoutFilesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFilesInput
    upsert?: CustomerUpsertWithoutFilesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutFilesInput, CustomerUncheckedUpdateWithoutFilesInput>
  }

  export type InvoiceUpdateOneWithoutFilesNestedInput = {
    create?: XOR<InvoiceCreateWithoutFilesInput, InvoiceUncheckedCreateWithoutFilesInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutFilesInput
    upsert?: InvoiceUpsertWithoutFilesInput
    disconnect?: boolean
    delete?: boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<InvoiceUpdateWithoutFilesInput, InvoiceUncheckedUpdateWithoutFilesInput>
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type CustomerCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput
    connect?: CustomerWhereUniqueInput
  }

  export type TermsOfPaymentCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<TermsOfPaymentCreateWithoutInvoiceInput, TermsOfPaymentUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: TermsOfPaymentCreateOrConnectWithoutInvoiceInput
    connect?: TermsOfPaymentWhereUniqueInput
  }

  export type FileCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<Enumerable<FileCreateWithoutInvoiceInput>, Enumerable<FileUncheckedCreateWithoutInvoiceInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutInvoiceInput>
    createMany?: FileCreateManyInvoiceInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type FileUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<Enumerable<FileCreateWithoutInvoiceInput>, Enumerable<FileUncheckedCreateWithoutInvoiceInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutInvoiceInput>
    createMany?: FileCreateManyInvoiceInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type CustomerUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput
    upsert?: CustomerUpsertWithoutInvoicesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutInvoicesInput, CustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type TermsOfPaymentUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<TermsOfPaymentCreateWithoutInvoiceInput, TermsOfPaymentUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: TermsOfPaymentCreateOrConnectWithoutInvoiceInput
    upsert?: TermsOfPaymentUpsertWithoutInvoiceInput
    connect?: TermsOfPaymentWhereUniqueInput
    update?: XOR<TermsOfPaymentUpdateWithoutInvoiceInput, TermsOfPaymentUncheckedUpdateWithoutInvoiceInput>
  }

  export type FileUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<Enumerable<FileCreateWithoutInvoiceInput>, Enumerable<FileUncheckedCreateWithoutInvoiceInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutInvoiceInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutInvoiceInput>
    createMany?: FileCreateManyInvoiceInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutInvoiceInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutInvoiceInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type FileUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<Enumerable<FileCreateWithoutInvoiceInput>, Enumerable<FileUncheckedCreateWithoutInvoiceInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutInvoiceInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutInvoiceInput>
    createMany?: FileCreateManyInvoiceInputEnvelope
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    connect?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutInvoiceInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutInvoiceInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvoiceCreateNestedOneWithoutTermsOfPaymentInput = {
    create?: XOR<InvoiceCreateWithoutTermsOfPaymentInput, InvoiceUncheckedCreateWithoutTermsOfPaymentInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTermsOfPaymentInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUncheckedCreateNestedOneWithoutTermsOfPaymentInput = {
    create?: XOR<InvoiceCreateWithoutTermsOfPaymentInput, InvoiceUncheckedCreateWithoutTermsOfPaymentInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTermsOfPaymentInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneWithoutTermsOfPaymentNestedInput = {
    create?: XOR<InvoiceCreateWithoutTermsOfPaymentInput, InvoiceUncheckedCreateWithoutTermsOfPaymentInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTermsOfPaymentInput
    upsert?: InvoiceUpsertWithoutTermsOfPaymentInput
    disconnect?: boolean
    delete?: boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<InvoiceUpdateWithoutTermsOfPaymentInput, InvoiceUncheckedUpdateWithoutTermsOfPaymentInput>
  }

  export type InvoiceUncheckedUpdateOneWithoutTermsOfPaymentNestedInput = {
    create?: XOR<InvoiceCreateWithoutTermsOfPaymentInput, InvoiceUncheckedCreateWithoutTermsOfPaymentInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTermsOfPaymentInput
    upsert?: InvoiceUpsertWithoutTermsOfPaymentInput
    disconnect?: boolean
    delete?: boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<InvoiceUpdateWithoutTermsOfPaymentInput, InvoiceUncheckedUpdateWithoutTermsOfPaymentInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type LinkCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<LinkCreateWithoutProfileInput>, Enumerable<LinkUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutProfileInput>
    createMany?: LinkCreateManyProfileInputEnvelope
    connect?: Enumerable<LinkWhereUniqueInput>
  }

  export type LinkUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<LinkCreateWithoutProfileInput>, Enumerable<LinkUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutProfileInput>
    createMany?: LinkCreateManyProfileInputEnvelope
    connect?: Enumerable<LinkWhereUniqueInput>
  }

  export type EnumYesnoFieldUpdateOperationsInput = {
    set?: Yesno
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type LinkUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<LinkCreateWithoutProfileInput>, Enumerable<LinkUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<LinkUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: LinkCreateManyProfileInputEnvelope
    set?: Enumerable<LinkWhereUniqueInput>
    disconnect?: Enumerable<LinkWhereUniqueInput>
    delete?: Enumerable<LinkWhereUniqueInput>
    connect?: Enumerable<LinkWhereUniqueInput>
    update?: Enumerable<LinkUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<LinkUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<LinkScalarWhereInput>
  }

  export type LinkUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<LinkCreateWithoutProfileInput>, Enumerable<LinkUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<LinkCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<LinkUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: LinkCreateManyProfileInputEnvelope
    set?: Enumerable<LinkWhereUniqueInput>
    disconnect?: Enumerable<LinkWhereUniqueInput>
    delete?: Enumerable<LinkWhereUniqueInput>
    connect?: Enumerable<LinkWhereUniqueInput>
    update?: Enumerable<LinkUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<LinkUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<LinkScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumLinktypeFilter = {
    equals?: Linktype
    in?: Enumerable<Linktype>
    notIn?: Enumerable<Linktype>
    not?: NestedEnumLinktypeFilter | Linktype
  }

  export type NestedEnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type NestedEnumLinktypeWithAggregatesFilter = {
    equals?: Linktype
    in?: Enumerable<Linktype>
    notIn?: Enumerable<Linktype>
    not?: NestedEnumLinktypeWithAggregatesFilter | Linktype
    _count?: NestedIntFilter
    _min?: NestedEnumLinktypeFilter
    _max?: NestedEnumLinktypeFilter
  }

  export type NestedEnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumYesnoFilter = {
    equals?: Yesno
    in?: Enumerable<Yesno>
    notIn?: Enumerable<Yesno>
    not?: NestedEnumYesnoFilter | Yesno
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedEnumYesnoWithAggregatesFilter = {
    equals?: Yesno
    in?: Enumerable<Yesno>
    notIn?: Enumerable<Yesno>
    not?: NestedEnumYesnoWithAggregatesFilter | Yesno
    _count?: NestedIntFilter
    _min?: NestedEnumYesnoFilter
    _max?: NestedEnumYesnoFilter
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    handle: string
    hashedSessionToken?: string | null
    antiCSRFToken?: string | null
    publicData?: string | null
    privateData?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    handle: string
    hashedSessionToken?: string | null
    antiCSRFToken?: string | null
    publicData?: string | null
    privateData?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutUserInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer: CustomerCreateNestedOneWithoutFilesInput
    Invoice?: InvoiceCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutUserInput = {
    id?: string
    customerId: string
    invoiceId?: string | null
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateOrConnectWithoutUserInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type FileCreateManyUserInputEnvelope = {
    data: Enumerable<FileCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutUserInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityCreateManyUserInputEnvelope = {
    data: Enumerable<ActivityCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: Enumerable<MessageCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title?: string | null
    name?: string | null
    subject?: string | null
    yesno?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title?: string | null
    name?: string | null
    subject?: string | null
    yesno?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: Enumerable<NotificationCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutUserInput = {
    id?: string
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    Files?: FileCreateNestedManyWithoutCustomerInput
    BankAccount?: BankAccountCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    Files?: FileUncheckedCreateNestedManyWithoutCustomerInput
    BankAccount?: BankAccountUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateManyUserInputEnvelope = {
    data: Enumerable<CustomerCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type LinkCreateWithoutUserInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    order?: number
    type?: Linktype
    icon?: string | null
    image?: string | null
    status?: Status
    createdAt?: Date | string
    updatedAt?: Date | string
    Profile?: ProfileCreateNestedOneWithoutLinkInput
  }

  export type LinkUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    order?: number
    type?: Linktype
    icon?: string | null
    image?: string | null
    status?: Status
    createdAt?: Date | string
    updatedAt?: Date | string
    profileId?: string | null
  }

  export type LinkCreateOrConnectWithoutUserInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput>
  }

  export type LinkCreateManyUserInputEnvelope = {
    data: Enumerable<LinkCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    title: string
    username: string
    description?: string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
    Link?: LinkCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    username: string
    description?: string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
    Link?: LinkUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileCreateManyUserInputEnvelope = {
    data: Enumerable<ProfileCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedToken: string
    type: string
    expiresAt: Date | string
    sentTo: string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedToken: string
    type: string
    expiresAt: Date | string
    sentTo: string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: Enumerable<TokenCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    expiresAt?: DateTimeNullableFilter | Date | string | null
    handle?: StringFilter | string
    hashedSessionToken?: StringNullableFilter | string | null
    antiCSRFToken?: StringNullableFilter | string | null
    publicData?: StringNullableFilter | string | null
    privateData?: StringNullableFilter | string | null
    userId?: IntFilter | number
  }

  export type FileUpsertWithWhereUniqueWithoutUserInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type FileUpdateWithWhereUniqueWithoutUserInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
  }

  export type FileUpdateManyWithWhereWithoutUserInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFilesInput>
  }

  export type FileScalarWhereInput = {
    AND?: Enumerable<FileScalarWhereInput>
    OR?: Enumerable<FileScalarWhereInput>
    NOT?: Enumerable<FileScalarWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    customerId?: StringFilter | string
    invoiceId?: StringNullableFilter | string | null
    url?: StringFilter | string
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUpdateManyWithWhereWithoutUserInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutActivitiesInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: Enumerable<ActivityScalarWhereInput>
    OR?: Enumerable<ActivityScalarWhereInput>
    NOT?: Enumerable<ActivityScalarWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    title?: StringFilter | string
    content?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type MessageScalarWhereInput = {
    AND?: Enumerable<MessageScalarWhereInput>
    OR?: Enumerable<MessageScalarWhereInput>
    NOT?: Enumerable<MessageScalarWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutNotificationsInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: Enumerable<NotificationScalarWhereInput>
    OR?: Enumerable<NotificationScalarWhereInput>
    NOT?: Enumerable<NotificationScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    title?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    subject?: StringNullableFilter | string | null
    yesno?: StringFilter | string
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CustomerUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateManyWithWhereWithoutUserInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutCustomersInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: Enumerable<CustomerScalarWhereInput>
    OR?: Enumerable<CustomerScalarWhereInput>
    NOT?: Enumerable<CustomerScalarWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    companyId?: StringNullableFilter | string | null
    salutation?: StringFilter | string
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    email?: StringNullableFilter | string | null
    email_type?: StringNullableFilter | string | null
    phone_number?: StringNullableFilter | string | null
    phone_number_type?: StringNullableFilter | string | null
    street_address?: StringNullableFilter | string | null
    address_supplement?: StringNullableFilter | string | null
    postal_code?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    country?: StringNullableFilter | string | null
    title?: StringNullableFilter | string | null
    about?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    total_discount?: FloatNullableFilter | number | null
    terms_of_payment?: StringNullableFilter | string | null
    delivery_terms?: StringNullableFilter | string | null
    note?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type LinkUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutUserInput, LinkUncheckedUpdateWithoutUserInput>
    create: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutUserInput, LinkUncheckedUpdateWithoutUserInput>
  }

  export type LinkUpdateManyWithWhereWithoutUserInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutLinkInput>
  }

  export type LinkScalarWhereInput = {
    AND?: Enumerable<LinkScalarWhereInput>
    OR?: Enumerable<LinkScalarWhereInput>
    NOT?: Enumerable<LinkScalarWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    url?: StringFilter | string
    title?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    order?: IntFilter | number
    type?: EnumLinktypeFilter | Linktype
    icon?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    status?: EnumStatusFilter | Status
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    profileId?: StringNullableFilter | string | null
  }

  export type ProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateManyWithWhereWithoutUserInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutProfileInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: Enumerable<ProfileScalarWhereInput>
    OR?: Enumerable<ProfileScalarWhereInput>
    NOT?: Enumerable<ProfileScalarWhereInput>
    id?: StringFilter | string
    userId?: IntFilter | number
    title?: StringFilter | string
    username?: StringFilter | string
    description?: StringNullableFilter | string | null
    theme?: JsonNullableFilter
    widgets?: JsonNullableFilter
    current?: EnumYesnoFilter | Yesno
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutTokenInput>
  }

  export type TokenScalarWhereInput = {
    AND?: Enumerable<TokenScalarWhereInput>
    OR?: Enumerable<TokenScalarWhereInput>
    NOT?: Enumerable<TokenScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    hashedToken?: StringFilter | string
    type?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
    sentTo?: StringFilter | string
    userId?: IntFilter | number
  }

  export type UserCreateWithoutSessionsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
    Files?: FileCreateNestedManyWithoutUserInput
    Activities?: ActivityCreateNestedManyWithoutUserInput
    Messages?: MessageCreateNestedManyWithoutUserInput
    Notifications?: NotificationCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Link?: LinkCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Files?: FileUncheckedCreateNestedManyWithoutUserInput
    Activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    Notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Link?: LinkUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
    Files?: FileUpdateManyWithoutUserNestedInput
    Activities?: ActivityUpdateManyWithoutUserNestedInput
    Messages?: MessageUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Link?: LinkUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Files?: FileUncheckedUpdateManyWithoutUserNestedInput
    Activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Link?: LinkUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTokenInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
    Sessions?: SessionCreateNestedManyWithoutUserInput
    Files?: FileCreateNestedManyWithoutUserInput
    Activities?: ActivityCreateNestedManyWithoutUserInput
    Messages?: MessageCreateNestedManyWithoutUserInput
    Notifications?: NotificationCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Link?: LinkCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Files?: FileUncheckedCreateNestedManyWithoutUserInput
    Activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    Notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Link?: LinkUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
    Sessions?: SessionUpdateManyWithoutUserNestedInput
    Files?: FileUpdateManyWithoutUserNestedInput
    Activities?: ActivityUpdateManyWithoutUserNestedInput
    Messages?: MessageUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Link?: LinkUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Files?: FileUncheckedUpdateManyWithoutUserNestedInput
    Activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Link?: LinkUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Sessions?: SessionCreateNestedManyWithoutUserInput
    Files?: FileCreateNestedManyWithoutUserInput
    Activities?: ActivityCreateNestedManyWithoutUserInput
    Messages?: MessageCreateNestedManyWithoutUserInput
    Notifications?: NotificationCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Link?: LinkCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Files?: FileUncheckedCreateNestedManyWithoutUserInput
    Activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    Notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Link?: LinkUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Sessions?: SessionUpdateManyWithoutUserNestedInput
    Files?: FileUpdateManyWithoutUserNestedInput
    Activities?: ActivityUpdateManyWithoutUserNestedInput
    Messages?: MessageUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Link?: LinkUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Files?: FileUncheckedUpdateManyWithoutUserNestedInput
    Activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Link?: LinkUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLinkInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
    Sessions?: SessionCreateNestedManyWithoutUserInput
    Files?: FileCreateNestedManyWithoutUserInput
    Activities?: ActivityCreateNestedManyWithoutUserInput
    Messages?: MessageCreateNestedManyWithoutUserInput
    Notifications?: NotificationCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinkInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Files?: FileUncheckedCreateNestedManyWithoutUserInput
    Activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    Notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinkInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinkInput, UserUncheckedCreateWithoutLinkInput>
  }

  export type ProfileCreateWithoutLinkInput = {
    id?: string
    title: string
    username: string
    description?: string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutLinkInput = {
    id?: string
    userId: number
    title: string
    username: string
    description?: string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutLinkInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutLinkInput, ProfileUncheckedCreateWithoutLinkInput>
  }

  export type UserUpsertWithoutLinkInput = {
    update: XOR<UserUpdateWithoutLinkInput, UserUncheckedUpdateWithoutLinkInput>
    create: XOR<UserCreateWithoutLinkInput, UserUncheckedCreateWithoutLinkInput>
  }

  export type UserUpdateWithoutLinkInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
    Sessions?: SessionUpdateManyWithoutUserNestedInput
    Files?: FileUpdateManyWithoutUserNestedInput
    Activities?: ActivityUpdateManyWithoutUserNestedInput
    Messages?: MessageUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Files?: FileUncheckedUpdateManyWithoutUserNestedInput
    Activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileUpsertWithoutLinkInput = {
    update: XOR<ProfileUpdateWithoutLinkInput, ProfileUncheckedUpdateWithoutLinkInput>
    create: XOR<ProfileCreateWithoutLinkInput, ProfileUncheckedCreateWithoutLinkInput>
  }

  export type ProfileUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMessagesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
    Sessions?: SessionCreateNestedManyWithoutUserInput
    Files?: FileCreateNestedManyWithoutUserInput
    Activities?: ActivityCreateNestedManyWithoutUserInput
    Notifications?: NotificationCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Link?: LinkCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Files?: FileUncheckedCreateNestedManyWithoutUserInput
    Activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    Notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Link?: LinkUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
    Sessions?: SessionUpdateManyWithoutUserNestedInput
    Files?: FileUpdateManyWithoutUserNestedInput
    Activities?: ActivityUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Link?: LinkUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Files?: FileUncheckedUpdateManyWithoutUserNestedInput
    Activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Link?: LinkUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceCreateWithoutCustomerInput = {
    id?: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript?: string | null
    totalPrice?: number | null
    sendAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    TermsOfPayment: TermsOfPaymentCreateNestedOneWithoutInvoiceInput
    Files?: FileCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutCustomerInput = {
    id?: string
    termsOfPaymentId: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript?: string | null
    totalPrice?: number | null
    sendAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Files?: FileUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateManyCustomerInputEnvelope = {
    data: Enumerable<InvoiceCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutCustomerInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
    Invoice?: InvoiceCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutCustomerInput = {
    id?: string
    userId: number
    invoiceId?: string | null
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateOrConnectWithoutCustomerInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutCustomerInput, FileUncheckedCreateWithoutCustomerInput>
  }

  export type FileCreateManyCustomerInputEnvelope = {
    data: Enumerable<FileCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCustomersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
    Sessions?: SessionCreateNestedManyWithoutUserInput
    Files?: FileCreateNestedManyWithoutUserInput
    Activities?: ActivityCreateNestedManyWithoutUserInput
    Messages?: MessageCreateNestedManyWithoutUserInput
    Notifications?: NotificationCreateNestedManyWithoutUserInput
    Link?: LinkCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomersInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Files?: FileUncheckedCreateNestedManyWithoutUserInput
    Activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    Notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Link?: LinkUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
  }

  export type BankAccountCreateWithoutCustomerInput = {
    id?: string
    bank_name: string
    account_owner: string
    iban: string
    bic: string
  }

  export type BankAccountUncheckedCreateWithoutCustomerInput = {
    id?: string
    bank_name: string
    account_owner: string
    iban: string
    bic: string
  }

  export type BankAccountCreateOrConnectWithoutCustomerInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutCustomerInput, BankAccountUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutInvoicesInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: Enumerable<InvoiceScalarWhereInput>
    OR?: Enumerable<InvoiceScalarWhereInput>
    NOT?: Enumerable<InvoiceScalarWhereInput>
    id?: StringFilter | string
    customerId?: StringFilter | string
    termsOfPaymentId?: StringFilter | string
    billNumber?: StringFilter | string
    documentTitle?: StringFilter | string
    introductoryText?: StringFilter | string
    postScript?: StringNullableFilter | string | null
    totalPrice?: FloatNullableFilter | number | null
    sendAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type FileUpsertWithWhereUniqueWithoutCustomerInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutCustomerInput, FileUncheckedUpdateWithoutCustomerInput>
    create: XOR<FileCreateWithoutCustomerInput, FileUncheckedCreateWithoutCustomerInput>
  }

  export type FileUpdateWithWhereUniqueWithoutCustomerInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutCustomerInput, FileUncheckedUpdateWithoutCustomerInput>
  }

  export type FileUpdateManyWithWhereWithoutCustomerInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFilesInput>
  }

  export type UserUpsertWithoutCustomersInput = {
    update: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
  }

  export type UserUpdateWithoutCustomersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
    Sessions?: SessionUpdateManyWithoutUserNestedInput
    Files?: FileUpdateManyWithoutUserNestedInput
    Activities?: ActivityUpdateManyWithoutUserNestedInput
    Messages?: MessageUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUpdateManyWithoutUserNestedInput
    Link?: LinkUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Files?: FileUncheckedUpdateManyWithoutUserNestedInput
    Activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Link?: LinkUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BankAccountUpsertWithoutCustomerInput = {
    update: XOR<BankAccountUpdateWithoutCustomerInput, BankAccountUncheckedUpdateWithoutCustomerInput>
    create: XOR<BankAccountCreateWithoutCustomerInput, BankAccountUncheckedCreateWithoutCustomerInput>
  }

  export type BankAccountUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    account_owner?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    bic?: StringFieldUpdateOperationsInput | string
  }

  export type BankAccountUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    bank_name?: StringFieldUpdateOperationsInput | string
    account_owner?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    bic?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateWithoutBankAccountInput = {
    id?: string
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    Files?: FileCreateNestedManyWithoutCustomerInput
    user: UserCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutBankAccountInput = {
    id?: string
    userId: number
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    Files?: FileUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutBankAccountInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBankAccountInput, CustomerUncheckedCreateWithoutBankAccountInput>
  }

  export type CustomerUpsertWithoutBankAccountInput = {
    update: XOR<CustomerUpdateWithoutBankAccountInput, CustomerUncheckedUpdateWithoutBankAccountInput>
    create: XOR<CustomerCreateWithoutBankAccountInput, CustomerUncheckedCreateWithoutBankAccountInput>
  }

  export type CustomerUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    Files?: FileUpdateManyWithoutCustomerNestedInput
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    Files?: FileUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateWithoutFilesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
    Sessions?: SessionCreateNestedManyWithoutUserInput
    Activities?: ActivityCreateNestedManyWithoutUserInput
    Messages?: MessageCreateNestedManyWithoutUserInput
    Notifications?: NotificationCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Link?: LinkCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    Notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Link?: LinkUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type CustomerCreateWithoutFilesInput = {
    id?: string
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    user: UserCreateNestedOneWithoutCustomersInput
    BankAccount?: BankAccountCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutFilesInput = {
    id?: string
    userId: number
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    BankAccount?: BankAccountUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutFilesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutFilesInput, CustomerUncheckedCreateWithoutFilesInput>
  }

  export type InvoiceCreateWithoutFilesInput = {
    id?: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript?: string | null
    totalPrice?: number | null
    sendAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer: CustomerCreateNestedOneWithoutInvoicesInput
    TermsOfPayment: TermsOfPaymentCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutFilesInput = {
    id?: string
    customerId: string
    termsOfPaymentId: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript?: string | null
    totalPrice?: number | null
    sendAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutFilesInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutFilesInput, InvoiceUncheckedCreateWithoutFilesInput>
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
    Sessions?: SessionUpdateManyWithoutUserNestedInput
    Activities?: ActivityUpdateManyWithoutUserNestedInput
    Messages?: MessageUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Link?: LinkUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Link?: LinkUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerUpsertWithoutFilesInput = {
    update: XOR<CustomerUpdateWithoutFilesInput, CustomerUncheckedUpdateWithoutFilesInput>
    create: XOR<CustomerCreateWithoutFilesInput, CustomerUncheckedCreateWithoutFilesInput>
  }

  export type CustomerUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    BankAccount?: BankAccountUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    BankAccount?: BankAccountUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type InvoiceUpsertWithoutFilesInput = {
    update: XOR<InvoiceUpdateWithoutFilesInput, InvoiceUncheckedUpdateWithoutFilesInput>
    create: XOR<InvoiceCreateWithoutFilesInput, InvoiceUncheckedCreateWithoutFilesInput>
  }

  export type InvoiceUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
    TermsOfPayment?: TermsOfPaymentUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    termsOfPaymentId?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutActivitiesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
    Sessions?: SessionCreateNestedManyWithoutUserInput
    Files?: FileCreateNestedManyWithoutUserInput
    Messages?: MessageCreateNestedManyWithoutUserInput
    Notifications?: NotificationCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Link?: LinkCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Files?: FileUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    Notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Link?: LinkUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
    Sessions?: SessionUpdateManyWithoutUserNestedInput
    Files?: FileUpdateManyWithoutUserNestedInput
    Messages?: MessageUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Link?: LinkUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Files?: FileUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Link?: LinkUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
    Sessions?: SessionCreateNestedManyWithoutUserInput
    Files?: FileCreateNestedManyWithoutUserInput
    Activities?: ActivityCreateNestedManyWithoutUserInput
    Messages?: MessageCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Link?: LinkCreateNestedManyWithoutUserInput
    Profile?: ProfileCreateNestedManyWithoutUserInput
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Files?: FileUncheckedCreateNestedManyWithoutUserInput
    Activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Link?: LinkUncheckedCreateNestedManyWithoutUserInput
    Profile?: ProfileUncheckedCreateNestedManyWithoutUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
    Sessions?: SessionUpdateManyWithoutUserNestedInput
    Files?: FileUpdateManyWithoutUserNestedInput
    Activities?: ActivityUpdateManyWithoutUserNestedInput
    Messages?: MessageUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Link?: LinkUpdateManyWithoutUserNestedInput
    Profile?: ProfileUpdateManyWithoutUserNestedInput
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Files?: FileUncheckedUpdateManyWithoutUserNestedInput
    Activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Link?: LinkUncheckedUpdateManyWithoutUserNestedInput
    Profile?: ProfileUncheckedUpdateManyWithoutUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerCreateWithoutInvoicesInput = {
    id?: string
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Files?: FileCreateNestedManyWithoutCustomerInput
    user: UserCreateNestedOneWithoutCustomersInput
    BankAccount?: BankAccountCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutInvoicesInput = {
    id?: string
    userId: number
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Files?: FileUncheckedCreateNestedManyWithoutCustomerInput
    BankAccount?: BankAccountUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutInvoicesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
  }

  export type TermsOfPaymentCreateWithoutInvoiceInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermsOfPaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermsOfPaymentCreateOrConnectWithoutInvoiceInput = {
    where: TermsOfPaymentWhereUniqueInput
    create: XOR<TermsOfPaymentCreateWithoutInvoiceInput, TermsOfPaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type FileCreateWithoutInvoiceInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
    Customer: CustomerCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutInvoiceInput = {
    id?: string
    userId: number
    customerId: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateOrConnectWithoutInvoiceInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutInvoiceInput, FileUncheckedCreateWithoutInvoiceInput>
  }

  export type FileCreateManyInvoiceInputEnvelope = {
    data: Enumerable<FileCreateManyInvoiceInput>
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutInvoicesInput = {
    update: XOR<CustomerUpdateWithoutInvoicesInput, CustomerUncheckedUpdateWithoutInvoicesInput>
    create: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
  }

  export type CustomerUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Files?: FileUpdateManyWithoutCustomerNestedInput
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    BankAccount?: BankAccountUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Files?: FileUncheckedUpdateManyWithoutCustomerNestedInput
    BankAccount?: BankAccountUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type TermsOfPaymentUpsertWithoutInvoiceInput = {
    update: XOR<TermsOfPaymentUpdateWithoutInvoiceInput, TermsOfPaymentUncheckedUpdateWithoutInvoiceInput>
    create: XOR<TermsOfPaymentCreateWithoutInvoiceInput, TermsOfPaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type TermsOfPaymentUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsOfPaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutInvoiceInput, FileUncheckedUpdateWithoutInvoiceInput>
    create: XOR<FileCreateWithoutInvoiceInput, FileUncheckedCreateWithoutInvoiceInput>
  }

  export type FileUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutInvoiceInput, FileUncheckedUpdateWithoutInvoiceInput>
  }

  export type FileUpdateManyWithWhereWithoutInvoiceInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFilesInput>
  }

  export type InvoiceCreateWithoutTermsOfPaymentInput = {
    id?: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript?: string | null
    totalPrice?: number | null
    sendAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer: CustomerCreateNestedOneWithoutInvoicesInput
    Files?: FileCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutTermsOfPaymentInput = {
    id?: string
    customerId: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript?: string | null
    totalPrice?: number | null
    sendAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Files?: FileUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutTermsOfPaymentInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutTermsOfPaymentInput, InvoiceUncheckedCreateWithoutTermsOfPaymentInput>
  }

  export type InvoiceUpsertWithoutTermsOfPaymentInput = {
    update: XOR<InvoiceUpdateWithoutTermsOfPaymentInput, InvoiceUncheckedUpdateWithoutTermsOfPaymentInput>
    create: XOR<InvoiceCreateWithoutTermsOfPaymentInput, InvoiceUncheckedCreateWithoutTermsOfPaymentInput>
  }

  export type InvoiceUpdateWithoutTermsOfPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
    Files?: FileUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutTermsOfPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Files?: FileUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
    Sessions?: SessionCreateNestedManyWithoutUserInput
    Files?: FileCreateNestedManyWithoutUserInput
    Activities?: ActivityCreateNestedManyWithoutUserInput
    Messages?: MessageCreateNestedManyWithoutUserInput
    Notifications?: NotificationCreateNestedManyWithoutUserInput
    Customers?: CustomerCreateNestedManyWithoutUserInput
    Link?: LinkCreateNestedManyWithoutUserInput
    Token?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    balance?: number | null
    hashedPassword?: string | null
    role?: string
    level?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Files?: FileUncheckedCreateNestedManyWithoutUserInput
    Activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    Messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    Notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    Customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    Link?: LinkUncheckedCreateNestedManyWithoutUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type LinkCreateWithoutProfileInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    order?: number
    type?: Linktype
    icon?: string | null
    image?: string | null
    status?: Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLinkInput
  }

  export type LinkUncheckedCreateWithoutProfileInput = {
    id?: string
    userId: number
    url: string
    title?: string | null
    description?: string | null
    order?: number
    type?: Linktype
    icon?: string | null
    image?: string | null
    status?: Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkCreateOrConnectWithoutProfileInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutProfileInput, LinkUncheckedCreateWithoutProfileInput>
  }

  export type LinkCreateManyProfileInputEnvelope = {
    data: Enumerable<LinkCreateManyProfileInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
    Sessions?: SessionUpdateManyWithoutUserNestedInput
    Files?: FileUpdateManyWithoutUserNestedInput
    Activities?: ActivityUpdateManyWithoutUserNestedInput
    Messages?: MessageUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUpdateManyWithoutUserNestedInput
    Customers?: CustomerUpdateManyWithoutUserNestedInput
    Link?: LinkUpdateManyWithoutUserNestedInput
    Token?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Files?: FileUncheckedUpdateManyWithoutUserNestedInput
    Activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    Messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    Customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    Link?: LinkUncheckedUpdateManyWithoutUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LinkUpsertWithWhereUniqueWithoutProfileInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutProfileInput, LinkUncheckedUpdateWithoutProfileInput>
    create: XOR<LinkCreateWithoutProfileInput, LinkUncheckedCreateWithoutProfileInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutProfileInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutProfileInput, LinkUncheckedUpdateWithoutProfileInput>
  }

  export type LinkUpdateManyWithWhereWithoutProfileInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutLinkInput>
  }

  export type AccountCreateManyUserInput = {
    id?: number
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    handle: string
    hashedSessionToken?: string | null
    antiCSRFToken?: string | null
    publicData?: string | null
    privateData?: string | null
  }

  export type FileCreateManyUserInput = {
    id?: string
    customerId: string
    invoiceId?: string | null
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityCreateManyUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title?: string | null
    name?: string | null
    subject?: string | null
    yesno?: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateManyUserInput = {
    id?: string
    companyId?: string | null
    salutation: string
    firstname: string
    lastname: string
    email?: string | null
    email_type?: string | null
    phone_number?: string | null
    phone_number_type?: string | null
    street_address?: string | null
    address_supplement?: string | null
    postal_code?: string | null
    city?: string | null
    country?: string | null
    title?: string | null
    about?: string | null
    image?: string | null
    total_discount?: number | null
    terms_of_payment?: string | null
    delivery_terms?: string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkCreateManyUserInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    order?: number
    type?: Linktype
    icon?: string | null
    image?: string | null
    status?: Status
    createdAt?: Date | string
    updatedAt?: Date | string
    profileId?: string | null
  }

  export type ProfileCreateManyUserInput = {
    id?: string
    title: string
    username: string
    description?: string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: Yesno
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hashedToken: string
    type: string
    expiresAt: Date | string
    sentTo: string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handle?: StringFieldUpdateOperationsInput | string
    hashedSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    antiCSRFToken?: NullableStringFieldUpdateOperationsInput | string | null
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handle?: StringFieldUpdateOperationsInput | string
    hashedSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    antiCSRFToken?: NullableStringFieldUpdateOperationsInput | string | null
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handle?: StringFieldUpdateOperationsInput | string
    hashedSessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    antiCSRFToken?: NullableStringFieldUpdateOperationsInput | string | null
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomerUpdateOneRequiredWithoutFilesNestedInput
    Invoice?: InvoiceUpdateOneWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    yesno?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    yesno?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    yesno?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    Files?: FileUpdateManyWithoutCustomerNestedInput
    BankAccount?: BankAccountUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    Files?: FileUncheckedUpdateManyWithoutCustomerNestedInput
    BankAccount?: BankAccountUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    salutation?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_type?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number_type?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    address_supplement?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    total_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    terms_of_payment?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_terms?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumLinktypeFieldUpdateOperationsInput | Linktype
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Profile?: ProfileUpdateOneWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumLinktypeFieldUpdateOperationsInput | Linktype
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkUncheckedUpdateManyWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumLinktypeFieldUpdateOperationsInput | Linktype
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Link?: LinkUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Link?: LinkUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableJsonNullValueInput | InputJsonValue
    widgets?: NullableJsonNullValueInput | InputJsonValue
    current?: EnumYesnoFieldUpdateOperationsInput | Yesno
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTo?: StringFieldUpdateOperationsInput | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTo?: StringFieldUpdateOperationsInput | string
  }

  export type TokenUncheckedUpdateManyWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentTo?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateManyCustomerInput = {
    id?: string
    termsOfPaymentId: string
    billNumber: string
    documentTitle: string
    introductoryText: string
    postScript?: string | null
    totalPrice?: number | null
    sendAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileCreateManyCustomerInput = {
    id?: string
    userId: number
    invoiceId?: string | null
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TermsOfPayment?: TermsOfPaymentUpdateOneRequiredWithoutInvoiceNestedInput
    Files?: FileUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    termsOfPaymentId?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Files?: FileUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    termsOfPaymentId?: StringFieldUpdateOperationsInput | string
    billNumber?: StringFieldUpdateOperationsInput | string
    documentTitle?: StringFieldUpdateOperationsInput | string
    introductoryText?: StringFieldUpdateOperationsInput | string
    postScript?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    Invoice?: InvoiceUpdateOneWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    invoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateManyInvoiceInput = {
    id?: string
    userId: number
    customerId: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    Customer?: CustomerUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateManyProfileInput = {
    id?: string
    userId: number
    url: string
    title?: string | null
    description?: string | null
    order?: number
    type?: Linktype
    icon?: string | null
    image?: string | null
    status?: Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumLinktypeFieldUpdateOperationsInput | Linktype
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    type?: EnumLinktypeFieldUpdateOperationsInput | Linktype
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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