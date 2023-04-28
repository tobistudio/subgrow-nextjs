
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.ActivityScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AppsScalarFieldEnum = {
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

exports.Prisma.BankAccountScalarFieldEnum = {
  id: 'id',
  customerId: 'customerId',
  bank_name: 'bank_name',
  account_owner: 'account_owner',
  iban: 'iban',
  bic: 'bic'
};

exports.Prisma.CustomerScalarFieldEnum = {
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

exports.Prisma.FileScalarFieldEnum = {
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

exports.Prisma.InvoiceItemsScalarFieldEnum = {
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

exports.Prisma.InvoiceScalarFieldEnum = {
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

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.LinkScalarFieldEnum = {
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

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
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

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.ProfileScalarFieldEnum = {
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

exports.Prisma.SessionScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TermsOfPaymentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TokenScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hashedToken: 'hashedToken',
  type: 'type',
  expiresAt: 'expiresAt',
  sentTo: 'sentTo',
  userId: 'userId'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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
exports.Linktype = {
  custom: 'custom',
  site: 'site',
  email: 'email',
  phone: 'phone'
};

exports.Status = {
  active: 'active',
  archived: 'archived',
  inactive: 'inactive'
};

exports.Yesno = {
  yes: 'yes',
  no: 'no'
};

exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
