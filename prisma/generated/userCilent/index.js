Object.defineProperty(exports, '__esModule', { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
} = require('./runtime/library.js');

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: '5.14.0',
  engine: 'e9771e62de70f79a5e1c604a2d7c8e2a0a874b48',
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require('path');

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
});

exports.Prisma.UsersScalarFieldEnum = {
  user_id: 'user_id',
  user_pw: 'user_pw',
  user_name: 'user_name',
};

exports.Prisma.CharactersScalarFieldEnum = {
  character_id: 'character_id',
  User_id: 'User_id',
  character_name: 'character_name',
  health: 'health',
  power: 'power',
  money: 'money',
};

exports.Prisma.InventoryScalarFieldEnum = {
  inventory_id: 'inventory_id',
  Character_id: 'Character_id',
  item_code: 'item_code',
  count: 'count',
};

exports.Prisma.EquipmentScalarFieldEnum = {
  equipment_id: 'equipment_id',
  Character_id: 'Character_id',
  item_code: 'item_code',
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
};

exports.Prisma.ModelName = {
  Users: 'Users',
  Characters: 'Characters',
  Inventory: 'Inventory',
  Equipment: 'Equipment',
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value:
        'C:\\Users\\user\\Desktop\\sparta\\SpartaGameSimulator2\\prisma\\generated\\userCilent',
      fromEnvVar: null,
    },
    config: {
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'windows',
        native: true,
      },
    ],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
    schemaEnvPath: '../../../.env',
  },
  relativePath: '../..',
  clientVersion: '5.14.0',
  engineVersion: 'e9771e62de70f79a5e1c604a2d7c8e2a0a874b48',
  datasourceNames: ['db'],
  activeProvider: 'mysql',
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: 'USER_DATABASE_URL',
        value: null,
      },
    },
  },
  inlineSchema:
    '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client-js"\n  output   = "./generated/userCilent"\n}\n\ndatasource db {\n  provider = "mysql"\n  url      = env("USER_DATABASE_URL")\n}\n\nmodel Users {\n  user_id   String @id @map("user_id")\n  user_pw   String @map("user_pw")\n  user_name String @unique @map("user_name")\n\n  Characters Characters[]\n\n  @@map("Users")\n}\n\nmodel Characters {\n  character_id   Int    @id @default(autoincrement()) @map("character_id")\n  User_id        String @map("User_id")\n  character_name String @unique @map("character_name")\n  health         Int    @default(500) @map("health")\n  power          Int    @default(100) @map("power")\n  money          Int    @default(10000) @map("money")\n\n  User      Users       @relation(fields: [User_id], references: [user_id], onDelete: Cascade)\n  Inventory Inventory[]\n  Equipment Equipment[]\n\n  @@map("Characters")\n}\n\nmodel Inventory {\n  inventory_id Int @id @default(autoincrement()) @map("inventory_id")\n  Character_id Int @map("Character_id")\n  item_code    Int @map("item_code")\n  count        Int @map("count")\n\n  Character Characters @relation(fields: [Character_id], references: [character_id], onDelete: Cascade)\n\n  @@map("Inventory")\n}\n\nmodel Equipment {\n  equipment_id Int @id @default(autoincrement()) @map("equipment_id")\n  Character_id Int @map("Character_id")\n  item_code    Int @map("item_code")\n\n  Character Characters @relation(fields: [Character_id], references: [character_id], onDelete: Cascade)\n\n  @@map("Equipment")\n}\n',
  inlineSchemaHash:
    'd80b477e11bd7c8f5b0c48ab43475d29f661412a997fc0c64647818df9a2a882',
  copyEngine: true,
};

const fs = require('fs');

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    'prisma/generated/userCilent',
    'generated/userCilent',
  ];

  const alternativePath =
    alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'));
    }) ?? alternativePaths[0];

  config.dirname = path.join(process.cwd(), alternativePath);
  config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
  '{"models":{"Users":{"dbName":"Users","fields":[{"name":"user_id","dbName":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user_pw","dbName":"user_pw","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user_name","dbName":"user_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"Characters","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Characters","relationName":"CharactersToUsers","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Characters":{"dbName":"Characters","fields":[{"name":"character_id","dbName":"character_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"User_id","dbName":"User_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"character_name","dbName":"character_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"health","dbName":"health","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":500,"isGenerated":false,"isUpdatedAt":false},{"name":"power","dbName":"power","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":100,"isGenerated":false,"isUpdatedAt":false},{"name":"money","dbName":"money","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":10000,"isGenerated":false,"isUpdatedAt":false},{"name":"User","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Users","relationName":"CharactersToUsers","relationFromFields":["User_id"],"relationToFields":["user_id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"Inventory","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Inventory","relationName":"CharactersToInventory","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Equipment","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Equipment","relationName":"CharactersToEquipment","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Inventory":{"dbName":"Inventory","fields":[{"name":"inventory_id","dbName":"inventory_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"Character_id","dbName":"Character_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"item_code","dbName":"item_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"count","dbName":"count","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"Character","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Characters","relationName":"CharactersToInventory","relationFromFields":["Character_id"],"relationToFields":["character_id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Equipment":{"dbName":"Equipment","fields":[{"name":"equipment_id","dbName":"equipment_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"Character_id","dbName":"Character_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"item_code","dbName":"item_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"Character","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Characters","relationName":"CharactersToEquipment","relationFromFields":["Character_id"],"relationToFields":["character_id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}'
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;

const { warnEnvConflicts } = require('./runtime/library.js');

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

// file annotations for bundling tools to include these files
path.join(__dirname, 'query_engine-windows.dll.node');
path.join(
  process.cwd(),
  'prisma/generated/userCilent/query_engine-windows.dll.node'
);
// file annotations for bundling tools to include these files
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), 'prisma/generated/userCilent/schema.prisma');
